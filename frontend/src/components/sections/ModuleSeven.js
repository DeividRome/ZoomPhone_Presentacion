import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Alert, AlertDescription } from '../ui/alert';
import { Progress } from '../ui/progress';
import { 
  Shield, 
  Lock, 
  Globe, 
  Server, 
  Network, 
  Wifi,
  CheckCircle2,
  AlertTriangle,
  Award
} from 'lucide-react';
import { zoomPhoneFeatures } from '../../mock/zoomPhoneData';

const ModuleSeven = () => {
  const [selectedCompliance, setSelectedCompliance] = useState(0);

  const securityFeatures = [
    {
      title: 'Cifrado de llamadas',
      description: 'Todas las conversaciones están protegidas de extremo a extremo',
      icon: Lock,
      details: [
        'AES-256 para medios',
        'TLS 1.3 para señalización',
        'Certificados dinámicos',
        'Rotación automática de claves'
      ]
    },
    {
      title: 'Residencia de datos',
      description: 'Controla dónde se almacena su información',
      icon: Globe,
      details: [
        'Selección de región de datos',
        'Cumplimiento local GDPR',
        'Soberanía de datos',
        'Auditoría completa'
      ]
    },
    {
      title: 'Autenticación multifactor',
      description: 'Acceso seguro con múltiples capas de verificación',
      icon: Shield,
      details: [
        'Integración SSO/SAML',
        'Autenticación biométrica',
        'Tokens de hardware',
        'Políticas condicionales'
      ]
    }
  ];

  const networkRequirements = [
    {
      category: 'Firewall',
      requirements: [
        'Puerto 80/443 (HTTP/HTTPS)',
        'Puerto 8801-8802 (WebSocket)',
        'Puertos UDP 8801-8810',
        'Whitelist dominios *.zoom.us'
      ],
      importance: 'Crítico'
    },
    {
      category: 'Ancho de banda',
      requirements: [
        '150 kbps por llamada concurrente',
        '1 Mbps mínimo por oficina',
        'QoS configurado correctamente',
        'Latencia < 50ms a centros Zoom'
      ],
      importance: 'Alto'
    },
    {
      category: 'DNS y conectividad',
      requirements: [
        'Resolución DNS confiable',
        'NTP sincronizado',
        'Proxy bypass para medios',
        'Monitoreo de red activo'
      ],
      importance: 'Medio'
    }
  ];

  const redundancyLevels = [
    {
      level: 'Centro de datos',
      description: 'Múltiples centros por región',
      uptime: '99.9%',
      features: ['Failover automático', 'Balanceo de carga', 'Monitoreo 24/7']
    },
    {
      level: 'Zona de disponibilidad',
      description: 'Redundancia dentro del centro',
      uptime: '99.95%',
      features: ['Hardware duplicado', 'Rutas de red múltiples', 'Energía redundante']
    },
    {
      level: 'Componente',
      description: 'Cada servicio es redundante',
      uptime: '99.99%',
      features: ['Microservicios', 'Auto-recuperación', 'Salud de servicios']
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-[#50E4FE] to-[#043172] text-white">
            Módulo 7: Aspectos Técnicos
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-[#043172] mb-6">
            Aspectos Técnicos Importantes
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Seguridad, cumplimiento y arquitectura técnica de nivel empresarial
          </p>
        </div>

        {/* Security and Compliance */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-[#043172] text-center mb-12">
            Seguridad y Cumplimiento
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              {securityFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-[#043172] mb-2">{feature.title}</h4>
                          <p className="text-slate-600 mb-4">{feature.description}</p>
                          
                          <div className="space-y-2">
                            {feature.details.map((detail, idx) => (
                              <div key={idx} className="flex items-center text-sm text-slate-600">
                                <CheckCircle2 className="h-3 w-3 text-green-500 mr-2" />
                                {detail}
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
                    <Award className="h-5 w-5 mr-2" />
                    Certificaciones de Cumplimiento
                  </CardTitle>
                  <CardDescription>
                    Zoom Phone cumple con estándares internacionales
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {zoomPhoneFeatures.compliance.map((cert, index) => (
                      <div 
                        key={index} 
                        className={`p-3 rounded-lg cursor-pointer transition-all ${
                          selectedCompliance === index 
                            ? 'bg-gradient-to-r from-[#50E4FE] to-[#043172] text-white' 
                            : 'bg-slate-100 hover:bg-slate-200'
                        }`}
                        onClick={() => setSelectedCompliance(index)}
                      >
                        <div className="text-center">
                          <Award className={`h-6 w-6 mx-auto mb-1 ${
                            selectedCompliance === index ? 'text-white' : 'text-[#50E4FE]'
                          }`} />
                          <p className={`text-sm font-medium ${
                            selectedCompliance === index ? 'text-white' : 'text-slate-700'
                          }`}>
                            {cert}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 p-4 bg-green-50 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Shield className="h-4 w-4 text-green-600 mr-2" />
                      <p className="text-sm font-medium text-green-800">Certificación Activa</p>
                    </div>
                    <p className="text-xs text-green-700">
                      {zoomPhoneFeatures.compliance[selectedCompliance]} - Auditorías anuales y monitoreo continuo
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Network Architecture */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-[#043172] text-center mb-12">
            Arquitectura de Red
          </h3>
          
          <Tabs defaultValue="firewall">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="firewall">Configuración Firewall</TabsTrigger>
              <TabsTrigger value="bandwidth">Ancho de Banda</TabsTrigger>
              <TabsTrigger value="dns">DNS y Conectividad</TabsTrigger>
            </TabsList>
            
            {networkRequirements.map((req, index) => {
              const tabValues = ['firewall', 'bandwidth', 'dns'];
              return (
                <TabsContent key={index} value={tabValues[index]}>
                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-[#043172]">{req.category}</CardTitle>
                        <Badge 
                          variant={req.importance === 'Crítico' ? 'destructive' : 
                                 req.importance === 'Alto' ? 'default' : 'secondary'}
                        >
                          Importancia: {req.importance}
                        </Badge>
                      </div>
                      <CardDescription>
                        Requisitos técnicos para {req.category.toLowerCase()}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {req.requirements.map((requirement, idx) => (
                          <Alert key={idx} className="border-[#50E4FE]/20">
                            <Network className="h-4 w-4 text-[#50E4FE]" />
                            <AlertDescription className="text-slate-700">
                              {requirement}
                            </AlertDescription>
                          </Alert>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              );
            })}
          </Tabs>
        </div>

        {/* Global Coverage and Redundancy */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-[#043172] text-center mb-12">
            Cobertura Global y Redundancia
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-[#043172] flex items-center">
                    <Globe className="h-5 w-5 mr-2" />
                    Presencia Global
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-6">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="p-4 bg-[#50E4FE]/5 rounded-lg">
                        <div className="text-2xl font-bold text-[#043172]">
                          {zoomPhoneFeatures.globalCoverage.countries}
                        </div>
                        <p className="text-sm text-slate-600">Países</p>
                      </div>
                      <div className="p-4 bg-[#043172]/5 rounded-lg">
                        <div className="text-2xl font-bold text-[#043172]">
                          {zoomPhoneFeatures.globalCoverage.dataCenters}
                        </div>
                        <p className="text-sm text-slate-600">Centros de Datos</p>
                      </div>
                      <div className="p-4 bg-gradient-to-r from-[#50E4FE]/10 to-[#043172]/10 rounded-lg">
                        <div className="text-2xl font-bold text-[#043172]">6</div>
                        <p className="text-sm text-slate-600">Regiones</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-[#043172] mb-2">Regiones atendidas:</p>
                    {zoomPhoneFeatures.globalCoverage.regions.map((region, idx) => (
                      <div key={idx} className="flex items-center text-sm text-slate-600">
                        <div className="w-2 h-2 bg-[#50E4FE] rounded-full mr-2" />
                        {region}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-6">
              {redundancyLevels.map((level, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#50E4FE] to-[#043172] rounded-lg flex items-center justify-center">
                        <Server className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-bold text-[#043172]">{level.level}</h4>
                          <Badge className="bg-green-100 text-green-800">{level.uptime}</Badge>
                        </div>
                        <p className="text-slate-600 mb-3">{level.description}</p>
                        
                        <div className="flex flex-wrap gap-2">
                          {level.features.map((feature, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Architecture Summary */}
        <div className="text-center">
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-[#50E4FE]/5 to-[#043172]/5 border-l-4 border-[#50E4FE]">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-[#043172] mb-4">
                Arquitectura de Clase Empresarial
              </h3>
              <p className="text-slate-600 mb-6">
                Zoom Phone utiliza la mejor arquitectura activa-activa de su clase para ofrecer 
                un servicio de telefonía confiable de nivel empresarial con seguridad y cumplimiento global.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Shield className="h-8 w-8 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-[#043172]">Seguridad</h4>
                  <p className="text-sm text-slate-600">Cifrado extremo a extremo</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Globe className="h-8 w-8 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-[#043172]">Global</h4>
                  <p className="text-sm text-slate-600">21 centros de datos</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 className="h-8 w-8 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-[#043172]">Confiable</h4>
                  <p className="text-sm text-slate-600">99.99% uptime</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ModuleSeven;