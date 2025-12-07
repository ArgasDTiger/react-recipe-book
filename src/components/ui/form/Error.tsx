import type { FieldError } from "react-hook-form";

type ErrorProps = {
  error?: FieldError | null;
};

export const Error = ({error}: ErrorProps) => {
  return (error &&
    <span
      role="alert"
      aria-label={error.message}
      className="error"
    >
      {error.message}
    </span>);
}