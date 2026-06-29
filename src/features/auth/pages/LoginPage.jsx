import { useAuthStore } from "@/stores/auth-store";
import { useNavigate } from "react-router-dom";
import { ButtonBrand } from "@/components/custom/ButtonBrand";
import { ArrowRight } from "lucide-react";

export const LoginPage = () => {
  const login = useAuthStore((s) => s.login);
  const navigate = useNavigate();

  const handleLogin = () => {
    login({ name: "Demo User", role: "student", twoFactorEnabled: true });
    navigate("/dashboard", { replace: true });
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        <h1 className="text-3xl font-heading">Algorithmics</h1>
        <p className="text-muted-foreground">Inicia sesión para continuar</p>
        <ButtonBrand brand="primary" onClick={handleLogin} size="lg">
          Entrar a la plataforma
          <ArrowRight className="size-4" />
        </ButtonBrand>
        <ButtonBrand brand="secondary" onClick={handleLogin} size="lg">
          Entrar a la plataforma
          <ArrowRight className="size-4" />
        </ButtonBrand>
        <ButtonBrand brand="subtle" onClick={handleLogin} size="lg">
          Entrar a la plataforma
          <ArrowRight className="size-4" />
        </ButtonBrand>
        <ButtonBrand brand="primary" disabled onClick={handleLogin} size="lg">
          Entrar a la plataforma
          <ArrowRight className="size-4" />
        </ButtonBrand>
        <ButtonBrand brand="secondary" disabled onClick={handleLogin} size="lg">
          Entrar a la plataforma
          <ArrowRight className="size-4" />
        </ButtonBrand>
        <ButtonBrand brand="subtle" disabled onClick={handleLogin} size="lg">
          Entrar a la plataforma
          <ArrowRight className="size-4" />
        </ButtonBrand>
      </div>
    </div>
  );
};
