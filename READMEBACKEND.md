# Backend

# se utilizan principios "SOLID", para dividir responsabilidades por cada metodo o funcion, de esta manera cada funcion se encarga de realizar ciertas tareas dependiendo de si misma o en ocasiones de otras funciones, diviviendo la responsabilidad de la misma.


# cada servicio que interactue con el front end se debe de almacenar en la carpeta services y este debe de finalizar con el nombre de "Service"


# Aplicación de los Principios SOLID
## S: Single Responsibility Principle (Responsabilidad Única)
## Cada archivo tiene una responsabilidad única, como manejar configuraciones, procesar fechas o interactuar con hojas de cálculo.

## O: Open/Closed Principle (Abierto/Cerrado)
## Puedes extender la funcionalidad añadiendo nuevos archivos sin modificar los existentes.

## L: Liskov Substitution Principle (Sustitución de Liskov)
## Las funciones pueden ser utilizadas como bloques intercambiables sin alterar el flujo general del programa.

## I: Interface Segregation Principle (Segregación de Interfaces)
## Cada archivo contiene funciones enfocadas en un tipo de operación, evitando interfaces grandes y monolíticas.

## D: Dependency Inversion Principle (Inversión de Dependencias)
## Las vistas o servicios no dependen directamente de implementaciones concretas, sino de estas utilidades globales bien definidas.


Backend/
├── Shared/
│   ├── Config/
│   │   ├── Globals.gs          # Parámetros globales (IDs de bases de datos, nombres de tablas)
│   │
│   ├── Data/
│   │   ├── DBManager.gs        # Funciones de conexión a la base de datos y asignación de hojas
│   │   ├── DataUtils.gs        # Funciones de manipulación de datos (ordenar, etc.)
│   │
│   ├── Services/
│   │   ├── InsertService.gs    # Funciones para insertar datos (lógica de inserción)
│   │
│   ├── Utils/
│   │   ├── ValidationUtils.gs  # Funciones de validación (validar email, campos vacíos, etc.)
│   │
├── Pages/
│   ├── Usuarios/
│   │   ├── validations/
│   │   │   ├── validateEmail.gs
│   │   │   ├── validateUserFields.gs
│   │   │
│   │   ├── AddUserHandler.gs
│   │   ├── ListUsersHandler.gs
│   │   ├── DeleteUsersHandler.gs


# PATRON UTILIZADO

# Modularización por Funcionalidad" o "Modularización por Dominio". Este patrón busca dividir el código en módulos o carpetas específicas, cada una encargada de una responsabilidad o funcionalidad particular dentro de la aplicación. La idea es mejorar la mantenibilidad, escalabilidad y reutilización del código.

# Descripción del Patrón y Cómo Funciona:
## Este enfoque organiza las diferentes partes del código en carpetas según su funcionalidad o dominio, y no solo por tipo de archivo (como lo harías en una estructura más monolítica). Aquí está el desglose:

1. Carpeta Shared/:
Config/: Contiene configuraciones globales, como parámetros, IDs de bases de datos o nombres de tablas. Aquí se agrupan los valores que se utilizan de manera común a lo largo de la aplicación, como los parámetros de configuración.
Data/: Contiene funciones relacionadas con la gestión de datos, como la conexión a bases de datos, asignación de hojas en Google Sheets o manipulación de datos (por ejemplo, ordenar, filtrar).
Services/: Aquí se almacenan los servicios de lógica de negocio que realizan operaciones específicas, como insertar, actualizar o eliminar datos. Los archivos en esta carpeta son responsables de la ejecución de la lógica principal de la aplicación.
Utils/: Aquí se guardan funciones utilitarias generales que se utilizan en toda la aplicación. Son funciones pequeñas, reutilizables y genéricas, como validaciones de campos, formateo de fechas, etc.
2. Carpeta Pages/:
Esta carpeta contiene los módulos específicos de cada funcionalidad o página de la aplicación. Por ejemplo, si tienes una página de usuarios, tendrás una subcarpeta Usuarios/ donde se organizan los diferentes handlers o controladores relacionados con la gestión de usuarios.
Validations/: Aquí se incluyen las funciones específicas para validar datos dentro de una página o módulo. Estas validaciones están relacionadas directamente con los datos específicos de esa vista (por ejemplo, validar un correo electrónico o los campos de un formulario de usuario).
AddUserHandler.gs, ListUsersHandler.gs, DeleteUsersHandler.gs: Son funciones que manejan las operaciones específicas de cada vista o acción dentro del módulo de usuarios. Cada archivo está dedicado a un aspecto particular de la gestión de usuarios (añadir, listar, eliminar).
Principales Características del Patrón:
Modularidad: Cada carpeta y archivo tiene una responsabilidad específica. Esto hace que el código sea más fácil de entender, mantener y extender, porque cada módulo o archivo se centra en una tarea concreta.
Reutilización: Las funciones dentro de Shared/ son de uso general, lo que significa que pueden ser reutilizadas en cualquier parte de la aplicación. Esto evita la duplicación de código.
Escalabilidad: Este patrón permite que el proyecto crezca sin volverse desordenado. Puedes agregar nuevos módulos o funcionalidades sin afectar otras partes del sistema.
Responsabilidad Única: Cada archivo tiene una responsabilidad clara, siguiendo el principio de SRP (Single Responsibility Principle), uno de los principios SOLID.

# Ventajas del Patrón:
Facilita la Mantenibilidad: Cada módulo tiene una función específica, lo que facilita la localización de errores y el ajuste de funcionalidades sin impactar otras partes del proyecto.
Escalabilidad: Puedes agregar más módulos o vistas sin afectar la estructura general del proyecto.
Separación de Responsabilidades: Cada archivo tiene una responsabilidad clara y no se mezcla con otras funcionalidades.
Reutilización de Código: Los módulos como Shared/ y Utils/ pueden ser reutilizados en cualquier parte de la aplicación, evitando duplicación de código.
Nombres de Patrones Relacionados:
Aunque este enfoque no es un patrón único con un nombre específico, es muy similar a:

Patrón de Modularización o Modular Architecture: La aplicación se divide en módulos funcionales independientes.
Patrón de Capas (Layered Pattern): Organiza el código en diferentes capas de responsabilidad, como capa de datos, lógica de negocio y presentación.
Patrón de Separación de Preocupaciones (Separation of Concerns): Divide el código en componentes que gestionan diferentes aspectos de la aplicación (validaciones, datos, servicios, etc.).
Resumen:

## Este patrón de modularización por funcionalidad es excelente para organizar proyectos de mediano a gran tamaño, ya que permite estructurar el código de manera clara, favorece la reutilización y facilita su mantenimiento y escalabilidad.



