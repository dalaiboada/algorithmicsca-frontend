import * as React from 'react';
import { cn } from '@/lib/utils';
import { LockIcon, EyeIcon, EyeOffIcon } from 'lucide-react';

function PasswordField({
  id,
  label = 'Contraseña',
  placeholder = '••••••••',
  className,
  ...props
}) {
  const [show, setShow] = React.useState(false);
  const autoId = React.useId();
  const inputId = id || autoId;

  return (
    <div className={cn('max-w-[400px] w-full space-y-1.5', className)}>
      <label
        htmlFor={inputId}
        className="block text-xs font-bold text-gray-700 ml-1 uppercase tracking-wide dark:text-muted-foreground"
      >
        {label}
      </label>

      <div className="relative flex items-center rounded-xl bg-white/60 border border-gray-200/80 focus-within:border-[var(--color-brand-purple)] focus-within:ring-0 outline-none transition-all shadow-sm backdrop-blur-sm dark:bg-input/30 dark:border-gray-700 dark:focus-within:border-[var(--color-brand-purple)]">
        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none z-10">
          <LockIcon className="size-4 text-gray-500" />
        </div>

        <input
          id={inputId}
          type={show ? 'text' : 'password'}
          placeholder={placeholder}
          className={cn(
            'w-full pl-10 pr-10 py-2.5 bg-transparent border-0 rounded-xl focus:ring-0 outline-none text-gray-700 text-sm font-medium placeholder-gray-400 dark:text-gray-200 dark:placeholder-gray-500'
          )}
          {...props}
        />

        <button
          type="button"
          onClick={() => setShow(!show)}
          aria-label={show ? 'Ocultar contraseña' : 'Mostrar contraseña'}
          className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-[var(--color-brand-purple)] transition-colors z-10"
        >
          {show ? (
            <EyeOffIcon className="size-4" />
          ) : (
            <EyeIcon className="size-4" />
          )}
        </button>
      </div>
    </div>
  );
}

PasswordField.displayName = 'PasswordField';

export { PasswordField };
