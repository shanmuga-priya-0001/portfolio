const tex = document.getElementById('text-d');
const bar = document.getElementById('bar');
const closs = document.getElementById('closs');
const atag = document.getElementById('atag');

tex.addEventListener("click",function handleClick(){

  bar.style.display = "block";
  tex.style.display = "none";
  closs.style.display = "block";
  
}); 

closs.addEventListener("click", function handleClick()
{
    bar.style.display = "none";
    tex.style.display = "block";
    closs.style.display = "none";
});

