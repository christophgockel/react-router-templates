import { render, screen } from "@testing-library/react";
import { createRoutesStub, RouterContextProvider } from "react-router";
import { describe, expect, it } from "vitest";
import { exampleRepositoryContext } from "~/context";
import ExampleRoute, { loader } from "~/routes/example";
import { StubExampleRepository } from "../../doubles/example-repository";

describe("/example Route", () => {
  it("renders the message the loader provides", async () => {
    const context = new RouterContextProvider();
    context.set(exampleRepositoryContext, StubExampleRepository.with({ message: "Message from repository" }));

    const Stub = createRoutesStub(
      [{ path: "/example", Component: ExampleRoute, loader, HydrateFallback: () => null }],
      context,
    );

    render(<Stub initialEntries={["/example"]} />);

    expect(await screen.findByRole("heading", { name: "Message from repository" })).toBeInTheDocument();
  });
});
