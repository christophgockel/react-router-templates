import type { ExampleRepository } from "~/core/ports/example-repository";
import { Result } from "~/core/result";

export class DoSomething {
  constructor(private readonly repository: ExampleRepository) {}

  async execute(): Promise<Result<string>> {
    const result = await this.repository.message();

    if (result.ok) {
      return Result.ok(result.value);
    }

    return result;
  }
}
