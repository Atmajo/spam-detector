import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function QueryProvider({ children }: QueryProviderTypes) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
