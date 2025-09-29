import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Checkbox } from '../ui/checkbox';
import { Alert, AlertDescription } from '../ui/alert';
import { Progress } from '../ui/progress';
import { 
  CheckCircle2, 
  ArrowRight, 
  Calendar, 
  Users, 
  Award,
  Lightbulb,
  Target,
  Clock,
  BarChart3
} from 'lucide-react';

const ModuleTen = () => {
  const [checkedItems, setCheckedItems] = useState({});
  
  const requirementsChecklist = [
    {
      category: 'Infraestructura Técnica',
      items: [
        'Conexión a Internet estable (150 kbps por llamada)',
        'Firewall configurado para tráfico Zoom',
        'QoS implementado en la red',
        'DNS confiable y NTP sincronizado'
      ]
    },
    {
      category: 'Recursos Humanos',
      items: [
        'Administrador IT designado',
        'Champions de usuario identificados',
        'Plan de comunicación interna',
        'Presupuesto para capacitación'
      ]
    },
    {
      category: 'Proceso y Gobernanza',
      items: [
        'Políticas de uso definidas',
        'Proceso de aprovisionamiento',
        'Plan de respaldo y continuidad',
        'Métricas de éxito definidas'
      ]
    }
  ];

  const comparisonPoints = [
    {
      aspect: 'Costos operativos',
      current: 'Altos costos de mantenimiento y actualización',
      zoomPhone: 'Modelo de suscripción predecible, sin hardware',
      advantage: 'Ahorro del 30-50%'
    },
    {
      aspect: 'Escalabilidad',
      current: 'Requiere inversión en hardware para crecer',
      zoomPhone: 'Escalamiento instantáneo vía software',
      advantage: 'Flexibilidad total'
    },
    {
      aspect: 'Funcionalidades',
      current: 'Limitado a telefonía básica',
      zoomPhone: 'Comunicación unificada completa',
      advantage: 'Más valor por empleado'
    },
    {
      aspect: 'Soporte y mantenimiento',
      current: 'Dependencia de proveedores locales',
      zoomPhone: 'Soporte 24/7 global de Zoom',
      advantage: 'Mejor experiencia'
    },
    {
      aspect: 'Movilidad',
      current: 'Limitado a oficina física',
      zoomPhone: 'Acceso desde cualquier lugar',
      advantage: 'Trabajo híbrido habilitado'
    }
  ];

  const projectPhases = [
    {
      phase: 'Decisión',
      duration: '1-2 semanas',
      activities: ['Aprobación ejecutiva', 'Asignación de presupuesto', 'Selección de equipo'],
      milestone: 'Contrato firmado'
    },
    {
      phase: 'Planificación',
      duration: '2-3 semanas',
      activities: ['Análisis técnico', 'Diseño de solución', 'Plan de migración'],
      milestone: 'Plan aprobado'
    },
    {
      phase: 'Implementación',
      duration: '3-6 semanas',
      activities: ['Configuración de sistema', 'Migración de usuarios', 'Pruebas integrales'],
      milestone: 'Sistema en producción'
    },
    {
      phase: 'Optimización',
      duration: '2-4 semanas',
      activities: ['Ajustes finos', 'Capacitación adicional', 'Monitoreo intensivo'],
      milestone: 'Objetivos alcanzados'
    }
  ];

  const successMetrics = [
    {
      metric: 'Tiempo de implementación',
      target: '< 8 semanas',
      description: 'Desde firma hasta go-live completo'
    },
    {
      metric: 'Adopción de usuarios',
      target: '> 95%',
      description: 'Usuarios activos en las primeras 4 semanas'
    },
    {
      metric: 'Satisfacción del usuario',
      target: '> 4.5/5',
      description: 'Encuesta post-implementación'
    },
    {
      metric: 'Reducción de costos',
      target: '30-50%',
      description: 'Comparación anual vs. sistema anterior'
    },
    {
      metric: 'Tickets de soporte',
      target: '< 5% usuarios/mes',
      description: 'Incidencias reportadas mensualmente'
    },
    {
      metric: 'Tiempo de resolución',
      target: '< 2 horas',
      description: 'Promedio para issues críticos'
    }
  ];

  const handleCheckboxChange = (category, item) => {
    const key = `${category}-${item}`;
    setCheckedItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const getCompletionPercentage = () => {
    const totalItems = requirementsChecklist.reduce((sum, cat) => sum + cat.items.length, 0);
    const checkedCount = Object.values(checkedItems).filter(Boolean).length;
    return Math.round((checkedCount / totalItems) * 100);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-[#50E4FE] to-[#043172] text-white">
            Módulo 10: Próximos Pasos
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-[#043172] mb-6">
            Próximos Pasos
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Su hoja de ruta hacia la transformación de las comunicaciones empresariales
          </p>
        </div>

        {/* Requirements Checklist */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-[#043172]">
              Evaluación de Necesidades
            </h3>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-slate-600">Progreso: {getCompletionPercentage()}%</span>
              <Progress value={getCompletionPercentage()} className="w-32 h-2" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {requirementsChecklist.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-[#043172] flex items-center">
                    <Target className="h-5 w-5 mr-2" />
                    {category.category}
                  </CardTitle>
                  <CardDescription>
                    Lista de verificación para {category.category.toLowerCase()}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.items.map((item, itemIndex) => {
                      const key = `${category.category}-${item}`;
                      return (
                        <div key={itemIndex} className="flex items-start space-x-3">
                          <Checkbox 
                            id={key}
                            checked={checkedItems[key] || false}
                            onCheckedChange={() => handleCheckboxChange(category.category, item)}
                            className="mt-0.5"
                          />
                          <label 
                            htmlFor={key} 
                            className={`text-sm cursor-pointer ${
                              checkedItems[key] ? 'line-through text-slate-500' : 'text-slate-700'
                            }`}
                          >
                            {item}
                          </label>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Comparison with Current Solution */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-[#043172] text-center mb-12">
            Comparación con Solución Actual
          </h3>
          
          <div className="space-y-6">
            {comparisonPoints.map((point, index) => (
              <Card key={index} className="border-l-4 border-[#50E4FE]">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
                    <div>
                      <h4 className="font-semibold text-[#043172] mb-2">{point.aspect}</h4>
                    </div>
                    
                    <div className="p-4 bg-red-50 rounded-lg">
                      <p className="text-sm text-red-800 font-medium mb-1">Sistema Actual</p>
                      <p className="text-xs text-red-600">{point.current}</p>
                    </div>
                    
                    <div className="p-4 bg-green-50 rounded-lg">
                      <p className="text-sm text-green-800 font-medium mb-1">Con Zoom Phone</p>
                      <p className="text-xs text-green-600">{point.zoomPhone}</p>
                    </div>
                    
                    <div className="text-center">
                      <Badge className="bg-gradient-to-r from-[#50E4FE] to-[#043172] text-white">
                        {point.advantage}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Implementation Process */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-[#043172] text-center mb-12">
            Proceso de Implementación
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {projectPhases.map((phase, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-[#50E4FE] to-[#043172] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">{index + 1}</span>
                  </div>
                  <CardTitle className="text-[#043172]">{phase.phase}</CardTitle>
                  <CardDescription>
                    <Badge variant="outline">{phase.duration}</Badge>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    {phase.activities.map((activity, idx) => (
                      <div key={idx} className="text-xs text-slate-600 flex items-center justify-center">
                        <div className="w-1 h-1 bg-[#50E4FE] rounded-full mr-2" />
                        {activity}
                      </div>
                    ))}
                  </div>
                  
                  <Alert className="border-green-200 bg-green-50">
                    <Award className="h-4 w-4 text-green-600" />
                    <AlertDescription className="text-green-800 text-xs">
                      <strong>Milestone:</strong> {phase.milestone}
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Success Metrics */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-[#043172] text-center mb-12">
            Métricas de Éxito
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {successMetrics.map((metric, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#50E4FE] to-[#043172] rounded-full flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-[#043172] mb-2">{metric.metric}</h4>
                  <p className="text-2xl font-bold text-[#50E4FE] mb-2">{metric.target}</p>
                  <p className="text-xs text-slate-600">{metric.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Final Call to Action */}
        <div className="text-center">
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-[#043172] to-[#50E4FE] text-white">
            <CardContent className="p-8">
              <div className="mb-6">
                <Lightbulb className="h-16 w-16 mx-auto mb-4 opacity-90" />
                <h3 className="text-3xl font-bold mb-4">
                  ¡Es Momento de Transformar sus Comunicaciones!
                </h3>
                <p className="text-lg leading-relaxed mb-6">
                  Ha completado el recorrido por todas las capacidades de Zoom Phone. 
                  Ahora tiene el conocimiento necesario para tomar la mejor decisión para su empresa.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <Clock className="h-8 w-8 mx-auto mb-2" />
                  <div className="text-2xl font-bold mb-1">8 semanas</div>
                  <div className="text-sm opacity-90">Implementación promedio</div>
                </div>
                <div className="text-center">
                  <Users className="h-8 w-8 mx-auto mb-2" />
                  <div className="text-2xl font-bold mb-1">300M+</div>
                  <div className="text-sm opacity-90">Usuarios globales</div>
                </div>
                <div className="text-center">
                  <Award className="h-8 w-8 mx-auto mb-2" />
                  <div className="text-2xl font-bold mb-1">99.99%</div>
                  <div className="text-sm opacity-90">Disponibilidad SLA</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-[#043172] hover:bg-slate-100 px-8">
                  <Calendar className="h-5 w-5 mr-2" />
                  Agendar Demostración
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8">
                  <BarChart3 className="h-5 w-5 mr-2" />
                  Calcular ROI Personalizado
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ModuleTen;