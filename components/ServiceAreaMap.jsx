'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';

const MESQUITE=[32.7668,-96.5992];
const RADIUS_M=40*1609.344;

const MapInner=dynamic(()=>import('./ServiceAreaMapInner.jsx'),{
  ssr:false,
  loading:()=><div className="service-map-fallback" aria-hidden="true">Loading map…</div>
});

export function ServiceAreaMap(){
  return <div className="service-map" role="img" aria-label="Map showing a 40-mile service radius around Mesquite, Texas">
    <MapInner center={MESQUITE} radius={RADIUS_M}/>
  </div>;
}
