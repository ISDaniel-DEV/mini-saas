**Descripcion:** 

Un sistema donde los usuarios crean automatizaciones que se ejecutan solas, integrando servicios externos, usando backend + colas + workers + despliegue real.

# 📊 Cómo funciona todo junto (flujo real)

1. Usuario crea automatización
2. Se guarda en la base de datos
3. Un scheduler detecta que toca ejecutarla
4. Se mete un job en la cola
5. El worker ejecuta el job
6. Se llama a Telegram / Notion
7. Se guarda resultado
