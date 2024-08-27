// import { eventos } from "./mocks/eventos.json";
const eventos = [
  {
    "id": 1,
    "description": "Un miembro clave del equipo ha renunciado inesperadamente.",
    "actions": [
      {
        "description": "Redistribuir las tareas entre los miembros restantes.",
        "cost": { "money": 0, "calidad": -10, "tiempo": 120, "motivacion": -5 }
      },
      {
        "description": "Contratar rápidamente a un reemplazo.",
        "cost": { "money": -5000, "calidad": -5, "tiempo": 60, "motivacion": 0 }
      },
      {
        "description": "Reestructurar el proyecto para reducir la carga de trabajo.",
        "cost": { "money": 0, "calidad": -15, "tiempo": 30, "motivacion": 5 }
      },
      {
        "description": "Motivar al equipo con un bono temporal.",
        "cost": { "money": -3000, "calidad": 0, "tiempo": 0, "motivacion": 10 }
      },
      {
        "description": "Pedir ayuda temporal de otro departamento.",
        "cost": { "money": -2000, "calidad": -5, "tiempo": 60, "motivacion": 5 }
      },
      {
        "description": "Pausar el proyecto hasta encontrar un reemplazo.",
        "cost": { "money": 0, "calidad": 0, "tiempo": 180, "motivacion": -10 }
      },
      {
        "description": "Externalizar una parte del trabajo.",
        "cost": { "money": -8000, "calidad": 5, "tiempo": 0, "motivacion": 0 }
      },
      {
        "description": "Delegar tareas críticas al equipo de gestión.",
        "cost": { "money": 0, "calidad": 0, "tiempo": 60, "motivacion": 0 }
      },
      {
        "description": "Ofrecer un aumento salarial a un miembro clave para evitar su renuncia.",
        "cost": { "money": -7000, "calidad": 5, "tiempo": 0, "motivacion": 15 }
      },
      {
        "description": "Acelerar la búsqueda de un reemplazo con una agencia de reclutamiento.",
        "cost": { "money": -6000, "calidad": 0, "tiempo": 30, "motivacion": 0 }
      }
    ]
  },
  {
    "id": 2,
    "description": "El cliente solicita un cambio importante en las especificaciones.",
    "actions": [
      {
        "description": "Negociar un nuevo contrato y tiempo de entrega.",
        "cost": { "money": 10000, "calidad": 0, "tiempo": 180, "motivacion": 0 }
      },
      {
        "description": "Aceptar el cambio y ajustar el proyecto.",
        "cost": { "money": 0, "calidad": -10, "tiempo": 240, "motivacion": -5 }
      },
      {
        "description": "Rechazar el cambio y mantener las especificaciones originales.",
        "cost": { "money": -5000, "calidad": 10, "tiempo": 0, "motivacion": 5 }
      },
      {
        "description": "Implementar el cambio pero solicitar más recursos.",
        "cost": {
          "money": -10000,
          "calidad": 0,
          "tiempo": 120,
          "motivacion": 5
        }
      },
      {
        "description": "Proponer una solución alternativa al cliente.",
        "cost": { "money": 0, "calidad": 5, "tiempo": 60, "motivacion": 0 }
      },
      {
        "description": "Retrasar el cambio hasta la siguiente fase del proyecto.",
        "cost": { "money": 0, "calidad": -5, "tiempo": 60, "motivacion": -5 }
      },
      {
        "description": "Contratar personal adicional para cubrir el cambio.",
        "cost": { "money": -12000, "calidad": 5, "tiempo": 0, "motivacion": 0 }
      },
      {
        "description": "Solicitar una extensión del tiempo de entrega.",
        "cost": { "money": 0, "calidad": 0, "tiempo": 120, "motivacion": -5 }
      },
      {
        "description": "Subcontratar la implementación del cambio.",
        "cost": { "money": -8000, "calidad": 0, "tiempo": 60, "motivacion": 0 }
      },
      {
        "description": "Iniciar una revisión del impacto del cambio antes de decidir.",
        "cost": { "money": -3000, "calidad": 5, "tiempo": 30, "motivacion": 0 }
      }
    ]
  },
  {
    "id": 3,
    "description": "El equipo está mostrando signos de agotamiento.",
    "actions": [
      {
        "description": "Organizar un retiro de equipo.",
        "cost": { "money": -15000, "calidad": 0, "tiempo": 0, "motivacion": 15 }
      },
      {
        "description": "Asignar tiempo para descansos adicionales.",
        "cost": { "money": 0, "calidad": 0, "tiempo": 120, "motivacion": 10 }
      },
      {
        "description": "Reducir temporalmente la carga de trabajo.",
        "cost": { "money": 0, "calidad": -5, "tiempo": 60, "motivacion": 5 }
      },
      {
        "description": "Ofrecer recompensas por el esfuerzo extra.",
        "cost": { "money": -5000, "calidad": 0, "tiempo": 0, "motivacion": 10 }
      },
      {
        "description": "Contratar personal temporal para aliviar la carga.",
        "cost": { "money": -10000, "calidad": 0, "tiempo": 0, "motivacion": 5 }
      },
      {
        "description": "Permitir trabajo remoto para reducir el estrés.",
        "cost": { "money": 0, "calidad": 0, "tiempo": 0, "motivacion": 10 }
      },
      {
        "description": "Implementar una política de 'no reuniones'.",
        "cost": { "money": 0, "calidad": 0, "tiempo": 30, "motivacion": 5 }
      },
      {
        "description": "Solicitar más tiempo al cliente para aliviar la presión.",
        "cost": { "money": 0, "calidad": 0, "tiempo": 120, "motivacion": 0 }
      },
      {
        "description": "Dividir el proyecto en entregables más pequeños.",
        "cost": { "money": 0, "calidad": 5, "tiempo": 60, "motivacion": 5 }
      },
      {
        "description": "Realizar sesiones de retroalimentación para identificar problemas.",
        "cost": { "money": -2000, "calidad": 0, "tiempo": 30, "motivacion": 5 }
      }
    ]
  },
  {
    "id": 4,
    "description": "Se detecta un grave error de seguridad en el código desarrollado.",
    "actions": [
      {
        "description": "Asignar un equipo a tiempo completo para resolver el error.",
        "cost": { "money": 0, "calidad": 0, "tiempo": 240, "motivacion": 0 }
      },
      {
        "description": "Externalizar la corrección a una empresa especializada.",
        "cost": {
          "money": -15000,
          "calidad": 5,
          "tiempo": 120,
          "motivacion": 0
        }
      },
      {
        "description": "Implementar una solución temporal mientras se desarrolla una permanente.",
        "cost": { "money": -5000, "calidad": -5, "tiempo": 60, "motivacion": 0 }
      },
      {
        "description": "Negociar con el cliente una extensión del tiempo de entrega.",
        "cost": { "money": 0, "calidad": 0, "tiempo": 180, "motivacion": 0 }
      },
      {
        "description": "Pausar otras tareas para enfocarse en resolver el error.",
        "cost": { "money": 0, "calidad": 5, "tiempo": 240, "motivacion": -5 }
      },
      {
        "description": "Notificar al cliente y ofrecer una compensación.",
        "cost": { "money": -5000, "calidad": 5, "tiempo": 0, "motivacion": 0 }
      },
      {
        "description": "Realizar una auditoría completa del código para identificar más errores.",
        "cost": {
          "money": -10000,
          "calidad": 10,
          "tiempo": 120,
          "motivacion": 5
        }
      },
      {
        "description": "Implementar una revisión de seguridad adicional en cada sprint.",
        "cost": { "money": -2000, "calidad": 5, "tiempo": 30, "motivacion": 0 }
      },
      {
        "description": "Delegar la responsabilidad a un equipo especializado en seguridad.",
        "cost": {
          "money": -12000,
          "calidad": 10,
          "tiempo": 60,
          "motivacion": 5
        }
      },
      {
        "description": "Aumentar la frecuencia de las pruebas de seguridad automáticas.",
        "cost": { "money": -5000, "calidad": 5, "tiempo": 0, "motivacion": 0 }
      }
    ]
  },
  {
    "id": 5,
    "description": "El software no cumple con las expectativas del cliente durante una demostración.",
    "actions": [
      {
        "description": "Solicitar retroalimentación detallada para mejorar el software.",
        "cost": { "money": 0, "calidad": 5, "tiempo": 60, "motivacion": 0 }
      },
      {
        "description": "Ofrecer desarrollar características adicionales sin costo.",
        "cost": {
          "money": -10000,
          "calidad": 0,
          "tiempo": 120,
          "motivacion": 0
        }
      },
      {
        "description": "Ofrecer un descuento en el precio final.",
        "cost": { "money": -5000, "calidad": 0, "tiempo": 0, "motivacion": 0 }
      },
      {
        "description": "Reestructurar el equipo para enfocarse en las expectativas del cliente.",
        "cost": { "money": 0, "calidad": 5, "tiempo": 60, "motivacion": 0 }
      },
      {
        "description": "Aplazar la entrega final para mejorar la calidad.",
        "cost": { "money": 0, "calidad": 10, "tiempo": 180, "motivacion": 0 }
      },
      {
        "description": "Realizar un análisis post mortem para identificar fallos.",
        "cost": { "money": -2000, "calidad": 5, "tiempo": 60, "motivacion": 0 }
      },
      {
        "description": "Externalizar el desarrollo de las características fallidas.",
        "cost": {
          "money": -15000,
          "calidad": 0,
          "tiempo": 120,
          "motivacion": 0
        }
      },
      {
        "description": "Ofrecer soporte continuo y personalizado post-entrega.",
        "cost": { "money": -5000, "calidad": 0, "tiempo": 0, "motivacion": 0 }
      },
      {
        "description": "Dividir el proyecto en fases más pequeñas para asegurar la calidad.",
        "cost": { "money": 0, "calidad": 10, "tiempo": 60, "motivacion": 0 }
      },
      {
        "description": "Implementar una nueva metodología de desarrollo centrada en el cliente.",
        "cost": { "money": -8000, "calidad": 5, "tiempo": 30, "motivacion": 5 }
      }
    ]
  },
  {
    "id": 6,
    "description": "El servidor de producción sufre una caída crítica.",
    "actions": [
      {
        "description": "Iniciar un plan de contingencia para restaurar el servicio rápidamente.",
        "cost": { "money": 0, "calidad": 0, "tiempo": 120, "motivacion": 0 }
      },
      {
        "description": "Externalizar la recuperación a un proveedor especializado.",
        "cost": { "money": -10000, "calidad": 5, "tiempo": 60, "motivacion": 0 }
      },
      {
        "description": "Informar inmediatamente al cliente y usuarios sobre la caída.",
        "cost": { "money": 0, "calidad": 0, "tiempo": 30, "motivacion": 5 }
      },
      {
        "description": "Ofrecer un servicio temporal para mantener la operatividad.",
        "cost": { "money": -5000, "calidad": -5, "tiempo": 60, "motivacion": 0 }
      },
      {
        "description": "Revisar y actualizar la infraestructura del servidor.",
        "cost": {
          "money": -15000,
          "calidad": 10,
          "tiempo": 120,
          "motivacion": 0
        }
      },
      {
        "description": "Implementar una solución de alta disponibilidad.",
        "cost": {
          "money": -20000,
          "calidad": 10,
          "tiempo": 240,
          "motivacion": 5
        }
      },
      {
        "description": "Ofrecer compensación al cliente por el tiempo de inactividad.",
        "cost": { "money": -5000, "calidad": 0, "tiempo": 0, "motivacion": 0 }
      },
      {
        "description": "Pedir al equipo trabajar horas extra para restaurar el servicio.",
        "cost": { "money": 0, "calidad": 5, "tiempo": 60, "motivacion": -5 }
      },
      {
        "description": "Implementar pruebas automáticas para evitar futuras caídas.",
        "cost": { "money": -8000, "calidad": 5, "tiempo": 60, "motivacion": 0 }
      },
      {
        "description": "Contratar a un consultor externo para revisar la arquitectura.",
        "cost": { "money": -12000, "calidad": 5, "tiempo": 30, "motivacion": 5 }
      }
    ]
  },
  {
    "id": 7,
    "description": "El proyecto se ha quedado sin presupuesto antes de su finalización.",
    "actions": [
      {
        "description": "Negociar una extensión de presupuesto con el cliente.",
        "cost": { "money": 20000, "calidad": 0, "tiempo": 60, "motivacion": 0 }
      },
      {
        "description": "Reducir el alcance del proyecto para ajustarse al presupuesto.",
        "cost": { "money": 0, "calidad": -10, "tiempo": 0, "motivacion": -5 }
      },
      {
        "description": "Solicitar financiación adicional a inversores.",
        "cost": { "money": 30000, "calidad": 0, "tiempo": 60, "motivacion": 0 }
      },
      {
        "description": "Recortar gastos en áreas no críticas.",
        "cost": { "money": 0, "calidad": 0, "tiempo": 0, "motivacion": -5 }
      },
      {
        "description": "Implementar medidas de ahorro en el equipo.",
        "cost": { "money": 0, "calidad": 0, "tiempo": 0, "motivacion": -10 }
      },
      {
        "description": "Pausar el proyecto mientras se asegura más financiación.",
        "cost": { "money": 0, "calidad": 0, "tiempo": 120, "motivacion": -10 }
      },
      {
        "description": "Ofrecer una solución mínima viable para entregar a tiempo.",
        "cost": { "money": 0, "calidad": -15, "tiempo": 0, "motivacion": -5 }
      },
      {
        "description": "Priorizar las características esenciales y desestimar las no esenciales.",
        "cost": { "money": 0, "calidad": -5, "tiempo": 0, "motivacion": -5 }
      },
      {
        "description": "Reorganizar los recursos internos para cubrir los costos.",
        "cost": { "money": 0, "calidad": 0, "tiempo": 30, "motivacion": 0 }
      },
      {
        "description": "Solicitar adelantos de pago por hitos ya alcanzados.",
        "cost": { "money": 10000, "calidad": 0, "tiempo": 30, "motivacion": 0 }
      }
    ]
  },
  {
    "id": 8,
    "description": "El equipo se enfrenta a un problema técnico que nadie sabe cómo resolver.",
    "actions": [
      {
        "description": "Organizar una sesión de brainstorming para encontrar soluciones.",
        "cost": { "money": 0, "calidad": 0, "tiempo": 60, "motivacion": 5 }
      },
      {
        "description": "Contratar un experto externo para resolver el problema.",
        "cost": { "money": -8000, "calidad": 5, "tiempo": 120, "motivacion": 0 }
      },
      {
        "description": "Ofrecer un curso de formación sobre la tecnología implicada.",
        "cost": {
          "money": -5000,
          "calidad": 5,
          "tiempo": 240,
          "motivacion": 10
        }
      },
      {
        "description": "Pausar el proyecto y realizar una investigación más profunda.",
        "cost": { "money": 0, "calidad": 5, "tiempo": 180, "motivacion": -5 }
      },
      {
        "description": "Externalizar temporalmente la solución del problema.",
        "cost": { "money": -10000, "calidad": 0, "tiempo": 60, "motivacion": 0 }
      },
      {
        "description": "Reasignar el problema a un equipo con más experiencia.",
        "cost": { "money": 0, "calidad": 0, "tiempo": 60, "motivacion": 0 }
      },
      {
        "description": "Probar una solución temporal mientras se investiga una permanente.",
        "cost": { "money": -3000, "calidad": -5, "tiempo": 30, "motivacion": 0 }
      },
      {
        "description": "Escalar el problema al nivel de dirección para mayor apoyo.",
        "cost": { "money": 0, "calidad": 0, "tiempo": 30, "motivacion": 5 }
      },
      {
        "description": "Realizar un análisis de riesgos para determinar la gravedad del problema.",
        "cost": { "money": -2000, "calidad": 5, "tiempo": 60, "motivacion": 0 }
      },
      {
        "description": "Dividir el problema en partes más pequeñas para abordarlo progresivamente.",
        "cost": { "money": 0, "calidad": 5, "tiempo": 120, "motivacion": 0 }
      }
    ]
  },
  {
    "id": 9,
    "description": "El proyecto sufre un retraso significativo debido a problemas de integración.",
    "actions": [
      {
        "description": "Reasignar recursos para acelerar la integración.",
        "cost": { "money": 0, "calidad": 0, "tiempo": 120, "motivacion": 0 }
      },
      {
        "description": "Negociar una extensión de tiempo con el cliente.",
        "cost": { "money": 0, "calidad": 0, "tiempo": 240, "motivacion": 0 }
      },
      {
        "description": "Externalizar la integración a una empresa especializada.",
        "cost": {
          "money": -15000,
          "calidad": 5,
          "tiempo": 120,
          "motivacion": 0
        }
      },
      {
        "description": "Dividir la integración en fases más manejables.",
        "cost": { "money": 0, "calidad": 5, "tiempo": 60, "motivacion": 0 }
      },
      {
        "description": "Implementar una solución temporal para mostrar progreso.",
        "cost": { "money": -5000, "calidad": -5, "tiempo": 60, "motivacion": 0 }
      },
      {
        "description": "Solicitar ayuda de un consultor externo para resolver los problemas de integración.",
        "cost": { "money": -8000, "calidad": 5, "tiempo": 120, "motivacion": 0 }
      },
      {
        "description": "Realizar una revisión exhaustiva del proceso de integración.",
        "cost": {
          "money": -5000,
          "calidad": 10,
          "tiempo": 180,
          "motivacion": 0
        }
      },
      {
        "description": "Reestructurar el plan de proyecto para abordar la integración primero.",
        "cost": { "money": 0, "calidad": 0, "tiempo": 60, "motivacion": 0 }
      },
      {
        "description": "Implementar nuevas herramientas para facilitar la integración.",
        "cost": { "money": -7000, "calidad": 5, "tiempo": 60, "motivacion": 0 }
      },
      {
        "description": "Aumentar la frecuencia de las revisiones de integración.",
        "cost": { "money": -2000, "calidad": 5, "tiempo": 30, "motivacion": 0 }
      }
    ]
  },
  {
    "id": 10,
    "description": "El cliente solicita cambios en el proyecto fuera del alcance inicial.",
    "actions": [
      {
        "description": "Negociar un nuevo contrato que cubra los cambios.",
        "cost": { "money": 15000, "calidad": 0, "tiempo": 180, "motivacion": 0 }
      },
      {
        "description": "Aceptar los cambios sin modificar el contrato.",
        "cost": { "money": 0, "calidad": -10, "tiempo": 240, "motivacion": -5 }
      },
      {
        "description": "Rechazar los cambios para mantener el proyecto en su alcance original.",
        "cost": { "money": -5000, "calidad": 10, "tiempo": 0, "motivacion": 5 }
      },
      {
        "description": "Proponer cambios alternativos que se ajusten al alcance.",
        "cost": { "money": 0, "calidad": 5, "tiempo": 60, "motivacion": 0 }
      },
      {
        "description": "Solicitar una extensión de tiempo para implementar los cambios.",
        "cost": { "money": 0, "calidad": 0, "tiempo": 120, "motivacion": -5 }
      },
      {
        "description": "Externalizar la implementación de los cambios.",
        "cost": {
          "money": -10000,
          "calidad": 0,
          "tiempo": 120,
          "motivacion": 0
        }
      },
      {
        "description": "Priorizar los cambios solicitados y aplazar los menos importantes.",
        "cost": { "money": 0, "calidad": 0, "tiempo": 60, "motivacion": 0 }
      },
      {
        "description": "Establecer una revisión de cambios para evaluar el impacto en el proyecto.",
        "cost": { "money": -3000, "calidad": 5, "tiempo": 30, "motivacion": 0 }
      },
      {
        "description": "Aumentar la comunicación con el cliente para evitar futuros cambios inesperados.",
        "cost": { "money": -2000, "calidad": 0, "tiempo": 30, "motivacion": 0 }
      },
      {
        "description": "Realizar un análisis de impacto para justificar los cambios.",
        "cost": { "money": -5000, "calidad": 5, "tiempo": 60, "motivacion": 0 }
      }
    ]
  },
  {
    "id": 11,
    "description": "El equipo muestra signos de agotamiento y desmotivación.",
    "actions": [
      {
        "description": "Organizar una actividad de team building.",
        "cost": {
          "money": -3000,
          "calidad": 0,
          "tiempo": 120,
          "motivacion": 10
        }
      },
      {
        "description": "Ofrecer días libres adicionales para recuperar energías.",
        "cost": { "money": 0, "calidad": 0, "tiempo": 240, "motivacion": 15 }
      },
      {
        "description": "Contratar personal temporal para aliviar la carga de trabajo.",
        "cost": { "money": -10000, "calidad": 0, "tiempo": 0, "motivacion": 5 }
      },
      {
        "description": "Implementar una política de trabajo más flexible.",
        "cost": { "money": 0, "calidad": 0, "tiempo": 0, "motivacion": 10 }
      },
      {
        "description": "Solicitar al equipo que mantenga el ritmo, ofreciendo un bono por desempeño.",
        "cost": { "money": -5000, "calidad": 0, "tiempo": 0, "motivacion": 5 }
      },
      {
        "description": "Reducir el alcance del proyecto para aliviar la presión.",
        "cost": { "money": 0, "calidad": -10, "tiempo": 0, "motivacion": 10 }
      },
      {
        "description": "Ofrecer una charla motivacional y reconocimiento público.",
        "cost": { "money": -1000, "calidad": 0, "tiempo": 0, "motivacion": 10 }
      },
      {
        "description": "Rotar las responsabilidades dentro del equipo.",
        "cost": { "money": 0, "calidad": 0, "tiempo": 30, "motivacion": 5 }
      },
      {
        "description": "Establecer metas a corto plazo para mantener el enfoque.",
        "cost": { "money": 0, "calidad": 5, "tiempo": 0, "motivacion": 5 }
      },
      {
        "description": "Revisar la carga de trabajo y redistribuir las tareas más urgentes.",
        "cost": { "money": 0, "calidad": 0, "tiempo": 60, "motivacion": 10 }
      }
    ]
  },
  {
    "id": 12,
    "description": "El cliente decide cambiar de prioridades en el proyecto.",
    "actions": [
      {
        "description": "Reajustar el cronograma para reflejar las nuevas prioridades.",
        "cost": { "money": 0, "calidad": 0, "tiempo": 120, "motivacion": 0 }
      },
      {
        "description": "Negociar un nuevo contrato para reflejar los cambios.",
        "cost": { "money": 15000, "calidad": 0, "tiempo": 120, "motivacion": 0 }
      },
      {
        "description": "Solicitar una extensión del plazo de entrega.",
        "cost": { "money": 0, "calidad": 0, "tiempo": 240, "motivacion": 0 }
      },
      {
        "description": "Ajustar el equipo de trabajo para enfocarse en las nuevas prioridades.",
        "cost": { "money": 0, "calidad": 5, "tiempo": 60, "motivacion": 0 }
      },
      {
        "description": "Externalizar tareas no prioritarias para enfocarse en las nuevas prioridades.",
        "cost": { "money": -10000, "calidad": 0, "tiempo": 60, "motivacion": 0 }
      },
      {
        "description": "Revisar y actualizar el alcance del proyecto.",
        "cost": { "money": 0, "calidad": 5, "tiempo": 30, "motivacion": 0 }
      },
      {
        "description": "Solicitar al cliente una mayor clarificación sobre las nuevas prioridades.",
        "cost": { "money": -2000, "calidad": 0, "tiempo": 30, "motivacion": 0 }
      },
      {
        "description": "Realizar una evaluación de impacto para determinar los efectos del cambio.",
        "cost": { "money": -5000, "calidad": 5, "tiempo": 60, "motivacion": 0 }
      },
      {
        "description": "Revisar la arquitectura del proyecto para asegurar que soporta los nuevos requerimientos.",
        "cost": {
          "money": -7000,
          "calidad": 10,
          "tiempo": 120,
          "motivacion": 0
        }
      },
      {
        "description": "Proponer un enfoque iterativo para implementar las nuevas prioridades gradualmente.",
        "cost": { "money": 0, "calidad": 5, "tiempo": 60, "motivacion": 0 }
      }
    ]
  },
  {
    "id": 13,
    "description": "El equipo sufre la pérdida de un miembro clave.",
    "actions": [
      {
        "description": "Redistribuir las responsabilidades entre el equipo restante.",
        "cost": { "money": 0, "calidad": 0, "tiempo": 120, "motivacion": -5 }
      },
      {
        "description": "Contratar a un reemplazo lo antes posible.",
        "cost": { "money": -15000, "calidad": 0, "tiempo": 60, "motivacion": 0 }
      },
      {
        "description": "Externalizar temporalmente las tareas del miembro perdido.",
        "cost": { "money": -10000, "calidad": 0, "tiempo": 60, "motivacion": 0 }
      },
      {
        "description": "Pedir al equipo cubrir las responsabilidades temporalmente.",
        "cost": { "money": 0, "calidad": 0, "tiempo": 0, "motivacion": -5 }
      },
      {
        "description": "Reorganizar el equipo para adaptarse a la nueva situación.",
        "cost": { "money": 0, "calidad": 5, "tiempo": 60, "motivacion": 0 }
      },
      {
        "description": "Ofrecer un bono al equipo para motivarlos a asumir tareas adicionales.",
        "cost": { "money": -5000, "calidad": 0, "tiempo": 0, "motivacion": 5 }
      },
      {
        "description": "Revisar las metas del proyecto para ajustarse a los recursos actuales.",
        "cost": { "money": 0, "calidad": 5, "tiempo": 0, "motivacion": 0 }
      },
      {
        "description": "Aumentar la comunicación para asegurar que todos estén al tanto de los cambios.",
        "cost": { "money": -1000, "calidad": 0, "tiempo": 30, "motivacion": 0 }
      },
      {
        "description": "Solicitar apoyo temporal de otro equipo dentro de la empresa.",
        "cost": { "money": 0, "calidad": 0, "tiempo": 60, "motivacion": 5 }
      },
      {
        "description": "Tomar tiempo para realizar entrevistas y encontrar al candidato ideal.",
        "cost": {
          "money": -20000,
          "calidad": 5,
          "tiempo": 120,
          "motivacion": 0
        }
      }
    ]
  },
  {
    "id": 14,
    "description": "La calidad del código es baja y afecta el rendimiento del software.",
    "actions": [
      {
        "description": "Implementar una revisión de código más estricta.",
        "cost": { "money": 0, "calidad": 10, "tiempo": 120, "motivacion": 0 }
      },
      {
        "description": "Ofrecer formación en buenas prácticas de desarrollo.",
        "cost": {
          "money": -5000,
          "calidad": 5,
          "tiempo": 240,
          "motivacion": 10
        }
      },
      {
        "description": "Externalizar la refactorización del código.",
        "cost": {
          "money": -15000,
          "calidad": 5,
          "tiempo": 120,
          "motivacion": 0
        }
      },
      {
        "description": "Asignar a un experto en calidad para revisar el código existente.",
        "cost": {
          "money": -10000,
          "calidad": 5,
          "tiempo": 180,
          "motivacion": 0
        }
      },
      {
        "description": "Realizar un análisis de código automatizado para detectar problemas.",
        "cost": { "money": -3000, "calidad": 5, "tiempo": 60, "motivacion": 0 }
      },
      {
        "description": "Revisar las herramientas de desarrollo utilizadas por el equipo.",
        "cost": { "money": -2000, "calidad": 5, "tiempo": 60, "motivacion": 0 }
      },
      {
        "description": "Establecer un proceso de integración continua para detectar problemas de calidad temprano.",
        "cost": {
          "money": -5000,
          "calidad": 10,
          "tiempo": 120,
          "motivacion": 0
        }
      },
      {
        "description": "Priorizar la corrección de errores antes de agregar nuevas funcionalidades.",
        "cost": { "money": 0, "calidad": 10, "tiempo": 180, "motivacion": 0 }
      },
      {
        "description": "Implementar una política de código limpio en el equipo.",
        "cost": { "money": 0, "calidad": 10, "tiempo": 60, "motivacion": 5 }
      },
      {
        "description": "Solicitar una auditoría externa del código.",
        "cost": {
          "money": -10000,
          "calidad": 10,
          "tiempo": 120,
          "motivacion": 0
        }
      }
    ]
  },
  {
    "id": 15,
    "description": "El cliente se queja de falta de comunicación y transparencia en el proyecto.",
    "actions": [
      {
        "description": "Establecer reuniones semanales de actualización con el cliente.",
        "cost": { "money": 0, "calidad": 0, "tiempo": 60, "motivacion": 5 }
      },
      {
        "description": "Ofrecer un acceso directo al cliente al sistema de seguimiento de proyectos.",
        "cost": { "money": 0, "calidad": 5, "tiempo": 30, "motivacion": 0 }
      },
      {
        "description": "Asignar un enlace de comunicación dedicado para el cliente.",
        "cost": { "money": -5000, "calidad": 5, "tiempo": 0, "motivacion": 0 }
      },
      {
        "description": "Solicitar retroalimentación directa del cliente y ajustar en consecuencia.",
        "cost": { "money": 0, "calidad": 5, "tiempo": 30, "motivacion": 0 }
      },
      {
        "description": "Proporcionar informes de progreso más detallados y frecuentes.",
        "cost": { "money": -2000, "calidad": 5, "tiempo": 60, "motivacion": 0 }
      },
      {
        "description": "Implementar un sistema de gestión de cambios visible para el cliente.",
        "cost": { "money": -3000, "calidad": 5, "tiempo": 60, "motivacion": 0 }
      },
      {
        "description": "Organizar una reunión cara a cara con el cliente para abordar sus preocupaciones.",
        "cost": { "money": -5000, "calidad": 10, "tiempo": 30, "motivacion": 0 }
      },
      {
        "description": "Revisar y actualizar el plan de comunicación del proyecto.",
        "cost": { "money": -1000, "calidad": 5, "tiempo": 30, "motivacion": 0 }
      },
      {
        "description": "Establecer un protocolo para actualizaciones de emergencia o problemas críticos.",
        "cost": { "money": -2000, "calidad": 5, "tiempo": 30, "motivacion": 0 }
      },
      {
        "description": "Aumentar la transparencia del proceso mediante la publicación de reportes automáticos.",
        "cost": { "money": -3000, "calidad": 5, "tiempo": 60, "motivacion": 0 }
      }
    ]
  },
  {
    "id": 16,
    "description": "El equipo está teniendo dificultades para cumplir con los plazos.",
    "actions": [
      {
        "description": "Reasignar tareas para mejorar la eficiencia.",
        "cost": { "money": 0, "calidad": 0, "tiempo": 60, "motivacion": 5 }
      },
      {
        "description": "Contratar personal adicional para acelerar el trabajo.",
        "cost": {
          "money": -10000,
          "calidad": 0,
          "tiempo": 120,
          "motivacion": 0
        }
      },
      {
        "description": "Reducir el alcance del proyecto para cumplir con los plazos.",
        "cost": { "money": 0, "calidad": -10, "tiempo": 0, "motivacion": 5 }
      },
      {
        "description": "Solicitar una extensión del plazo al cliente.",
        "cost": { "money": 0, "calidad": 0, "tiempo": 240, "motivacion": 0 }
      },
      {
        "description": "Implementar herramientas de gestión de tiempo más efectivas.",
        "cost": { "money": -5000, "calidad": 5, "tiempo": 60, "motivacion": 0 }
      },
      {
        "description": "Revisar el plan del proyecto y ajustarlo para ser más realista.",
        "cost": { "money": 0, "calidad": 5, "tiempo": 120, "motivacion": 0 }
      },
      {
        "description": "Priorizar tareas críticas y aplazar las menos importantes.",
        "cost": { "money": 0, "calidad": 5, "tiempo": 60, "motivacion": 5 }
      },
      {
        "description": "Ofrecer horas extras con compensación para cumplir con los plazos.",
        "cost": {
          "money": -7000,
          "calidad": 0,
          "tiempo": 120,
          "motivacion": -5
        }
      },
      {
        "description": "Solicitar a otro equipo que asista en las tareas más urgentes.",
        "cost": { "money": -5000, "calidad": 0, "tiempo": 60, "motivacion": 0 }
      },
      {
        "description": "Aumentar la frecuencia de las reuniones de seguimiento para detectar problemas temprano.",
        "cost": { "money": -1000, "calidad": 5, "tiempo": 30, "motivacion": 0 }
      }
    ]
  },
  {
    "id": 17,
    "description": "El proyecto ha recibido una mala evaluación en su primera revisión.",
    "actions": [
      {
        "description": "Revisar los comentarios de la evaluación y corregir los errores señalados.",
        "cost": { "money": 0, "calidad": 10, "tiempo": 120, "motivacion": 0 }
      },
      {
        "description": "Solicitar una nueva revisión después de implementar mejoras.",
        "cost": { "money": 0, "calidad": 0, "tiempo": 60, "motivacion": 0 }
      },
      {
        "description": "Contratar a un consultor para mejorar las áreas críticas.",
        "cost": {
          "money": -15000,
          "calidad": 10,
          "tiempo": 120,
          "motivacion": 0
        }
      },
      {
        "description": "Establecer un plan de acción para abordar todos los puntos negativos.",
        "cost": { "money": 0, "calidad": 5, "tiempo": 60, "motivacion": 0 }
      },
      {
        "description": "Reunir al equipo para un análisis exhaustivo de los problemas detectados.",
        "cost": { "money": 0, "calidad": 5, "tiempo": 60, "motivacion": 0 }
      },
      {
        "description": "Proponer un enfoque iterativo para mejorar progresivamente.",
        "cost": { "money": 0, "calidad": 5, "tiempo": 60, "motivacion": 0 }
      },
      {
        "description": "Solicitar una extensión del tiempo para mejorar la calidad.",
        "cost": { "money": 0, "calidad": 10, "tiempo": 120, "motivacion": 0 }
      },
      {
        "description": "Asignar más recursos para abordar los problemas críticos.",
        "cost": {
          "money": -10000,
          "calidad": 10,
          "tiempo": 60,
          "motivacion": 0
        }
      },
      {
        "description": "Revisar el proceso de desarrollo y hacer los ajustes necesarios.",
        "cost": { "money": 0, "calidad": 10, "tiempo": 120, "motivacion": 0 }
      },
      {
        "description": "Ofrecer una bonificación al equipo para motivarlos a mejorar.",
        "cost": { "money": -5000, "calidad": 5, "tiempo": 0, "motivacion": 5 }
      }
    ]
  },
  {
    "id": 18,
    "description": "El equipo tiene dificultades con las herramientas tecnológicas actuales.",
    "actions": [
      {
        "description": "Capacitar al equipo en el uso de las herramientas actuales.",
        "cost": { "money": -5000, "calidad": 5, "tiempo": 120, "motivacion": 5 }
      },
      {
        "description": "Cambiar a herramientas más adecuadas y fáciles de usar.",
        "cost": {
          "money": -10000,
          "calidad": 5,
          "tiempo": 120,
          "motivacion": 5
        }
      },
      {
        "description": "Contratar a un especialista en tecnología para optimizar el uso de las herramientas.",
        "cost": {
          "money": -15000,
          "calidad": 5,
          "tiempo": 120,
          "motivacion": 0
        }
      },
      {
        "description": "Externalizar las tareas que dependen de las herramientas complicadas.",
        "cost": { "money": -15000, "calidad": 0, "tiempo": 60, "motivacion": 0 }
      },
      {
        "description": "Solicitar soporte técnico para resolver los problemas actuales.",
        "cost": { "money": -5000, "calidad": 0, "tiempo": 60, "motivacion": 0 }
      },
      {
        "description": "Implementar una solución personalizada que se ajuste mejor a las necesidades del equipo.",
        "cost": {
          "money": -20000,
          "calidad": 5,
          "tiempo": 120,
          "motivacion": 0
        }
      },
      {
        "description": "Revisar y optimizar el flujo de trabajo para minimizar la dependencia de las herramientas.",
        "cost": { "money": 0, "calidad": 5, "tiempo": 120, "motivacion": 0 }
      },
      {
        "description": "Solicitar feedback al equipo sobre las herramientas actuales y posibles mejoras.",
        "cost": { "money": 0, "calidad": 5, "tiempo": 60, "motivacion": 5 }
      },
      {
        "description": "Reemplazar gradualmente las herramientas más problemáticas.",
        "cost": {
          "money": -10000,
          "calidad": 5,
          "tiempo": 120,
          "motivacion": 5
        }
      },
      {
        "description": "Revisar la documentación y crear guías para un mejor uso de las herramientas.",
        "cost": { "money": -3000, "calidad": 5, "tiempo": 120, "motivacion": 0 }
      }
    ]
  },
  {
    "id": 19,
    "description": "El presupuesto del proyecto ha sido reducido inesperadamente.",
    "actions": [
      {
        "description": "Recortar funcionalidades menos críticas para ajustarse al nuevo presupuesto.",
        "cost": { "money": 0, "calidad": -10, "tiempo": 0, "motivacion": 0 }
      },
      {
        "description": "Negociar con el cliente para priorizar las funcionalidades esenciales.",
        "cost": { "money": 0, "calidad": 5, "tiempo": 30, "motivacion": 0 }
      },
      {
        "description": "Buscar financiación adicional o patrocinio para cubrir el déficit.",
        "cost": { "money": 10000, "calidad": 0, "tiempo": 60, "motivacion": 0 }
      },
      {
        "description": "Externalizar partes del proyecto para reducir costos internos.",
        "cost": { "money": -7000, "calidad": 0, "tiempo": -30, "motivacion": 0 }
      },
      {
        "description": "Reasignar recursos para maximizar la eficiencia del presupuesto restante.",
        "cost": { "money": 0, "calidad": 5, "tiempo": -30, "motivacion": 0 }
      },
      {
        "description": "Revisar el plan de gastos y eliminar costos innecesarios.",
        "cost": { "money": 0, "calidad": 0, "tiempo": -60, "motivacion": 0 }
      },
      {
        "description": "Utilizar herramientas o servicios gratuitos o más económicos.",
        "cost": { "money": 0, "calidad": -5, "tiempo": -30, "motivacion": 0 }
      },
      {
        "description": "Implementar prácticas de desarrollo más ágiles para reducir el tiempo de desarrollo.",
        "cost": { "money": 0, "calidad": 5, "tiempo": -60, "motivacion": 0 }
      },
      {
        "description": "Pedir al equipo trabajar horas extras sin compensación inmediata, ofreciendo bonos a futuro.",
        "cost": { "money": 0, "calidad": 0, "tiempo": -60, "motivacion": -10 }
      },
      {
        "description": "Reducir el equipo de trabajo para disminuir costos salariales.",
        "cost": {
          "money": 0,
          "calidad": -10,
          "tiempo": -120,
          "motivacion": -10
        }
      }
    ]
  },
  {
    "id": 20,
    "description": "El proyecto ha superado los plazos establecidos y está generando costos adicionales.",
    "actions": [
      {
        "description": "Acelerar el desarrollo reduciendo las pruebas internas.",
        "cost": { "money": 0, "calidad": -10, "tiempo": -120, "motivacion": 0 }
      },
      {
        "description": "Contratar personal adicional temporal para completar el proyecto rápidamente.",
        "cost": {
          "money": -15000,
          "calidad": 0,
          "tiempo": -240,
          "motivacion": 0
        }
      },
      {
        "description": "Solicitar al cliente una extensión del presupuesto debido a los retrasos.",
        "cost": { "money": 10000, "calidad": 0, "tiempo": 60, "motivacion": 0 }
      },
      {
        "description": "Reducir el alcance del proyecto para evitar más retrasos.",
        "cost": { "money": 0, "calidad": -10, "tiempo": -60, "motivacion": 5 }
      },
      {
        "description": "Reorganizar el equipo para mejorar la eficiencia en las tareas críticas.",
        "cost": { "money": 0, "calidad": 5, "tiempo": -60, "motivacion": 0 }
      },
      {
        "description": "Externalizar tareas pendientes para acelerar el progreso.",
        "cost": {
          "money": -10000,
          "calidad": 0,
          "tiempo": -180,
          "motivacion": 0
        }
      },
      {
        "description": "Implementar una política de horas extras con compensación adicional para acelerar el progreso.",
        "cost": {
          "money": -7000,
          "calidad": 0,
          "tiempo": -120,
          "motivacion": -5
        }
      },
      {
        "description": "Revisar y optimizar el plan de proyecto para identificar ineficiencias.",
        "cost": { "money": 0, "calidad": 5, "tiempo": -60, "motivacion": 0 }
      },
      {
        "description": "Reducir el tiempo de reuniones para enfocarse en el trabajo crítico.",
        "cost": { "money": 0, "calidad": 0, "tiempo": -30, "motivacion": 0 }
      },
      {
        "description": "Implementar revisiones rápidas y frecuentes para detectar problemas antes.",
        "cost": { "money": 0, "calidad": 5, "tiempo": -60, "motivacion": 0 }
      }
    ]
  },
  {
    "id": 21,
    "description": "Un competidor ha lanzado un producto similar antes que el tuyo.",
    "actions": [
      {
        "description": "Acelerar el desarrollo para lanzar el producto lo antes posible.",
        "cost": { "money": 0, "calidad": -5, "tiempo": -180, "motivacion": 0 }
      },
      {
        "description": "Revisar las características del producto para diferenciarse del competidor.",
        "cost": { "money": 0, "calidad": 10, "tiempo": 60, "motivacion": 0 }
      },
      {
        "description": "Iniciar una campaña de marketing agresiva para atraer la atención al producto.",
        "cost": {
          "money": -20000,
          "calidad": 0,
          "tiempo": -60,
          "motivacion": 0
        }
      },
      {
        "description": "Redefinir el público objetivo para evitar competir directamente.",
        "cost": { "money": 0, "calidad": 5, "tiempo": -30, "motivacion": 0 }
      },
      {
        "description": "Buscar asociaciones estratégicas para ganar cuota de mercado rápidamente.",
        "cost": {
          "money": -10000,
          "calidad": 5,
          "tiempo": -60,
          "motivacion": 0
        }
      },
      {
        "description": "Implementar mejoras en el producto basadas en el feedback del competidor.",
        "cost": {
          "money": -5000,
          "calidad": 10,
          "tiempo": -60,
          "motivacion": 0
        }
      },
      {
        "description": "Enfocarse en una función clave que el competidor no tiene.",
        "cost": { "money": 0, "calidad": 10, "tiempo": -120, "motivacion": 5 }
      },
      {
        "description": "Reducir el precio del producto para competir directamente en el mercado.",
        "cost": {
          "money": -10000,
          "calidad": 0,
          "tiempo": -30,
          "motivacion": 0
        }
      },
      {
        "description": "Implementar una promoción limitada para atraer a los primeros usuarios.",
        "cost": { "money": -5000, "calidad": 0, "tiempo": -60, "motivacion": 5 }
      },
      {
        "description": "Solicitar al equipo ideas creativas para superar al competidor.",
        "cost": { "money": 0, "calidad": 5, "tiempo": -30, "motivacion": 5 }
      }
    ]
  },
  {
    "id": 22,
    "description": "Surge un problema inesperado en el servidor que afecta el progreso.",
    "actions": [
      {
        "description": "Contratar un servicio de soporte de emergencia para resolver el problema rápidamente.",
        "cost": {
          "money": -15000,
          "calidad": 0,
          "tiempo": -120,
          "motivacion": 0
        }
      },
      {
        "description": "Reasignar recursos para solucionar el problema lo antes posible.",
        "cost": { "money": 0, "calidad": 0, "tiempo": -60, "motivacion": 0 }
      },
      {
        "description": "Implementar una solución temporal para minimizar el impacto del problema.",
        "cost": {
          "money": -5000,
          "calidad": -5,
          "tiempo": -30,
          "motivacion": 0
        }
      },
      {
        "description": "Revisar el sistema para identificar y solucionar la causa raíz del problema.",
        "cost": {
          "money": -10000,
          "calidad": 5,
          "tiempo": -90,
          "motivacion": 0
        }
      },
      {
        "description": "Pedir al equipo que trabaje horas adicionales para compensar el tiempo perdido.",
        "cost": {
          "money": -7000,
          "calidad": 0,
          "tiempo": -120,
          "motivacion": -5
        }
      },
      {
        "description": "Revisar y ajustar el plan de contingencia del proyecto.",
        "cost": { "money": -2000, "calidad": 0, "tiempo": -60, "motivacion": 0 }
      },
      {
        "description": "Externalizar el manejo del problema a un equipo especializado.",
        "cost": {
          "money": -20000,
          "calidad": 0,
          "tiempo": -120,
          "motivacion": 0
        }
      },
      {
        "description": "Aumentar el presupuesto para asegurar una solución más rápida.",
        "cost": {
          "money": -30000,
          "calidad": 0,
          "tiempo": -180,
          "motivacion": 0
        }
      },
      {
        "description": "Solicitar ayuda a expertos externos para resolver el problema.",
        "cost": {
          "money": -15000,
          "calidad": 5,
          "tiempo": -90,
          "motivacion": 0
        }
      },
      {
        "description": "Implementar un sistema de respaldo para evitar problemas similares en el futuro.",
        "cost": {
          "money": -25000,
          "calidad": 10,
          "tiempo": -150,
          "motivacion": 0
        }
      }
    ]
  },
  {
    "id": 23,
    "description": "Un nuevo competidor entra en el mercado con una oferta más atractiva.",
    "actions": [
      {
        "description": "Actualizar la propuesta de valor del proyecto para hacerla más competitiva.",
        "cost": {
          "money": -10000,
          "calidad": 5,
          "tiempo": -60,
          "motivacion": 0
        }
      },
      {
        "description": "Realizar un análisis de mercado para ajustar la estrategia del proyecto.",
        "cost": { "money": -5000, "calidad": 0, "tiempo": -90, "motivacion": 0 }
      },
      {
        "description": "Invertir en marketing para destacar las ventajas del proyecto frente a la competencia.",
        "cost": {
          "money": -20000,
          "calidad": 0,
          "tiempo": -120,
          "motivacion": 0
        }
      },
      {
        "description": "Revisar y mejorar la calidad del producto para diferenciarlo del competidor.",
        "cost": {
          "money": -15000,
          "calidad": 10,
          "tiempo": -120,
          "motivacion": 0
        }
      },
      {
        "description": "Ajustar los precios para ser más competitivos en el mercado.",
        "cost": {
          "money": -5000,
          "calidad": -5,
          "tiempo": -30,
          "motivacion": 0
        }
      },
      {
        "description": "Implementar una estrategia de fidelización de clientes.",
        "cost": {
          "money": -10000,
          "calidad": 5,
          "tiempo": -90,
          "motivacion": 0
        }
      },
      {
        "description": "Ampliar la funcionalidad del producto para atraer a más clientes.",
        "cost": {
          "money": -20000,
          "calidad": 10,
          "tiempo": -150,
          "motivacion": 0
        }
      },
      {
        "description": "Solicitar la opinión de los clientes para ajustar la oferta según sus necesidades.",
        "cost": { "money": -3000, "calidad": 5, "tiempo": -60, "motivacion": 0 }
      },
      {
        "description": "Realizar una campaña de promociones especiales para atraer nuevos clientes.",
        "cost": {
          "money": -15000,
          "calidad": 0,
          "tiempo": -120,
          "motivacion": 0
        }
      },
      {
        "description": "Reforzar la presencia en redes sociales y medios de comunicación.",
        "cost": {
          "money": -10000,
          "calidad": 5,
          "tiempo": -90,
          "motivacion": 0
        }
      }
    ]
  },
  {
    "id": 24,
    "description": "El equipo ha sido informado de una nueva política interna que afecta los horarios de trabajo.",
    "actions": [
      {
        "description": "Adaptar el horario de trabajo del equipo para cumplir con la nueva política.",
        "cost": { "money": 0, "calidad": 0, "tiempo": -60, "motivacion": 0 }
      },
      {
        "description": "Organizar una reunión para explicar la nueva política al equipo.",
        "cost": { "money": -2000, "calidad": 0, "tiempo": -30, "motivacion": 0 }
      },
      {
        "description": "Revisar y ajustar los plazos del proyecto en función del nuevo horario.",
        "cost": { "money": 0, "calidad": 0, "tiempo": -90, "motivacion": 0 }
      },
      {
        "description": "Solicitar una excepción a la política para mantener el horario actual del equipo.",
        "cost": { "money": -5000, "calidad": 0, "tiempo": -30, "motivacion": 0 }
      },
      {
        "description": "Implementar herramientas de comunicación y colaboración para adaptarse al nuevo horario.",
        "cost": { "money": -3000, "calidad": 5, "tiempo": -60, "motivacion": 0 }
      },
      {
        "description": "Proporcionar capacitación adicional para gestionar el cambio en los horarios.",
        "cost": { "money": -4000, "calidad": 5, "tiempo": -60, "motivacion": 0 }
      },
      {
        "description": "Revisar el impacto de la política en la motivación del equipo y tomar medidas para mitigar cualquier efecto negativo.",
        "cost": { "money": -2000, "calidad": 0, "tiempo": -30, "motivacion": 5 }
      },
      {
        "description": "Negociar con los superiores para ajustar la política en función de las necesidades del equipo.",
        "cost": { "money": -5000, "calidad": 0, "tiempo": -60, "motivacion": 0 }
      },
      {
        "description": "Revisar los procedimientos de trabajo para garantizar que se ajusten a la nueva política.",
        "cost": { "money": 0, "calidad": 5, "tiempo": -60, "motivacion": 0 }
      },
      {
        "description": "Ofrecer incentivos para mantener la moral del equipo durante el período de adaptación.",
        "cost": { "money": -5000, "calidad": 0, "tiempo": -30, "motivacion": 5 }
      }
    ]
  },
  {
    "id": 25,
    "description": "Un miembro clave del equipo ha decidido dejar la empresa.",
    "actions": [
      {
        "description": "Iniciar el proceso de contratación para encontrar un reemplazo adecuado.",
        "cost": {
          "money": -15000,
          "calidad": 0,
          "tiempo": -120,
          "motivacion": 0
        }
      },
      {
        "description": "Redistribuir las tareas del miembro saliente entre el equipo actual.",
        "cost": { "money": 0, "calidad": 0, "tiempo": -60, "motivacion": 0 }
      },
      {
        "description": "Ofrecer formación a otros miembros del equipo para cubrir las responsabilidades del puesto vacante.",
        "cost": { "money": -5000, "calidad": 5, "tiempo": -90, "motivacion": 0 }
      },
      {
        "description": "Contratar temporalmente a un consultor para cubrir el vacío.",
        "cost": {
          "money": -10000,
          "calidad": 5,
          "tiempo": -60,
          "motivacion": 0
        }
      },
      {
        "description": "Revisar y ajustar los procesos para minimizar el impacto de la salida del miembro del equipo.",
        "cost": { "money": 0, "calidad": 5, "tiempo": -60, "motivacion": 0 }
      },
      {
        "description": "Revisar el plan del proyecto para ajustar los plazos y expectativas debido a la pérdida del miembro clave.",
        "cost": { "money": 0, "calidad": 0, "tiempo": -120, "motivacion": 0 }
      },
      {
        "description": "Realizar una búsqueda de retroalimentación con el miembro saliente para asegurar una transición suave.",
        "cost": { "money": -2000, "calidad": 0, "tiempo": -30, "motivacion": 0 }
      },
      {
        "description": "Ofrecer incentivos para el equipo para mantener la moral alta durante la transición.",
        "cost": { "money": -5000, "calidad": 0, "tiempo": -30, "motivacion": 5 }
      },
      {
        "description": "Aumentar la comunicación y el apoyo al equipo durante el período de ajuste.",
        "cost": { "money": -3000, "calidad": 0, "tiempo": -60, "motivacion": 0 }
      },
      {
        "description": "Preparar un plan de sucesión para evitar problemas similares en el futuro.",
        "cost": { "money": -5000, "calidad": 5, "tiempo": -90, "motivacion": 0 }
      }
    ]
  },
  {
    "id": 26,
    "description": "El equipo está lidiando con un alto nivel de rotación de personal.",
    "actions": [
      {
        "description": "Revisar y mejorar las condiciones laborales para retener a los empleados.",
        "cost": {
          "money": -15000,
          "calidad": 5,
          "tiempo": -60,
          "motivacion": 5
        }
      },
      {
        "description": "Implementar programas de reconocimiento y recompensas para el personal.",
        "cost": {
          "money": -10000,
          "calidad": 5,
          "tiempo": -30,
          "motivacion": 5
        }
      },
      {
        "description": "Realizar encuestas de satisfacción para identificar las causas de la rotación.",
        "cost": { "money": -3000, "calidad": 0, "tiempo": -30, "motivacion": 0 }
      },
      {
        "description": "Ofrecer oportunidades de desarrollo profesional y capacitación.",
        "cost": {
          "money": -10000,
          "calidad": 5,
          "tiempo": -60,
          "motivacion": 5
        }
      },
      {
        "description": "Aumentar el apoyo y la comunicación dentro del equipo.",
        "cost": { "money": -5000, "calidad": 5, "tiempo": -30, "motivacion": 5 }
      },
      {
        "description": "Implementar políticas de flexibilidad laboral para mejorar la satisfacción del equipo.",
        "cost": { "money": -7000, "calidad": 5, "tiempo": -30, "motivacion": 5 }
      },
      {
        "description": "Contratar a un especialista en retención de talento para mejorar las estrategias actuales.",
        "cost": {
          "money": -15000,
          "calidad": 5,
          "tiempo": -60,
          "motivacion": 0
        }
      },
      {
        "description": "Revisar los procesos de contratación para asegurar una mejor selección del personal.",
        "cost": { "money": -5000, "calidad": 5, "tiempo": -60, "motivacion": 0 }
      },
      {
        "description": "Ajustar las expectativas del proyecto para aliviar la presión sobre el equipo.",
        "cost": { "money": 0, "calidad": -5, "tiempo": -30, "motivacion": 5 }
      },
      {
        "description": "Proporcionar apoyo psicológico y recursos para manejar el estrés relacionado con la rotación.",
        "cost": { "money": -5000, "calidad": 5, "tiempo": -30, "motivacion": 5 }
      }
    ]
  },
  {
    "id": 27,
    "description": "El equipo está enfrentando conflictos internos que afectan la productividad.",
    "actions": [
      {
        "description": "Organizar sesiones de mediación para resolver conflictos.",
        "cost": { "money": -7000, "calidad": 0, "tiempo": -60, "motivacion": 0 }
      },
      {
        "description": "Implementar un programa de desarrollo de habilidades de comunicación para el equipo.",
        "cost": {
          "money": -10000,
          "calidad": 5,
          "tiempo": -90,
          "motivacion": 0
        }
      },
      {
        "description": "Ofrecer capacitación en resolución de conflictos para todos los miembros del equipo.",
        "cost": { "money": -5000, "calidad": 5, "tiempo": -60, "motivacion": 0 }
      },
      {
        "description": "Revisar y ajustar las responsabilidades del equipo para reducir las áreas de conflicto.",
        "cost": { "money": 0, "calidad": 5, "tiempo": -30, "motivacion": 0 }
      },
      {
        "description": "Fomentar la creación de un ambiente de trabajo colaborativo y positivo.",
        "cost": { "money": -3000, "calidad": 5, "tiempo": -30, "motivacion": 5 }
      },
      {
        "description": "Establecer políticas claras de manejo de conflictos y expectativas de comportamiento.",
        "cost": { "money": -2000, "calidad": 0, "tiempo": -30, "motivacion": 0 }
      },
      {
        "description": "Contratar a un coach organizacional para mejorar la dinámica del equipo.",
        "cost": {
          "money": -15000,
          "calidad": 5,
          "tiempo": -60,
          "motivacion": 0
        }
      },
      {
        "description": "Implementar un sistema de feedback regular para abordar problemas antes de que escalen.",
        "cost": { "money": -3000, "calidad": 5, "tiempo": -60, "motivacion": 0 }
      },
      {
        "description": "Revisar las prácticas de liderazgo y ajustar para apoyar mejor al equipo.",
        "cost": { "money": -5000, "calidad": 5, "tiempo": -60, "motivacion": 0 }
      },
      {
        "description": "Crear espacios para que el equipo socialice y fortalezca las relaciones interpersonales.",
        "cost": { "money": -2000, "calidad": 5, "tiempo": -30, "motivacion": 5 }
      }
    ]
  },
  {
    "id": 28,
    "description": "El presupuesto del proyecto ha sido recortado significativamente.",
    "actions": [
      {
        "description": "Revisar y ajustar el alcance del proyecto para adaptarse al nuevo presupuesto.",
        "cost": { "money": 0, "calidad": -10, "tiempo": -60, "motivacion": 0 }
      },
      {
        "description": "Negociar con los proveedores para reducir los costos.",
        "cost": { "money": -5000, "calidad": 0, "tiempo": -60, "motivacion": 0 }
      },
      {
        "description": "Priorizar las características más importantes del proyecto y eliminar las menos críticas.",
        "cost": { "money": 0, "calidad": -5, "tiempo": -30, "motivacion": 0 }
      },
      {
        "description": "Revisar y reducir los gastos operativos del proyecto.",
        "cost": { "money": -5000, "calidad": 0, "tiempo": -30, "motivacion": 0 }
      },
      {
        "description": "Reevaluar el equipo de trabajo y considerar la reducción de personal si es necesario.",
        "cost": { "money": 0, "calidad": -10, "tiempo": -30, "motivacion": -5 }
      },
      {
        "description": "Buscar fuentes adicionales de financiamiento para cubrir el déficit.",
        "cost": {
          "money": -10000,
          "calidad": 0,
          "tiempo": -90,
          "motivacion": 0
        }
      },
      {
        "description": "Implementar medidas de ahorro para reducir los costos futuros del proyecto.",
        "cost": { "money": -3000, "calidad": 0, "tiempo": -30, "motivacion": 0 }
      },
      {
        "description": "Solicitar una revisión del presupuesto con los interesados para ajustar las expectativas.",
        "cost": { "money": -2000, "calidad": 0, "tiempo": -30, "motivacion": 0 }
      },
      {
        "description": "Revisar y ajustar el cronograma del proyecto para reflejar los cambios en el presupuesto.",
        "cost": { "money": 0, "calidad": -5, "tiempo": -60, "motivacion": 0 }
      },
      {
        "description": "Reforzar la comunicación con el equipo sobre los cambios y las nuevas expectativas.",
        "cost": { "money": -3000, "calidad": 0, "tiempo": -30, "motivacion": 0 }
      }
    ]
  },
  {
    "id": 29,
    "description": "Un cliente importante ha solicitado cambios significativos en el proyecto.",
    "actions": [
      {
        "description": "Negociar con el cliente para entender el alcance de los cambios y ajustar el presupuesto.",
        "cost": { "money": 0, "calidad": 0, "tiempo": -60, "motivacion": 0 }
      },
      {
        "description": "Revisar y ajustar el plan del proyecto para incorporar los cambios solicitados.",
        "cost": {
          "money": -10000,
          "calidad": 5,
          "tiempo": -120,
          "motivacion": 0
        }
      },
      {
        "description": "Reevaluar los plazos del proyecto para acomodar los cambios solicitados.",
        "cost": { "money": 0, "calidad": -5, "tiempo": -90, "motivacion": 0 }
      },
      {
        "description": "Implementar recursos adicionales para cumplir con los nuevos requisitos del cliente.",
        "cost": {
          "money": -20000,
          "calidad": 5,
          "tiempo": -120,
          "motivacion": 0
        }
      },
      {
        "description": "Negociar un nuevo cronograma con el cliente basado en los cambios solicitados.",
        "cost": { "money": 0, "calidad": 0, "tiempo": -60, "motivacion": 0 }
      },
      {
        "description": "Solicitar al cliente una extensión en el plazo de entrega para adaptar los cambios.",
        "cost": { "money": 0, "calidad": 0, "tiempo": -90, "motivacion": 0 }
      },
      {
        "description": "Implementar un sistema de gestión de cambios para asegurar una correcta integración.",
        "cost": { "money": -5000, "calidad": 5, "tiempo": -60, "motivacion": 0 }
      },
      {
        "description": "Ofrecer una revisión continua con el cliente para asegurar que los cambios se implementen correctamente.",
        "cost": { "money": -7000, "calidad": 5, "tiempo": -60, "motivacion": 0 }
      },
      {
        "description": "Revisar los recursos del equipo para asegurar que puedan manejar los cambios solicitados.",
        "cost": { "money": -3000, "calidad": 5, "tiempo": -30, "motivacion": 0 }
      },
      {
        "description": "Ajustar las expectativas del cliente sobre los tiempos y los costos asociados con los cambios.",
        "cost": { "money": 0, "calidad": -5, "tiempo": -60, "motivacion": 0 }
      }
    ]
  },
  {
    "id": 30,
    "description": "El equipo enfrenta un problema de seguridad en el software que necesita ser solucionado rápidamente.",
    "actions": [
      {
        "description": "Contratar a un especialista en seguridad para resolver el problema de inmediato.",
        "cost": {
          "money": -20000,
          "calidad": 5,
          "tiempo": -120,
          "motivacion": 0
        }
      },
      {
        "description": "Implementar una solución temporal para mitigar los riesgos mientras se trabaja en una solución definitiva.",
        "cost": {
          "money": -10000,
          "calidad": -5,
          "tiempo": -60,
          "motivacion": 0
        }
      },
      {
        "description": "Realizar una auditoría de seguridad completa para identificar y corregir vulnerabilidades.",
        "cost": {
          "money": -15000,
          "calidad": 10,
          "tiempo": -120,
          "motivacion": 0
        }
      },
      {
        "description": "Actualizar los sistemas de seguridad del software para prevenir futuros problemas.",
        "cost": {
          "money": -20000,
          "calidad": 10,
          "tiempo": -90,
          "motivacion": 0
        }
      },
      {
        "description": "Ofrecer capacitación adicional al equipo sobre prácticas de seguridad en el desarrollo de software.",
        "cost": { "money": -5000, "calidad": 5, "tiempo": -60, "motivacion": 0 }
      },
      {
        "description": "Revisar y actualizar las políticas de seguridad del proyecto.",
        "cost": { "money": -3000, "calidad": 5, "tiempo": -30, "motivacion": 0 }
      },
      {
        "description": "Implementar controles adicionales de seguridad para proteger los datos del cliente.",
        "cost": {
          "money": -15000,
          "calidad": 10,
          "tiempo": -90,
          "motivacion": 0
        }
      },
      {
        "description": "Aumentar la comunicación con los clientes sobre las medidas de seguridad y las soluciones implementadas.",
        "cost": { "money": -2000, "calidad": 5, "tiempo": -30, "motivacion": 0 }
      },
      {
        "description": "Crear un plan de contingencia para futuros problemas de seguridad.",
        "cost": {
          "money": -10000,
          "calidad": 5,
          "tiempo": -60,
          "motivacion": 0
        }
      },
      {
        "description": "Evaluar y reforzar la infraestructura de soporte del software.",
        "cost": {
          "money": -15000,
          "calidad": 5,
          "tiempo": -90,
          "motivacion": 0
        }
      }
    ]
  }
]
;

function getRandomActions(event, numActions = 4) {
  const actions = event.actions;

  // Barajar el array de acciones usando el algoritmo de Fisher-Yates
  for (let i = actions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [actions[i], actions[j]] = [actions[j], actions[i]];
  }

  // Retornar las primeras `numActions` acciones del array barajado
  return actions.slice(0, numActions);
}

function getUniqueElements(n, array = eventos) {
  const uniqueMap = new Map();

  // Agregar elementos únicos a un mapa
  array.forEach((item) => {
    if (!uniqueMap.has(item.id)) {
      uniqueMap.set(item.id, item);
    }
  });

  // Convertir el mapa a un array
  const uniqueArray = Array.from(uniqueMap.values());

  // Barajar el array usando el algoritmo de Fisher-Yates
  for (let i = uniqueArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [uniqueArray[i], uniqueArray[j]] = [uniqueArray[j], uniqueArray[i]];
  }

  // Array con los primeros n elementos del array único y aleatorio
  const newArray = uniqueArray.slice(0, n);

  return newArray.map((event) => {
    return {
      ...event,
      actions: getRandomActions(event),
    };
  });
}

// Usar la función
// const result = getUniqueElements(3);
// console.log(result);
