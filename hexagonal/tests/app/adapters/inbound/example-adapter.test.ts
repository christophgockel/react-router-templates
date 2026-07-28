import { describe, expect, it } from "vitest";
import { ExampleAdapter } from "~/adapters/inbound/example-adapter";
import { AlwaysFailingExampleRepository, StubExampleRepository } from "../../../doubles/example-repository";

describe("IncomingExampleAdapter", () => {
  it("returns the message the repository provides", async () => {
    const repository = StubExampleRepository.with({ message: "some message" });
    const adapter = new ExampleAdapter(repository);

    expect(await adapter.loader()).toEqual({ message: "some message" });
  });

  it("returns a fallback message when the repository fails", async () => {
    const adapter = new ExampleAdapter(new AlwaysFailingExampleRepository());

    expect(await adapter.loader()).toEqual({ message: "Something went wrong" });
  });
});
