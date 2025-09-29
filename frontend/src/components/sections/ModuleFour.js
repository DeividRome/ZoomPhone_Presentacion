import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Button } from '../ui/button';
import { Alert, AlertDescription } from '../ui/alert';
import { 
  Phone, 
  Users, 
  MessageCircle, 
  BarChart3, 
  Clock, 
  Route, 
  Headphones, 
  Brain,
  Lightbulb,
  ArrowDown
} from 'lucide-react';

const ModuleFour = () => {
  const [activeDemo, setActiveDemo] = useState('pbx');

  const pbxFeatures = [
    {
      title: 'PBX en la nube',
      description: 'Central telefónica inteligente que maneja todas las llamadas',
      analogy: 'Como tener un recepcionista súper inteligente que nunca duerme',
      icon: Phone,
      benefits: ['Gestión centralizada', 'Escalabilidad automática', 'Configuración visual']
    },
    {
      title: 'Contestadores automáticos',
      description: 'Recepcionistas virtuales 24/7',
      analogy: 'Como tener un GPS para llamadas que guía a cada persona al destino correcto',
      icon: MessageCircle,
      benefits: ['Atención 24/7', 'Enrutamiento inteligente', 'Mensajes personalizados']
    },
    {
      title: 'Colas de llamadas',
      description: 'Sistema organizado para atender clientes',
      analogy: 'Como la fila del banco, pero inteligente y que informa el tiempo de espera',
      icon: Users,
      benefits: ['Gestión de espera', 'Distribución equitativa', 'Análisis de rendimiento']
    },
    {
      title: 'Grupos de líneas compartidas',
      description: 'Varios empleados pueden contestar la misma línea',
      analogy: 'Como tener una puerta con varias llaves - cualquiera puede abrir',
      icon: Headphones,
      benefits: ['Cobertura completa', 'Flexibilidad de equipo', 'Respaldo automático']
    }
  ];

  const routingFeatures = [
    {
      title: 'IVR (Respuesta de voz interactiva)',
      description: 'Menús telefónicos que guían al cliente',
      flow: ['Llamada entrante', 'Menú de opciones', 'Selección del usuario', 'Enrutamiento inteligente'],
      icon: Route
    },
    {
      title: 'Horarios comerciales',
      description: 'El sistema sabe cuándo estás abierto o cerrado',
      flow: ['Verificación de horario', 'Mensaje apropiado', 'Acción automática', 'Registro de llamada'],
      icon: Clock
    },
    {
      title: 'Desvío inteligente',
      description: 'Las llamadas siempre llegan al lugar correcto',
      flow: ['Análisis de llamada', 'Identificación de destino', 'Enrutamiento óptimo', 'Confirmación de entrega'],
      icon: Brain
    }
  ];

  const collaborationFeatures = [
    {
      name: 'Microsoft Teams',
      description: 'Integración nativa con el ecosistema Microsoft',
      benefits: ['Contactos sincronizados', 'Calendario integrado', 'Llamadas desde Teams'],
      status: 'Disponible'
    },
    {
      name: 'Salesforce',
      description: 'CRM integrado para mejor atención al cliente',
      benefits: ['Historial de llamadas en CRM', 'Datos de contacto automáticos', 'Reportes unificados'],
      status: 'Disponible'
    },
    {
      name: 'Zoom AI Companion',
      description: 'Asistente inteligente para resumir llamadas',
      benefits: ['Transcripciones automáticas', 'Resúmenes inteligentes', 'Acciones sugeridas'],
      status: 'Nuevo'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-[#50E4FE] to-[#043172] text-white">
            Módulo 4: Capacidades Avanzadas
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-[#043172] mb-6">
            Capacidades Avanzadas del Sistema
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Explore las funcionalidades empresariales que transformarán su operación telefónica
          </p>
        </div>

        {/* PBX System Demo */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-[#043172] text-center mb-12">
            Sistema PBX en la Nube
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              {pbxFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-[#50E4FE] to-[#043172] rounded-lg flex items-center justify-center">
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-[#043172] mb-2">{feature.title}</h4>
                          <p className="text-slate-600 mb-3">{feature.description}</p>
                          
                          <div className="bg-[#50E4FE]/5 rounded-lg p-3 mb-3">
                            <div className="flex items-start space-x-2">
                              <Lightbulb className="h-4 w-4 text-[#50E4FE] mt-0.5" />
                              <p className="text-sm text-[#043172] font-medium">{feature.analogy}</p>
                            </div>
                          </div>
                          
                          <div className="space-y-1">
                            {feature.benefits.map((benefit, idx) => (
                              <div key={idx} className="flex items-center text-sm text-slate-600">
                                <div className="w-1 h-1 bg-[#043172] rounded-full mr-2" />
                                {benefit}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1616587226960-4a03badbe8bf" 
                alt="Sistema PBX en acción" 
                className="w-full h-[600px] object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Smart Routing Demo */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-[#043172] text-center mb-12">
            Enrutamiento Inteligente de Llamadas
          </h3>
          
          <Tabs value={activeDemo} onValueChange={setActiveDemo}>
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="pbx">IVR</TabsTrigger>
              <TabsTrigger value="schedule">Horarios</TabsTrigger>
              <TabsTrigger value="routing">Desvío</TabsTrigger>
            </TabsList>
            
            {routingFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              const tabValue = ['pbx', 'schedule', 'routing'][index];
              
              return (
                <TabsContent key={index} value={tabValue}>
                  <Card>
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-gradient-to-r from-[#50E4FE] to-[#043172] rounded-full flex items-center justify-center">
                          <IconComponent className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-[#043172]">{feature.title}</CardTitle>
                          <CardDescription>{feature.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {feature.flow.map((step, stepIndex) => (
                          <div key={stepIndex} className="text-center">
                            <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-3">
                              <span className="font-bold text-[#043172]">{stepIndex + 1}</span>
                            </div>
                            <p className="text-sm font-medium text-slate-700">{step}</p>
                            {stepIndex < feature.flow.length - 1 && (
                              <ArrowDown className="h-4 w-4 text-[#50E4FE] mx-auto mt-2 transform md:rotate-90" />
                            )}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              );
            })}
          </Tabs>
        </div>

        {/* Collaboration Features */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-[#043172] text-center mb-12">
            Funciones de Colaboración
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collaborationFeatures.map((integration, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-[#043172]">{integration.name}</CardTitle>
                    <Badge 
                      variant={integration.status === 'Nuevo' ? 'default' : 'secondary'}
                      className={integration.status === 'Nuevo' ? 'bg-gradient-to-r from-[#50E4FE] to-[#043172] text-white' : ''}
                    >
                      {integration.status}
                    </Badge>
                  </div>
                  <CardDescription>{integration.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {integration.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm text-slate-600">
                        <BarChart3 className="h-3 w-3 text-[#50E4FE] mr-2" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Alert for Next Module */}
        <Alert className="border-[#50E4FE] bg-[#50E4FE]/5">
          <Brain className="h-4 w-4 text-[#50E4FE]" />
          <AlertDescription className="text-[#043172]">
            <strong>Próximo paso:</strong> Ahora que conoce las capacidades avanzadas, 
            aprenda cómo administrar y gestionar todo el sistema desde un solo lugar.
          </AlertDescription>
        </Alert>
      </div>
    </section>
  );
};

export default ModuleFour;