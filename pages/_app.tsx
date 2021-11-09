import "../assets/SCSS/index.scss";
import { AppLayout } from "@/layouts/app-layout";
import type { AppProps } from "next/app";
import { ProvideVisibility } from "@/contexts/visibilityContext";
import { ProvideQuery } from "@/contexts/queryContext"

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
    <ProvideQuery>
      <ProvideVisibility>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </ProvideVisibility>
    </ProvideQuery>
  );
}

export default MyApp;
