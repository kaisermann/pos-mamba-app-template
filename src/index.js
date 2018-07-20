import App from './App.html';
import store from './store.js';

/**
 * Bootstrap the application.
 * If developing, it wraps the whole app within a '@mamba/pos' for better visuals.
 * If the code is running on the production environment, just initialize the app.
 *
 * We use dynamic import here for preventing webpack from bundling the @mamba/pos
 * even in a production environment build.
 * */
const root = document.getElementById('root');

if (process.env.NODE_ENV === 'production') {
  new App({
    target: root,
    store,
  });
}

if (process.env.NODE_ENV !== 'production') {
  window.MambaStore = store;
  /** If developing, wrap the app with a <POS></POS> */
  import('@mamba/pos').then(({ default: POS }) => {
    const appFragment = document.createDocumentFragment();
    new App({ target: appFragment, store });
    new POS({
      target: root,
      store,
      slots: {
        default: appFragment,
      },
    });
  });
}
