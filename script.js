/*increase in length for header */

let header = document.querySelector('.header');
let sticky = header.offsetTop;


window.addEventListener('scroll', ()=>{
    if(window.pageYOffset > sticky){
       header.classList.add('sticky');
    }else{
        header.classList.remove('sticky');
    }
})

/*click on menu*/
let a= document.querySelectorAll(".list");
console.log(a)
for(let i = 0;i < a.length; i++){
    a[i].onclick = (e)=>{
        let n = 0;
        while(n< a.length){
            a[n++].className= '';
        }
        e.target.className = "active"
    }
}

/*delete sentance with scroll*/

let introEleman= document.getElementById('intro')
window.addEventListener('scroll',function(){
    if(window.scrollY > 500)
       
        introEleman.style.visibility = "hidden";

    else
    introEleman.style.visibility="visible";
});


/*type sentance on screen*/


const text = ["We are Developer Sisters","We show your work in a distinct way"];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";


(function type(){

    if(count === text.length){
        count = 0;
    }
    currentText = text[count];
    letter = currentText.slice(0, ++index);

   document.querySelector('.sentance').textContent = letter;
    console.log(index)
   if(letter.length === currentText.length){
       count++;
       index =0;
   }

   setTimeout(type, 150)

})()