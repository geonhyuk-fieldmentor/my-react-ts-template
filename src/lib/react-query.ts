import { type DefaultOptions, QueryClient } from '@tanstack/react-query';

const queryConfig: DefaultOptions = {
  queries: {
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
    retry: 3,
    staleTime: 0,
    suspense: true,
  },
};

export const queryClient = new QueryClient({
  defaultOptions: queryConfig,
});
