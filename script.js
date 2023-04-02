class productos {
  constructor(id, nombre, categoria, precio) {
    (this.id = id),
      (this.nombre = nombre),
      (this.categoria = categoria),
      (this.precio = precio);
  }
}
let opUno = "";
let opDos = "";
let filtro = "";
let buscarId = "";
let buscarNombre = "";
let carrito = [];
let filtroId;
let filtroNombre;
let totalCarrito = 0;
let cantidad;
const bebidas = [];
bebidas.push(new productos(1, "stella", "cerveza", 300));
bebidas.push(new productos(2, "fernet", "aperitivo", 2000));
bebidas.push(new productos(3, "cocacola", "gaseosa", 400));
bebidas.push(new productos(4, "fanta", "gaseosa", 300));
bebidas.push(new productos(5, "andes", "cerveza", 250));
bebidas.push(new productos(6, "gin", "aperitivo", 3000));
bebidas.push(new productos(7, "sprite", "gaseosa", 350));
bebidas.push(new productos(8, "temple", "cerveza", 400));
bebidas.push(new productos(9, "campari", "aperitivo", 1500));

// FUNCIONES DE MUESTRA ARRAYS

function muestra(array) {
  return array
    .map((ar) => `ID:${ar.id} - ${ar.nombre}\t\t${ar.precio} $`)
    .join("\n");
}

let usuario = prompt("Ingresa tu nombre");
alert("Hola " + usuario + " bienvenido a Distribuidor de bebidas\n");

do {
  do {
    opUno = prompt(
      "Marque la opcion que desea igresar:\n1 - Información de productos\n2 - Filtrar por categoria\n3 - Buscar un producto por ID\n4 - Agregar al carrito\n5 - Finalizar carrito\n6 - Salir"
    );
    if (opUno < 1 || opUno > 6 || isNaN(opUno)) {
      alert("La opcion ingresada es incorrecta intente nuevamente");
    }
  } while (opUno < 1 || opUno > 6 || isNaN(opUno));

  // INFORMACION DE PRODUCTOS

  if (opUno == 1) {
    alert("Productos de distribuidor de bebidas:\n\n" + muestra(bebidas));
  } else if (opUno == 2) {
    // FILTRAR POR CATEGORIA

    do {
      filtroCat = prompt(
        "Las categorias para filtrar son las siguientes:\nCerveza, Aperitivos o Gaseosa"
      ).toLowerCase();
      if (
        filtroCat != "cerveza" &&
        filtroCat != "aperitivo" &&
        filtroCat != "gaseosa"
      ) {
        alert("La opcion ingresada es incorrecta. Intente nuevamente");
      }
    } while (
      filtroCat != "cerveza" &&
      filtroCat != "aperitivo" &&
      filtroCat != "gaseosa"
    );
    let profil = bebidas.filter((bebida) => bebida.categoria === filtroCat);
    alert(muestra(profil));
  } else if (opUno == 3) {
    // BUSCAR UN PRODUCTO POR ID

    let mostrarProd = [];
    do {
      buscarId = prompt("Cual es el producto por ID que quiere buscar");
      if (buscarId < 1 || buscarId > 9 || isNaN(buscarId)) {
        alert("El ID ingresado es invalido");
      }
    } while (buscarId < 1 || buscarId > 9 || isNaN(buscarId));

    filtroId = bebidas.find((bebida) => bebida.id == buscarId);
    mostrarProd.push(filtroId);
    alert(muestra(mostrarProd));
  } else if (opUno == 4) {
    // AGREGAR AL CARRITO

    do {
      do {
        buscarNombre = prompt(
          "Cual es el nombre del producto que queres agregar al carrito\nstella / fernet / cocacola / fanta / andes / gin / sprite / temple / campari"
        ).toLowerCase();
        filtroNombre = bebidas.find((bebida) => bebida.nombre == buscarNombre);
        if (filtroNombre == undefined) {
          alert("El Nombre ingresado no existe, intente de nuevo");
        }
      } while (filtroNombre == undefined);

      do {
        cantidad = prompt("¿Cuantas unidades quieres agregar?");
      } while (cantidad < 1 || isNaN(cantidad));

      for (let i = 0; i < cantidad; i++) {
        carrito.push(filtroNombre);
      }

      do {
        optres = prompt(
          "¿Desea agregar otro producto al carrito? SI/NO"
        ).toLowerCase();
        if (optres != "si" && optres != "no") {
          alert("Opcion incorrecta! SI/NO");
        }
      } while (optres != "si" && optres != "no");
    } while (optres != "no");
  } else if (opUno == 5) {
    // FINALIZAR CARRITO

    if (carrito == "") {
      alert("Tu carrito se encuentra vacío");
    } else {
      for (const producto of carrito) {
        totalCarrito += producto.precio;
      }

      alert(
        "Tu carrito es el siguiente:\n" +
          muestra(carrito) +
          "\n\n El total es: " +
          totalCarrito +
          " $"
      );
      opUno = 6;
    }
  }
  if (opUno == 6) {
    // SALIR

    alert("Muchas gracias por la visita " + usuario + " Nos vemos");
  }
} while (opUno != 6);
