import { appId, searchApiKey, indexName } from "@/utils/env";
import { InstantSearch } from "react-instantsearch-dom";
import { useSearchClient } from "@/hooks/useSearchClient";
import { useSearchInsights } from "@/hooks/useSearchInsights";
import { useAtomValue } from "jotai/utils";
import { configAtom } from "@/config/config";

import Header from "@/components/Header/Header";

export type AppLayoutProps = {
  children: React.ReactNode;
};

export function AppLayout({ children }: AppLayoutProps) {
  const { setUserToken } = useAtomValue(configAtom);
  // Initialize search client
  const searchClient = useSearchClient({
    appId,
    searchApiKey,
  });

  // Initialize search insights
  useSearchInsights({
    appId,
    searchApiKey,
    setUserToken,
  });

  return (
    <InstantSearch searchClient={searchClient} indexName={indexName}>
      <Header />
      {children}
    </InstantSearch>
  );
}
