# Algorithmics

Plataforma educativa de **Algorithmics**, escuela internacional de programación.
Este frontend sirve como dashboard/app para estudiantes, administradores y usuarios del ecosistema Algorithmics.

Landing page institucional: [algorithmics-landing-nine.vercel.app/es](https://algorithmics-landing-nine.vercel.app/es)

---

## Stack

| Capa        | Tecnología                                            |
| ----------- | ----------------------------------------------------- |
| Framework   | React 19 + Vite 8                                     |
| Lenguaje    | JavaScript (JSX)                                      |
| Estilos     | Tailwind CSS v4 (CSS-first, sin `tailwind.config.js`) |
| Componentes | shadcn/ui (estilo `radix-vega`)                       |
| Routing     | react-router-dom v7 (`createBrowserRouter`)           |
| Estado      | Zustand                                               |
| Tema        | next-themes                                           |
| Íconos      | lucide-react                                          |

---

## Estructura

```
src/
├── assets/
├── components/
│   ├── feedback/          # Componentes de UI global (AnimatedBackground, etc.)
│   └── ui/                # shadcn/ui primitives (button, sonner, etc.)
├── features/
│   ├── auth/              # Módulo de autenticación (pages, components, hooks)
│   ├── shared/            # Componentes/hooks compartidos entre features
│   └── student/           # Módulo de estudiantes
├── hooks/                 # Hooks genéricos
├── layouts/
│   ├── MainLayout.jsx     # Layout público (login, landing, etc.)
│   └── DashboardLayout.jsx# Layout protegido (app principal)
├── lib/
│   └── utils.js           # Utilidades (cn, etc.)
├── routes/
│   ├── index.jsx          # createBrowserRouter central
│   └── ProtectedRoute.jsx # Guard de autenticación, roles y 2FA
├── stores/
│   └── auth-store.js      # Store de autenticación (Zustand)
├── App.jsx                # Punto de entrada: RouterProvider + Toaster
├── App.css
├── index.css              # Tailwind v4 @theme, keyframes, variables
└── main.jsx               # Mount root
```

---

## Routing

Las rutas se definen centralizadamente en `src/routes/index.jsx` usando `createBrowserRouter`:

- **Rama pública** (`MainLayout`): `/login`, `/` (redirige a `/login`).
- **Rama protegida** (`ProtectedRoute` → `DashboardLayout`): `/dashboard`, etc.

`ProtectedRoute` valida tres condiciones configurables por props:

1. **Autenticación** — redirige a `/login` si no hay sesión.
2. **Roles permitidos** — redirige a `/` si el rol del usuario no está en `allowedRoles`.
3. **2FA obligatorio** — redirige a `/login` si `require2FA` está activo y el usuario no lo tiene habilitado.

---

## Comandos

| Acción     | Comando           |
| ---------- | ----------------- |
| Dev server | `npm run dev`     |
| Build      | `npm run build`   |
| Lint       | `npm run lint`    |
| Preview    | `npm run preview` |

---

## Convenciones

- Todas las importaciones usan el alias `@/` (mapea a `./src`).
- Componentes en JSX.
- Sin `tailwind.config.js` — las personalizaciones de Tailwind v4 van en `src/index.css` dentro de bloques `@theme`.
- Los módulos de funcionalidad viven en `src/features/<modulo>/` con su propia carpeta `pages/`, `components/` y `hooks/`.
