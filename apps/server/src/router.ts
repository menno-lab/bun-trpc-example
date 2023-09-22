import { publicProcedure, router } from './trpc';

export const appRouter = router({
    greeting: publicProcedure.query(() => 'hello world!'),
});

export type AppRouter = typeof appRouter;
