import {
  Typography,
  Input,
  PasswordField,
  Checkbox,
  Link,
  Button,
} from '@/components';

import { Rocket, Mail } from 'lucide-react';

import Logo from '/algorithmics-logo_largo.webp';
export const RegisterPage = () => {
  return (
    <div className="p-6">
      <div className="flex items-center mb-2">
        <img src={Logo} alt="Algorithmics Logo" className="w-auto h-8" />
      </div>

      <div className="mb-6">
        <Typography variant="h2" color="dark">
          Crea tu cuenta
        </Typography>
        <Typography color="gray">Únete y empieza tu aventura.</Typography>
      </div>

      <form className="space-y-4">
        <div className="grid grid-cols-2 gap-4 mx-auto">
          <Input type="text" label="Nombre" placeholder="ej. Victoria" />
          <Input type="text" label="Apellido" placeholder="ej. Pérez" />
        </div>

        <Input
          type="email"
          label="Correo electrónico"
          placeholder="tu@email.com"
          icon={<Mail className="size-4" />}
        />

        <PasswordField />

        <PasswordField
          label="Confirmar contraseña"
          placeholder="mín. 8 caracteres"
        />

        <div className="flex justify-center">
          <Button variant="secondary" size="lg" className="mt-2 w-3/4">
            Crear cuenta <Rocket className="size-4" />
          </Button>
        </div>
      </form>

      <Typography variant="bodySmall" color="gray" className="text-center pt-3">
        ¿Ya tienes una cuenta? <Link to="/auth">Inicia sesión</Link>
      </Typography>
    </div>
  );
};
