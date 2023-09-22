import { createTRPCReact } from '@trpc/react-query';
import { httpBatchLink } from '@trpc/client';
import type { AppRouter } from '../../../server/src/router';

export const trpc = createTRPCReact<AppRouter>();

export const trpcClient = trpc.createClient({
    links: [
        httpBatchLink({
            url: `${import.meta.env.VITE_API_BASE_URL}/trpc`,
            // Needed for CORS to work
            fetch: (url) => fetch(url),
        }),
    ],
});
