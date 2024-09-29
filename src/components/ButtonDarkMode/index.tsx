import useDarkMode from '../../hooks/useDarkMode.tsx';
import styles from './ButtonDarkMode.module.scss';

const ButtonDarkMode = (): JSX.Element => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button onClick={toggleDarkMode} className={styles.StyleButtonContainer}>
      <label>{isDarkMode ? 'light' : 'dark'}</label>
      <span className={`material-symbols-outlined ${styles.IconSearch}`}>
        {isDarkMode ? 'light_mode' : 'dark_mode'}
      </span>
    </button>
  );
};

export default ButtonDarkMode;
