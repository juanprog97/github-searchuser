import { DarkModeProvider } from '@/context';
import { MessageConsole } from '@/utils';
import FinderDev from './layout/FinderDev';
import './App.scss';
import { SWRConfig } from 'swr';
import { localStorageProvider } from '@/context';

function App() {
  MessageConsole();
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <SWRConfig value={{ provider: localStorageProvider }}>
        <DarkModeProvider>
          <section className="container-app">
            <FinderDev />
          </section>
        </DarkModeProvider>
        <footer>
          <h3>
            Created by alias{' '}
            <a href=" https://github.com/juanprog97" target="_blank">
              Juanprog97
            </a>{' '}
            Desdev
          </h3>
        </footer>
      </SWRConfig>
    </div>
  );
}

export default App;
