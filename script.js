// variables acordeon preguntas
const bloque = document.querySelectorAll(".seccion-preguntas");
const pregunta = document.querySelectorAll(".pregunta-item");
// variables seccion respuestas
const area_trabajo = document.querySelector(".area-trabajo");
const btns = document.querySelectorAll(".btn");
const ejercicio = document.querySelectorAll(".ejercicio");

//----------------------------------- function acordeon preguntas
pregunta.forEach((element, item) => {
  pregunta[item].addEventListener("click", () => {
    bloque.forEach((cadaBloque, item) => {
      bloque[item].classList.remove("animation");
    });
    bloque[item].classList.add("animation");
  });
});

//--------------------------------- function seccion respuestas
area_trabajo.addEventListener("click", (e) => {
  const id = e.target.dataset.id;
  // console.log(e.target.dataset.id);
  if (id) {
    btns.forEach((btn) => {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
    ejercicio.forEach((line) => {
      line.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});
