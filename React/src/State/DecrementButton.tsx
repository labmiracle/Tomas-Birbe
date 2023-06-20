import { Button } from "../ui/Button";

interface Props {
  children: React.ReactNode;
  handleClick: () => void;
}

export function DecrementButton({ children, handleClick }: Props) {
  return <Button onClick={handleClick}>{children}</Button>;
}
