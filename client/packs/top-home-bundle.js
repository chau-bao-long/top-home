import ReactOnRails from 'react-on-rails';

import TopHomeApp from '../bundles/TopHome/startup/TopHomeApp';
import '../bundles/TopHome/application.scss';

// This is how react_on_rails can see the Tophome in the browser.
ReactOnRails.register({
  TopHomeApp,
});
