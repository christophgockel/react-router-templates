import type { Result } from "~/core/result";

export type MessageError = { type: "unknown"; detail: Error };
export type MessageResult = Result<string, MessageError>;

export interface ExampleRepository {
  message(): Promise<MessageResult>;
}
