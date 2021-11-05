import "../assets/SCSS/index.scss";
import { AppLayout } from "@/layouts/app-layout";
import type { AppProps } from "next/app";
import { VisibilityProvider } from "@/contexts/visibilityContext";

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
    <VisibilityProvider>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </VisibilityProvider>
  );
}

export default MyApp;
