import { cn } from '@/lib/utils';

const variants = {
  h1: 'text-4xl lg:text-5xl font-extrabold tracking-tight font-heading',
  h2: 'text-2xl lg:text-3xl font-bold tracking-tight font-heading',
  h3: 'text-xl lg:text-2xl font-semibold tracking-tight font-heading',
  h4: 'text-lg lg:text-xl font-semibold tracking-tight font-heading',
  h5: 'text-base lg:text-lg font-medium tracking-tight font-heading',
  h6: 'text-sm lg:text-base font-medium tracking-tight font-heading',
  body: 'text-base font-normal font-sans',
  bodyLarge: 'text-lg font-normal font-sans',
  bodySmall: 'text-sm font-normal font-sans',
  caption: 'text-xs font-normal font-sans',
  label: 'text-sm font-medium font-sans',
};

const colors = {
  default: 'text-foreground',
  dark: 'text-brand-dark',
  purple: 'text-brand-purple',
  muted: 'text-muted-foreground',
  gray: 'text-gray-600',
  inherit: 'text-inherit',
};

export const Typography = ({
  variant = 'body',
  color = 'default',
  className,
  children,
  ...props
}) => {
  const Component = variant.startsWith('h') ? variant : 'p';

  return (
    <Component
      className={cn(variants[variant], colors[color], className)}
      {...props}
    >
      {children}
    </Component>
  );
};
