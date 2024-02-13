const btn = document.querySelector('yes')
addEventListener("click", tick)


function tick() {
   return alert('И я тебя люблю <3')
}
const btn2 = document.querySelector('noo')
addEventListener("click", ticki)


function ticki() {
   btn2.style = `
   font-size: ${+1}px;
   `
}