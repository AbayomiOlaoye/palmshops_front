import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
// import store from './redux/store/store';
import './index.css';
import App from './App';
import Loader from './Home/Loader';

const store = {
  getState: () => {},
  dispatch: () => {},
  subscribe: () => {},
};

const root = ReactDOM.createRoot(document.getElementById('root'));
if (window.innerWidth < 1024) {
  root.render(
    <React.StrictMode>
      <Loader />
    </React.StrictMode>,
  );

  setTimeout(() => {
    root.render(
      <React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </React.StrictMode>,
    );
  }, 10000);
} else {
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
  );
}
