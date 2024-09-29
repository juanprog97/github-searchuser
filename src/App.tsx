import { DarkModeProvider } from '@/context';
import { InputSearch } from '@/components';

function App() {
  const handleSubmit = (value: string) => {
    console.log(value);
  };
  return (
    <>
      <DarkModeProvider>
        <InputSearch onSubmit={handleSubmit} />
      </DarkModeProvider>
    </>
  );
}

export default App;
