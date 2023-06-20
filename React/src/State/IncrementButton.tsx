import { Button } from "../ui/Button";

interface Props {
  children: React.ReactNode;
  handleClick: () => void;
}

export function IncrementButton({ children, handleClick }: Props) {
  return <Button onClick={handleClick}>{children}</Button>;
}
