import React, { useState } from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';
import { Menu, Phone, Calculator, ChevronRight, Zap } from 'lucide-react';

const Navigation = ({ modules, activeModule, onModuleClick, onROIClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#50E4FE] to-[#043172] flex items-center justify-center">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-[#043172]">Zoom Phone</h1>
                <p className="text-xs text-slate-600">Sistema de Telefonía Empresarial</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {modules.slice(0, 6).map((module, index) => (
                <Button
                  key={module.id}
                  variant={activeModule === index ? "default" : "ghost"}
                  size="sm"
                  onClick={() => onModuleClick(index)}
                  className={`relative transition-all duration-200 ${
                    activeModule === index 
                      ? 'bg-gradient-to-r from-[#50E4FE] to-[#043172] text-white shadow-lg' 
                      : 'text-slate-600 hover:text-[#043172] hover:bg-slate-100'
                  }`}
                >
                  {module.title}
                  {activeModule === index && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full" />
                  )}
                </Button>
              ))}
              
              <div className="w-px h-6 bg-slate-300 mx-2" />
              
              <Button
                variant="outline"
                size="sm"
                onClick={onROIClick}
                className="border-[#50E4FE] text-[#043172] hover:bg-[#50E4FE]/10"
              >
                <Calculator className="h-4 w-4 mr-1" />
                ROI Calculator
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <SheetHeader>
                  <SheetTitle className="text-[#043172]">Navegación</SheetTitle>
                  <SheetDescription>
                    Módulos de la presentación Zoom Phone
                  </SheetDescription>
                </SheetHeader>
                <nav className="flex flex-col space-y-2 mt-6">
                  {modules.map((module, index) => (
                    <Button
                      key={module.id}
                      variant={activeModule === index ? "default" : "ghost"}
                      size="sm"
                      onClick={() => {
                        onModuleClick(index);
                        setIsOpen(false);
                      }}
                      className={`justify-start ${
                        activeModule === index 
                          ? 'bg-gradient-to-r from-[#50E4FE] to-[#043172] text-white' 
                          : 'text-slate-600 hover:text-[#043172]'
                      }`}
                    >
                      <span className="flex items-center">
                        <Badge variant="outline" className="mr-3 text-xs w-8 h-6">
                          {index}
                        </Badge>
                        {module.title}
                      </span>
                      <ChevronRight className="h-4 w-4 ml-auto" />
                    </Button>
                  ))}
                  
                  <div className="pt-4 border-t">
                    <Button
                      onClick={() => {
                        onROIClick();
                        setIsOpen(false);
                      }}
                      className="w-full bg-gradient-to-r from-[#50E4FE] to-[#043172] text-white"
                    >
                      <Calculator className="h-4 w-4 mr-2" />
                      Calcular ROI
                      <Zap className="h-4 w-4 ml-auto" />
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="fixed top-16 left-0 right-0 z-40 h-1 bg-slate-200">
        <div 
          className="h-full bg-gradient-to-r from-[#50E4FE] to-[#043172] transition-all duration-300 ease-out"
          style={{ width: `${((activeModule + 1) / modules.length) * 100}%` }}
        />
      </div>
    </>
  );
};

export default Navigation;