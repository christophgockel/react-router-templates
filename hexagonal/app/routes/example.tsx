import { ExampleAdapter } from "~/adapters/inbound/example-adapter";
import { exampleRepositoryContext } from "~/context";
import { ExamplePage } from "~/pages/example";
import type { Route } from "./+types/example";

export function meta() {
  return [{ title: "New React Router App" }, { name: "description", content: "Welcome to React Router!" }];
}

export async function loader({ context }: Route.LoaderArgs) {
  const exampleRepository = context.get(exampleRepositoryContext);

  const adapter = new ExampleAdapter(exampleRepository);

  return adapter.loader();
}

export default function ExampleRoute({ loaderData }: Route.ComponentProps) {
  return <ExamplePage message={loaderData.message} />;
}
