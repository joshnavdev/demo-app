# Demo-app

Aplicativo demo para gestionar diferentes microservicios usando kubernetes.

## Microservicios

| Microservicios | Ruta | Servicios |
| :------------  | :--- | :---      |
| Landing Page   | /    | --        |
| React App      | /app | --        |
| Auth Server    | /api/auth | login|
| Books Server   | /api/books| create, list|
|Payments Server | /api/payments|create, list|
|MySQL DB        | -- | -- |


### Landing Page
* Debe tener un boton de login y debe llevarte al **/app/login**.

### React App
* Debe permitir logearse para entrar al **/app/home**.

### Auth Server
* Debe tener el servicio **POST /api/auth/v0/login**.

### Books Server
* Debe tener el servicio **POST /api/books/v0/books** para crear libro.
* Debe tener el servicio **GET /api/books/v0/books** para listar libros.

### Payments Server
* Debe tener el servicio **POST /api/payments/v0/invoices** para crear factura.
* Debe tener el servicio **GET /api/payments/v0/invoices** para listar facturas.

### MySQL DB (opcional)
* Debe conectarse todo a la base de datos de MySQL.