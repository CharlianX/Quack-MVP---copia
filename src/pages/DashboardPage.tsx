import * as React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Code2, GraduationCap, FunctionSquare, Orbit, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ModuleData {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  feynmanModuleParam: string;
  examModuleParam: string;
  colorClass: string;
}

const modules: ModuleData[] = [
  {
    id: "algebra",
    title: "Álgebra Lineal",
    description: "Bases vectoriales, independencia lineal, transformaciones y espacios.",
    icon: Calculator,
    feynmanModuleParam: "algebra",
    examModuleParam: "algebra",
    colorClass: "text-blue-500",
  },
  {
    id: "calculo",
    title: "Cálculo Integral y EDOs",
    description: "Teorema fundamental, métodos de integración y ecuaciones diferenciales separables.",
    icon: FunctionSquare,
    feynmanModuleParam: "calculo",
    examModuleParam: "calculo",
    colorClass: "text-emerald-500",
  },
  {
    id: "fisica",
    title: "Física 1 (Mecánica)",
    description: "Leyes de Newton, conservación del momentum, colisiones y energía.",
    icon: Orbit,
    feynmanModuleParam: "fisica",
    examModuleParam: "fisica",
    colorClass: "text-amber-500",
  },
];

export const DashboardPage: React.FC = () => {
  return (
    <div className="container py-8 space-y-8 max-w-5xl">
      {/* Banner del Estudiante */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-400 via-amber-400 to-orange-400 px-8 py-10 text-slate-900 shadow-xl border border-amber-300/60 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="relative z-10 space-y-3">
          <Badge className="bg-white/80 text-quack-gunmetal hover:bg-white border-0 backdrop-blur-md font-semibold text-xs shadow-sm mb-2">
            <GraduationCap className="mr-1.5 h-3.5 w-3.5 text-quack-caramel" />
            Estudiante Activo
          </Badge>
          <h1 className="font-brand text-4xl font-bold tracking-tight text-quack-gunmetal">
            ¡Hola, Alejandro! 👋
          </h1>
          <p className="text-base text-slate-800 font-medium max-w-lg">
            Vinculado a: <span className="font-bold underline decoration-orange-600 decoration-2">Universidad de los Andes</span>
            <br />
            Continúa erradicando la ilusión de competencia. Selecciona tu materia para empezar a practicar.
          </p>
        </div>
        
        {/* Decorative Duck */}
        <div className="hidden md:flex flex-col items-center justify-center p-4 rounded-3xl bg-white/80 backdrop-blur-md border border-amber-200 shadow-lg shrink-0 z-10">
          <img 
            src="/brand/quack-logo.png" 
            alt="Quack Rubber Duck" 
            className="h-28 w-28 object-contain drop-shadow-md" 
          />
        </div>
        
        {/* Background blob */}
        <div className="pointer-events-none absolute -bottom-12 -left-12 h-64 w-64 rounded-full bg-white/20 blur-2xl" />
      </section>

      {/* Grid de Materias */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 flex items-center gap-2">
          <BookOpen className="h-6 w-6 text-quack-caramel" />
          Tus Materias
        </h2>
        
        <div className="grid gap-6 md:grid-cols-3">
          {modules.map((mod) => (
            <Card key={mod.id} className="flex flex-col transition-all hover:shadow-lg border-slate-200">
              <CardHeader className="pb-4">
                <div className={`mb-3 p-3 w-fit rounded-2xl bg-slate-50 border ${mod.colorClass} shadow-sm`}>
                  <mod.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl font-bold">{mod.title}</CardTitle>
                <CardDescription className="text-sm mt-1.5 leading-relaxed">
                  {mod.description}
                </CardDescription>
              </CardHeader>
              
              <CardFooter className="mt-auto pt-4 border-t flex flex-col gap-2">
                <Button asChild className="w-full bg-quack-gunmetal text-white hover:bg-slate-800 font-semibold shadow-sm">
                  <Link to={`/feynman?module=${mod.feynmanModuleParam}`}>
                    <BookOpen className="mr-2 h-4 w-4" />
                    Modo Repaso
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full border-quack-gunmetal/20 text-quack-gunmetal hover:bg-slate-50">
                  <Link to={`/parcial-ciegas?module=${mod.examModuleParam}`}>
                    <Code2 className="mr-2 h-4 w-4" />
                    Modo Examen
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};
