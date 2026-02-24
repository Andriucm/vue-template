---
description: Define este proyecto como plantilla base de Vue.js para la generación de AGENTS.md
mode: subagent
---

# Directivas de Proyecto Base (Vue.js)

Este repositorio es un **proyecto base (boilerplate)** desarrollado con **Vue.js**. Tu objetivo al ejecutar `/init` es capturar la esencia de esta arquitectura para replicarla fielmente.

### Instrucciones de Análisis:
1. **Reconocimiento de Estructura:** Analiza la jerarquía de carpetas actual (ej. `/components`, `/composables`, `/stores`) y documéntala en el `AGENTS.md` como la estructura obligatoria a seguir.
2. **Patrones de Vue:** Identifica si usamos **Composition API** (script setup) o Options API, y establece que cualquier código nuevo debe seguir este estilo.
3. **Estilo de Código:** Observa cómo se nombran los archivos (PascalCase para componentes, kebab-case para assets) y regístralo como norma.
4. **Gestión de Estado y Rutas:** Detecta el uso de Pinia/Vuex y Vue Router para definir las pautas de expansión del proyecto.

### Objetivo del AGENTS.md:
El archivo resultante debe servir para que, en el futuro, cualquier agente sepa que este es el "molde" y no debe desviarse de las decisiones de diseño tomadas aquí.
