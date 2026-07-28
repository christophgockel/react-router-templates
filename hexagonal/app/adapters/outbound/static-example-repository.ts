import type { ExampleRepository, MessageResult } from "~/core/ports/example-repository";
import { Result } from "~/core/result";

export class StaticExampleRepository implements ExampleRepository {
  async message(): Promise<MessageResult> {
    return Result.ok("Example Repository Value");
  }
}
