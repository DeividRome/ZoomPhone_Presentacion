import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Button } from '../ui/button';
import { Progress } from '../ui/progress';
import { 
  Globe, 
  Server, 
  Wifi, 
  Zap, 
  Network, 
  Shield,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { zoomPhoneFeatures } from '../../mock/zoomPhoneData';

const ModuleThree = () => {
  const [selectedConcept, setSelectedConcept] = useState(0);

  const architectureSteps = [
    {
      title: 'Internet como infraestructura',
      description: 'En lugar de cables de teléfono, usamos Internet',
      analogy: 'Como cambiar cartas por correo electrónico',
      icon: Globe,
      progress: 25
    },
    {
      title: 'Centros de datos',
      description: 'Como tener una central telefónica gigante en la nube',
      analogy: 'Una oficina postal gigante que nunca cierra',
      icon: Server,
      progress: 50
    },
    {
      title: 'Redundancia',
      description: 'Si un centro falla, otros toman el control automáticamente',
      analogy: 'Múltiples rutas para llegar al mismo destino',
      icon: Network,
      progress: 75
    },
    {
      title: 'Seguridad',
      description: 'Protección de extremo a extremo de todas las comunicaciones',
      analogy: 'Sobres cerrados con llave especial',
      icon: Shield,
      progress: 100
    }
  ];

  const serviceComparison = [
    {
      model: 'Nativo',
      description: 'Zoom maneja todo',
      color: 'from-green-500 to-emerald-600',
      score: 95,
      features: ['Implementación rápida', 'Soporte 24/7', 'Actualizaciones automáticas']
    },
    {
      model: 'BYOC',
      description: 'Conserva tu proveedor',
      color: 'from-blue-500 to-cyan-600',
      score: 80,
      features: ['Contratos existentes', 'Control de costos', 'Flexibilidad']
    },
    {
      model: 'Híbrido',
      description: 'Lo mejor de ambos',
      color: 'from-purple-500 to-pink-600',
      score: 87,
      features: ['Migración gradual', 'Optimización', 'Adaptabilidad']
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-[#50E4FE] to-[#043172] text-white">
            Módulo 3: Conceptos Técnicos
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-[#043172] mb-6">
            Introducción Gradual de Conceptos Técnicos
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Conceptos técnicos explicados de forma simple con analogías cotidianas
          </p>
        </div>

        {/* Architecture Overview */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-[#043172] text-center mb-12">
            Arquitectura Básica (explicada de forma simple)
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {architectureSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <Card 
                  key={index} 
                  className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
                >
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#50E4FE] to-[#043172] rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    
                    <h4 className="font-bold text-[#043172] mb-2">{step.title}</h4>
                    <p className="text-sm text-slate-600 mb-4">{step.description}</p>
                    
                    <div className="bg-slate-100 rounded-lg p-3 mb-4">
                      <p className="text-xs text-slate-700 font-medium">
                        Analogía: {step.analogy}
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs text-slate-600">
                        <span>Progreso</span>
                        <span>{step.progress}%</span>
                      </div>
                      <Progress value={step.progress} className="h-2" />
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Technical Concepts with Analogies */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-[#043172] text-center mb-12">
            Conceptos de Conectividad
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="space-y-6">
                {zoomPhoneFeatures.technicalConcepts.map((concept, index) => (
                  <Card 
                    key={concept.id}
                    className={`cursor-pointer transition-all duration-300 ${
                      selectedConcept === index 
                        ? 'ring-2 ring-[#50E4FE] shadow-lg' 
                        : 'hover:shadow-md'
                    }`}
                    onClick={() => setSelectedConcept(index)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                          selectedConcept === index 
                            ? 'bg-gradient-to-r from-[#50E4FE] to-[#043172]' 
                            : 'bg-slate-100'
                        }`}>
                          <Network className={`h-6 w-6 ${
                            selectedConcept === index ? 'text-white' : 'text-slate-600'
                          }`} />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-[#043172] mb-1">{concept.title}</h4>
                          <p className="text-sm text-slate-600 mb-2">{concept.description}</p>
                          {selectedConcept === index && (
                            <div className="mt-4 p-3 bg-[#50E4FE]/5 rounded-lg">
                              <p className="text-sm font-medium text-[#043172] mb-2">
                                Analogía: {concept.analogy}
                              </p>
                              <div className="space-y-1">
                                {concept.benefits.map((benefit, idx) => (
                                  <div key={idx} className="flex items-center text-xs text-slate-600">
                                    <CheckCircle2 className="h-3 w-3 text-green-500 mr-2" />
                                    {benefit}
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1573164574230-db1d5e960238" 
                alt="Integración de dispositivos" 
                className="w-full h-[500px] object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Service Models */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-[#043172] text-center mb-12">
            Modelos de Servicio Disponibles
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceComparison.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <span className="text-white font-bold text-2xl">{service.score}</span>
                  </div>
                  <CardTitle className="text-[#043172]">{service.model}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center justify-center text-sm text-slate-600">
                        <div className="w-1.5 h-1.5 bg-[#50E4FE] rounded-full mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <Progress value={service.score} className="h-2" />
                    <p className="text-xs text-slate-600 mt-1">Facilidad de implementación</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Interactive Quiz */}
        <div className="text-center">
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-[#50E4FE]/5 to-[#043172]/5 border-l-4 border-[#50E4FE]">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-[#043172] mb-4">
                ¡Muy bien! Ya comprende los conceptos básicos
              </h3>
              <p className="text-slate-600 mb-6">
                Ahora que conoce cómo funciona la telefonía en la nube, exploremos las capacidades avanzadas del sistema
              </p>
              <Button className="bg-gradient-to-r from-[#50E4FE] to-[#043172] text-white">
                Continuar con Capacidades Avanzadas
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ModuleThree;