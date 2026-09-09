/**
 * Application error reporting module.
 * Logs runtime errors and React boundary errors to the console.
 */
export function reportAppError(error: unknown, context: Record<string, unknown> = {}) {
  // Extract error message
  const message =
    error instanceof Response
      ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}`
      : error instanceof Error
        ? error.message
        : String(error);

  const stack = error instanceof Error ? error.stack : undefined;

  console.error("[App Error Logged]", {
    message,
    stack,
    context,
    pathname: typeof window !== "undefined" ? window.location.pathname : undefined,
  });
}
