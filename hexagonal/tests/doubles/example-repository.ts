import type { ExampleRepository, MessageResult } from "~/core/ports/example-repository";
import { Result } from "~/core/result";

export class StubExampleRepository implements ExampleRepository {
  private constructor(private readonly stubMessage: string) {}

  async message(): Promise<MessageResult> {
    return Result.ok(this.stubMessage);
  }

  static with(options: { message: string }): ExampleRepository {
    return new StubExampleRepository(options.message);
  }
}

export class AlwaysFailingExampleRepository implements ExampleRepository {
  async message(): Promise<MessageResult> {
    return Result.error({ type: "unknown", detail: new Error("") });
  }
}
