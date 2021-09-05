let toda_la_banda = ["Diana", "Monica", "Maria", "Breny"];

let body =document.getElementsByName('body');

toda_la_banda.forEach(item => {
    const li = document.createElement('li');
    li.innerText = item;
    document.body.appendChild(li);
});

let toda_la_banda2 = ["Diana", "Maria", "Breny"];

toda_la_banda2 = toda_la_banda2.filter(v=>v !== "Breny");

console.log(toda_la_banda2);

toda_la_banda2.unshift("Jose");

toda_la_banda2.push("Jenifer")

let item = toda_la_banda2.find(it => it === "Diana");

console.log(item);

let toda_la_banda3 = toda_la_banda.slice(1,3);

console.log(toda_la_banda3);


const buscaIndice =(arr = [""])=>{
idx = -1;
arr.forEach((item,i)=>{
if(item ==="Monica") idx = i;
});
return idx;
}

console.log('Imprime indice o -1 si no existe: ',buscaIndice(toda_la_banda));