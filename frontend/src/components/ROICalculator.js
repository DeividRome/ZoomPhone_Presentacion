import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Badge } from './ui/badge';
import { 
  Calculator, 
  TrendingUp, 
  DollarSign, 
  Users, 
  Phone, 
  Download,
  Mail,
  X
} from 'lucide-react';
import { roiCalculatorDefaults } from '../mock/zoomPhoneData';

const ROICalculator = ({ isOpen, onClose }) => {
  const [inputs, setInputs] = useState(roiCalculatorDefaults);
  const [results, setResults] = useState(null);
  const [activeTab, setActiveTab] = useState('inputs');

  useEffect(() => {
    if (isOpen) {
      calculateROI();
    }
  }, [inputs, isOpen]);

  const calculateROI = () => {
    // Current costs
    const currentPhoneCosts = inputs.employees * inputs.monthlyCostPerEmployee * 12;
    const currentMaintenance = inputs.currentSystemMaintenance;
    const currentHardware = inputs.hardwareReplacement;
    const currentITCosts = inputs.itSupportHours * inputs.itHourlyRate * 12;
    const totalCurrentCosts = currentPhoneCosts + currentMaintenance + currentHardware + currentITCosts;

    // Zoom Phone costs (estimated)
    const zoomPhoneMonthly = inputs.employees * 20; // $20 per user per month
    const zoomPhoneAnnual = zoomPhoneMonthly * 12;
    const implementationCost = inputs.employees * 50; // One-time setup cost
    const reducedITCosts = currentITCosts * 0.3; // 70% reduction in IT support

    // Savings
    const annualSavings = totalCurrentCosts - (zoomPhoneAnnual + reducedITCosts);
    const threeYearSavings = (annualSavings * 3) - implementationCost;
    const roiPercentage = ((threeYearSavings / (zoomPhoneAnnual + implementationCost)) * 100);
    const paybackMonths = (zoomPhoneAnnual + implementationCost) / (annualSavings / 12);

    // Productivity gains
    const productivityValue = (inputs.averageEmployeeSalary * inputs.employees) * (inputs.productivityGainPercent / 100);
    const totalROI = annualSavings + productivityValue;

    setResults({
      currentCosts: totalCurrentCosts,
      zoomPhoneCosts: zoomPhoneAnnual,
      annualSavings,
      threeYearSavings,
      roiPercentage,
      paybackMonths,
      productivityValue,
      totalROI,
      implementationCost
    });
  };

  const handleInputChange = (field, value) => {
    setInputs(prev => ({
      ...prev,
      [field]: parseFloat(value) || 0
    }));
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const inputFields = [
    {
      key: 'employees',
      label: 'Número de empleados',
      description: 'Total de usuarios que usarán el sistema',
      icon: Users
    },
    {
      key: 'monthlyCostPerEmployee',
      label: 'Costo mensual por empleado ($)',
      description: 'Costo actual de telefonía por usuario',
      icon: Phone
    },
    {
      key: 'currentSystemMaintenance',
      label: 'Mantenimiento anual del sistema ($)',
      description: 'Costos de mantenimiento y actualizaciones',
      icon: DollarSign
    },
    {
      key: 'hardwareReplacement',
      label: 'Reemplazo de hardware anual ($)',
      description: 'Inversión en nuevo hardware telefónico',
      icon: Phone
    },
    {
      key: 'itSupportHours',
      label: 'Horas de soporte IT mensual',
      description: 'Tiempo dedicado a soporte telefónico',
      icon: Users
    },
    {
      key: 'itHourlyRate',
      label: 'Tarifa por hora IT ($)',
      description: 'Costo promedio por hora de personal IT',
      icon: DollarSign
    },
    {
      key: 'productivityGainPercent',
      label: 'Ganancia de productividad (%)',
      description: 'Mejora esperada en productividad',
      icon: TrendingUp
    },
    {
      key: 'averageEmployeeSalary',
      label: 'Salario promedio anual ($)',
      description: 'Salario promedio de empleados',
      icon: DollarSign
    }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-[#043172] flex items-center text-2xl">
            <Calculator className="h-6 w-6 mr-3" />
            Calculadora ROI - Zoom Phone
          </DialogTitle>
          <DialogDescription>
            Calcule el retorno de inversión personalizado para su empresa
          </DialogDescription>
        </DialogHeader>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="inputs">Parámetros</TabsTrigger>
            <TabsTrigger value="results">Resultados</TabsTrigger>
            <TabsTrigger value="summary">Resumen</TabsTrigger>
          </TabsList>

          {/* Input Parameters Tab */}
          <TabsContent value="inputs" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {inputFields.map((field) => {
                const IconComponent = field.icon;
                return (
                  <Card key={field.key}>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm flex items-center text-[#043172]">
                        <IconComponent className="h-4 w-4 mr-2" />
                        {field.label}
                      </CardTitle>
                      <CardDescription className="text-xs">
                        {field.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Input
                        type="number"
                        value={inputs[field.key]}
                        onChange={(e) => handleInputChange(field.key, e.target.value)}
                        className="text-lg font-semibold"
                        placeholder="0"
                      />
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          {/* Results Tab */}
          <TabsContent value="results" className="mt-6">
            {results && (
              <div className="space-y-6">
                {/* Key Metrics Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="text-center bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
                    <CardContent className="p-6">
                      <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-3" />
                      <h3 className="text-2xl font-bold text-green-700 mb-1">
                        {formatCurrency(results.annualSavings)}
                      </h3>
                      <p className="text-sm text-green-600">Ahorro anual</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="text-center bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200">
                    <CardContent className="p-6">
                      <Calculator className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                      <h3 className="text-2xl font-bold text-blue-700 mb-1">
                        {results.roiPercentage.toFixed(0)}%
                      </h3>
                      <p className="text-sm text-blue-600">ROI a 3 años</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="text-center bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
                    <CardContent className="p-6">
                      <DollarSign className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                      <h3 className="text-2xl font-bold text-purple-700 mb-1">
                        {results.paybackMonths.toFixed(0)} meses
                      </h3>
                      <p className="text-sm text-purple-600">Tiempo de retorno</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Detailed Breakdown */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-[#043172]">Costos Actuales vs. Zoom Phone</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-3 bg-red-50 rounded">
                          <span className="text-red-700">Sistema actual (anual)</span>
                          <span className="font-bold text-red-800">{formatCurrency(results.currentCosts)}</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                          <span className="text-green-700">Zoom Phone (anual)</span>
                          <span className="font-bold text-green-800">{formatCurrency(results.zoomPhoneCosts)}</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-blue-50 rounded border-t-2 border-blue-200">
                          <span className="text-blue-700 font-medium">Diferencia anual</span>
                          <span className="font-bold text-blue-800 text-lg">{formatCurrency(results.annualSavings)}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-[#043172]">Beneficios Adicionales</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-3 bg-orange-50 rounded">
                          <span className="text-orange-700">Ganancia de productividad</span>
                          <span className="font-bold text-orange-800">{formatCurrency(results.productivityValue)}</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-purple-50 rounded">
                          <span className="text-purple-700">Ahorro 3 años</span>
                          <span className="font-bold text-purple-800">{formatCurrency(results.threeYearSavings)}</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-gradient-to-r from-[#50E4FE]/10 to-[#043172]/10 rounded border-t-2 border-[#50E4FE]">
                          <span className="text-[#043172] font-medium">ROI total anual</span>
                          <span className="font-bold text-[#043172] text-lg">{formatCurrency(results.totalROI)}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}
          </TabsContent>

          {/* Summary Tab */}
          <TabsContent value="summary" className="mt-6">
            <Card className="border-l-4 border-[#50E4FE]">
              <CardHeader>
                <CardTitle className="text-[#043172]">Resumen Ejecutivo</CardTitle>
                <CardDescription>
                  Análisis ROI para {inputs.employees} empleados
                </CardDescription>
              </CardHeader>
              <CardContent>
                {results && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h4 className="font-semibold text-[#043172] flex items-center">
                          <TrendingUp className="h-4 w-4 mr-2" />
                          Beneficios Financieros
                        </h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex justify-between">
                            <span>Ahorro anual en telefonía:</span>
                            <span className="font-semibold text-green-600">{formatCurrency(results.annualSavings)}</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Retorno de inversión (3 años):</span>
                            <span className="font-semibold text-blue-600">{results.roiPercentage.toFixed(0)}%</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Tiempo de recuperación:</span>
                            <span className="font-semibold text-purple-600">{results.paybackMonths.toFixed(0)} meses</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="space-y-4">
                        <h4 className="font-semibold text-[#043172] flex items-center">
                          <Users className="h-4 w-4 mr-2" />
                          Beneficios Operacionales
                        </h4>
                        <ul className="space-y-2 text-sm text-slate-600">
                          <li>• Reducción 70% en soporte IT telefónico</li>
                          <li>• Eliminación de hardware legacy</li>
                          <li>• Escalabilidad instantánea</li>
                          <li>• Movilidad completa para empleados</li>
                          <li>• Integración con herramientas existentes</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-gradient-to-r from-[#50E4FE]/5 to-[#043172]/5 rounded-lg">
                      <h4 className="font-semibold text-[#043172] mb-2">Recomendación</h4>
                      <p className="text-sm text-slate-700">
                        Basado en su configuración actual, Zoom Phone ofrecería un ROI excepcional 
                        de <strong>{results.roiPercentage.toFixed(0)}%</strong> en 3 años, con un tiempo de recuperación 
                        de solo <strong>{results.paybackMonths.toFixed(0)} meses</strong>. 
                        Los ahorros anuales de <strong>{formatCurrency(results.totalROI)}</strong> 
                        justifican plenamente la inversión.
                      </p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <Button className="bg-gradient-to-r from-[#50E4FE] to-[#043172] text-white">
                        <Download className="h-4 w-4 mr-2" />
                        Descargar Reporte
                      </Button>
                      <Button variant="outline" className="border-[#043172] text-[#043172]">
                        <Mail className="h-4 w-4 mr-2" />
                        Enviar por Email
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="flex justify-between items-center pt-4 border-t">
          <div className="text-sm text-slate-500">
            Cálculos basados en promedios de la industria y datos de Zoom
          </div>
          <Button variant="ghost" onClick={onClose}>
            <X className="h-4 w-4 mr-2" />
            Cerrar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ROICalculator;