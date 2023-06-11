export function Loading({
  children,
  show,
}: {
  children: React.ReactNode;
  show: boolean;
}) {
  if (show) {
    return 'Loading...';
  }
  return <>{children}</>;
}
