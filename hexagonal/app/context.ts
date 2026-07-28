import { createContext } from "react-router";
import type { ExampleRepository } from "~/core/ports/example-repository";

export const exampleRepositoryContext = createContext<ExampleRepository>();
