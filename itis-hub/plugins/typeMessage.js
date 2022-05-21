import TypeIt from "typeit";
export { typeGreeting };

function typeGreeting() {
  new TypeIt("#element", {
    speed: 75,
    loop: false,
  })
    .type("Welcome to the club ", { delay: 600 })
    .delete(5, { speed: 75, delay: 600 })
    .type("<strong>hub</strong>, Buddy ")
    .go();
}

// https://typeitjs.com/docs - documentation
