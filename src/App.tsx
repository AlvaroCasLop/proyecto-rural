import React, { useEffect, useRef, useState, useMemo } from 'react';
import L from 'leaflet';
import { 
  Search, 
  MapPin, 
  Phone, 
  ArrowLeft, 
  Navigation, 
  Map as MapIcon, 
  List, 
  X, 
  ChevronRight, 
  Sparkles,
  Users,
  BookOpen,
  Activity,
  Compass,
  Church,
  Calendar,
  Info
} from 'lucide-react';
import { locationsData, CATEGORIES } from './data/locations';
import type { LocationItem } from './data/locations';

// Helper to get Lucide icon component dynamically
const getIconComponent = (category: string) => {
  switch (category) {
    case 'asociaciones': return Users;
    case 'cultural': return BookOpen;
    case 'deportivo': return Activity;
    case 'natural': return Compass;
    case 'religioso': return Church;
    case 'eventos': return Calendar;
    default: return Info;
  }
};

export default function App() {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const markersRef = useRef<{ [key: string]: L.Marker }>({});

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<LocationItem | null>(null);
  const [viewMode, setViewMode] = useState<'split' | 'list' | 'map'>('split');
  const [isMobile, setIsMobile] = useState(false);

  // Check window width for responsive views
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) {
        setViewMode(prev => prev === 'split' ? 'map' : prev);
      } else {
        setViewMode('split');
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Filtered locations based on search and category
  const filteredLocations = useMemo(() => {
    return locationsData.filter(loc => {
      const matchesSearch = loc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            loc.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            (loc.address && loc.address.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesCategory = !selectedCategory || loc.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  // Initializing the map
  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;

    // Centered in Meis, Galicia
    const map = L.map(mapContainerRef.current, {
      zoomControl: false // Custom zoom controls or standard at custom position later
    }).setView([42.5186, -8.7024], 13);

    // Beautiful Voyager dark/light map tiles
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      maxZoom: 19
    }).addTo(map);

    // Zoom buttons position
    L.control.zoom({ position: 'bottomright' }).addTo(map);

    mapRef.current = map;

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  // Update map markers when filtered locations change
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    // Clear existing markers
    Object.values(markersRef.current).forEach(marker => marker.remove());
    markersRef.current = {};

    // Create markers for filtered locations
    filteredLocations.forEach(loc => {
      const catConfig = CATEGORIES[loc.category];
      
      // Custom DivIcon representing a colorful modern pin
      const iconHtml = `
        <div class="custom-marker-pin ${selectedLocation?.id === loc.id ? 'active pulse-active' : ''}" style="background-color: ${catConfig.color}; border-color: ${selectedLocation?.id === loc.id ? '#ffffff' : 'rgba(255,255,255,0.75)'}">
          <div class="custom-marker-icon-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              ${loc.category === 'asociaciones' ? '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>' : 
                loc.category === 'cultural' ? '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>' :
                loc.category === 'deportivo' ? '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>' :
                loc.category === 'natural' ? '<circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>' :
                loc.category === 'religioso' ? '<path d="M12 2v20M17 5H7M12 10h5M12 14H8"/>' :
                loc.category === 'eventos' ? '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>' :
                '<circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>'}
            </svg>
          </div>
        </div>
      `;

      const markerIcon = L.divIcon({
        className: 'custom-marker-container',
        html: iconHtml,
        iconSize: [30, 42],
        iconAnchor: [15, 42],
        popupAnchor: [0, -40]
      });

      const marker = L.marker(loc.coords, { icon: markerIcon }).addTo(map);

      // Create popup content
      const popupDiv = document.createElement('div');
      popupDiv.innerHTML = `
        <div class="custom-popup-title">${loc.name}</div>
        <div class="custom-popup-desc">${loc.description}</div>
      `;
      
      const btn = document.createElement('button');
      btn.className = 'custom-popup-btn';
      btn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-info"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
        Ver detalles
      `;
      btn.onclick = () => {
        handleSelectLocation(loc);
      };
      
      popupDiv.appendChild(btn);

      marker.bindPopup(popupDiv);
      markersRef.current[loc.id] = marker;
    });

    // Auto-fit bounds if we have points and no specific selection is active
    if (filteredLocations.length > 0 && !selectedLocation) {
      const group = L.featureGroup(Object.values(markersRef.current));
      map.fitBounds(group.getBounds().pad(0.15));
    }
  }, [filteredLocations, selectedLocation]);

  // Handle location selection
  const handleSelectLocation = (loc: LocationItem) => {
    setSelectedLocation(loc);
    
    // Zoom/pan map to location
    if (mapRef.current) {
      mapRef.current.flyTo(loc.coords, 16, {
        animate: true,
        duration: 1.5
      });
      
      // Open marker popup after animation completes
      setTimeout(() => {
        const marker = markersRef.current[loc.id];
        if (marker) {
          marker.openPopup();
        }
      }, 1000);
    }

    if (isMobile) {
      setViewMode('map'); // In mobile, show on map
    }
  };

  // Clear selected location
  const handleBackToList = () => {
    setSelectedLocation(null);
    if (mapRef.current) {
      mapRef.current.closePopup();
      // Refit bounds
      if (filteredLocations.length > 0) {
        const group = L.featureGroup(Object.values(markersRef.current));
        mapRef.current.fitBounds(group.getBounds().pad(0.15));
      }
    }
  };

  return (
    <div style={{ display: 'flex', height: '100%', width: '100%', position: 'relative' }}>
      
      {/* Sidebar Container */}
      <aside 
        className="animate-slide"
        style={{
          width: isMobile ? '100%' : '420px',
          height: '100%',
          backgroundColor: 'var(--bg-sidebar)',
          backdropFilter: 'var(--glass-blur)',
          borderRight: '1px solid var(--border-color)',
          display: isMobile && viewMode === 'map' ? 'none' : 'flex',
          flexDirection: 'column',
          zIndex: 1000,
          position: isMobile ? 'absolute' : 'relative',
          transition: 'all 0.3s ease',
          boxShadow: 'var(--glass-shadow)',
        }}
      >
        
        {/* Sidebar Header */}
        <div style={{ 
          padding: '24px 20px 16px 20px', 
          borderBottom: '1px solid var(--border-color)',
          background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(15, 23, 42, 0.8) 100%)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
            <div style={{ 
              backgroundColor: 'var(--color-accent)', 
              padding: '6px', 
              borderRadius: '8px', 
              color: 'white',
              boxShadow: '0 0 12px rgba(16, 185, 129, 0.4)'
            }}>
              <Compass size={22} />
            </div>
            <div>
              <h1 style={{ fontSize: '1.25rem', fontWeight: 800, letterSpacing: '-0.5px' }}>
                Roteiro Rural Meis
              </h1>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                MAPA INTERACTIVO DE GALICIA
              </p>
            </div>
          </div>
        </div>

        {/* DETAILS PANEL (active selection) */}
        {selectedLocation ? (
          <div className="animate-fade" style={{ display: 'flex', flexDirection: 'column', flex: 1, overflow: 'hidden' }}>
            {/* Back Button */}
            <button 
              onClick={handleBackToList}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 20px',
                border: 'none',
                background: 'rgba(255,255,255,0.03)',
                color: 'var(--text-secondary)',
                fontSize: '0.85rem',
                fontWeight: 600,
                cursor: 'pointer',
                textAlign: 'left',
                borderBottom: '1px solid var(--border-color)',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; }}
            >
              <ArrowLeft size={16} />
              Volver al listado
            </button>

            {/* Scrollable details */}
            <div style={{ padding: '24px 20px', flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <span style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '6px', 
                  fontSize: '0.75rem', 
                  fontWeight: 700, 
                  textTransform: 'uppercase',
                  color: CATEGORIES[selectedLocation.category].color,
                  backgroundColor: `${CATEGORIES[selectedLocation.category].color}15`,
                  padding: '4px 10px',
                  borderRadius: '20px',
                  marginBottom: '12px'
                }}>
                  {React.createElement(getIconComponent(selectedLocation.category), { size: 12 })}
                  {selectedLocation.categoryLabel}
                </span>
                
                <h2 style={{ fontSize: '1.4rem', fontWeight: 800, lineHeight: 1.25, color: '#fff' }}>
                  {selectedLocation.name}
                </h2>
              </div>

              <div style={{ height: '1px', backgroundColor: 'var(--border-color)' }} />

              <div>
                <h3 style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '0.5px' }}>
                  Descripción
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  {selectedLocation.description}
                </p>
              </div>

              {selectedLocation.details && selectedLocation.details.length > 0 && (
                <div>
                  <h3 style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '0.5px' }}>
                    Actividades y Características
                  </h3>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', listStyle: 'none' }}>
                    {selectedLocation.details.map((detail, idx) => (
                      <li key={idx} style={{ 
                        display: 'flex', 
                        alignItems: 'flex-start', 
                        gap: '8px', 
                        fontSize: '0.9rem', 
                        color: 'var(--text-secondary)' 
                      }}>
                        <span style={{ color: 'var(--color-accent)', marginTop: '2px', fontWeight: 'bold' }}>✓</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div style={{ height: '1px', backgroundColor: 'var(--border-color)' }} />

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {selectedLocation.address && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    <MapPin size={16} style={{ color: 'var(--color-accent)', flexShrink: 0 }} />
                    <span>{selectedLocation.address}</span>
                  </div>
                )}

                {selectedLocation.contact && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    <Phone size={16} style={{ color: 'var(--color-accent)', flexShrink: 0 }} />
                    <span>{selectedLocation.contact}</span>
                  </div>
                )}
              </div>

              {/* Navigation button */}
              <button 
                onClick={() => {
                  window.open(`https://www.google.com/maps/dir/?api=1&destination=${selectedLocation.coords[0]},${selectedLocation.coords[1]}`, '_blank');
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  backgroundColor: 'var(--color-accent)',
                  color: '#fff',
                  border: 'none',
                  padding: '12px',
                  borderRadius: '8px',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  marginTop: '10px',
                  transition: 'background 0.2s',
                  boxShadow: '0 4px 12px rgba(16, 185, 129, 0.2)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-accent-hover)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--color-accent)'}
              >
                <Navigation size={16} />
                Cómo llegar
              </button>
            </div>
          </div>
        ) : (
          /* SEARCH, FILTERS & LIST PANEL */
          <div style={{ display: 'flex', flexDirection: 'column', flex: 1, overflow: 'hidden' }}>
            
            {/* Search Input */}
            <div style={{ padding: '16px 20px 12px 20px' }}>
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                <Search 
                  size={18} 
                  style={{ 
                    position: 'absolute', 
                    left: '12px', 
                    color: 'var(--text-muted)' 
                  }} 
                />
                <input 
                  type="text" 
                  placeholder="Buscar localizaciones, recursos..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 12px 10px 38px',
                    borderRadius: '8px',
                    border: '1px solid var(--border-color)',
                    backgroundColor: 'rgba(255,255,255,0.03)',
                    color: '#fff',
                    fontSize: '0.9rem',
                    outline: 'none',
                    transition: 'all 0.2s'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'var(--color-accent)';
                    e.target.style.backgroundColor = 'rgba(255,255,255,0.06)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'var(--border-color)';
                    e.target.style.backgroundColor = 'rgba(255,255,255,0.03)';
                  }}
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    style={{
                      position: 'absolute',
                      right: '12px',
                      background: 'none',
                      border: 'none',
                      color: 'var(--text-muted)',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <X size={16} />
                  </button>
                )}
              </div>
            </div>

            {/* Category Filter Pills */}
            <div style={{ 
              padding: '0 20px 14px 20px', 
              borderBottom: '1px solid var(--border-color)',
            }}>
              <div 
                style={{ 
                  display: 'flex', 
                  flexWrap: 'wrap',
                  gap: '6px', 
                  paddingBottom: '4px',
                  paddingTop: '4px',
                }}>
                <button
                  onClick={() => setSelectedCategory(null)}
                  style={{
                    padding: '6px 12px',
                    borderRadius: '20px',
                    border: '1px solid',
                    borderColor: !selectedCategory ? 'var(--color-accent)' : 'var(--border-color)',
                    backgroundColor: !selectedCategory ? 'rgba(16, 185, 129, 0.12)' : 'transparent',
                    color: !selectedCategory ? 'var(--color-accent)' : 'var(--text-secondary)',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.2s'
                  }}
                >
                  Todos
                </button>
                {Object.entries(CATEGORIES).map(([key, config]) => {
                  const isSelected = selectedCategory === key;
                  const Icon = getIconComponent(key);
                  return (
                    <button
                      key={key}
                      onClick={() => setSelectedCategory(isSelected ? null : key)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '6px 12px',
                        borderRadius: '20px',
                        border: '1px solid',
                        borderColor: isSelected ? config.color : 'var(--border-color)',
                        backgroundColor: isSelected ? `${config.color}15` : 'transparent',
                        color: isSelected ? config.color : 'var(--text-secondary)',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        whiteSpace: 'nowrap',
                        transition: 'all 0.2s'
                      }}
                    >
                      <Icon size={12} />
                      {config.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Scrollable Results List */}
            <div style={{ flex: 1, overflowY: 'auto', padding: '16px 20px' }}>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                marginBottom: '14px'
              }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.5px' }}>
                  RESULTADOS ({filteredLocations.length})
                </span>
              </div>

              {filteredLocations.length === 0 ? (
                <div style={{ 
                  textAlign: 'center', 
                  padding: '40px 20px', 
                  color: 'var(--text-muted)',
                  fontSize: '0.9rem'
                }}>
                  No se encontraron localizaciones con los filtros actuales.
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {filteredLocations.map(loc => {
                    const config = CATEGORIES[loc.category];
                    const Icon = getIconComponent(loc.category);
                    const isSelected = false;
                    
                    return (
                      <div
                        key={loc.id}
                        onClick={() => handleSelectLocation(loc)}
                        style={{
                          padding: '14px',
                          borderRadius: '10px',
                          border: '1px solid',
                          borderColor: isSelected ? config.color : 'var(--border-color)',
                          backgroundColor: isSelected ? `${config.color}05` : 'rgba(255,255,255,0.02)',
                          cursor: 'pointer',
                          transition: 'all 0.2s',
                          display: 'flex',
                          alignItems: 'flex-start',
                          justifyContent: 'space-between',
                          gap: '12px'
                        }}
                        onMouseEnter={(e) => {
                          if (!isSelected) {
                            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
                            e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.04)';
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (!isSelected) {
                            e.currentTarget.style.borderColor = 'var(--border-color)';
                            e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.02)';
                          }
                        }}
                      >
                        <div style={{ display: 'flex', gap: '12px', flex: 1 }}>
                          <div style={{ 
                            padding: '8px', 
                            borderRadius: '8px', 
                            backgroundColor: `${config.color}15`,
                            color: config.color,
                            marginTop: '2px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}>
                            <Icon size={16} />
                          </div>
                          <div>
                            <h4 style={{ 
                              fontSize: '0.95rem', 
                              fontWeight: 700, 
                              color: '#fff',
                              marginBottom: '4px',
                              lineHeight: 1.3
                            }}>
                              {loc.name}
                            </h4>
                            <p style={{ 
                              fontSize: '0.8rem', 
                              color: 'var(--text-secondary)',
                              lineHeight: 1.4,
                              display: '-webkit-box',
                              WebkitLineClamp: 2,
                              WebkitBoxOrient: 'vertical',
                              overflow: 'hidden'
                            }}>
                              {loc.description}
                            </p>
                          </div>
                        </div>
                        <ChevronRight size={16} style={{ color: 'var(--text-muted)', marginTop: '10px' }} />
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        )}
      </aside>

      {/* Floating Toggle Controls (Mobile Only) */}
      {isMobile && (
        <div style={{ 
          position: 'absolute', 
          bottom: '24px', 
          left: '50%', 
          transform: 'translateX(-50%)', 
          zIndex: 1001,
          display: 'flex',
          gap: '8px',
          backgroundColor: 'var(--bg-sidebar)',
          backdropFilter: 'var(--glass-blur)',
          border: '1px solid var(--border-color)',
          borderRadius: '30px',
          padding: '4px',
          boxShadow: 'var(--glass-shadow)'
        }}>
          <button 
            onClick={() => setViewMode('list')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '20px',
              fontSize: '0.8rem',
              fontWeight: 600,
              cursor: 'pointer',
              backgroundColor: viewMode === 'list' ? 'var(--color-accent)' : 'transparent',
              color: '#fff',
              transition: 'background 0.2s'
            }}
          >
            <List size={14} />
            Lista
          </button>
          <button 
            onClick={() => setViewMode('map')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '20px',
              fontSize: '0.8rem',
              fontWeight: 600,
              cursor: 'pointer',
              backgroundColor: viewMode === 'map' ? 'var(--color-accent)' : 'transparent',
              color: '#fff',
              transition: 'background 0.2s'
            }}
          >
            <MapIcon size={14} />
            Mapa
          </button>
        </div>
      )}

      {/* Map Container */}
      <main 
        style={{ 
          flex: 1, 
          height: '100%', 
          position: 'relative'
        }}
      >
        <div 
          ref={mapContainerRef} 
          style={{ width: '100%', height: '100%' }}
        />

        {/* Small top-right floating helper */}
        <div style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          zIndex: 999,
          backgroundColor: 'var(--bg-sidebar)',
          backdropFilter: 'var(--glass-blur)',
          border: '1px solid var(--border-color)',
          padding: '8px 16px',
          borderRadius: '20px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          boxShadow: 'var(--glass-shadow)',
          pointerEvents: 'none'
        }}>
          <Sparkles size={14} style={{ color: 'var(--color-gold)' }} />
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-primary)', letterSpacing: '0.3px' }}>
            Concello de Meis, Galicia
          </span>
        </div>
      </main>

    </div>
  );
}
