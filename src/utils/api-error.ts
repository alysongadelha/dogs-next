export default function ApiError(error: unknown): {
  data: null;
  ok: false;
  error: string;
} {
  if (error instanceof Error) {
    return { data: null, ok: false, error: error.message };
  } else {
    return { data: null, ok: false, error: "generic error" };
  }
}
