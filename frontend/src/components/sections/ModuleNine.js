import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { 
  Building2, 
  Phone, 
  Users, 
  DollarSign, 
  TrendingUp, 
  CheckCircle2,
  Star,
  Quote
} from 'lucide-react';
import { zoomPhoneFeatures, testimonials } from '../../mock/zoomPhoneData';

const ModuleNine = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeUseCase, setActiveUseCase] = useState(0);

  const roiBenefits = [
    {
      category: 'Reducción de costos',
      items: [
        'Menos hardware y mantenimiento',
        'Eliminación de líneas telefónicas tradicionales',
        'Reducción de personal IT dedicado',
        'Consolidación de proveedores'
      ],
      savings: '30-50%'
    },
    {
      category: 'Escalabilidad',
      items: [
        'Crece o reduce según necesidades',
        'Sin inversiones de capital adicionales',
        'Aprovisionamiento instantáneo',
        'Pago solo por lo que usa'
      ],
      savings: '25-40%'
    },
    {
      category: 'Productividad mejorada',
      items: [
        'Empleados más eficientes y conectados',
        'Colaboración unificada',
        'Movilidad completa',
        'Menos tiempo en soporte técnico'
      ],
      savings: '15-30%'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-[#50E4FE] to-[#043172] text-white">
            Módulo 9: Casos de Uso y Beneficios
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-[#043172] mb-6">
            Casos de Uso y Beneficios
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Descubra cómo empresas como la suya han transformado sus comunicaciones
          </p>
        </div>

        {/* Industry Use Cases */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-[#043172] text-center mb-12">
            Casos de Uso por Industria
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {zoomPhoneFeatures.industryUseCases.map((useCase, index) => {
              const icons = [Building2, Phone, Users];
              const IconComponent = icons[index];
              
              return (
                <Card 
                  key={index} 
                  className={`cursor-pointer transition-all duration-300 transform hover:-translate-y-2 ${
                    activeUseCase === index ? 'ring-2 ring-[#50E4FE] shadow-xl' : 'hover:shadow-lg'
                  }`}
                  onClick={() => setActiveUseCase(index)}
                >
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-r from-[#50E4FE] to-[#043172] rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-[#043172] text-center">{useCase.industry}</CardTitle>
                    <CardDescription className="text-center">{useCase.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      {useCase.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-slate-600">
                          <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <div className="text-center p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg">
                      <p className="text-sm text-green-700 font-medium">ROI Promedio</p>
                      <p className="text-lg font-bold text-green-800">{useCase.roi}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Customer Testimonials */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-[#043172] text-center mb-12">
            Lo que Dicen Nuestros Clientes
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="space-y-4">
                {testimonials.map((testimonial, index) => (
                  <Card 
                    key={testimonial.id}
                    className={`cursor-pointer transition-all duration-300 ${
                      activeTestimonial === index 
                        ? 'ring-2 ring-[#50E4FE] shadow-lg' 
                        : 'hover:shadow-md'
                    }`}
                    onClick={() => setActiveTestimonial(index)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-[#50E4FE] to-[#043172] rounded-full flex items-center justify-center text-white font-bold">
                          {testimonial.company.charAt(0)}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold text-[#043172]">{testimonial.company}</h4>
                            <Badge variant="outline">{testimonial.employees} empleados</Badge>
                          </div>
                          <p className="text-sm text-slate-600 mb-2">{testimonial.industry}</p>
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            <div>
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Quote className="h-8 w-8 text-[#50E4FE]" />
                    <div>
                      <CardTitle className="text-[#043172]">
                        {testimonials[activeTestimonial].author}
                      </CardTitle>
                      <CardDescription>
                        {testimonials[activeTestimonial].position} - {testimonials[activeTestimonial].company}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <blockquote className="text-lg text-slate-700 italic mb-6 leading-relaxed">
                    "{testimonials[activeTestimonial].testimonial}"
                  </blockquote>
                  
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="p-3 bg-green-50 rounded-lg">
                      <p className="text-2xl font-bold text-green-600">
                        {testimonials[activeTestimonial].results.costReduction}
                      </p>
                      <p className="text-xs text-green-700">Reducción costos</p>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <p className="text-2xl font-bold text-blue-600">
                        {testimonials[activeTestimonial].results.productivityIncrease}
                      </p>
                      <p className="text-xs text-blue-700">Aumento productividad</p>
                    </div>
                    <div className="p-3 bg-purple-50 rounded-lg">
                      <p className="text-2xl font-bold text-purple-600">
                        {testimonials[activeTestimonial].results.implementationTime}
                      </p>
                      <p className="text-xs text-purple-700">Tiempo implementación</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* ROI and Economic Benefits */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-[#043172] text-center mb-12">
            ROI y Beneficios Económicos
          </h3>
          
          <Tabs defaultValue="costs">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="costs">Reducción de Costos</TabsTrigger>
              <TabsTrigger value="scale">Escalabilidad</TabsTrigger>
              <TabsTrigger value="productivity">Productividad</TabsTrigger>
            </TabsList>
            
            {roiBenefits.map((benefit, index) => {
              const tabValues = ['costs', 'scale', 'productivity'];
              const colors = ['text-green-600', 'text-blue-600', 'text-purple-600'];
              const bgColors = ['bg-green-50', 'bg-blue-50', 'bg-purple-50'];
              
              return (
                <TabsContent key={index} value={tabValues[index]}>
                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-[#043172] flex items-center">
                          <DollarSign className="h-5 w-5 mr-2" />
                          {benefit.category}
                        </CardTitle>
                        <Badge className={`${bgColors[index]} ${colors[index]} border-none`}>
                          Ahorro promedio: {benefit.savings}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          {benefit.items.map((item, idx) => (
                            <div key={idx} className="flex items-start space-x-3 p-3 bg-slate-50 rounded-lg">
                              <TrendingUp className={`h-5 w-5 ${colors[index]} mt-0.5`} />
                              <span className="text-slate-700">{item}</span>
                            </div>
                          ))}
                        </div>
                        <div className={`${bgColors[index]} rounded-xl p-6`}>
                          <div className="text-center">
                            <h4 className={`text-2xl font-bold ${colors[index]} mb-2`}>
                              Ejemplo de ahorro
                            </h4>
                            <p className="text-sm text-slate-600 mb-4">
                              Empresa de 100 empleados
                            </p>
                            <div className="space-y-2 text-left">
                              <div className="flex justify-between">
                                <span className="text-slate-600">Costo actual anual:</span>
                                <span className="font-semibold">$120,000</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-slate-600">Con Zoom Phone:</span>
                                <span className="font-semibold">$84,000</span>
                              </div>
                              <div className="border-t pt-2">
                                <div className="flex justify-between">
                                  <span className={`font-bold ${colors[index]}`}>Ahorro anual:</span>
                                  <span className={`font-bold text-xl ${colors[index]}`}>$36,000</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              );
            })}
          </Tabs>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-[#50E4FE]/5 to-[#043172]/5 border-l-4 border-[#50E4FE]">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-[#043172] mb-4">
                ¿Listo para Calcular su ROI Personalizado?
              </h3>
              <p className="text-slate-600 mb-6">
                Use nuestra calculadora para obtener una estimación personalizada 
                de los ahorros y beneficios específicos para su empresa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-[#50E4FE] to-[#043172] text-white px-8">
                  <DollarSign className="h-4 w-4 mr-2" />
                  Calcular mi ROI
                </Button>
                <Button variant="outline" className="border-[#043172] text-[#043172] px-8">
                  Ver Próximos Pasos
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ModuleNine;