import { ButtonDarkMode, CardInfoDetails, InputSearch, Spinner } from '@/components';
import { useCallback, useState } from 'react';
import { useSearchUser } from '@/hooks';
import { UserSearch } from '@/model';
import { uuid } from '@/utils';
import styles from './FinderDev.module.scss';

const FinderDev = () => {
  const [searchValue, setSearchValue] = useState<string | null>(null);

  const handleSearchInput = (value: string) => {
    setSearchValue(value);
  };

  const { users, error, isLoading, isValidating } = useSearchUser(searchValue);

  const ListDataSearch = useCallback(() => {
    if (error) {
      return <p>Error!</p>;
    }
    if (isLoading) {
      return <Spinner />;
    } else {
      if (users.length == 0) {
        return <p style={{ color: 'var(--text-primary)' }}>Not Result...</p>;
      }
      return users.map((user: UserSearch, index: number) => <CardInfoDetails key={uuid() + index} data={user} />);
    }
  }, [isValidating, error, isLoading]);

  return (
    <div className={styles.ContainerDev}>
      <div className={styles.LabelContainer}>
        <h1>DevFinder</h1>
        <ButtonDarkMode />
      </div>
      <InputSearch onSubmit={handleSearchInput} />
      <div className={styles.ListContainerData}>{ListDataSearch()}</div>
    </div>
  );
};

export default FinderDev;
