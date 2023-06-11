interface Props {
  children: React.ReactNode;
  handleClick: () => void;
}

export function DecrementButton({ children, handleClick }: Props) {
  return <button onClick={handleClick}>{children}</button>;
}
