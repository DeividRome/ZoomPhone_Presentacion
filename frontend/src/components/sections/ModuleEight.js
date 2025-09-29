import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Alert, AlertDescription } from '../ui/alert';
import { Progress } from '../ui/progress';
import { 
  ArrowRight, 
  Users, 
  Phone, 
  CheckCircle2, 
  AlertCircle,
  Calendar,
  BookOpen,
  Wifi,
  WifiOff
} from 'lucide-react';
import { implementationSteps } from '../../mock/zoomPhoneData';

const ModuleEight = () => {
  const [activePhase, setActivePhase] = useState(0);

  const migrationStrategies = [
    {
      title: 'Migración por fases',
      description: 'Cambio gradual sin interrumpir el negocio',
      icon: Users,
      benefits: [
        'Sin interrupción del servicio',
        'Pruebas progresivas',
        'Entrenamiento gradual del personal',
        'Mitigación de riesgos'
      ],
      timeline: '4-8 semanas',
      complexity: 'Media',
      recommended: 'Empresas medianas y grandes'
    },
    {
      title: 'Portabilidad de números',
      description: 'Conserva tus números actuales',
      icon: Phone,
      benefits: [
        'Sin cambio para clientes',
        'Continuidad de marca',
        'Proceso automatizado',
        'Soporte completo durante transición'
      ],
      timeline: '2-4 semanas',
      complexity: 'Baja',
      recommended: 'Todas las empresas'
    }
  ];

  const considerations = [
    {
      title: 'Dependencia de Internet',
      description: '¿Qué pasa si se va la conexión?',
      icon: WifiOff,
      solutions: [
        'Gateway local de supervivencia',
        'Conexiones redundantes',
        'Hotspot móvil de backup',
        'Desvío automático a móviles'
      ],
      impact: 'Alto',
      mitigation: 'Múltiples soluciones disponibles'
    },
    {
      title: 'Capacitación de usuarios',
      description: 'Cómo preparar a tu equipo',
      icon: BookOpen,
      solutions: [
        'Sesiones de entrenamiento personalizadas',
        'Materiales de referencia rápida',
        'Videos tutoriales interactivos',
        'Soporte durante las primeras semanas'
      ],
      impact: 'Medio',
      mitigation: 'Programa estructurado incluido'
    },
    {
      title: 'Planificación de capacidad',
      description: 'Dimensionar correctamente el sistema',
      icon: Calendar,
      solutions: [
        'Análisis de patrones de uso actuales',
        'Proyecciones de crecimiento',
        'Licencias escalables',
        'Monitoreo continuo de uso'
      ],
      impact: 'Medio',
      mitigation: 'Herramientas de análisis incluidas'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-[#50E4FE] to-[#043172] text-white">
            Módulo 8: Implementación y Migración
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-[#043172] mb-6">
            Implementación y Migración
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Estrategias probadas para una transición exitosa sin interrumpir su negocio
          </p>
        </div>

        {/* Implementation Phases */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-[#043172] text-center mb-12">
            Proceso de Implementación por Fases
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
            {implementationSteps.map((step, index) => (
              <Card 
                key={step.phase}
                className={`cursor-pointer transition-all duration-300 ${
                  activePhase === index 
                    ? 'ring-2 ring-[#50E4FE] shadow-lg transform -translate-y-1' 
                    : 'hover:shadow-md'
                }`}
                onClick={() => setActivePhase(index)}
              >
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    activePhase === index 
                      ? 'bg-gradient-to-r from-[#50E4FE] to-[#043172] text-white' 
                      : 'bg-slate-100 text-slate-600'
                  }`}>
                    <span className="text-2xl font-bold">{step.phase}</span>
                  </div>
                  <CardTitle className={`text-sm ${
                    activePhase === index ? 'text-[#043172]' : 'text-slate-700'
                  }`}>
                    {step.title}
                  </CardTitle>
                  <CardDescription className="text-xs">
                    {step.duration}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          
          {/* Active Phase Details */}
          <Card className="border-l-4 border-[#50E4FE]">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-[#043172]">
                  Fase {implementationSteps[activePhase].phase}: {implementationSteps[activePhase].title}
                </CardTitle>
                <Badge className="bg-[#50E4FE] text-white">
                  {implementationSteps[activePhase].duration}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-[#043172] mb-4">Actividades principales:</h4>
                  <div className="space-y-3">
                    {implementationSteps[activePhase].activities.map((activity, idx) => (
                      <div key={idx} className="flex items-center text-sm text-slate-600">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mr-3" />
                        {activity}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-[#043172] mb-4">Entregables:</h4>
                  <div className="space-y-3">
                    {implementationSteps[activePhase].deliverables.map((deliverable, idx) => (
                      <div key={idx} className="flex items-center text-sm text-slate-600">
                        <ArrowRight className="h-4 w-4 text-[#50E4FE] mr-3" />
                        {deliverable}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Migration Strategies */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-[#043172] text-center mb-12">
            Estrategias de Migración
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {migrationStrategies.map((strategy, index) => {
              const IconComponent = strategy.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#50E4FE] to-[#043172] rounded-lg flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-[#043172]">{strategy.title}</CardTitle>
                        <CardDescription>{strategy.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-3 gap-3 text-center">
                        <div className="p-2 bg-slate-50 rounded">
                          <p className="text-xs text-slate-600">Timeline</p>
                          <p className="font-semibold text-[#043172]">{strategy.timeline}</p>
                        </div>
                        <div className="p-2 bg-slate-50 rounded">
                          <p className="text-xs text-slate-600">Complejidad</p>
                          <p className="font-semibold text-[#043172]">{strategy.complexity}</p>
                        </div>
                        <div className="p-2 bg-slate-50 rounded">
                          <p className="text-xs text-slate-600">Progreso</p>
                          <Progress value={75} className="h-1 mt-1" />
                        </div>
                      </div>
                      
                      <div>
                        <p className="font-medium text-[#043172] mb-2">Beneficios clave:</p>
                        <div className="space-y-1">
                          {strategy.benefits.map((benefit, idx) => (
                            <div key={idx} className="flex items-center text-sm text-slate-600">
                              <div className="w-1.5 h-1.5 bg-[#50E4FE] rounded-full mr-2" />
                              {benefit}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <Alert className="border-green-200 bg-green-50">
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                        <AlertDescription className="text-green-800 text-sm">
                          Recomendado para: {strategy.recommended}
                        </AlertDescription>
                      </Alert>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Important Considerations */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-[#043172] text-center mb-12">
            Consideraciones Importantes
          </h3>
          
          <div className="space-y-8">
            {considerations.map((consideration, index) => {
              const IconComponent = consideration.icon;
              return (
                <Card key={index} className="border-l-4 border-orange-400">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      <div className="lg:col-span-1">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                            <IconComponent className="h-6 w-6 text-orange-600" />
                          </div>
                          <div>
                            <h4 className="font-bold text-[#043172] mb-1">{consideration.title}</h4>
                            <p className="text-sm text-slate-600 mb-3">{consideration.description}</p>
                            <div className="flex items-center space-x-4">
                              <Badge variant={consideration.impact === 'Alto' ? 'destructive' : 'secondary'}>
                                Impacto: {consideration.impact}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="lg:col-span-2">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {consideration.solutions.map((solution, idx) => (
                            <div key={idx} className="flex items-center p-3 bg-slate-50 rounded-lg">
                              <CheckCircle2 className="h-4 w-4 text-green-500 mr-3" />
                              <span className="text-sm text-slate-700">{solution}</span>
                            </div>
                          ))}
                        </div>
                        
                        <Alert className="mt-4 border-green-200 bg-green-50">
                          <AlertCircle className="h-4 w-4 text-green-600" />
                          <AlertDescription className="text-green-800 text-sm">
                            <strong>Mitigación:</strong> {consideration.mitigation}
                          </AlertDescription>
                        </Alert>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Professional Services CTA */}
        <div className="text-center">
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-[#043172] to-[#50E4FE] text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                Servicios Profesionales Incluidos
              </h3>
              <p className="text-lg leading-relaxed mb-6">
                No está solo en esta transición. Nuestro equipo de expertos lo acompañará 
                en cada paso del proceso de implementación, desde la planificación hasta el go-live.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">95%</div>
                  <div className="text-sm opacity-90">Implementaciones exitosas</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">24/7</div>
                  <div className="text-sm opacity-90">Soporte durante migración</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">< 4sem</div>
                  <div className="text-sm opacity-90">Tiempo promedio de implementación</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ModuleEight;