# ReactNative_LaTri 🇪🇨⚽

¡Bienvenido al proyecto **ReactNative_LaTri**! Esta es una aplicación móvil desarrollada con **React Native** y **Expo** (v54.0) diseñada para los aficionados de la Selección Ecuatoriana de Fútbol ("La Tri").

La aplicación muestra información clave del equipo nacional, cuenta con una interfaz temática inspirada en los colores de la bandera de Ecuador (Amarillo, Azul y Rojo) y cuenta con un temporizador dinámico en tiempo real para el próximo partido.

---

## 🚀 Características Principales

- **Cuenta Regresiva en Tiempo Real**: Temporizador dinámico que descuenta los días, horas, minutos y segundos para el próximo encuentro de la Selección (Ecuador vs. Costa de Marfil).
- **Información Oficial de la Selección**: Detalla datos actuales como la Confederación (CONMEBOL), el director técnico actual (Sebastián Beccacece) y el estadio principal (Estadio Rodrigo Paz Delgado).
- **Diseño Personalizado**: Cabecera dinámica y estilizada que evoca la bandera tricolor.
- **Enrutamiento Basado en Archivos**: Utiliza `expo-router` para una navegación moderna y fluida entre pestañas.
- **Soporte Multiplataforma**: Ejecución en Android, iOS y Web.

---

## 🛠️ Requisitos Previos

Asegúrate de tener instalado en tu máquina de desarrollo:
- [Node.js](https://nodejs.org/) (versión 18 o superior)
- [pnpm](https://pnpm.io/) (Recomendado, el proyecto incluye un archivo `pnpm-lock.yaml`) o `npm` / `yarn`.
- Simulador de Android (Android Studio) o iOS (Xcode, solo macOS) o la aplicación **Expo Go** en tu dispositivo móvil.

---

## 📦 Instalación y Configuración

1. **Clonar el repositorio** (si es necesario):
   ```bash
   git clone <url-del-repositorio>
   cd ReactNative_LaTri
   ```

2. **Instalar dependencias**:
   Se recomienda usar `pnpm` ya que el proyecto está estructurado con este gestor de paquetes:
   ```bash
   pnpm install
   ```
   *Alternativa con npm:*
   ```bash
   npm install
   ```

---

## 🏃‍♂️ Ejecución del Proyecto

Para iniciar el servidor de desarrollo de Expo, ejecuta:

```bash
pnpm expo start
```
*O con npm:*
```bash
npx expo start
```

Una vez que el servidor esté corriendo, puedes:
- Presionar **`a`** para abrir en el emulador de Android.
- Presionar **`i`** para abrir en el simulador de iOS.
- Presionar **`w`** para abrir en el navegador web.
- Escanear el código QR en la terminal utilizando la aplicación **Expo Go** en tu celular para probarlo directamente en tu dispositivo físico.

### Scripts Adicionales

En `package.json` dispones de los siguientes comandos preconfigurados:
- `pnpm android` / `npm run android`: Inicia la compilación y ejecución directa en Android.
- `pnpm ios` / `npm run ios`: Inicia la compilación y ejecución directa en iOS.
- `pnpm web` / `npm run web`: Abre el proyecto en el navegador web.
- `pnpm lint` / `npm run lint`: Ejecuta el analizador de código (Linter) de Expo.

---

## 📂 Estructura del Proyecto

La estructura principal del código fuente se organiza de la siguiente manera:

```text
ReactNative_LaTri/
├── app/                  # Directorio principal de rutas (Expo Router)
│   ├── (tabs)/           # Pestañas de la aplicación
│   │   ├── _layout.tsx   # Configuración de navegación de pestañas
│   │   ├── index.tsx     # Pantalla de inicio (Countdown de La Tri & Detalles)
│   │   └── explore.tsx   # Pantalla de exploración y documentación interna
│   ├── _layout.tsx       # Root layout de la aplicación
│   └── modal.tsx         # Pantalla modal secundaria
├── components/           # Componentes visuales reutilizables
├── constants/            # Valores constantes y temas visuales (colores, fuentes)
├── styles/               # Estilos globales y específicos de pantallas
│   └── home.styles.ts    # Estilos CSS de la pantalla de inicio (Tricolor)
├── assets/               # Recursos multimedia (imágenes, logos, iconos)
├── package.json          # Archivo de configuración y dependencias de Node
└── app.json              # Configuración general de Expo (nombre, versión, etc.)
```

---

## 🎨 Temas y Estilos

El proyecto utiliza un sistema de diseño modular:
- Los estilos visuales se encuentran centralizados en el directorio `styles/`.
- La pantalla de inicio (`app/(tabs)/index.tsx`) utiliza la paleta oficial tricolor para renderizar la barra superior mediante las propiedades `yellowStripe`, `blueStripe` y `redStripe` definidas en [home.styles.ts](file:///c:/Users/demia/OneDrive/Desktop/disco/10mo%20semestre/Dispositivos%20moviles/Trabajos/ReactNative_LaTri/styles/home.styles.ts).

