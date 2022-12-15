import { graphql } from "msw";

export const handlers = [
  graphql.query("Example", (req, res, ctx) => {
    const { id } = req.variables;

    if (id == 0) {
      return res(
        ctx.errors([
          {
            message: "Bad id",
          },
        ])
      );
    }

    return res(
      ctx.data({
        example: {
          id,
        },
      })
    );
  }),
];
