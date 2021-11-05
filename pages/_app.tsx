import "../assets/SCSS/index.scss";
import { AppLayout } from "@/layouts/app-layout";
import type { AppProps } from "next/app";


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

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
}

export default MyApp;
