export const zoomPhoneFeatures = {
  basicFeatures: [
    {
      id: 1,
      title: 'Realizar y recibir llamadas',
      description: 'Sistema completo de telefonía con calidad HD',
      icon: 'Phone',
      benefits: ['Calidad de voz superior', 'Conexión estable', 'Interfaz intuitiva']
    },
    {
      id: 2,
      title: 'Buzón de voz con transcripciones',
      description: 'Mensajes de voz convertidos automáticamente a texto',
      icon: 'Voicemail',
      benefits: ['Transcripción automática', 'Notificaciones push', 'Acceso multiplataforma']
    },
    {
      id: 3,
      title: 'Historial de llamadas',
      description: 'Registro completo de todas las comunicaciones',
      icon: 'History',
      benefits: ['Búsqueda avanzada', 'Reportes detallados', 'Exportación de datos']
    },
    {
      id: 4,
      title: 'Transferencia de llamadas',
      description: 'Redirige llamadas de forma inteligente',
      icon: 'ArrowRightLeft',
      benefits: ['Transferencia ciega', 'Transferencia consultada', 'Cola de llamadas']
    },
    {
      id: 5,
      title: 'Mensajes SMS empresariales',
      description: 'Comunicación por texto profesional',
      icon: 'MessageSquare',
      benefits: ['SMS masivos', 'Plantillas personalizadas', 'Programación automática']
    },
    {
      id: 6,
      title: 'Identificador personalizable',
      description: 'Control total sobre la información mostrada',
      icon: 'UserCheck',
      benefits: ['Múltiples números', 'Información de empresa', 'Personalización por contacto']
    }
  ],
  
  smartFeatures: [
    {
      id: 7,
      title: 'Grabación de llamadas',
      description: 'Captura automática con cumplimiento legal',
      icon: 'Mic',
      benefits: ['Grabación selectiva', 'Almacenamiento seguro', 'Cumplimiento normativo']
    },
    {
      id: 8,
      title: 'Conversión a videollamada',
      description: 'Escalada instant·nea de llamadas',
      icon: 'Video',
      benefits: ['Un clic para video', 'Compartir pantalla', 'Grabación de video']
    },
    {
      id: 9,
      title: 'Correo de voz visual',
      description: 'Gestión visual de mensajes de voz',
      icon: 'Eye',
      benefits: ['Vista previa visual', 'Organización por categorías', 'Respuesta rápida']
    }
  ],
  
  technicalConcepts: [
    {
      id: 10,
      title: 'VoIP (Voz sobre IP)',
      description: 'Convertir la voz en datos que viajan por Internet',
      analogy: 'Como enviar un email, pero con voz en tiempo real',
      benefits: ['Costos reducidos', 'Flexibilidad global', 'Integración digital']
    },
    {
      id: 11,
      title: 'Ancho de banda',
      description: 'Carretera por donde viajan las llamadas',
      analogy: 'Una autopista: más carriles = más llamadas simultáneas',
      benefits: ['Llamadas concurrentes', 'Calidad garantizada', 'Escalabilidad automática']
    },
    {
      id: 12,
      title: 'Calidad de servicio (QoS)',
      description: 'Sistema que da prioridad a las llamadas',
      analogy: 'Como un carril VIP para ambulancias en el tráfico',
      benefits: ['Prioridad automática', 'Latencia mínima', 'Estabilidad de conexión']
    }
  ],
  
  serviceModels: [
    {
      id: 13,
      title: 'Nativo',
      description: 'Zoom maneja todo el servicio',
      pros: ['Implementación rápida', 'Soporte completo', 'Actualizaciones automáticas'],
      cons: ['Dependencia total', 'Menos personalización'],
      bestFor: 'Empresas que buscan simplicidad'
    },
    {
      id: 14,
      title: 'BYOC (Bring Your Own Carrier)',
      description: 'Conserva tu proveedor actual',
      pros: ['Mantiene contratos existentes', 'Mayor control', 'Flexibilidad de precios'],
      cons: ['Complejidad técnica', 'Múltiples proveedores'],
      bestFor: 'Empresas con contratos existentes'
    },
    {
      id: 15,
      title: 'Híbrido',
      description: 'Lo mejor de ambos mundos',
      pros: ['Flexibilidad máxima', 'Migración gradual', 'Optimización de costos'],
      cons: ['Configuración compleja', 'Gestión dual'],
      bestFor: 'Empresas en transición'
    }
  ],
  
  globalCoverage: {
    countries: 49,
    dataCenters: 21,
    regions: [
      'América del Norte',
      'América Latina',
      'Europa',
      'Asia-Pacífico',
      'Oriente Medio',
      'África'
    ]
  },
  
  compliance: [
    'SOC 2 Type II',
    'HIPAA',
    'GDPR',
    'ISO 27001',
    'FedRAMP',
    'FISMA'
  ],
  
  industryUseCases: [
    {
      industry: 'Oficinas Corporativas',
      description: 'Comunicación unificada para equipos distribuidos',
      features: ['Colaboración global', 'Integración con herramientas', 'Escalabilidad empresarial'],
      roi: '35% reducción en costos de comunicación'
    },
    {
      industry: 'Centros de Llamadas',
      description: 'Optimización de atención al cliente',
      features: ['Enrutamiento inteligente', 'Análisis en tiempo real', 'Integración CRM'],
      roi: '28% mejora en satisfacción del cliente'
    },
    {
      industry: 'Empresas Remotas',
      description: 'Conectividad sin límites geográficos',
      features: ['Trabajo desde cualquier lugar', 'Números globales', 'Colaboración seamless'],
      roi: '42% aumento en productividad remota'
    }
  ]
};

