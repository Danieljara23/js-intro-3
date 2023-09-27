const dia = new Date().getDay()

if (dia === 0) {
  console.log("¡Hoy es domingo! 😴")
} else if (dia === 1) {
  console.log("¡Nooo, es lunes! 😢")
} else if (dia === 2) {
  console.log("¡Hoy es martes! 🥵")
} else if (dia === 3) {
  console.log("¡Hoy es miércoles! 🤓")
} else {
  console.log("Se acerca el fin de! 🚀")
}

switch (dia) {
  case 0:
    console.log("¡Hoy es domingo! 😴");
    break;
  case 1:
    console.log("¡Nooo, es lunes! 😢");
    break;
  case 2:
    console.log("¡Hoy es martes! 🥵");
    break;
  case 3:
    console.log("¡Hoy es miércoles! 🤓");
    break;
  default:
    console.log("Se acerca el fin de! 🚀")
    break;
}