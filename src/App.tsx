import { DarkModeProvider } from '@/context';
import { MessageConsole } from '@/utils';
import FinderDev from './layout/FinderDev';
import './App.scss';

function App() {
  MessageConsole();
  return (
    <>
      <DarkModeProvider>
        <section className="container-app">
          <FinderDev />
        </section>
      </DarkModeProvider>
    </>
  );
}

export default App;
