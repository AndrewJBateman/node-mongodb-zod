import { Express, Request, Response } from "express";

// import handlers
import {
  getProductHandler,
  createProductHandler,
  updateProductHandler,
  deleteProductHandler,
} from "./controllers/product.controller";
import {
  createUserSessionHandler,
  deleteSessionHandler,
  getUserSessionsHandler,
} from "./controllers/session.controller";
import { createUserHandler } from "./controllers/user.controller";

// import schema
import {
  createProductSchema,
  deleteProductSchema,
  getProductSchema,
  updateProductSchema,
} from "./schema/product.schema";
import { createUserSchema } from "./schema/user.schema";
import { createSessionSchema } from "./schema/session.schema";

// import middleware
import requireUser from "./middleware/requireUser";
import validateResource from "./middleware/validateResource";

// export single function to handle all express routes
function routes(app: Express) {
  app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));

  // user routes
  app.post("/api/users", validateResource(createUserSchema), createUserHandler);

  // session routes
  app.post(
    "/api/sessions",
    validateResource(createSessionSchema),
    createUserSessionHandler
  );
  app.get("/api/sessions", requireUser, getUserSessionsHandler);
  app.delete("/api/sessions", requireUser, deleteSessionHandler);

  // product routes
  app.post(
    "/api/products",
    [requireUser, validateResource(createProductSchema)],
    createProductHandler
  );
  app.put(
    "/api/products/:productId",
    [requireUser, validateResource(updateProductSchema)],
    updateProductHandler
  );
  app.get(
    "/api/products/:productId",
    validateResource(getProductSchema),
    getProductHandler
  );
  app.delete(
    "/api/products/:productId",
    [requireUser, validateResource(deleteProductSchema)],
    getProductHandler
  );
}

export default routes;
