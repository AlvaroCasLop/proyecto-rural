export interface LocationItem {
  id: string;
  name: string;
  category: 'asociaciones' | 'cultural' | 'deportivo' | 'natural' | 'religioso' | 'eventos' | 'servicios';
  categoryLabel: string;
  coords: [number, number]; // [lat, lng]
  description: string;
  details?: string[];
  address?: string;
  contact?: string;
}

export const CATEGORIES = {
  asociaciones: { label: 'Asociaciones y Colectivos', color: '#3B82F6', icon: 'Users' },
  cultural: { label: 'Recursos Culturales y Educativos', color: '#8B5CF6', icon: 'BookOpen' },
  deportivo: { label: 'Recursos Deportivos y de Ocio', color: '#10B981', icon: 'Activity' },
  natural: { label: 'Recursos Naturales y Rutas', color: '#059669', icon: 'Compass' },
  religioso: { label: 'Recursos Religiosos', color: '#F59E0B', icon: 'Church' },
  eventos: { label: 'Eventos, Fiestas y Comisiones', color: '#EC4899', icon: 'Calendar' },
  servicios: { label: 'Servicios y Otros Recursos', color: '#6B7280', icon: 'Info' }
};

export const locationsData: LocationItem[] = [
  // --- ASOCIACIONES Y COLECTIVOS ---
  {
    id: 'asoc-a-croa',
    name: 'Asociación A Croa (Paradela)',
    category: 'asociaciones',
    categoryLabel: 'Asociaciones y Colectivos',
    coords: [42.5074, -8.7061],
    description: 'Colectivo cultural y vecinal enfocado en la promoción de actividades y dinamización comunitaria en Paradela.',
    details: ['Organización de eventos vecinales', 'Reuniones de desarrollo local', 'Actividades para todas las edades'],
    address: 'Paradela, Meis, Pontevedra'
  },
  {
    id: 'asoc-san-gregorio',
    name: 'Asociación Cultural San Gregorio (Paradela)',
    category: 'asociaciones',
    categoryLabel: 'Asociaciones y Colectivos',
    coords: [42.5090, -8.7050],
    description: 'Promotores de la tradicional Festa do Bolo y la Romaría de San Gregorio, dinamizadores de la cultura tradicional.',
    details: ['Organización de la Romaría de San Gregorio', 'Talleres culturales tradicionales', 'Promoción de la gastronomía gallega'],
    address: 'Paradela, Meis'
  },
  {
    id: 'asoc-mulleres-os-pazos',
    name: 'Asociación Mulleres Rurais “Os Pazos” (Paradela)',
    category: 'asociaciones',
    categoryLabel: 'Asociaciones y Colectivos',
    coords: [42.5065, -8.7085],
    description: 'Asociación destinada a dar visibilidad, formación y ocio a las mujeres del medio rural en Paradela.',
    details: ['Cursos de artesanía y cocina', 'Viajes culturales', 'Encuentros intergeneracionales'],
    address: 'Paradela, Meis'
  },
  {
    id: 'asoc-musical-vertula',
    name: 'Asociación Musical “A Vertula” (Paradela)',
    category: 'asociaciones',
    categoryLabel: 'Asociaciones y Colectivos',
    coords: [42.5080, -8.7040],
    description: 'Asociación musical que fomenta el aprendizaje instrumental y coral, con amplia participación en eventos del municipio.',
    details: ['Ensayos de banda y coro', 'Clases de solfeo e instrumentos', 'Conciertos y pasacalles'],
    address: 'Paradela, Meis'
  },
  {
    id: 'asoc-montes-paradela',
    name: 'Asociación de Montes (Paradela)',
    category: 'asociaciones',
    categoryLabel: 'Asociaciones y Colectivos',
    coords: [42.5050, -8.7100],
    description: 'Entidad encargada de la gestión sostenible de los recursos forestales y la conservación ecológica de los montes comunales en Paradela.',
    details: ['Gestión forestal sostenible', 'Prevención de incendios', 'Reforestación con especies autóctonas'],
    address: 'Paradela, Meis'
  },
  {
    id: 'asoc-mulleres-nogueira',
    name: 'Asociación Mulleres Rurais “Nogueira” (San Lorenzo)',
    category: 'asociaciones',
    categoryLabel: 'Asociaciones y Colectivos',
    coords: [42.5042, -8.6796],
    description: 'Colectivo activo de mujeres rurales en San Lorenzo de Nogueira orientado a talleres, gimnasia y actividades sociales.',
    details: ['Clases de mantenimiento físico', 'Talleres artísticos', 'Dinamización social'],
    address: 'San Lorenzo de Nogueira, Meis'
  },
  {
    id: 'comunidad-montes-san-lorenzo',
    name: 'Comunidad de Montes de San Lorenzo',
    category: 'asociaciones',
    categoryLabel: 'Asociaciones y Colectivos',
    coords: [42.5025, -8.6810],
    description: 'Organismo comunitario que gestiona y protege los montes vecinales de San Lorenzo de Nogueira.',
    details: ['Limpieza de pistas forestales', 'Aprovechamiento de la madera', 'Mantenimiento del ecosistema local'],
    address: 'San Lorenzo, Meis'
  },
  {
    id: 'agrupacion-folclorica-trevo',
    name: 'Agrupación Folclórica “O Trevo” (San Vicente)',
    category: 'asociaciones',
    categoryLabel: 'Asociaciones y Colectivos',
    coords: [42.4931, -8.6789],
    description: 'Grupo musical y de baile tradicional gallego de gran trayectoria en San Vicente de Nogueira, preservando nuestra identidad.',
    details: ['Clases de gaita, pandereta y baile', 'Actuaciones en romerías y festivales', 'Conservación del vestuario tradicional gallego'],
    address: 'San Vicente de Nogueira, Meis'
  },
  {
    id: 'asoc-festa-callos',
    name: 'Asociación Festa dos Callos (Mosteiro)',
    category: 'asociaciones',
    categoryLabel: 'Asociaciones y Colectivos',
    coords: [42.5132, -8.7183],
    description: 'Comisión gastronómica y organizadora de la afamada "Festa dos Callos" en Mosteiro, una de las mayores citas culinarias de la comarca.',
    details: ['Organización de la fiesta gastronómica anual', 'Promoción turística y comercial del municipio', 'Colaboraciones culturales'],
    address: 'Mosteiro, Meis'
  },
  {
    id: 'coral-xuntanza-meis',
    name: 'Coral Polifónica “Xuntanza de Meis”',
    category: 'asociaciones',
    categoryLabel: 'Asociaciones y Colectivos',
    coords: [42.5135, -8.7180],
    description: 'Prestigiosa agrupación coral que reúne a voces locales y representa a Meis en certámenes musicales por toda Galicia.',
    details: ['Ensayos semanales en Mosteiro', 'Participación en misas solemnes y bodas', 'Intercambios culturales con otras corales'],
    address: 'Mosteiro, Meis'
  },
  {
    id: 'asoc-mulleres-o-marco',
    name: 'Asociación Mulleres Rurais “O Marco” (San Salvador)',
    category: 'asociaciones',
    categoryLabel: 'Asociaciones y Colectivos',
    coords: [42.5273, -8.7188],
    description: 'Asociación comunitaria en San Salvador centrada en el empoderamiento femenino, ocio y formación continua.',
    details: ['Talleres de costura y manualidades', 'Actividades de senderismo y salud', 'Charlas formativas y debates'],
    address: 'San Salvador, Meis'
  },
  {
    id: 'comunidad-montes-divino-salvador',
    name: 'Comunidad de Montes “Divino Salvador”',
    category: 'asociaciones',
    categoryLabel: 'Asociaciones y Colectivos',
    coords: [42.5285, -8.7205],
    description: 'Entidad de gestión comunitaria para la protección ambiental y forestal de las tierras comunales de San Salvador.',
    details: ['Desbroce y cuidado del monte', 'Fomento de la biodiversidad', 'Gestión vecinal democrática'],
    address: 'San Salvador, Meis'
  },
  {
    id: 'asoc-vecinos-san-martino',
    name: 'Asociación de Vecinos (San Martiño)',
    category: 'asociaciones',
    categoryLabel: 'Asociaciones y Colectivos',
    coords: [42.5147, -8.7513],
    description: 'Asociación vecinal que defiende los intereses de los habitantes de San Martiño y promueve la cohesión social.',
    details: ['Organización de las fiestas patronales', 'Reclamaciones vecinales y mejoras públicas', 'Cursos lúdicos'],
    address: 'San Martiño, Meis'
  },
  {
    id: 'asoc-vecinos-armenteira',
    name: 'Asociación de Vecinos de Armenteira',
    category: 'asociaciones',
    categoryLabel: 'Asociaciones y Colectivos',
    coords: [42.5309, -8.7475],
    description: 'Grupo vecinal activo que dinamiza la parroquia de Armenteira y da soporte a los peregrinos del Camino de Santiago.',
    details: ['Apoyo cultural a la parroquia', 'Coordinación con el albergue de peregrinos', 'Actividades festivas tradicionales'],
    address: 'Armenteira, Meis'
  },
  {
    id: 'asoc-vecinos-cabeza-boi',
    name: 'Asociación de Vecinos de Cabeza de Boi',
    category: 'asociaciones',
    categoryLabel: 'Asociaciones y Colectivos',
    coords: [42.5350, -8.7368],
    description: 'Colectivo del pintoresco lugar de Cabeza de Boi (Armenteira), encargado de conservar sus espacios y tradiciones.',
    details: ['Mantenimiento de fuentes y lavaderos', 'Comida vecinal anual', 'Gestión de necesidades locales'],
    address: 'Cabeza de Boi, Armenteira, Meis'
  },

  // --- RECURSOS CULTURALES Y EDUCATIVOS ---
  {
    id: 'casa-cultura-mosteiro',
    name: 'Casa de Cultura de Mosteiro',
    category: 'cultural',
    categoryLabel: 'Recursos Culturales y Educativos',
    coords: [42.5140, -8.7188],
    description: 'Centro de referencia para el desarrollo cultural de Meis. Alberga eventos, cursos formativos y reuniones vecinales.',
    details: ['Salón de actos', 'Talleres municipales de teatro y pintura', 'Punto de información juvenil'],
    address: 'Praza de España, Mosteiro, Meis'
  },
  {
    id: 'auditorio-mosteiro',
    name: 'Auditorio de Mosteiro',
    category: 'cultural',
    categoryLabel: 'Recursos Culturales y Educativos',
    coords: [42.5142, -8.7192],
    description: 'Moderna infraestructura escénica con capacidad para conciertos, representaciones teatrales, festivales y galas.',
    details: ['Excelente acústica', 'Capacidad para más de 300 espectadores', 'Sede de conciertos de la banda municipal'],
    address: 'Mosteiro, Meis'
  },
  {
    id: 'biblioteca-publica',
    name: 'Biblioteca Pública Municipal',
    category: 'cultural',
    categoryLabel: 'Recursos Culturales y Educativos',
    coords: [42.5138, -8.7185],
    description: 'Espacio dedicado a la lectura, el estudio y el acceso libre a internet. Cuenta con una amplia sección infantil y gallega.',
    details: ['Préstamo de libros y DVDs', 'Zona de estudio climatizada con Wi-Fi', 'Actividades de cuentacuentos y animación a la lectura'],
    address: 'Rúa Nova, Mosteiro, Meis'
  },
  {
    id: 'casa-escudeiro',
    name: 'Casa de Escudeiro (Actividades Intergeneracionales)',
    category: 'cultural',
    categoryLabel: 'Recursos Culturales y Educativos',
    coords: [42.5152, -8.7165],
    description: 'Instalación sociocultural innovadora dedicada a proyectos de intercambio intergeneracional, uniendo a mayores y jóvenes.',
    details: ['Huertos compartidos', 'Talleres de memoria e informática', 'Actividades lúdicas compartidas para niños y mayores'],
    address: 'Mosteiro, Meis'
  },
  {
    id: 'centro-sociocultural-san-martino',
    name: 'Centro Sociocultural de San Martiño',
    category: 'cultural',
    categoryLabel: 'Recursos Culturales y Educativos',
    coords: [42.5150, -8.7520],
    description: 'Espacio de reunión de la parroquia de San Martiño. Se imparten cursos, charlas e iniciativas de integración vecinal.',
    details: ['Cursos de manualidades', 'Charlas médicas y de bienestar', 'Local de ensayos musicales'],
    address: 'San Martiño, Meis'
  },
  {
    id: 'centro-cultural-san-lorenzo',
    name: 'Centro Cultural San Lorenzo',
    category: 'cultural',
    categoryLabel: 'Recursos Culturales y Educativos',
    coords: [42.5045, -8.6790],
    description: 'Punto de encuentro para los vecinos de San Lorenzo de Nogueira. Sede de talleres y eventos festivos locales.',
    details: ['Aula de informática', 'Espacio multiusos para clases', 'Centro de información comunitaria'],
    address: 'San Lorenzo de Nogueira, Meis'
  },
  {
    id: 'casa-cultura-armenteira',
    name: 'Casa de Cultura de Armenteira',
    category: 'cultural',
    categoryLabel: 'Recursos Culturales y Educativos',
    coords: [42.5312, -8.7482],
    description: 'Centro cultural situado en el entorno idílico del Monasterio de Armenteira. Acoge exposiciones y conferencias.',
    details: ['Exposiciones temporales de artistas locales', 'Lugar de sellado de credenciales del Camino', 'Talleres de artesanía tradicional'],
    address: 'Armenteira, Meis'
  },
  {
    id: 'casa-cultura-cachada',
    name: 'Casa de Cultura da Cachada (Gondes)',
    category: 'cultural',
    categoryLabel: 'Recursos Culturales y Educativos',
    coords: [42.5220, -8.7310],
    description: 'Pequeño espacio de encuentro en Gondes para la realización de cursos vecinales y actividades lúdicas.',
    details: ['Cursos de obtención cognitiva', 'Juegos infantiles en fechas festivas', 'Reuniones de barrio'],
    address: 'Gondes, Meis'
  },
  {
    id: 'casa-cultura-silvan',
    name: 'Casa de Cultura de Silván',
    category: 'cultural',
    categoryLabel: 'Recursos Culturales y Educativos',
    coords: [42.5115, -8.6920],
    description: 'Edificio social y cultural de Silván que sirve como espacio de encuentro y formación para la parroquia.',
    details: ['Talleres de memoria activa', 'Celebración de magostos populares', 'Clases de cocina gallega'],
    address: 'Silván, Meis'
  },
  {
    id: 'colegio-mosteiro',
    name: 'Colegio de Mosteiro (C.P.I. Mosteiro-Meis)',
    category: 'cultural',
    categoryLabel: 'Recursos Culturales y Educativos',
    coords: [42.5122, -8.7215],
    description: 'Centro público integrado de educación infantil, primaria y secundaria obligatoria para todo el municipio.',
    details: ['Instalaciones deportivas amplias', 'Biblioteca escolar integrada', 'Actividades extraescolares'],
    address: 'Mosteiro, Meis'
  },
  {
    id: 'colegio-armenteira',
    name: 'Colegio de Armenteira (Actividades Diversas)',
    category: 'cultural',
    categoryLabel: 'Recursos Culturales y Educativos',
    coords: [42.5320, -8.7490],
    description: 'Antiga escuela de Armenteira reconvertida en centro social. Alberga actividades deportivas y culturales para adultos.',
    details: ['Clases semanales de Zumba y Pilates', 'Talleres artísticos', 'Punto de reunión vecinal'],
    address: 'Armenteira, Meis'
  },
  {
    id: 'nova-vila-arcos',
    name: 'Nova Vila (Arcos) – Actividades Culturales y Catas',
    category: 'cultural',
    categoryLabel: 'Recursos Culturales y Educativos',
    coords: [42.5020, -8.7290],
    description: 'Espacio polivalente e innovador en Arcos que acoge exposiciones de arte, catas de vino albariño y actividades gourmet.',
    details: ['Catas de vinos locales D.O. Rías Baixas', 'Exposiciones de fotografía y pintura', 'Talleres de enoturismo y gastronomía'],
    address: 'Arcos, Meis'
  },

  // --- RECURSOS DEPORTIVOS Y DE OCIO ---
  {
    id: 'pabellon-municipal',
    name: 'Pabellón Municipal de Meis',
    category: 'deportivo',
    categoryLabel: 'Recursos Deportivos y de Ocio',
    coords: [42.5150, -8.7225],
    description: 'Pabellón cubierto principal del municipio de Meis, ideal para futsal, baloncesto y balonmano.',
    details: ['Pista multideporte de parqué', 'Gimnasio municipal equipado', 'Vestuarios adaptados'],
    address: 'Mosteiro, Meis'
  },
  {
    id: 'pabellon-deportes-mosteiro',
    name: 'Pabellón de Deportes de Mosteiro',
    category: 'deportivo',
    categoryLabel: 'Recursos Deportivos y de Ocio',
    coords: [42.5125, -8.7208],
    description: 'Polideportivo cubierto que da soporte a las actividades escolares del C.P.I. y a los clubes deportivos locales.',
    details: ['Canchas de entrenamiento', 'Sede de torneos de base', 'Luz artificial y gradas'],
    address: 'Mosteiro, Meis'
  },
  {
    id: 'campo-futbol-san-lorenzo',
    name: 'Campo de Fútbol (San Lorenzo)',
    category: 'deportivo',
    categoryLabel: 'Recursos Deportivos y de Ocio',
    coords: [42.5035, -8.6780],
    description: 'Campo de fútbol de hierba donde entrena el equipo local y se celebran torneos interparroquiales.',
    details: ['Hierba natural bien cuidada', 'Iluminación nocturna', 'Cantina y vestuarios'],
    address: 'San Lorenzo de Nogueira, Meis'
  },
  {
    id: 'cancha-tenis-san-lorenzo',
    name: 'Cancha de Tenis (San Lorenzo)',
    category: 'deportivo',
    categoryLabel: 'Recursos Deportivos y de Ocio',
    coords: [42.5038, -8.6775],
    description: 'Pista rápida de tenis al aire libre, de acceso libre para los vecinos previa reserva.',
    details: ['Superficie dura antideslizante', 'Vallado perimetral', 'Fácil acceso con aparcamiento'],
    address: 'San Lorenzo de Nogueira, Meis'
  },
  {
    id: 'piscina-san-lorenzo',
    name: 'Piscina Municipal (San Lorenzo)',
    category: 'deportivo',
    categoryLabel: 'Recursos Deportivos y de Ocio',
    coords: [42.5040, -8.6770],
    description: 'Piscina pública al aire libre, ideal para refrescarse y disfrutar en los meses estivales.',
    details: ['Zona de césped con sombra natural', 'Socorrista cualificado', 'Piscina infantil adaptada'],
    address: 'San Lorenzo de Nogueira, Meis'
  },
  {
    id: 'campo-golf-meis',
    name: 'Campo de Golf de Meis (Chan do Fento)',
    category: 'deportivo',
    categoryLabel: 'Recursos Deportivos y de Ocio',
    coords: [42.5480, -8.7180],
    description: 'Espectacular campo de golf de 18 hoyos situado en lo alto de Meis, rodeado de pinares y con vistas a las Rías Baixas.',
    details: ['18 hoyos de campeonato', 'Casa Club con cafetería y restaurante de nivel', 'Escuela de golf y zona de prácticas'],
    address: 'Monte Chan do Fento, Silván, Meis'
  },
  {
    id: 'parques-infantiles',
    name: 'Parques Infantiles (San Salvador y Armenteira)',
    category: 'deportivo',
    categoryLabel: 'Recursos Deportivos y de Ocio',
    coords: [42.5298, -8.7468],
    description: 'Áreas de juego infantil seguras dotadas de columpios modernos, suelo de caucho protector y zonas verdes.',
    details: ['Columpios homologados de madera y metal', 'Bancos para acompañantes a la sombra', 'Entornos libres de tráfico de vehículos'],
    address: 'San Salvador y Armenteira, Meis'
  },
  {
    id: 'campo-festa-a-boca',
    name: 'Gran Espacio Natural “Campo da Festa da Boca” (Paradela)',
    category: 'deportivo',
    categoryLabel: 'Recursos Deportivos y de Ocio',
    coords: [42.5085, -8.7070],
    description: 'Enorme explanada y arboleda natural donde se celebran las fiestas patronales de Paradela y eventos al aire libre.',
    details: ['Carballeira tradicional gallega (robledal)', 'Escenario fijo para orquestas', 'Mesas de piedra para pícnic'],
    address: 'Paradela, Meis'
  },
  {
    id: 'playa-fluvial-umia',
    name: 'Playa Fluvial del Río Umia',
    category: 'deportivo',
    categoryLabel: 'Recursos Deportivos y de Ocio',
    coords: [42.5015, -8.7450],
    description: 'Hermosa playa fluvial a orillas del río Umia que cuenta con una amplia zona verde y aguas limpias aptas para el baño.',
    details: ['Pantalán flotante para bañistas', 'Área de barbacoas e instalaciones sanitarias', 'Conexión directa con el sendero peatonal del Umia'],
    address: 'Río Umia (cerca de Arcos), Meis'
  },
  {
    id: 'area-recreativa-arcos',
    name: 'Área Recreativa de Arcos (Portapisión)',
    category: 'deportivo',
    categoryLabel: 'Recursos Deportivos y de Ocio',
    coords: [42.4995, -8.7315],
    description: 'Zona de descanso idílica equipada con mesas de piedra a la sombra de grandes árboles, al lado de un molino de agua restaurado.',
    details: ['Molino de agua visitable', 'Mesas de piedra e iluminación nocturna', 'Espacio de senderismo infantil fluvial'],
    address: 'Portapisión, Arcos, Meis'
  },

  // --- RECURSOS NATURALES Y RUTAS ---
  {
    id: 'ruta-rio-san-martino',
    name: 'Ruta do Río San Martiño',
    category: 'natural',
    categoryLabel: 'Recursos Naturales y Rutas',
    coords: [42.5160, -8.7505],
    description: 'Sendero de senderismo lineal que discurre en paralelo al curso del río San Martiño, cruzando bosques tradicionales y pequeños puentes.',
    details: ['Dificultad baja, ideal para familias', 'Molinos de agua tradicionales en la ruta', 'Flora autóctona de ribera'],
    address: 'San Martiño, Meis'
  },
  {
    id: 'ruta-pedra-auga',
    name: 'Ruta da Pedra e da Auga',
    category: 'natural',
    categoryLabel: 'Recursos Naturales y Rutas',
    coords: [42.5315, -8.7460],
    description: 'Una de las rutas de senderismo más famosas de Galicia. Une Ribadumia con el Monasterio de Armenteira discurriendo al lado de decenas de molinos de agua restaurados.',
    details: ['Aldea Labrega tradicional en la cumbre', 'Sendero totalmente homologado y acondicionado', 'Espectacular paisaje fluvial e histórico'],
    address: 'Armenteira, Meis'
  },
  {
    id: 'espacios-naturales-umia-arcos-boca',
    name: 'Espacios Naturales Protegidos (Umia, Arcos y A Boca)',
    category: 'natural',
    categoryLabel: 'Recursos Naturales y Rutas',
    coords: [42.5020, -8.7380],
    description: 'Conjunto de áreas naturales que destacan por su gran biodiversidad fluvial e interés botánico.',
    details: ['Avistamiento de aves acuáticas', 'Bosques de ribera preservados', 'Puntos fotográficos excepcionales'],
    address: 'Meis, Pontevedra'
  },

  // --- RECURSOS RELIGIOSOS ---
  {
    id: 'parroquia-san-lorenzo',
    name: 'Parroquia de San Lorenzo de Nogueira',
    category: 'religioso',
    categoryLabel: 'Recursos Religiosos',
    coords: [42.5047, -8.6792],
    description: 'Iglesia parroquial barroca de gran devoción local, rodeada de un acogedor atrio y cruceiro tradicional.',
    details: ['Fachada barroca del siglo XVIII', 'Retablos policromados interiores', 'Lugar de culto dominical activo'],
    address: 'San Lorenzo, Meis'
  },
  {
    id: 'parroquia-san-salvador',
    name: 'Parroquia de San Salvador de Meis',
    category: 'religioso',
    categoryLabel: 'Recursos Religiosos',
    coords: [42.5280, -8.7198],
    description: 'Centro religioso principal de la parroquia de San Salvador, que conserva un cementerio histórico y arquitectura sobria.',
    details: ['Iglesia parroquial tradicional', 'Cruceiro del s. XIX', 'Celebración del Divino Salvador'],
    address: 'San Salvador, Meis'
  },
  {
    id: 'parroquia-san-martino',
    name: 'Parroquia de San Martiño de Meis',
    category: 'religioso',
    categoryLabel: 'Recursos Religiosos',
    coords: [42.5144, -8.7510],
    description: 'Conjunto eclesiástico de San Martiño, templo tradicional de gran arraigo para el vecindario de la parroquia.',
    details: ['Edificación románica de origen', 'Hermosa romería anual de San Martiño', 'Cuidado jardín parroquial'],
    address: 'San Martiño, Meis'
  },
  {
    id: 'monasterio-armenteira',
    name: 'Monasterio de Santa María de Armenteira',
    category: 'religioso',
    categoryLabel: 'Recursos Religiosos',
    coords: [42.5323, -8.7485],
    description: 'Espectacular monasterio cisterciense fundado en el s. XII. Lugar de peregrinación obligatoria y retiro espiritual activo.',
    details: ['Iglesia románica con rosetón ajedrezado', 'Claustro renacentista-barroco visitable', 'Monjas cistercienses residentes que elaboran jabones artesanales'],
    address: 'Rúa do Mosteiro, Armenteira, Meis'
  },
  {
    id: 'catequesis-paradela',
    name: 'Grupo de Catequesis de Paradela',
    category: 'religioso',
    categoryLabel: 'Recursos Religiosos',
    coords: [42.5078, -8.7068],
    description: 'Agrupación parroquial dedicada a la formación religiosa de los niños de la parroquia de Paradela.',
    details: ['Preparación para la Primera Comunión', 'Organización de belenes de Navidad', 'Actividades de voluntariado caritativo'],
    address: 'Paradela, Meis'
  },

  // --- EVENTOS, FIESTAS Y COMISIONES ---
  {
    id: 'comision-san-vicente',
    name: 'Comisión de Fiestas de San Vicente',
    category: 'eventos',
    categoryLabel: 'Eventos, Fiestas y Comisiones',
    coords: [42.4925, -8.6795],
    description: 'Comité de vecinos encargado de la organización de las fiestas populares y patronales de San Vicente de Nogueira.',
    details: ['Organización de verbenas con orquestas', 'Fuegos artificiales tradicionales', 'Juegos populares para niños'],
    address: 'San Vicente de Nogueira, Meis'
  },
  {
    id: 'comision-festa-callos-org',
    name: 'Comisión Organizadora de la Festa dos Callos',
    category: 'eventos',
    categoryLabel: 'Eventos, Fiestas y Comisiones',
    coords: [42.5133, -8.7185],
    description: 'Coordinadores del festival gastronómico más relevante de Meis, preparando miles de raciones de callos de gran calidad.',
    details: ['Raciones en cazuela de barro tradicional', 'Venta anticipada de tiques', 'Premios culinarios locales'],
    address: 'Mosteiro, Meis'
  },
  {
    id: 'comision-divino-salvador',
    name: 'Comisión de Fiestas Divino Salvador',
    category: 'eventos',
    categoryLabel: 'Eventos, Fiestas y Comisiones',
    coords: [42.5276, -8.7192],
    description: 'Grupo vecinal de San Salvador que organiza las verbenas estivales en honor al patrón "Divino Salvador".',
    details: ['Eventos musicales nocturnos', 'Procesión tradicional y misa cantada', 'Pasacalles con charangas'],
    address: 'San Salvador, Meis'
  },
  {
    id: 'comision-san-martino',
    name: 'Comisión de Fiestas de San Martiño',
    category: 'eventos',
    categoryLabel: 'Eventos, Fiestas y Comisiones',
    coords: [42.5146, -8.7516],
    description: 'Vecinos de San Martiño dedicados a sufragar y organizar la festividad de su patrón en noviembre y verbenas de verano.',
    details: ['Fiesta del magosto popular con castañas', 'Grandes orquestas de Galicia', 'Campeonatos de cartas populares'],
    address: 'San Martiño, Meis'
  },
  {
    id: 'comision-silvan',
    name: 'Comisión de Fiestas de Silván',
    category: 'eventos',
    categoryLabel: 'Eventos, Fiestas y Comisiones',
    coords: [42.5110, -8.6925],
    description: 'Comisión vecinal de Silván responsable de mantener con vida las romerías de la parroquia.',
    details: ['Misas solemnes tradicionales', 'Sesiones vermú', 'Atracciones infantiles itinerantes'],
    address: 'Silván, Meis'
  },
  {
    id: 'comision-armenteira',
    name: 'Comisión de Fiestas de Armenteira (Romería de las Cabezas)',
    category: 'eventos',
    categoryLabel: 'Eventos, Fiestas y Comisiones',
    coords: [42.5318, -8.7478],
    description: 'Organizadores de la "Romería de las Cabezas" en Semana Santa, una de las mayores peregrinaciones religiosas de la provincia.',
    details: ['Tradicional bendición de cabezas en el Monasterio', 'Mercado ambulante gigante de rosquillas', 'Dinamización turística'],
    address: 'Armenteira, Meis'
  },
  {
    id: 'festa-bolo-romaria-san-gregorio',
    name: 'Festa do Bolo y Romaría de San Gregorio (Paradela)',
    category: 'eventos',
    categoryLabel: 'Eventos, Fiestas y Comisiones',
    coords: [42.5088, -8.7065],
    description: 'Celebración centenaria de Paradela donde se degusta el "Bolo de millo" (pan de maíz tradicional relleno) y se rinde homenaje a San Gregorio.',
    details: ['Degustación de bolos de millo con panceta y chorizo', 'Música y danza tradicional a cargo de gaiteros', 'Juegos populares gallegos'],
    address: 'Campo da Festa da Boca, Paradela, Meis'
  },

  // --- SERVICIOS Y OTROS RECURSOS ---
  {
    id: 'concello-meis',
    name: 'Concello de Meis (Casa Consistorial)',
    category: 'servicios',
    categoryLabel: 'Servicios y Otros Recursos',
    coords: [42.5143, -8.7182],
    description: 'Ayuntamiento de Meis. Centro administrativo principal de servicios ciudadanos, urbanísticos y sociales.',
    details: ['Registro general y padrón', 'Servicios sociales y empleo', 'Policía Local de Meis'],
    address: 'Praza de España, 1, Mosteiro, Meis',
    contact: '986 71 20 01'
  },
  {
    id: 'centro-social-meis',
    name: 'Centro Social de Meis',
    category: 'servicios',
    categoryLabel: 'Servicios y Otros Recursos',
    coords: [42.5146, -8.7175],
    description: 'Edificio administrativo que acoge los servicios de atención a mayores, fomento del empleo y orientación familiar.',
    details: ['Servicio de ayuda a domicilio', 'Trabajadores sociales', 'Aulas de inserción laboral'],
    address: 'Mosteiro, Meis'
  },
  {
    id: 'cafeterias-casa-samuel-pedra',
    name: 'Cafeterías y Gastronomía (Casa Samuel / A Pedra)',
    category: 'servicios',
    categoryLabel: 'Servicios y Otros Recursos',
    coords: [42.5310, -8.7495],
    description: 'Establecimientos hosteleros tradicionales situados en Armenteira y Mosteiro, ideales para degustar café, tapas y albariño.',
    details: ['Café-Bar Casa Samuel (Armenteira): desayunos abundantes', 'Tapería A Pedra: comida tradicional gallega', 'Terrazas agradables en plena ruta turística'],
    address: 'Armenteira y Mosteiro, Meis'
  },
  {
    id: 'fisioterapia-castineira',
    name: 'Fisioterapia en Castiñeira',
    category: 'servicios',
    categoryLabel: 'Servicios y Otros Recursos',
    coords: [42.5200, -8.7050],
    description: 'Centro de fisioterapia y rehabilitación especializada ubicado en el tranquilo lugar de Castiñeira.',
    details: ['Tratamiento de lesiones deportivas', 'Osteopatía y pilates clínico', 'Atención personalizada con cita previa'],
    address: 'Lugar de Castiñeira, Meis'
  },
  {
    id: 'albergues-armenteira',
    name: 'Albergues de Armenteira (Público y Privado)',
    category: 'servicios',
    categoryLabel: 'Servicios y Otros Recursos',
    coords: [42.5325, -8.7470],
    description: 'Alojamientos para peregrinos que recorren la hermosa variante espiritual de la Ruta Jacobea.',
    details: ['Albergue de la Xunta de Galicia (Público): literas y cocina', 'Albergue Privado: habitaciones compartidas y jardín exterior', 'Lavadero e internet Wi-Fi'],
    address: 'Cabeza de Boi / Armenteira, Meis'
  }
];
