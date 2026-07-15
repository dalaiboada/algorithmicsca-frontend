import { useTheme } from 'next-themes';
import { Toaster as Sonner } from 'sonner';
import {
  CircleCheckIcon,
  InfoIcon,
  TriangleAlertIcon,
  OctagonXIcon,
  Loader2Icon,
} from 'lucide-react';

const Toaster = ({ ...props }) => {
  const { theme = 'system' } = useTheme();

  return (
    <Sonner
      theme={theme}
      className="toaster group"
      icons={{
        success: <CircleCheckIcon className="size-4" />,
        info: <InfoIcon className="size-4" />,
        warning: <TriangleAlertIcon className="size-4" />,
        error: <OctagonXIcon className="size-4" />,
        loading: <Loader2Icon className="size-4 animate-spin" />,
      }}
      toastOptions={{
        classNames: {
          toast:
            'group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg',

          success:
            'group-[.toaster]:!bg-green-600 group-[.toaster]:!text-white group-[.toaster]:!border-green-700',
          error:
            'group-[.toaster]:!bg-red-600 group-[.toaster]:!text-white group-[.toaster]:!border-red-700',
          warning:
            'group-[.toaster]:!bg-yellow-500 group-[.toaster]:!text-white group-[.toaster]:!border-yellow-600',
          info: 'group-[.toaster]:!bg-blue-600 group-[.toaster]:!text-white group-[.toaster]:!border-blue-700',

          actionButton:
            'group-[.toaster]:bg-primary group-[.toaster]:text-primary-foreground',
          cancelButton:
            'group-[.toaster]:bg-muted group-[.toaster]:text-muted-foreground',
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
