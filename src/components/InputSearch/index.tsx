import { ChangeEvent, FormEvent, FormEventHandler, useRef, useState } from 'react';
import styles from './InputSearch.module.scss';

type InputSearchProps = {
  placeholder?: string;
  label?: any;
  onSubmit?: (value: string) => void;
};

const InputSearch = ({
  placeholder = 'Search GitHub username...',
  label = 'Search',
  onSubmit = () => {},
}: InputSearchProps): JSX.Element => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  const handleClick = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!!onSubmit) onSubmit(inputValue);
  };

  return (
    <form onSubmit={handleClick} className={styles.ContainerInputStyle}>
      <label htmlFor="input-text-search">
        <span className={`material-symbols-outlined ${styles.IconSearch}`}>search</span>
      </label>
      <input
        type="text"
        id="input-text-search"
        onChange={handleInputChange}
        className={styles.InputStyle}
        placeholder={placeholder}
      />
      <button type="submit" className={styles.ButtonStyle}>
        {label}
      </button>
    </form>
  );
};

export default InputSearch;
