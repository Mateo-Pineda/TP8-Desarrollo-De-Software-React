# React + TypeScript + Vite

React + TypeScript + Vite

Esta plantilla proporciona una configuración mínima para que React funcione en Vite con HMR (Hot Module Replacement) y algunas reglas de ESLint.

Actualmente, hay dos complementos oficiales disponibles:

    @vitejs/plugin-react: Utiliza Babel para el Fast Refresh.
    @vitejs/plugin-react-swc: Utiliza SWC para el Fast Refresh.

Ampliando la configuración de ESLint

Si estás desarrollando una aplicación para producción, recomendamos actualizar la configuración para habilitar reglas de linting con reconocimiento de tipos:

    Configura la propiedad parserOptions en el nivel superior de esta forma:

```js
export default tseslint.config({
  languageOptions: {
    // otras opciones...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

Reemplaza tseslint.configs.recommended por tseslint.configs.recommendedTypeChecked o tseslint.configs.strictTypeChecked.

Opcionalmente, agrega ...tseslint.configs.stylisticTypeChecked.

Instala eslint-plugin-react y actualiza la configuración:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Establecer la versión de React
  settings: { react: { version: '18.3' } },
  plugins: {
    // Agregar el plugin de React
    react,
  },
  rules: {
    // otras reglas...
    // Habilitar sus reglas recomendadas
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
