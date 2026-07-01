import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { cn } from '@/lib/utils';

function Link({ className, children, ...props }) {
  return (
    <RouterLink
      className={cn(
        'text-xs font-bold text-brand-purple hover:text-brand-purple-dark transition-colors',
        className
      )}
      {...props}
    >
      {children}
    </RouterLink>
  );
}

Link.displayName = 'Link';

export { Link };
