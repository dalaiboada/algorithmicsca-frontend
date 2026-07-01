import {
  Typography,
  Input,
  PasswordField,
  Checkbox,
  Link,
  Button,
} from '@/components';

import Logo from '/algorithmics-logo_largo.webp';
import GoogleIcon from '@/assets/icons/google-icon.svg';

import { ArrowRight, Mail } from 'lucide-react';

export const LoginPage = () => {
  return (
    <>
      <div className="flex items-center mb-2">
        <img src={Logo} alt="Algorithmics Logo" className="w-auto h-8" />
      </div>

      <div className="mb-6">
        <Typography variant="h2" color="dark">
          ¡Hola de nuevo! 👋
        </Typography>
        <Typography color="gray">Preparate para programar el futuro</Typography>
      </div>

      <form className="space-y-4">
        <Input
          type="email"
          label="Correo electrónico"
          placeholder="tu@email.com"
          icon={<Mail className="size-4" />}
        />

        <PasswordField />

        <div className="flex items-center justify-between pt-1">
          <Checkbox id="remember" label="Recordarme" />
          <Link to="/auth/reset-password">¿Olvidaste tu contraseña?</Link>
        </div>

        <Button variant="default" size="lg" className="w-full">
          Entrar a la plataforma <ArrowRight className="size-4" />
        </Button>

        <div className="flex items-center gap-3 py-1">
          <div className="h-0.5 flex-1 bg-gray-300/50 rounded-full"></div>
          <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
            o
          </span>
          <div className="h-0.5 flex-1 bg-gray-300/50 rounded-full"></div>
        </div>

        <Button variant="social" size="lg" className="w-full">
          <img src={GoogleIcon} alt="Google" className="w-5 h-5" />
          Continúa con Google
        </Button>
      </form>

      <Typography variant="bodySmall" color="gray" className="text-center pt-3">
        ¿No tienes cuenta? <Link to="/auth/register">Regístrate aquí</Link>
      </Typography>
    </>
  );
};
