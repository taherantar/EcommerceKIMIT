import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Home from './views/Home';
import Todo from './views/Todo';
import Products from './views/Products';
import Cart from './views/Cart';
import Error from './views/Error';
import ProductDetails from './views/ProductDetails';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import EnglishTrandslation from "./Locale/en.json";
import ArbicTrandslation from "./Locale/ar.json";
import ThemeProvider from './contaxt/ThemeContext';
import "./Styles/Styles.scss"
import EditProduct from './views/EditProducts';
import store from "./redux/store";
import { Provider } from 'react-redux';
import ReduxExplain from './views/ReduxExplain';
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: EnglishTrandslation
      },

      ar: {
        translation: ArbicTrandslation

      }
    },
    lng: "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false
    }
  });
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/todo",
    element: <Todo />
  },
  {
    path: "/products",
    element: <Products />
  },
  {
    path: "/products/:productId",
    element: <ProductDetails />
  },
  {
    path: "/products/edit/:productId",
    element: <EditProduct />
  },
  {
    path: "/cart",
    element: <Cart />
  },
  {
    path: "/*",
    element: <Error />
  },
  {
    path: "/redux",
    element: <ReduxExplain />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
