import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { trpc, trpcClient } from './utils/trpc';

const queryClient = new QueryClient();

export function App() {
    return (
        <trpc.Provider client={trpcClient} queryClient={queryClient}>
            <QueryClientProvider client={queryClient}>
                <AppRoot />
            </QueryClientProvider>
        </trpc.Provider>
    );
}

function AppRoot() {
    const { data } = trpc.greeting.useQuery();
    return (
        <div>
            <h1>Bun + tRPC</h1>
            <p>{data}</p>
        </div>
    );
}
