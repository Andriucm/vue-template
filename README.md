# Plantilla personal para Vue 3

Esta es mi plantilla personal para iniciar nuevos proyectos con **Vue 3** y **Vite**. Incluye configuración lista para usar con TypeScript, ESLint, y las herramientas recomendadas para un desarrollo ágil y ordenado.

---

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup
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
