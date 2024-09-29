import { DarkModeProvider } from '@/context';
import { ButtonDarkMode, InputSearch } from '@/components';

function App() {
  const handleSubmit = (value: string) => {
    console.log(value);
  };
  return (
    <>
      <DarkModeProvider>
        <InputSearch onSubmit={handleSubmit} />
        <ButtonDarkMode />
      </DarkModeProvider>
    </>
  );
}

export default App;
