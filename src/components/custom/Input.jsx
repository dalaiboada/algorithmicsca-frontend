import * as React from 'react';
import { cn } from '@/lib/utils';

function Input({ id, label, icon, className, ...props }) {
  const autoId = React.useId();
  const inputId = id || autoId;

  return (
    <div className="max-w-100 w-full space-y-1.5">
      {label && (
        <label
          htmlFor={inputId}
          className="block text-xs font-bold text-gray-700 ml-1 uppercase tracking-wide dark:text-muted-foreground"
        >
          {label}
        </label>
      )}

      <div className="relative flex items-center rounded-xl bg-white/60 border border-gray-200/80 focus-within:border-(--color-brand-purple) focus-within:ring-0 outline-none transition-all shadow-sm backdrop-blur-sm dark:bg-input/30 dark:border-gray-700 dark:focus-within:border-(--color-brand-purple)">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none z-10">
            {React.cloneElement(icon, {
              className: cn('size-4 text-gray-500', icon.props.className),
            })}
          </div>
        )}

        <input
          id={inputId}
          className={cn(
            'w-full bg-transparent border-0 rounded-xl focus:ring-0 outline-none text-gray-700 text-sm font-medium placeholder-gray-400 dark:text-gray-200 dark:placeholder-gray-500',
            icon ? 'pl-10 pr-4 py-2.5' : 'px-4 py-2.5',
            className
          )}
          {...props}
        />
      </div>
    </div>
  );
}

Input.displayName = 'Input';

export { Input };
