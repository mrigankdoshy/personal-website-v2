import clsx from 'clsx';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { ReactNode } from 'react';

type LinkProps = NextLinkProps &
  Readonly<{
    children: ReactNode;
    className?: string;
    underline?: boolean;
  }>;

export default function Link({
  underline,
  href,
  className,
  children,
  ...rest
}: LinkProps) {
  const isExternal = !href.toString().startsWith('/');

  return (
    <NextLink
      {...rest}
      href={href}
      className={clsx(
        'relative text-inherit no-underline',
        underline &&
          'before:absolute before:bottom-[-2px] before:left-0 before:h-[1.5px] before:w-full before:scale-x-100 before:rounded-full before:bg-muted-foreground after:absolute after:bottom-[-2px] after:left-0 after:h-[1.5px] after:w-full after:origin-left after:scale-x-0 after:rounded-full after:bg-foreground after:transition-transform after:duration-300 hover:text-foreground hover:before:bg-muted-foreground hover:after:origin-left hover:after:scale-x-100',
        className
      )}
      target={isExternal ? '_blank' : undefined}
    >
      {children}
    </NextLink>
  );
}
