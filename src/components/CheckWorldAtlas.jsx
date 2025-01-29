// src/components/CheckWorldAtlas.jsx
import React, { useEffect } from 'react';
import { feature } from 'topojson-client';

const geoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json';

export default function CheckWorldAtlas() {
  useEffect(() => {
    fetch(geoUrl)
      .then(res => res.json())
      .then((worldData) => {
        // "countries" is typically the key in countries-50m
        const { features } = feature(worldData, worldData.objects.countries);

        // Each "feature" has .properties with fields like { ADMIN, NAME_LONG, ISO_A3, etc. }
        features.forEach((f, i) => {
          // Example: log the entire properties object for the first few countries
          if (i < 30) {
            console.log(`Feature #${i}:`, f.properties);
          }
        });

        console.log('Total features:', features.length);
      })
      .catch(err => console.error('Failed to fetch or parse countries-50m:', err));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>CheckWorldAtlas</h2>
      <p>
        Open the console to see the first ~30 country <code>properties</code>.
      </p>
    </div>
  );
}






