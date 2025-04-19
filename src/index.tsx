/* @refresh reload */
import { render } from 'solid-js/web';

import './styles/util.css';
import './styles/branding.css';
import App from './App';

const root = document.getElementById('root');

// Initialize Youtube music API
/*new YTMusic().initialize({

}).then((ytmusic) => {
  console.log(ytmusic)
}).catch(ex => {
  console.error("Failed to initialize YouTube Music API! See below;")
  console.warn(ex);
})*/

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

render(() => <App />, root!);
