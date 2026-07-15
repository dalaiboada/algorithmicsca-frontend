import { Typography, Button } from '@/components';
import { ShieldCheck, CheckCircle, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { OtpInput } from '@/features/auth/components/OtpInput';
import Logo from '/algorithmics-logo_largo.webp';

export const TwoFactorPage = () => {
  const [isVerifying, setIsVerifying] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  const handleOtpComplete = (otp) => {
    setIsVerifying(true);
    // TODO: Implement actual 2FA verification logic
    setTimeout(() => {
      setIsVerifying(false);
      setIsVerified(true);
      setTimeout(() => setIsVerified(false), 3000);
    }, 1500);
  };

  const handleCancel = () => {
    // TODO: Navigate back or handle cancel
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
            disabled={isVerifying}
            className={`w-2/3 ${isVerifying ? 'opacity-80' : ''}`}
          >
            {isVerifying ? (
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

        <p className="text-center text-xs text-gray-500 pt-2">
          ¿No recibiste el código?
          <button
            type="button"
            className="text-purple-500 font-bold hover:underline underline-offset-4 ml-1"
          >
            Reenviar
          </button>
        </p>
      </form>
    </div>
  );
};
