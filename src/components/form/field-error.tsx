import { ActionState } from "./utils/to-action-state";

type FieldErrorProps = {
  actionState: ActionState;
  name: string;
};

const FieldError = ({ actionState, name }: FieldErrorProps) => {
  const message = actionState.fieldError[name]?.[0];

  if (!message) return null;

  return <span className="text-xs text-red-500">{message}</span>;
};

export { FieldError };
