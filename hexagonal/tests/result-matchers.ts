import { expect } from "vitest";
import type { Err, Ok, Result } from "~/core/result";

export function expectOk<T, E extends { type: string }>(result: Result<T, E>): asserts result is Ok<T> {
  expect(result.ok, `Expected Ok Result but got: ${JSON.stringify(result)}`).toBe(true);
}

export function expectError<T, E extends { type: string }>(result: Result<T, E>): asserts result is Err<E> {
  expect(result.ok, `Expected Err Result but got: ${JSON.stringify(result)}`).toBe(false);
}

export function expectErrorOfType<T, E extends { type: string }, Type extends E["type"]>(
  result: Result<T, E>,
  errorType: Type,
): asserts result is Err<Extract<E, { type: Type }>> {
  expectError(result);

  expect(result.error.type, `Expected error type "${errorType}" but got: ${JSON.stringify(result)}`).toBe(errorType);
}
