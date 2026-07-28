import type { ExampleRepository } from "~/core/ports/example-repository";
import { DoSomething } from "~/core/use-cases/do-something";

export class ExampleAdapter {
  constructor(private readonly exampleRepository: ExampleRepository) {}

  async loader() {
    const example = new DoSomething(this.exampleRepository);
    let message: string;

    const result = await example.execute();

    if (result.ok) {
      message = result.value;
    } else {
      message = "Something went wrong";
    }

    return { message };
  }
}
