import * as React from "react";
import { useNavigate } from "react-router-dom";
import { LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Es un mock, siempre redirige al dashboard
    navigate("/dashboard");
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        
        {/* Encabezado e Imagen Quack */}
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-amber-300 blur-2xl opacity-40 rounded-full animate-pulse" />
            <img 
              src="/brand/quack-logo.png" 
              alt="Quack Logo" 
              className="relative h-32 w-32 object-contain drop-shadow-xl animate-bounce [animation-duration:3s]"
            />
          </div>
          <div>
            <h1 className="text-4xl font-brand font-bold text-quack-gunmetal tracking-tight mt-4 mb-2">
              ¡Bienvenido a Quack!
            </h1>
            <p className="text-slate-600 font-medium">
              Tu compañera de estudio para erradicar la ilusión de competencia.
            </p>
          </div>
        </div>

        {/* Tarjeta de Formulario de Inicio de Sesión */}
        <Card className="border-amber-200/60 shadow-xl shadow-amber-900/5 bg-white/95 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-xl text-center text-quack-gunmetal">Iniciar Sesión</CardTitle>
            <CardDescription className="text-center">
              Ingresa tus credenciales universitarias
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleLogin}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-semibold text-slate-700">
                  Correo Institucional
                </label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="estudiante@uniandes.edu.co" 
                  required 
                  className="bg-slate-50 border-slate-200 focus-visible:ring-amber-500"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="text-sm font-semibold text-slate-700">
                    Contraseña
                  </label>
                  <a href="#" className="text-xs font-medium text-quack-caramel hover:underline">
                    ¿Olvidaste tu contraseña?
                  </a>
                </div>
                <Input 
                  id="password" 
                  type="password" 
                  placeholder="••••••••" 
                  required 
                  className="bg-slate-50 border-slate-200 focus-visible:ring-amber-500"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                type="submit" 
                className="w-full bg-amber-400 hover:bg-amber-500 text-quack-gunmetal font-bold shadow-md transition-colors"
                size="lg"
              >
                <LogIn className="mr-2 h-5 w-5" />
                Iniciar Sesión
              </Button>
            </CardFooter>
          </form>
        </Card>

        {/* Footer info */}
        <p className="text-center text-xs text-slate-500">
          Al iniciar sesión, aceptas los Términos de Servicio y la Política de Privacidad de Quack MVP.
        </p>

      </div>
    </div>
  );
};
