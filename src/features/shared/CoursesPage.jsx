import { useAuthStore } from '@/stores/auth.store';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

import { Input } from '@/components/custom/Input';
import { Checkbox } from '@/components/custom/Checkbox';
import { PasswordField } from '@/components/custom/PasswordField';
import { UserIcon } from 'lucide-react';

export const CoursesPage = () => {
  const login = useAuthStore((s) => s.login);
  const navigate = useNavigate();

  const handleLogin = () => {
    login({ name: 'Demo User', role: 'student', twoFactorEnabled: true });
    navigate('/dashboard', { replace: true });
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        <h1 className="text-3xl font-heading">Algorithmics</h1>
        <p className="text-muted-foreground">Inicia sesión para continuar</p>
        {/* Botones habilitados */}
        <Button variant="default" onClick={handleLogin} size="lg">
          Entrar a la plataforma
          <ArrowRight className="size-4" />
        </Button>
        <Button variant="secondary" onClick={handleLogin} size="lg">
          Entrar a la plataforma
          <ArrowRight className="size-4" />
        </Button>
        <Button variant="subtle" onClick={handleLogin} size="lg">
          Entrar a la plataforma
          <ArrowRight className="size-4" />
        </Button>
        {/* Botones desabilitados */}
        <Button variant="default" disabled onClick={handleLogin} size="lg">
          Entrar a la plataforma
          <ArrowRight className="size-4" />
        </Button>
        <Button variant="secondary" disabled onClick={handleLogin} size="lg">
          Entrar a la plataforma
          <ArrowRight className="size-4" />
        </Button>
        <Button variant="subtle" disabled onClick={handleLogin} size="lg">
          Entrar a la plataforma
          <ArrowRight className="size-4" />
        </Button>
        {/* Inputs */}
        <Input
          type="email"
          label="Correo electrónico"
          placeholder="tu@correo.com"
        />
        <Input type="text" label="Apellido" placeholder="Pérez" />
        <PasswordField />
        <PasswordField
          label="Nueva contraseña"
          placeholder="mín. 8 caracteres"
        />
        <PasswordField aria-invalid data-invalid />
        <Input
          type="text"
          label="Nombre"
          placeholder="Juan"
          icon={<UserIcon />}
        />
        {/* Checkboxes */}
        <Checkbox id="remember" label="Recordarme" />
        <Checkbox id="terms" label="Acepto los términos" defaultChecked />
        <Checkbox id="disabled-example" label="Opción no disponible" disabled />
      </div>
    </div>
  );
};
