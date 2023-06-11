interface Props {
  children: React.ReactNode;
  handleClick: () => void;
}

export function IncrementButton({ children, handleClick }: Props) {
  return <button onClick={handleClick}>{children}</button>;
}
