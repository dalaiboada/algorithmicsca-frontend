import {
  Typography,
  Input,
  PasswordField,
  Checkbox,
  Link,
  Button,
  AlertCircleIconComponent,
} from '@/components';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import Logo from '/algorithmics-logo_largo.webp';
import GoogleIcon from '@/assets/icons/google-icon.svg';

import { ArrowRight, Mail } from 'lucide-react';
import { useServerHealth } from '@/hooks/useServerHealth';
import { useLogin } from '@/features/auth/hooks/useLogin';
import { useAuthStore } from '@/stores/auth.store';

export const LoginPage = () => {
  const { alert } = useServerHealth();
  const { loginUser, isLoading } = useLogin();
  const { setPending2FA } = useAuthStore();

  const [email, setEmail] = useState('');
  const [clave, setClave] = useState('');

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const result = await loginUser({ email, clave });

    if (result.success) {
      navigate('/dashboard');
    } else if (result.require2FA) {
      setPending2FA(result.userId);
      navigate('/auth/2fa-verify');
    }
  };

  return (
    <div className="flex flex-col items-center w-full">
      <img src={Logo} alt="Algorithmics Logo" className="h-8 w-auto" />

      <div className="mb-6">
        <Typography variant="h2" color="dark">
          ¡Hola de nuevo! 👋
        </Typography>
        <Typography color="gray">Preparate para programar el futuro</Typography>
      </div>

      <form className="space-y-4" onSubmit={handleLogin}>
        <Input
          type="email"
          label="Correo electrónico"
          placeholder="tu@email.com"
          icon={<Mail className="size-4" />}
          className={'w-85'}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <PasswordField
          value={clave}
          onChange={(e) => setClave(e.target.value)}
        />

        <div className="flex items-center justify-between pt-1">
          <Checkbox id="remember" label="Recordarme" />
          <Link to="/auth/reset-password">¿Olvidaste tu contraseña?</Link>
        </div>

        <Button variant="default" size="lg" className="w-full" type="submit">
          Entrar a la plataforma <ArrowRight className="size-4" />
        </Button>

        <AlertCircleIconComponent
          Title={alert.title}
          Description={alert.description}
          type={alert.type}
        />

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
    </div>
  );
};
