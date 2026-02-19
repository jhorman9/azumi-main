import { ReactDOM, React, App, store, HashRouter, HelmetProvider, Provider } from './index';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <HashRouter>
          <App />
        </HashRouter>
      </Provider>
    </HelmetProvider>
  </React.StrictMode>,
)