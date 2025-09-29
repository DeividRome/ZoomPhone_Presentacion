import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Separator } from '../ui/separator';
import { AlertTriangle, Cloud, Building, ArrowRight, CheckCircle2 } from 'lucide-react';

const ModuleOne = () => {
  const challenges = [
    {
      icon: AlertTriangle,
      title: 'Altos costos de mantenimiento',
      description: 'Sistemas heredados requieren mantenimiento constante y costoso'
    },
    {
      icon: Building,
      title: 'Limitaciones geográficas',
      description: 'Equipos remotos sin acceso completo a la telefonía empresarial'
    },
    {
      icon: AlertTriangle,
      title: 'Escalabilidad limitada',
      description: 'Dificultad para crecer o reducir capacidad según necesidades'
    }
  ];

  const cloudBenefits = [
    {
      icon: CheckCircle2,
      title: 'Reducción de costos hasta 40%',
      description: 'Eliminación de hardware y mantenimiento local'
    },
    {
      icon: CheckCircle2,
      title: 'Flexibilidad total',
      description: 'Trabajo desde cualquier ubicación con calidad empresarial'
    },
    {
      icon: CheckCircle2,
      title: 'Escalabilidad instantánea',
      description: 'Crezca o reduzca según necesidades sin inversión adicional'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-[#50E4FE] to-[#043172] text-white">
            Módulo 1: Fundamentos
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-[#043172] mb-6">
            ¿Qué es Zoom Phone?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Entenda el problema empresarial y cómo la telefonía en la nube lo resuelve
          </p>
        </div>

        {/* Problem Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-[#043172] mb-6">
                Los desafíos de la telefonía tradicional
              </h3>
              <p className="text-lg text-slate-600 mb-8">
                Las empresas enfrentan costos crecientes, limitaciones técnicas y 
                dificultades para adaptarse al trabajo moderno.
              </p>
              <div className="space-y-6">
                {challenges.map((challenge, index) => {
                  const IconComponent = challenge.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-red-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#043172] mb-1">{challenge.title}</h4>
                        <p className="text-slate-600">{challenge.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0" 
                alt="Equipo trabajando con sistema tradicional" 
                className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Analogy Section */}
        <div className="mb-20">
          <Card className="bg-gradient-to-r from-[#50E4FE]/5 to-[#043172]/5 border-l-4 border-[#50E4FE]">
            <CardContent className="p-8">
              <div className="text-center">
                <Cloud className="h-16 w-16 text-[#50E4FE] mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-[#043172] mb-4">
                  Analogía: De tener una centralita física a usar servicios como Netflix
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Building className="h-8 w-8 text-red-600" />
                    </div>
                    <h4 className="font-semibold mb-2">Sistema Tradicional</h4>
                    <p className="text-slate-600 text-sm">
                      Como tener DVDs: hardware físico, mantenimiento constante, 
                      limitaciones de ubicación
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-center">
                    <ArrowRight className="h-8 w-8 text-[#50E4FE]" />
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Cloud className="h-8 w-8 text-green-600" />
                    </div>
                    <h4 className="font-semibold mb-2">Zoom Phone</h4>
                    <p className="text-slate-600 text-sm">
                      Como Netflix: servicio en la nube, acceso desde cualquier lugar, 
                      actualizaciones automáticas
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Solution Benefits */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#043172] mb-4">
              La solución: Beneficios inmediatos para el negocio
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cloudBenefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="h-8 w-8 text-green-600" />
                    </div>
                    <h4 className="text-xl font-bold text-[#043172] mb-4">{benefit.title}</h4>
                    <p className="text-slate-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Key Definition */}
        <div className="text-center">
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-[#043172] to-[#50E4FE] text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Zoom Phone en términos simples</h3>
              <p className="text-lg leading-relaxed">
                "Como tener un sistema telefónico empresarial completo que funciona a través 
                de Internet, sin necesidad de hardware costoso, con acceso desde cualquier 
                lugar del mundo y que se adapta automáticamente a sus necesidades."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ModuleOne;