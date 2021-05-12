//Ex1
let ex1 = document.querySelector('#content')
console.log(ex1);

//Ex2
let ex2 = document.querySelectorAll('#content')[0]
console.log(ex2);

console.log("Ex3");
//Ex3
let ex3 =Array.from(document.querySelector('ul').children) //Car a la base querySelector ne selectionne que le 1er element li.Donc j'ai visé le parent.
ex3.splice(5) //sinon il affiche tous les autres li pas .important aussi

ex3.forEach(element => {
    console.log(element);
});
//ou
//let ex3 = document.querySelector('li.important') pour montrer que querySelector ne prend que 1 elem (Le premier)

console.log("Ex4");
//Ex4
let ex4 = document.querySelectorAll('li.important')
ex4.forEach(element => {
    console.log(element);
});

console.log("Ex5");
//Ex5 N

ex4.forEach(element => {
    console.log(element.innerHTML.slice(0,-1)+element.innerHTML.substr(-1).toUpperCase());
});
//Couper la dernière lettre avec slice(0,-1) tout en affichant ce qu'il y a avant et substr(-1) isole la dernière lettre puis UpperCase le met en Maj

console.log("Ex6");
//Ex6
let ex6 = document.getElementById('content').getElementsByClassName('grandParagraphe')[0]
console.log(ex6);