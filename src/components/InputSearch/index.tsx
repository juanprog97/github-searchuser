import {  FormEvent, useRef } from 'react';
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
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!!onSubmit && !!inputRef.current) onSubmit(inputRef.current.value);
  };

  return (
    <form onSubmit={handleClick} className={styles.ContainerInputStyle}>
      <label htmlFor="input-text-search">
        <span className={`material-symbols-outlined ${styles.IconSearch}`}>search</span>
      </label>
      <input
        type="text"
        ref={inputRef}
        id="input-text-search"
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
