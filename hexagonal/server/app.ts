import { createRequestHandler } from "@react-router/express";
import express from "express";
import { RouterContextProvider } from "react-router";
import { StaticExampleRepository } from "~/adapters/outbound/static-example-repository";
import { exampleRepositoryContext } from "~/context";

export const app = express();

app.use(
  createRequestHandler({
    build: () => import("virtual:react-router/server-build"),
    getLoadContext() {
      const context = new RouterContextProvider();

      context.set(exampleRepositoryContext, new StaticExampleRepository());

      return context;
    },
  }),
);
