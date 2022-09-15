const express = require("express");
const { routerProducto } = require("./routeProducto");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 8080;
const server = app.listen(PORT, () => {
    console.log(`Servidor levantado en puerto: ${server.address().port}`);
});

//recurso estatico
app.use("/", express.static("public"));
//router para los productos
app.use("/productos", routerProducto);


