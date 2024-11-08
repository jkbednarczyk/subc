import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import eng_lang from './lang/en-gb.json';
import pl_lang from './lang/pl-gb.json';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';    
import 'primeicons/primeicons.css';  
import './GlobalStyles.css';

i18next.init({
  interpolation: {escapeValue: true},
  lng: "pl",
  resources: {
    pl: {
      global: pl_lang,
    },
    eng : {
      global: eng_lang,
    },
  },
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App language={i18next.language}/>
    </I18nextProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
