# AGENTS.md

Guia para agentes de codigo en este repositorio Vue.
Este proyecto se considera una plantilla base y cualquier cambio debe respetar su estructura y decisiones de arquitectura.

## Identidad del Proyecto Base

- Este repositorio es un boilerplate de Vue 3 con TypeScript.
- Tratalo como un molde: extender, no reinventar.
- Mantener coherencia con las decisiones existentes tiene prioridad sobre preferencias personales del agente.
- Si hay duda entre dos enfoques validos, elegir el mas alineado con el código ya presente.

## Estructura Obligatoria de Carpetas

Raiz funcional en `src/`:

- `src/components/`: componentes UI reutilizables.
- `src/views/`: paginas y pantallas por feature.
- `src/stores/`: estado global con Pinia.
- `src/services/`: funciones de acceso a datos/API.
- `src/router/`: definicion de rutas y guards.
- `src/models/`: tipos e interfaces de dominio.
- `src/interceptors/`: cliente HTTP y comportamiento transversal.
- `src/layouts/`: layouts compartidos.
- `src/mocks/`: mocks de datos/backend para desarrollo.
- `src/assets/`: estilos y recursos estaticos.

Archivos clave:

- `src/main.ts`: bootstrap de app.
- `src/App.vue`: shell raiz con `RouterView`.
- `src/router/index.ts`: rutas y proteccion de acceso.
- `src/interceptors/axios.ts`: Axios + mock adapter.

Regla de expansion:

- Nuevas features deben ubicarse en estas carpetas, no crear estructuras paralelas sin una razon fuerte.

## Stack y Decisiones Tecnicas

- Vue 3 + Vite.
- TypeScript.
- Composition API con `<script setup lang="ts">`.
- Pinia para estado.
- Vue Router para navegacion.
- Axios para HTTP.
- Zod para validacion.
- ESLint + Oxlint para lint.
- Prettier para formato.

## Comandos de Trabajo

Ejecutar desde `C:\code\ConquerBlock\VueJs\conquer-vue`.

### Instalacion

- `bun install`

### Desarrollo

- `bun dev`
- Inicia Vite en puerto `8080` con `host: true`.

### Build y Preview

- `bun build` (lanza `type-check` y `build-only` en paralelo)
- `bun build-only`
- `bun preview`

### Type Check

- `bun type-check` (`vue-tsc --build`)

### Lint

- `bun lint`
- `bun lint:oxlint` (`oxlint . --fix`)
- `bun lint:eslint` (`eslint . --fix --cache`)

### Formato

- `bun format` (Prettier sobre `src/`)

## Pruebas (Estado Actual y Single Test)

- Actualmente no existe script `test` en `package.json`.
- No se encontro `vitest.config.*` ni archivos `*.spec.*` / `*.test.*`.
- Si se incorpora Vitest, usar scripts recomendados:
  - `"test": "vitest"`
  - `"test:run": "vitest run"`
  - `"test:watch": "vitest"`

Ejecucion de una sola prueba (cuando exista setup):

- Un archivo: `bun test:run -- src/ruta/archivo.spec.ts`
- Un caso por nombre: `bun test:run -- src/ruta/archivo.spec.ts -t "nombre del caso"`
- One-off sin script: `npx vitest run src/ruta/archivo.spec.ts -t "nombre del caso"`

## Reglas de Estilo de Codigo

## Formato y Lint

- Prettier manda en formato.
- Comillas simples.
- Sin punto y coma.
- `printWidth` objetivo: 100.
- Evitar comentarios `eslint-disable` salvo necesidad real.

## Importaciones

- Preferir alias `@/` para modulos en `src/`.
- Usar `import type` para tipos.
- Orden recomendado:
  1. externos
  2. internos por alias `@/`
  3. relativos
  4. side effects (css/polyfills)
- Eliminar imports no usados.

## Convenciones Vue

- Usar `<script setup lang="ts">` en componentes y vistas nuevas.
- Mantener orden de bloques SFC: `template`, `script setup`, `style`.
- Evitar logica compleja en template; mover a store/service/composable.
- Preferir props/emits tipados.

## Tipos y Modelos

- Definir entidades compartidas en `src/models/`.
- Evitar `any`; usar tipos explicitos.
- Tipar inputs/outputs de funciones exportadas.
- Usar utilidades (`Omit`, `Pick`, etc.) cuando aporten claridad.

## Naming Conventions

- Componentes y vistas: archivos en PascalCase.
- Stores: patron `useXStore.ts` y export `useXStore`.
- Services: funciones orientadas a accion (`getX`, `addX`, `updateX`, `deleteX`).
- Variables y funciones: camelCase.
- Tipos/interfaces: PascalCase.
- Constantes reales: UPPER_SNAKE_CASE.
- Assets y nombres no-componentes: kebab-case cuando aplique.

## Estado, Rutas y Capas

- La gestion de estado global debe ir en Pinia (`src/stores/`).
- Las rutas se declaran y protegen en `src/router/index.ts`.
- Acceso a API va en `src/services/` usando el cliente compartido.
- Interceptores y comportamiento HTTP transversal van en `src/interceptors/`.
- Evitar llamadas HTTP directas desde templates.

## Manejo de Errores y Validacion

- En flujos async: usar `try/catch`.
- No silenciar errores.
- Incluir contexto util en logs de error.
- Para errores esperables, favorecer feedback al usuario.
- Validar entradas con Zod antes de llamar servicios.

## Checklist Operativo Para Agentes

- Antes de cerrar cambios: ejecutar `bun lint`.
- Ejecutar `bun type-check`.
- Si hay impacto runtime/UI: ejecutar `bun build`.
- Si se agregan tests: correr primero alcance minimo (single file/test).
- Mantener cambios acotados y consistentes con esta plantilla base.

## Reglas Cursor y Copilot

Se revisaron instrucciones personalizadas del repo:

- Fuente detectada: `.opencode/agents/custom-init.md`.
- Esta AGENTS.md aplica esas directivas:
  - documentar estructura obligatoria,
  - reforzar Composition API,
  - fijar normas de naming,
  - consolidar pautas de Pinia y Vue Router.

Ademas, no se encontraron:

- `.cursorrules`
- `.cursor/rules/`
- `.github/copilot-instructions.md`

Si estos archivos aparecen mas adelante, tratarlos como instrucciones de mayor prioridad para agentes.
