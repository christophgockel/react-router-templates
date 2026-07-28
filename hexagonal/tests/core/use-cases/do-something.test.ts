import { describe, expect, it } from "vitest";
import { DoSomething } from "~/core/use-cases/do-something";
import { AlwaysFailingExampleRepository, StubExampleRepository } from "../../doubles/example-repository";
import { expectError, expectErrorOfType, expectOk } from "../../result-matchers";

describe("DoSomething use case", () => {
  it("returns what the repository provides", async () => {
    const repository = StubExampleRepository.with({ message: "some message" });
    const doSomething = new DoSomething(repository);

    const result = await doSomething.execute();

    expectOk(result);
    expect(result.value).toEqual("some message");
  });

  it("returns error when repository fails", async () => {
    const repository = new AlwaysFailingExampleRepository();
    const doSomething = new DoSomething(repository);

    const result = await doSomething.execute();

    expectError(result);
  });

  it("returns error from repository", async () => {
    const repository = new AlwaysFailingExampleRepository();
    const doSomething = new DoSomething(repository);

    const result = await doSomething.execute();

    expectErrorOfType(result, "unknown");
  });
});
