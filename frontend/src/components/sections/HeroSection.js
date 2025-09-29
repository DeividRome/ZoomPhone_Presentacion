import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { ArrowRight, Play, Users, Globe, Shield, Star } from 'lucide-react';

const HeroSection = () => {
  const stats = [
    { label: 'Países Atendidos', value: '49+', icon: Globe },
    { label: 'Centros de Datos', value: '21', icon: Shield },
    { label: 'Usuarios Globales', value: '300M+', icon: Users },
    { label: 'Satisfacción', value: '4.8/5', icon: Star }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#fafafa] via-[#50E4FE]/10 to-[#2f3293]/20" />
      
      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            <Badge className="mb-6 bg-gradient-to-r from-[#50E4FE] to-[#043172] text-white border-none px-4 py-2">
              Sistema de Telefonía Empresarial en la Nube
            </Badge>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-[#043172] mb-6 leading-tight">
              Zoom Phone
              <span className="block text-2xl lg:text-3xl font-normal text-slate-600 mt-2">
                Transforme su comunicación empresarial
              </span>
            </h1>
            
            <p className="text-lg lg:text-xl text-slate-600 mb-8 max-w-2xl">
              Un sistema telefónico empresarial completo que funciona a través de Internet. 
              Como tener una centralita física transformada en un servicio inteligente en la nube.
            </p>
            
            
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center lg:text-left">
                    <div className="flex items-center justify-center lg:justify-start mb-2">
                      <IconComponent className="h-5 w-5 text-[#50E4FE] mr-2" />
                      <span className="text-2xl font-bold text-[#043172]">{stat.value}</span>
                    </div>
                    <p className="text-sm text-slate-600">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://media.zoom.com/images/assets/phone-hardware-hero.png/Zz04MDRiNDNhYWRmOTAxMWVkOWUxYzgyM2Y5OWFhZmE2ZQ==" 
                alt="Equipo empresarial en videoconferencia" 
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#043172]/20 to-transparent" />
            </div>
            
            {/* Floating Cards */}
            <Card className="absolute -top-4 -left-4 w-48 bg-white/95 backdrop-blur-sm shadow-xl border-l-4 border-[#50E4FE]">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Sistema Activo</p>
                    <p className="text-xs text-slate-600">99.99% Uptime</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="absolute -bottom-4 -right-4 w-52 bg-white/95 backdrop-blur-sm shadow-xl border-l-4 border-[#043172]">
              <CardContent className="p-4">
                <div className="text-center">
                  <p className="font-bold text-2xl text-[#043172]">40%</p>
                  <p className="text-sm text-slate-600">Reducción de costos promedio</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};

export default HeroSection;
