export type Ok<T> = { ok: true; value: T };
export type Err<E> = { ok: false; error: E };

export type Result<T, E extends { type: string } = { type: string }> = Ok<T> | Err<E>;

export const Result = {
  ok: <T>(value: T): Ok<T> => ({ ok: true, value }),
  error: <E>(error: E): Err<E> => ({ ok: false, error }),
};
