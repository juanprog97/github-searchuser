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
      return (
        <div className={styles.NotifyData}>
          <p>Error!</p>;
        </div>
      );
    }
    if (isLoading) {
      return (
        <div className={styles.NotifyData}>
          <Spinner />
        </div>
      );
    } else {
      if (users.length == 0) {
        return (
          <div className={styles.NotifyData}>
            <p style={{ color: 'var(--text-primary)', textAlign: 'center' }}>Not Result...</p>;
          </div>
        );
      }
      return (
        <div className={styles.ListContainerData}>
          {users.map((user: UserSearch, index: number) => (
            <CardInfoDetails key={uuid() + index} data={user} />
          ))}
        </div>
      );
    }
  }, [isValidating, error, isLoading]);

  return (
    <div className={styles.ContainerDev}>
      <div className={styles.LabelContainer}>
        <h1>DevFinder</h1>
        <ButtonDarkMode />
      </div>
      <InputSearch onSubmit={handleSearchInput} />
      {ListDataSearch()}
    </div>
  );
};

export default FinderDev;
