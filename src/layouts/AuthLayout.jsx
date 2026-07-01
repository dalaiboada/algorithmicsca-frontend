import { Outlet } from 'react-router-dom';
import { Flag, Building, GraduationCap, MapPin } from 'lucide-react';
import { AnimatedBackground } from '@/components/feedback/AnimatedBackground';
import mapaAlgorithmics from '@/assets/img/mapa-algorithmics.webp';
import useImage from '@/hooks/use-image';
import { Spinner } from '@/components';

const FALLBACK_IMAGE = 'https://chacao.alg.academy/_nuxt/img/4d36591.png';

const StatCard = ({ icon: Icon, title, subtitle }) => (
  <div className="flex items-center gap-2.5 bg-white/70 px-4 py-2 rounded-2xl shadow-sm border border-white/50">
    <div className="w-9 h-9 bg-brand-purple/10 text-brand-purple rounded-xl flex items-center justify-center">
      <Icon className="w-5 h-5" />
    </div>

    <div>
      <p className="text-sm font-extrabold text-brand-dark leading-none">
        {title}
      </p>
      <p className="text-[10px] text-gray-500 font-medium mt-0.5">{subtitle}</p>
    </div>
  </div>
);

const RightPanel = () => {
  const { src, isLoading, hasError, handleLoad, handleError } = useImage(
    mapaAlgorithmics,
    FALLBACK_IMAGE
  );

  return (
    <div
      className="hidden md:flex w-full md:w-[55%] lg:w-[60%] flex-col justify-start gap-4 p-6 lg:p-8 relative overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(244,245,249,0.3) 100%)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
    >
      {/* CONTENIDO DE TEXTO EN CABECERA */}
      <div className="relative z-10 w-full max-w-2xl mx-auto space-y-4">
        <h3 className="text-3xl lg:text-4xl font-extrabold text-brand-dark leading-tight tracking-tight">
          Tu hijo aprenderá en una escuela de{' '}
          <span className="text-brand-purple relative inline-block">
            calidad internacional
          </span>
        </h3>

        {/* Listado de Métricas */}
        <div className="flex flex-wrap items-center gap-6 lg:gap-8 pt-2">
          <StatCard
            icon={Flag}
            title="90+ países"
            subtitle="Presencia global"
          />
          <StatCard
            icon={Building}
            title="515 socios"
            subtitle="Aliados globales"
          />
          <StatCard
            icon={GraduationCap}
            title="1.1M graduados"
            subtitle="Casos de éxito"
          />
        </div>
      </div>

      {/* Mapa */}
      <div className="relative w-full max-w-167.5 h-75 flex items-center justify-center overflow-hidden">
        {isLoading && <Spinner size="lg" color="brand-purple" />}

        <img
          src={src}
          alt="Algorithmics Mapa"
          className={`w-full h-full select-none transition-opacity duration-300 ${
            hasError ? 'object-cover opacity-10 rounded-xl' : 'object-contain'
          }`}
          onLoad={handleLoad}
          onError={handleError}
        />
      </div>

      {/* Pie de detalle */}
      <div className="relative z-10 w-full max-w-2xl mx-auto -mt-8">
        <div className="bg-white/70 backdrop-blur-md text-brand-dark rounded-2xl p-4 flex items-center gap-4 border border-white/80 shadow-md">
          <div className="w-10 h-10 bg-brand-purple/10 text-brand-purple rounded-xl flex items-center justify-center flex-shrink-0">
            <MapPin className="w-5 h-5 animate-bounce" />
          </div>
          <div>
            <p className="text-sm font-extrabold text-brand-dark">
              ¡La escuela del futuro en Venezuela! 🇻🇪
            </p>
            <p className="text-xs text-gray-600 font-medium mt-0.5">
              Miles de padres confían en nuestro sistema educativo alrededor del
              mundo y ahora nos adaptamos a tu región.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const AuthLayout = () => {
  return (
    <div className="relative min-h-screen w-screen overflow-hidden bg-bone">
      <AnimatedBackground />

      <div className="relative z-10 w-full min-h-screen flex flex-col md:flex-row items-stretch">
        {/* PANEL IZQUIERDO */}
        <div
          className="w-full md:w-[45%] lg:w-[40%] min-h-screen md:h-full flex flex-col justify-center items-center px-6 md:px-10 lg:px-14 py-10 z-10"
          style={{
            background: 'rgba(255, 255, 255, 0.6)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
          }}
        >
          <Outlet />
        </div>

        <RightPanel />
      </div>
    </div>
  );
};
