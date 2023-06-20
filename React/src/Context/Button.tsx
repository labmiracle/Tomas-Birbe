import { Button as StyledButton } from "../ui/Button";

export function Button({
  handler,
  children,
}: {
  handler: () => void;
  children: React.ReactNode;
}) {
  return <StyledButton onClick={handler}>{children}</StyledButton>;
}
