import * as React from 'react';
import { cn } from '@/lib/utils';
import { CheckIcon } from 'lucide-react';

function Checkbox({ id, label, className, ...props }) {
  const autoId = React.useId();
  const checkboxId = id || autoId;

  return (
    <div
      className={cn('flex items-center gap-2 cursor-pointer group', className)}
    >
      <div className="relative flex items-center justify-center w-5 h-5">
        <input
          id={checkboxId}
          type="checkbox"
          className="peer appearance-none w-5 h-5 border-2 border-gray-300 rounded-md bg-white/60 checked:bg-[var(--color-brand-purple)] checked:border-[var(--color-brand-purple)] transition-all cursor-pointer"
          {...props}
        />

        <CheckIcon className="text-white absolute opacity-0 peer-checked:opacity-100 pointer-events-none size-3" />
      </div>

      {label && (
        <label
          htmlFor={checkboxId}
          className="text-xs font-medium text-gray-600 cursor-pointer group-hover:text-[var(--color-brand-dark)] transition-colors dark:text-gray-400 dark:group-hover:text-gray-300"
        >
          {label}
        </label>
      )}
    </div>
  );
}

Checkbox.displayName = 'Checkbox';

export { Checkbox };
