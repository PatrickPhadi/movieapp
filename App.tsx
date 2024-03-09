import { Provider } from 'react-redux';
import store from './src/store';
import Navigation from "./src/navigation";
import { ServerErrorManager, LoaderManager } from './src/components';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Navigation />
      <LoaderManager />
      <ServerErrorManager />
    </Provider>
  );
}

export default App;
