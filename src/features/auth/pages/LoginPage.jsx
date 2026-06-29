import { useAuthStore } from "@/stores/auth-store"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"

export const LoginPage = () => {
  const login = useAuthStore((s) => s.login)
  const navigate = useNavigate()

  const handleLogin = () => {
    login({ name: "Demo User", role: "student", twoFactorEnabled: true })
    navigate("/dashboard", { replace: true })
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        <h1 className="text-3xl font-heading">Algorithmics</h1>
        <p className="text-muted-foreground">Inicia sesión para continuar</p>
        <Button onClick={handleLogin}>Entrar</Button>
      </div>
    </div>
  )
}
