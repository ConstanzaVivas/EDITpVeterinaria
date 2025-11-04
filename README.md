Clínica Veterinaria – API REST (NestJS)
Autor: Vivas, Constanza
Materia: EDI – Trabajo Final NestJS
Profesora: Marina Gisele Keimel
Año: 2025
Objetivo del trabajo
El proyecto consiste en una API sencilla creada con NestJS, la misma sirve para simular el sistema de una clínica veterinaria donde se pueden manejar mascotas, dueños, turnos, diagnósticos, vacunas y tratamientos. Todo se guarda en memoria, sin base de datos, para que sea más simple.
Cómo se usa
1. Instalar dependencias con el comando: npm install
2. Ejecutar el servidor con: npm run start:dev
3. La API funciona en http://localhost:3000
Estructura general
El proyecto tiene dos partes principales:
- masco-hijos: maneja las mascotas, dueños y su historial.
- agenda: maneja los turnos, vacunas, tratamientos y diagnósticos.
Servicios principales
1. Mascotas (masco-hijos)
Permite registrar y consultar las mascotas y sus dueños. También se puede ver el historial médico y una lista de recordatorios para chequeos o vacunas.
Principales rutas:
- GET /masco-hijos/pacientes → lista todas las mascotas.
- GET /masco-hijos/pacientes/:id → muestra una mascota por ID.
- POST /masco-hijos/ingresar → agrega una nueva mascota.
- GET /masco-hijos/pacientes/:id/historial → muestra el historial de una mascota.
- POST /masco-hijos/pacientes/:id/historial → agrega un evento al historial.
- GET /masco-hijos/recordatorios/chequeos → muestra mascotas sin historial.
- GET /masco-hijos/duenos → lista todos los dueños registrados.

2. Agenda (turnos, diagnósticos, vacunas, tratamientos)
Permite registrar y administrar turnos veterinarios, además de guardar diagnósticos, vacunas y tratamientos.
Turnos:
- GET /agenda/turnos → lista los turnos.
- GET /agenda/turnos/:id → muestra un turno por ID.
- POST /agenda/turnos → agrega un nuevo turno (no permite fechas pasadas).
- PUT /agenda/turnos/:id → actualiza un turno existente.
- DELETE /agenda/turnos/:id → elimina un turno.
Diagnósticos, vacunas y tratamientos:
- GET /agenda/diagnosticos, /agenda/vacunas, /agenda/tratamientos → listan cada tipo de registro.
- POST /agenda/diagnosticos → agrega un diagnóstico (requiere mascota, fecha y descripción).
- POST /agenda/vacunas → agrega una vacuna (requiere mascota, fecha y nombre de vacuna).
- POST /agenda/tratamientos → agrega un tratamiento (requiere mascota, fecha, medicamento, dosis y días).

A tener en cuenta que:
- No se pueden crear turnos con fechas pasadas.
- Las mascotas deben tener nombre, especie y dueño.
- Los tratamientos y vacunas deben tener los datos obligatorios.
- Las respuestas se devuelven en formato JSON.
- Hay comentarios sugeridos por el chat que los dejo compartidos para seguir mejorando. 

