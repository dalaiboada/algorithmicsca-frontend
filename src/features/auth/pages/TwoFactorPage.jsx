import { Typography, Button } from '@/components';
import { ShieldCheck, CheckCircle, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/lib/toast';
import { OtpInput } from '@/features/auth/components/OtpInput';
import Logo from '/algorithmics-logo_largo.webp';

import { useVerify2fa } from '@/features/auth/hooks/useVerify2fa';

export const TwoFactorPage = () => {
  const [isVerified, setIsVerified] = useState(false);
  const { verify2fa, isLoading } = useVerify2fa();
  const navigate = useNavigate();

  const handleOtpComplete = async (otp) => {
    try {
      await verify2fa(otp);

      setIsVerified(true);

      toast.success('Verificación exitosa');
      navigate('/dashboard');
    } catch (error) {
      toast.error(error.message || 'Código incorrecto. Intenta nuevamente.');
    }
  };

  const handleCancel = () => {
    navigate('/auth');
  };

  return (
    <div className="flex flex-col items-center w-full">
      <img src={Logo} alt="Algorithmics Logo" className="h-8 w-auto" />

      <div className="mb-6">
        <div className="flex items-center gap-2 mb-1">
          <ShieldCheck className="text-purple-500 text-2xl" />

          <Typography variant="h2" color="dark">
            Verificación en dos pasos
          </Typography>
        </div>

        <Typography color="gray">
          Ingresa el código de 6 dígitos de tu autenticador.
        </Typography>
      </div>

      <form className="space-y-6 w-full max-w-100">
        <OtpInput length={6} onComplete={handleOtpComplete} />

        <div className="flex gap-3 pt-2">
          <Button
            type="button"
            variant="secondary"
            onClick={handleCancel}
            className="w-1/3"
          >
            Cancelar
          </Button>

          <Button
            type="submit"
            disabled={isLoading}
            className={`w-2/3 ${isLoading ? 'opacity-80' : ''}`}
          >
            {isLoading ? (
              <>
                Verificando... <Loader2 className="size-4 animate-spin" />
              </>
            ) : isVerified ? (
              <>
                Verificado <CheckCircle className="size-4" />
              </>
            ) : (
              'Verificar'
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};
