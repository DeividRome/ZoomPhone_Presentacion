import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Button } from '../ui/button';
import { 
  Phone, 
  Voicemail, 
  History, 
  ArrowRightLeft, 
  MessageSquare, 
  UserCheck,
  Mic,
  Video,
  Eye,
  Smartphone,
  Monitor,
  Headphones
} from 'lucide-react';
import { zoomPhoneFeatures } from '../../mock/zoomPhoneData';

const ModuleTwo = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const iconMap = {
    Phone: Phone,
    Voicemail: Voicemail,
    History: History,
    ArrowRightLeft: ArrowRightLeft,
    MessageSquare: MessageSquare,
    UserCheck: UserCheck,
    Mic: Mic,
    Video: Video,
    Eye: Eye
  };

  const devices = [
    {
      name: 'Computadora',
      icon: Monitor,
      description: 'Windows, macOS, Linux',
      features: ['Aplicación nativa', 'Integración completa', 'Compartir pantalla']
    },
    {
      name: 'Móvil',
      icon: Smartphone,
      description: 'iOS, Android',
      features: ['Llamadas desde cualquier lugar', 'Sincronización automática', 'Notificaciones push']
    },
    {
      name: 'Teléfono de escritorio',
      icon: Headphones,
      description: 'Dispositivos certificados',
      features: ['Configuración automática', 'Calidad HD', 'Botón de pánico']
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-[#50E4FE] to-[#043172] text-white">
            Módulo 2: Características
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-[#043172] mb-6">
            Características Principales para Usuarios
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Una sola aplicación unificada para voz, video, chat y reuniones con libertad de ubicación total
          </p>
        </div>

        {/* User Experience Overview */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-[#043172] mb-6">
                La experiencia del usuario final
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-[#50E4FE]/10 flex items-center justify-center">
                    <Phone className="h-6 w-6 text-[#50E4FE]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#043172] mb-1">
                      Una sola aplicación para todo
                    </h4>
                    <p className="text-slate-600">
                      Llamadas, video, chat y reuniones integrados en una experiencia fluida
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-[#043172]/10 flex items-center justify-center">
                    <Monitor className="h-6 w-6 text-[#043172]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#043172] mb-1">
                      Libertad de ubicación
                    </h4>
                    <p className="text-slate-600">
                      Oficina, casa, viaje - siempre conectado con la misma calidad
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b" 
                alt="Interfaz de Zoom Phone" 
                className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Device Compatibility */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-[#043172] text-center mb-12">
            Dispositivos Compatibles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {devices.map((device, index) => {
              const IconComponent = device.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-r from-[#50E4FE] to-[#043172] rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-[#043172]">{device.name}</CardTitle>
                    <CardDescription>{device.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {device.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-slate-600 flex items-center justify-center">
                          <div className="w-1.5 h-1.5 bg-[#50E4FE] rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Features Tabs */}
        <div className="mb-16">
          <Tabs defaultValue="basic" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="basic">Funcionalidades Básicas</TabsTrigger>
              <TabsTrigger value="smart">Funcionalidades Inteligentes</TabsTrigger>
            </TabsList>
            
            <TabsContent value="basic">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {zoomPhoneFeatures.basicFeatures.map((feature, index) => {
                  const IconComponent = iconMap[feature.icon] || Phone;
                  return (
                    <Card 
                      key={feature.id} 
                      className="cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                      onClick={() => setActiveFeature(index)}
                    >
                      <CardHeader>
                        <div className="w-12 h-12 bg-[#50E4FE]/10 rounded-lg flex items-center justify-center mb-2">
                          <IconComponent className="h-6 w-6 text-[#50E4FE]" />
                        </div>
                        <CardTitle className="text-[#043172] text-lg">{feature.title}</CardTitle>
                        <CardDescription>{feature.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-1">
                          {feature.benefits.map((benefit, idx) => (
                            <div key={idx} className="flex items-center text-sm text-slate-600">
                              <div className="w-1 h-1 bg-[#043172] rounded-full mr-2" />
                              {benefit}
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>
            
            <TabsContent value="smart">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {zoomPhoneFeatures.smartFeatures.map((feature, index) => {
                  const IconComponent = iconMap[feature.icon] || Phone;
                  return (
                    <Card 
                      key={feature.id} 
                      className="cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <CardHeader>
                        <div className="w-12 h-12 bg-gradient-to-r from-[#50E4FE] to-[#043172] rounded-lg flex items-center justify-center mb-2">
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <CardTitle className="text-[#043172] text-lg">{feature.title}</CardTitle>
                        <CardDescription>{feature.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-1">
                          {feature.benefits.map((benefit, idx) => (
                            <div key={idx} className="flex items-center text-sm text-slate-600">
                              <div className="w-1 h-1 bg-[#043172] rounded-full mr-2" />
                              {benefit}
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-[#50E4FE]/5 to-[#043172]/5 border-l-4 border-[#50E4FE]">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-[#043172] mb-4">
                ¿Listo para transformar su comunicación empresarial?
              </h3>
              <p className="text-slate-600 mb-6">
                Descubra cómo Zoom Phone puede simplificar y potenciar la telefonía de su empresa
              </p>
              <Button className="bg-gradient-to-r from-[#50E4FE] to-[#043172] text-white">
                Continuar con Conceptos Técnicos
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ModuleTwo;