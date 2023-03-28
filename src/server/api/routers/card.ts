import { z } from "zod";

import {
  createTRPCRouter,
  privateProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const cardRouter = createTRPCRouter({
  getAll: privateProcedure.query(({ ctx }) => {
    return ctx.prisma.card.findMany({
      where: {
        authorId: ctx.userId,
      },
    });
  }),
  create: privateProcedure
    .input(
      z.object({
        firstName: z.string(),
        lastName: z.string(),
        title: z.string(),
        org: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const card = await ctx.prisma.card.create({
        data: {
          authorId: ctx.userId,
          firstName: input.firstName,
          lastName: input.lastName,
          title: input.title,
          org: input.org,
        },
      });

      return card;
    }),
});
