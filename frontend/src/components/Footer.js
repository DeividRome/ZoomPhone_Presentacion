import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ExternalLink,
  Linkedin,
  Twitter,
  Youtube,
  Globe
} from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Solución',
      links: [
        { name: 'Zoom Phone', href: '#' },
        { name: 'Contact Center', href: '#' },
        { name: 'Power Pack', href: '#' },
        { name: 'Integraciones', href: '#' }
      ]
    },
    {
      title: 'Recursos',
      links: [
        { name: 'Documentación', href: '#' },
        { name: 'Casos de Éxito', href: '#' },
        { name: 'Webinars', href: '#' },
        { name: 'Centro de Ayuda', href: '#' }
      ]
    },
    {
      title: 'Empresa',
      links: [
        { name: 'Acerca de Zoom', href: '#' },
        { name: 'Carreras', href: '#' },
        { name: 'Inversionistas', href: '#' },
        { name: 'Prensa', href: '#' }
      ]
    },
    {
      title: 'Soporte',
      links: [
        { name: 'Contactar Ventas', href: '#' },
        { name: 'Soporte Técnico', href: '#' },
        { name: 'Comunidad', href: '#' },
        { name: 'Partners', href: '#' }
      ]
    }
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/company/zoom', name: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/zoom', name: 'Twitter' },
    { icon: Youtube, href: 'https://youtube.com/zoom', name: 'YouTube' },
    { icon: Globe, href: 'https://zoom.us', name: 'Website' }
  ];

  return (
    <footer className="bg-gradient-to-r from-[#043172] to-[#2f3293] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Logo and Contact Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#50E4FE] to-white flex items-center justify-center">
                <Phone className="h-6 w-6 text-[#043172]" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Zoom Phone</h3>
                <p className="text-sm text-blue-100">Telefonía Empresarial en la Nube</p>
              </div>
            </div>
            
            <p className="text-blue-100 mb-6 leading-relaxed">
              Transforme sus comunicaciones empresariales con la solución de telefonía 
              en la nube más confiable y escalable del mercado.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-[#50E4FE]" />
                <span className="text-sm">sales@zoom.us</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-[#50E4FE]" />
                <span className="text-sm">+1 (888) 799-9666</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-[#50E4FE]" />
                <span className="text-sm">San José, California, EE.UU.</span>
              </div>
            </div>
          </div>
          
          {/* Footer Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index}>
                <h4 className="font-semibold text-white mb-4">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a 
                        href={link.href}
                        className="text-blue-100 hover:text-[#50E4FE] transition-colors duration-200 text-sm flex items-center"
                      >
                        {link.name}
                        <ExternalLink className="h-3 w-3 ml-1 opacity-50" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        <Separator className="my-12 bg-blue-800" />
        
        {/* Call to Action Section */}
        <div className="text-center mb-12">
          <Card className="max-w-4xl mx-auto bg-white/10 border-white/20 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                ¿Listo para comenzar con Zoom Phone?
              </h3>
              <p className="text-blue-100 mb-6">
                Hable con nuestro equipo de expertos y descubra cómo Zoom Phone 
                puede transformar las comunicaciones de su empresa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-[#50E4FE] text-[#043172] hover:bg-[#50E4FE]/90">
                  Solicitar Demostración
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Hablar con Ventas
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <span className="text-blue-100 text-sm mr-4">Síguenos:</span>
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#50E4FE] transition-colors duration-200 group"
                >
                  <IconComponent className="h-4 w-4 text-blue-100 group-hover:text-white" />
                </a>
              );
            })}
          </div>
          
          {/* Copyright and Legal */}
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-blue-100">
            <span>© 2025 Zoom Video Communications, Inc.</span>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#50E4FE] transition-colors">
                Privacidad
              </a>
              <a href="#" className="hover:text-[#50E4FE] transition-colors">
                Términos
              </a>
              <a href="#" className="hover:text-[#50E4FE] transition-colors">
                Accesibilidad
              </a>
            </div>
          </div>
        </div>
        
        {/* Disclaimer */}
        <div className="mt-8 pt-6 border-t border-blue-800">
          <p className="text-xs text-blue-200 text-center leading-relaxed">
            Los precios y funcionalidades mostrados en esta presentación son referenciales y pueden variar según la región y configuración específica. 
            Para obtener información actualizada y cotizaciones personalizadas, contacte a su representante de ventas de Zoom. 
            Zoom Phone requiere una conexión a Internet estable para funcionar correctamente.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;