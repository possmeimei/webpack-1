import x from './x.js'
console.log(x);
import jpg from './assets/images/1.jpg'
console.log(jpg);
const div = document.getElementById('app')

div.innerHTML =`
    <img src="${jpg}" alt="暗黑破坏神"/>
`