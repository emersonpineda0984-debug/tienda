// Chore’s Store - filtros y carrito

const contador = document.getElementById("contador");
const totalEl = document.getElementById("total");
let items = 0;
let total = 0;

// Imagen gris que se muestra si todavía no pusiste la foto
const vacia = "data:image/svg+xml;utf8," + encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300"><rect width="100%" height="100%" fill="#dfe5f0"/><text x="50%" y="50%" fill="#6b7385" font-family="sans-serif" font-size="20" text-anchor="middle">Agrega la foto aquí</text></svg>'
);

document.querySelectorAll(".card img").forEach(img => {
  img.addEventListener("error", () => { img.src = vacia; }, { once: true });
});

// Carrito: suma el precio guardado en data-precio de cada producto
document.querySelectorAll(".card .agregar").forEach(boton => {
  boton.addEventListener("click", () => {
    const precio = parseFloat(boton.closest(".card").dataset.precio);
    items++;
    total += precio;
    contador.textContent = items;
    totalEl.textContent = total.toFixed(2);
  });
});

// Filtros: muestran u ocultan cada sección de categoría
document.querySelectorAll(".filtros button").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".filtros .activo").classList.remove("activo");
    btn.classList.add("activo");
    const cat = btn.dataset.cat;
    document.querySelectorAll(".categoria").forEach(sec => {
      sec.classList.toggle("oculta", cat !== "todos" && sec.dataset.cat !== cat);
    });
  });
});
