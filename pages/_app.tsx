import "../assets/SCSS/index.scss";
import { AppLayout } from "@/layouts/app-layout";
import type { AppProps } from "next/app";

//REACT REDUX CONFIF
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "@/reducers/indexReducer";
import { Provider } from "react-redux";

// DEV TOOL

// if (typeof window !== "undefined") {
//   // browser code
//   const composeEnhancers =
//     (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
//   //CREATE STORE +IMPORT ALL REDUCER IN ONE
//   const store = createStore(
//     rootReducer,
//     composeEnhancers(applyMiddleware(thunk))
//   );
// }
const store = createStore(rootReducer, applyMiddleware(thunk));

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </Provider>
  );
}

export default MyApp;
