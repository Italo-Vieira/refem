import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { Store } from './redux/store';
import { faker } from './faker';
import conferenceProvider from './conference';
import ConferenceHandler from './conference/conference_handler'

conferenceProvider.init(new ConferenceHandler(Store));

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

if(process.env.REACT_APP_FAKE) {
  window.faker = () => {faker(Store)}
  setTimeout(window.faker, 2000)
}



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
