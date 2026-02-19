import { ReactDOM, React, App, store, HashRouter, HelmetProvider, Provider } from './index';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <HashRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <App />
        </HashRouter>
      </Provider>
    </HelmetProvider>
  </React.StrictMode>,
)