interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  openInNewTab: boolean;
}

export function Link({ children, openInNewTab, ...props }: Props) {
  return (
    <a {...props} rel="noopener" target={openInNewTab ? '_blank' : '_self'}>
      {children}
    </a>
  );
}
