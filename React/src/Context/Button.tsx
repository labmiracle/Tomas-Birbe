export function Button({
  handler,
  children,
}: {
  handler: () => void;
  children: React.ReactNode;
}) {
  return <button onClick={handler}>{children}</button>;
}
