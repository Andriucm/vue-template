# conquer-vue

Template base para mis proyectos personales en Vue 3 + TypeScript.

Este repositorio esta pensado como punto de partida: incluye estructura por capas (views, stores, services, router, models), Pinia, Vue Router, Axios, validacion con Zod y toolchain de lint/formato ya preparado.

## Requisitos

- [Bun](https://bun.sh/) instalado.
- VS Code + [Vue (Official) / Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (recomendado).

## Project Setup con Bun

### 1) Crear proyecto desde este template

Puedes usar este repo como template en GitHub o clonarlo directamente:

```sh
git clone <repo-url> mi-proyecto
cd mi-proyecto
```

### 2) Instalar dependencias

```sh
bun install
```

### 3) Levantar entorno de desarrollo

```sh
bun dev
```

Vite se ejecuta en `http://localhost:8080`.

### 4) Comandos utiles

```sh
# Type check
bun type-check

# Build de produccion
bun build

# Preview del build
bun preview

# Lint
bun lint

# Formato
bun format
```

## Navegador recomendado

- Chromium (Chrome, Edge, Brave, etc.): [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
- Firefox: [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)

## Referencias

- [Vue 3](https://vuejs.org/)
- [Vite Configuration Reference](https://vite.dev/config/)
