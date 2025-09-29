import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Button } from '../ui/button';
import { Progress } from '../ui/progress';
import { 
  Settings, 
  Users, 
  Phone, 
  BarChart3, 
  TrendingUp, 
  Monitor, 
  Smartphone, 
  Headphones,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

const ModuleFive = () => {
  const [activeTab, setActiveTab] = useState('admin');

  const adminFeatures = [
    {
      title: 'Portal centralizado',
      description: 'Un solo lugar para gestionar todo el sistema telefónico',
      icon: Settings,
      capabilities: [
        'Configuración global',
        'Gestión de políticas',
        'Monitoreo en tiempo real',
        'Configuración de seguridad'
      ]
    },
    {
      title: 'Gestión de usuarios',
      description: 'Agregar, quitar y configurar empleados fácilmente',
      icon: Users,
      capabilities: [
        'Aprovisionamiento masivo',
        'Plantillas de configuración',
        'Permisos granulares',
        'Integración con AD/LDAP'
      ]
    },
    {
      title: 'Asignación de números',
      description: 'Distribuir números telefónicos automáticamente',
      icon: Phone,
      capabilities: [
        'Números locales e internacionales',
        'Portabilidad de números',
        'Números virtuales',
        'Gestión de inventario'
      ]
    }
  ];

  const reportMetrics = [
    {
      name: 'Llamadas Totales',
      value: '2,847',
      change: '+12%',
      trend: 'up',
      color: 'text-green-600'
    },
    {
      name: 'Tiempo Promedio',
      value: '4:32',
      change: '-8%',
      trend: 'down',
      color: 'text-blue-600'
    },
    {
      name: 'Satisfacción',
      value: '4.8/5',
      change: '+5%',
      trend: 'up',
      color: 'text-purple-600'
    },
    {
      name: 'Resolución',
      value: '89%',
      change: '+3%',
      trend: 'up',
      color: 'text-orange-600'
    }
  ];

  const deviceTypes = [
    {
      name: 'Teléfonos IP',
      icon: Headphones,
      count: 45,
      status: 'Configurados automáticamente',
      features: ['Aprovisionamiento Zero-touch', 'Configuración remota', 'Actualizaciones OTA']
    },
    {
      name: 'Aplicaciones Móviles',
      icon: Smartphone,
      count: 123,
      status: 'Activas y sincronizadas',
      features: ['Push notifications', 'Sincronización automática', 'Configuración centralizada']
    },
    {
      name: 'Aplicaciones Desktop',
      icon: Monitor,
      count: 78,
      status: 'Desplegadas vía MSI',
      features: ['Instalación silenciosa', 'Configuración por GPO', 'Actualizaciones automáticas']
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-[#50E4FE] to-[#043172] text-white">
            Módulo 5: Administración y Gestión
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-[#043172] mb-6">
            Administración y Gestión
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Control total del sistema desde un panel centralizado con reportes inteligentes
          </p>
        </div>

        {/* Admin Panel Overview */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-[#043172] text-center mb-12">
            Panel de Administración Web
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              {adminFeatures.map((feature, index) => {
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
                          <p className="text-slate-600 mb-4">{feature.description}</p>
                          
                          <div className="grid grid-cols-2 gap-2">
                            {feature.capabilities.map((capability, idx) => (
                              <div key={idx} className="flex items-center text-sm text-slate-600">
                                <CheckCircle2 className="h-3 w-3 text-green-500 mr-2" />
                                {capability}
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
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-[#043172] flex items-center">
                    <Monitor className="h-5 w-5 mr-2" />
                    Vista del Panel de Control
                  </CardTitle>
                  <CardDescription>
                    Interfaz intuitiva para administradores
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <img 
                    src="https://images.unsplash.com/photo-1586985564150-11ee04838034" 
                    alt="Panel de control de Zoom Phone" 
                    className="w-full h-[300px] object-cover rounded-lg mb-4"
                  />
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Usuarios activos</span>
                      <span className="font-semibold text-[#043172]">246/300</span>
                    </div>
                    <Progress value={82} className="h-2" />
                    <div className="flex justify-between text-xs text-slate-500">
                      <span>Capacidad utilizada: 82%</span>
                      <span>54 licencias disponibles</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Reports and Analytics */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-[#043172] text-center mb-12">
            Reportes y Análisis
          </h3>
          
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="admin">Paneles de Control</TabsTrigger>
              <TabsTrigger value="reports">Reportes de Uso</TabsTrigger>
              <TabsTrigger value="quality">Métricas de Calidad</TabsTrigger>
            </TabsList>
            
            <TabsContent value="admin">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {reportMetrics.map((metric, index) => (
                  <Card key={index} className="text-center">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-center mb-2">
                        <BarChart3 className="h-8 w-8 text-[#50E4FE]" />
                      </div>
                      <h4 className="font-bold text-2xl text-[#043172] mb-1">{metric.value}</h4>
                      <p className="text-sm text-slate-600 mb-2">{metric.name}</p>
                      <div className={`text-xs font-medium ${metric.color}`}>
                        <TrendingUp className="h-3 w-3 inline mr-1" />
                        {metric.change} vs mes anterior
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="reports">
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#043172]">Ver en tiempo real cómo funciona su sistema</CardTitle>
                  <CardDescription>
                    Entender patrones de llamadas y optimizar recursos
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-[#043172] mb-4">Beneficios de los reportes:</h4>
                      <div className="space-y-3">
                        {[
                          'Identificar picos de tráfico',
                          'Optimizar personal y recursos',
                          'Detectar problemas de calidad',
                          'Medir ROI de la solución'
                        ].map((benefit, idx) => (
                          <div key={idx} className="flex items-center text-sm text-slate-600">
                            <AlertCircle className="h-4 w-4 text-[#50E4FE] mr-2" />
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <img 
                        src="https://images.unsplash.com/photo-1606836591695-4d58a73eba1e" 
                        alt="Análisis y reportes" 
                        className="w-full h-[200px] object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="quality">
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#043172]">Medir la satisfacción y rendimiento</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-green-50 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">98.7%</div>
                        <div className="text-sm text-green-700">Calidad de llamadas</div>
                      </div>
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">< 50ms</div>
                        <div className="text-sm text-blue-700">Latencia promedio</div>
                      </div>
                      <div className="text-center p-4 bg-purple-50 rounded-lg">
                        <div className="text-2xl font-bold text-purple-600">99.99%</div>
                        <div className="text-sm text-purple-700">Disponibilidad</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Device Management */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-[#043172] text-center mb-12">
            Gestión de Dispositivos
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {deviceTypes.map((device, index) => {
              const IconComponent = device.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-r from-[#50E4FE] to-[#043172] rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-[#043172]">{device.name}</CardTitle>
                    <CardDescription>
                      <Badge variant="outline" className="mb-2">
                        {device.count} dispositivos
                      </Badge>
                      <br />
                      {device.status}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {device.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center justify-center text-sm text-slate-600">
                          <div className="w-1.5 h-1.5 bg-[#50E4FE] rounded-full mr-2" />
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

        {/* Summary */}
        <div className="text-center">
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-[#50E4FE]/5 to-[#043172]/5 border-l-4 border-[#50E4FE]">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-[#043172] mb-4">
                Administración Simplificada
              </h3>
              <p className="text-slate-600 mb-6">
                Con Zoom Phone, la gestión de su sistema telefónico empresarial 
                se convierte en una tarea simple y eficiente desde un solo panel de control.
              </p>
              <Button className="bg-gradient-to-r from-[#50E4FE] to-[#043172] text-white">
                Explorar Funciones Especializadas
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ModuleFive;