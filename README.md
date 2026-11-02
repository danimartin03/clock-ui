# Clock UI

Interfaz de una app de reloj con alarmas, cronómetro y temporizador.

- Web: [https://clock-ui-dani.netlify.app](https://clock-ui-dani.netlify.app/)
- Guía de estilo: [Material Design 3](https://m3.material.io/)

## Ejecutar en local

```sh
npm install
npm run dev
```

## Producción

```sh
npm run build
npm run preview
```

El build se genera en `dist/`.

## Requisitos

| Id  | Cómo se cumple                                                  |
| --- | --------------------------------------------------------------- |
| R01 | Paleta de colores en variables CSS (`:root`)                    |
| R02 | Space Grotesk y Space Mono (Google Fonts)                       |
| R03 | `prefers-color-scheme` cambia entre tema claro y oscuro         |
| R04 | Material Icons en botones y navegación                          |
| R05 | Una pestaña por vista, con `:target` y un poco de JS            |
| R06 | Navegación abajo en móvil y arriba en escritorio (`@media`)     |
| R07 | Sonido MP3 (`src/assets/alarm.mp3`) para alarmas y temporizador |
