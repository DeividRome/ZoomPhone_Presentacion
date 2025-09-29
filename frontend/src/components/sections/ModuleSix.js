import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Alert, AlertDescription } from '../ui/alert';
import { 
  Zap, 
  MessageSquare, 
  BarChart3, 
  AlertTriangle, 
  MapPin, 
  Shield,
  Phone,
  Users,
  Brain
} from 'lucide-react';

const ModuleSix = () => {
  const powerPackFeatures = [
    {
      title: 'Análisis en tiempo real',
      description: 'Ver qué está pasando ahora mismo en sus colas',
      icon: BarChart3,
      benefits: [
        'Métricas en vivo de agentes',
        'Tiempo de espera en tiempo real',
        'Alertas automáticas de problemas',
        'Dashboards personalizables'
      ],
      analogy: 'Como tener un tablero de control de un avión para su centro de llamadas'
    },
    {
      title: 'SMS de equipo',
      description: 'Atender clientes por mensaje de texto',
      icon: MessageSquare,
      benefits: [
        'Mensajes compartidos por equipo',
        'Historial unificado',
        'Respuestas automáticas',
        'Integración con tickets'
      ],
      analogy: 'WhatsApp empresarial profesional para atención al cliente'
    },
    {
      title: 'Experiencia de escritorio mejorada',
      description: 'Herramientas especiales para recepcionistas',
      icon: Users,
      benefits: [
        'Panel de operador avanzado',
        'Gestión visual de llamadas',
        'Transferencias arrastrar y soltar',
        'Vista de presencia de equipo'
      ],
      analogy: 'Como tener una centralita física pero con superpoderes digitales'
    }
  ];

  const emergencyServices = [
    {
      title: 'E911 mejorado',
      description: 'El sistema sabe dónde estás en caso de emergencia',
      icon: AlertTriangle,
      features: [
        'Ubicación automática precisa',
        'Notificaciones a administradores',
        'Integración con servicios locales',
        'Trazabilidad completa'
      ],
      importance: 'Crítico para cumplimiento legal y seguridad'
    },
    {
      title: 'Servicios nómadas',
      description: 'Funciona donde sea que estés trabajando',
      icon: MapPin,
      features: [
        'Actualización automática de ubicación',
        'Números locales temporales',
        'Enrutamiento geográfico inteligente',
        'Cumplimiento por región'
      ],
      importance: 'Esencial para equipos remotos y móviles'
    },
    {
      title: 'Supervivencia local',
      description: 'Backup para cuando Internet falla',
      icon: Shield,
      features: [
        'Gateway local de respaldo',
        'Funciones básicas sin Internet',
        'Sincronización automática',
        'Transición transparente'
      ],
      importance: 'Garantiza continuidad del negocio'
    }
  ];

  const contactCenterFeatures = [
    'Enrutamiento omnicanal (voz, chat, email)',
    'Integración con CRMs populares',
    'Análisis de sentimiento en tiempo real',
    'Grabación y análisis automático',
    'Workforce management integrado',
    'Reportes avanzados de performance'
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-[#50E4FE] to-[#043172] text-white">
            Módulo 6: Funciones Especializadas
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-[#043172] mb-6">
            Funciones Especializadas
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Herramientas avanzadas para casos de uso específicos y situaciones críticas
          </p>
        </div>

        {/* Power Pack Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 mb-4">
              <Zap className="h-8 w-8 text-[#50E4FE]" />
              <h3 className="text-2xl font-bold text-[#043172]">
                Power Pack: Funcionalidades Avanzadas
              </h3>
            </div>
            <p className="text-slate-600">
              Add-on opcional para usuarios que necesitan capacidades de centro de contacto ligero
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {powerPackFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-r from-[#50E4FE] to-[#043172] rounded-2xl flex items-center justify-center mb-4">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-[#043172]">{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-[#50E4FE]/5 rounded-lg p-3 mb-4">
                      <div className="flex items-start space-x-2">
                        <Brain className="h-4 w-4 text-[#50E4FE] mt-0.5" />
                        <p className="text-sm text-[#043172] font-medium">{feature.analogy}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center text-sm text-slate-600">
                          <div className="w-1.5 h-1.5 bg-[#50E4FE] rounded-full mr-2" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Emergency Services */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 mb-4">
              <AlertTriangle className="h-8 w-8 text-red-500" />
              <h3 className="text-2xl font-bold text-[#043172]">
                Servicios de Emergencia
              </h3>
            </div>
            <p className="text-slate-600">
              Funciones críticas para seguridad y continuidad del negocio
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {emergencyServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="border-l-4 border-red-500 hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-red-600" />
                      </div>
                      <div>
                        <CardTitle className="text-[#043172]">{service.title}</CardTitle>
                        <CardDescription>{service.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Alert className="mb-4 border-red-200 bg-red-50">
                      <AlertTriangle className="h-4 w-4 text-red-600" />
                      <AlertDescription className="text-red-800 text-sm">
                        {service.importance}
                      </AlertDescription>
                    </Alert>
                    
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-slate-600">
                          <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Contact Center Integration */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 mb-6">
                <Phone className="h-8 w-8 text-[#50E4FE]" />
                <h3 className="text-2xl font-bold text-[#043172]">
                  Centros de Contacto
                </h3>
              </div>
              
              <Card className="bg-gradient-to-r from-[#50E4FE]/5 to-[#043172]/5 border-l-4 border-[#50E4FE]">
                <CardHeader>
                  <CardTitle className="text-[#043172]">Zoom Contact Center</CardTitle>
                  <CardDescription>
                    Solución completa para atención al cliente empresarial
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {contactCenterFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-slate-700">
                        <div className="w-2 h-2 bg-[#50E4FE] rounded-full mr-3" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 p-4 bg-white/60 rounded-lg">
                    <p className="text-sm text-[#043172] font-medium mb-2">
                      Integraciones con terceros disponibles:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {['Salesforce', 'ServiceNow', 'Zendesk', 'Microsoft Dynamics'].map((integration) => (
                        <Badge key={integration} variant="outline" className="text-xs">
                          {integration}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1622675363311-3e1904dc1885" 
                alt="Centro de contacto moderno" 
                className="w-full h-[500px] object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Key Benefits Summary */}
        <div className="text-center">
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-[#043172] to-[#50E4FE] text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                Funciones Especializadas: Más Allá de la Telefonía Básica
              </h3>
              <p className="text-lg leading-relaxed mb-6">
                Con Power Pack, servicios de emergencia y integración de centros de contacto, 
                Zoom Phone se convierte en una plataforma completa de comunicaciones empresariales 
                que puede manejar desde las necesidades más básicas hasta los requerimientos más complejos.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold mb-1">98%</div>
                  <div className="text-sm opacity-90">Disponibilidad de emergencia</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1">24/7</div>
                  <div className="text-sm opacity-90">Monitoreo y soporte</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1">100+</div>
                  <div className="text-sm opacity-90">Integraciones disponibles</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ModuleSix;