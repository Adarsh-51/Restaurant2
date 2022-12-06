


const select =  document.querySelector('.container7');
const select1 = document.querySelector('.container8');
const select2 =  document.querySelector('.container9');
const click = document.querySelector('.bld1');
const click1 = document.querySelector('.bld2');
const click2 = document.querySelector('.bld3');
const click3 = document.querySelector('.mobile-menu');
const click4 = document.querySelector('.mobile-menu-exit');
const select3 = document.querySelector('.option-menu');


click.addEventListener ('click', () => {
    select.style.display = 'block';
    click.style.backgroundColor = '#d9dcce';
    select1.style.display = 'none';
    click1.style.backgroundColor = 'white';
    select2.style.display = 'none';
    click2.style.backgroundColor = 'white';
})

click1.addEventListener ('click', () => {
    select1.style.display = 'block';
    click1.style.backgroundColor = '#d9dcce';
    select.style.display = 'none';
    click.style.backgroundColor = 'white';
    select2.style.display = 'none';
    click2.style.backgroundColor = 'white';
})

click2.addEventListener ('click', () => {
    select2.style.display = 'block';
    click2.style.backgroundColor = '#d9dcce';
    select1.style.display = 'none';
    click1.style.backgroundColor = 'white';
    select.style.display = 'none';
    click.style.backgroundColor = 'white';
})

click3.addEventListener ('click', () =>{
    select3.style.display = 'block' ;
    click3.style.display = 'none' ;
    click4.style.display = 'inline' ;
    // document.getElementsByClassName("subhead"). = "30%";
    // document.getElementsByClassName("subhead1").style.top = "35%";
})

click4.addEventListener ('click', () => {
    select3.style.display = 'none';
    click3.style.display = 'inline';
    click4.style.display = 'none';
    // document.getElementsByClassName("subhead").style.top = "20%";
    // document.getElementsByClassName("subhead1").style.top = "25%";

})