export const roiCalculatorDefaults = {
  employees: 100,
  monthlyCostPerEmployee: 25,
  currentSystemMaintenance: 5000,
  hardwareReplacement: 15000,
  itSupportHours: 20,
  itHourlyRate: 75,
  productivityGainPercent: 15,
  averageEmployeeSalary: 50000
};

export const testimonials = [
  {
    id: 1,
    company: 'TechCorp Solutions',
    industry: 'Tecnología',
    employees: 500,
    testimonial: 'Zoom Phone transformó nuestra comunicación. La integración con nuestras herramientas existentes fue perfecta.',
    author: 'María González',
    position: 'CTO',
    results: {
      costReduction: '40%',
      productivityIncrease: '25%',
      implementationTime: '2 semanas'
    }
  },
  {
    id: 2,
    company: 'Global Services Inc',
    industry: 'Servicios',
    employees: 1200,
    testimonial: 'La calidad de las llamadas y la facilidad de gestión superaron todas nuestras expectativas.',
    author: 'Carlos Rodríguez',
    position: 'Director de IT',
    results: {
      costReduction: '35%',
      productivityIncrease: '30%',
      implementationTime: '3 semanas'
    }
  },
  {
    id: 3,
    company: 'Healthcare Partners',
    industry: 'Salud',
    employees: 800,
    testimonial: 'El cumplimiento HIPAA y la seguridad de Zoom Phone nos dieron total tranquilidad.',
    author: 'Dr. Ana Martín',
    position: 'Directora Médica',
    results: {
      costReduction: '30%',
      productivityIncrease: '20%',
      implementationTime: '4 semanas'
    }
  }
];

export const implementationSteps = [
  {
    phase: 1,
    title: 'Evaluación y Planificación',
    duration: '1-2 semanas',
    activities: [
      'Análisis de infraestructura actual',
      'Definición de requisitos',
      'Planificación de migración',
      'Capacitación del equipo técnico'
    ],
    deliverables: ['Plan de implementación', 'Cronograma detallado', 'Lista de recursos']
  },
  {
    phase: 2,
    title: 'Configuración inicial',
    duration: '1 semana',
    activities: [
      'Configuración de centros de datos',
      'Establecimiento de políticas',
      'Configuración de seguridad',
      'Pruebas de conectividad'
    ],
    deliverables: ['Sistema configurado', 'Políticas implementadas', 'Documentación técnica']
  },
  {
    phase: 3,
    title: 'Migración por fases',
    duration: '2-4 semanas',
    activities: [
      'Migración de números telefónicos',
      'Configuración de usuarios',
      'Integración con sistemas existentes',
      'Pruebas exhaustivas'
    ],
    deliverables: ['Usuarios migrados', 'Números portados', 'Integraciones activas']
  },
  {
    phase: 4,
    title: 'Capacitación y Go-Live',
    duration: '1 semana',
    activities: [
      'Capacitación de usuarios finales',
      'Soporte durante transición',
      'Monitoreo intensivo',
      'Ajustes finales'
    ],
    deliverables: ['Usuarios capacitados', 'Sistema en producción', 'Soporte establecido']
  }
];