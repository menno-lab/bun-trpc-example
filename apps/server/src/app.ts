import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { appRouter } from './router';

async function fetchHandler(request: Request) {
    const res = await fetchRequestHandler({
        endpoint: '/trpc',
        req: request,
        router: appRouter,
        createContext: () => ({}),
    });
    res.headers.set('Access-Control-Allow-Origin', '*');
    res.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    return res;
}

const server = Bun.serve({
    port: Bun.env.PORT,
    fetch: fetchHandler,
});

console.log(`Listening on http://localhost:${server.port}`);
