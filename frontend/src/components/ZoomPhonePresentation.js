import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { ScrollArea } from './ui/scroll-area';
import Navigation from './Navigation';
import HeroSection from './sections/HeroSection';
import ModuleOne from './sections/ModuleOne';
import ModuleTwo from './sections/ModuleTwo';
import ModuleThree from './sections/ModuleThree';
import ModuleFour from './sections/ModuleFour';
import ModuleFive from './sections/ModuleFive';
import ModuleSix from './sections/ModuleSix';
import ModuleSeven from './sections/ModuleSeven';
import ModuleEight from './sections/ModuleEight';
import ModuleNine from './sections/ModuleNine';
import ModuleTen from './sections/ModuleTen';
import ROICalculator from './ROICalculator';
import Footer from './Footer';

const ZoomPhonePresentation = () => {
  const [activeModule, setActiveModule] = useState(0);
  const [showROI, setShowROI] = useState(false);

  const modules = [
    { id: 0, title: 'Inicio', component: <HeroSection /> },
    { id: 1, title: 'Fundamentos', component: <ModuleOne /> },
    { id: 2, title: 'Características', component: <ModuleTwo /> },
    { id: 3, title: 'Conceptos Técnicos', component: <ModuleThree /> },
    { id: 4, title: 'Capacidades Avanzadas', component: <ModuleFour /> },
    { id: 5, title: 'Administración', component: <ModuleFive /> },
    { id: 6, title: 'Funciones Especializadas', component: <ModuleSix /> },
    { id: 7, title: 'Aspectos Técnicos', component: <ModuleSeven /> },
    { id: 8, title: 'Implementación', component: <ModuleEight /> },
    { id: 9, title: 'Casos de Uso', component: <ModuleNine /> },
    { id: 10, title: 'Próximos Pasos', component: <ModuleTen /> }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('[data-module]');
      const scrollPos = window.scrollY + 100;
      
      sections.forEach((section, index) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        
        if (scrollPos >= top && scrollPos < top + height) {
          setActiveModule(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToModule = (moduleId) => {
    const element = document.querySelector(`[data-module="${moduleId}"]`);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <Navigation 
        modules={modules} 
        activeModule={activeModule} 
        onModuleClick={scrollToModule}
        onROIClick={() => setShowROI(true)}
      />
      
      <main className="relative">
        {modules.map((module, index) => (
          <section key={module.id} data-module={index} className="min-h-screen">
            {module.component}
          </section>
        ))}
      </main>

      <Footer />

      {showROI && (
        <ROICalculator 
          isOpen={showROI} 
          onClose={() => setShowROI(false)} 
        />
      )}
    </div>
  );
};

export default ZoomPhonePresentation;