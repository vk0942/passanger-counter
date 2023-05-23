let count=0;
function increment()
{
  count++;
  document.getElementById("count-el").textContent=count;
}
let para=document.getElementById("save-el");
function save()
{
   let str=count + " - ";
   
  para.textContent+=str;
  count=0;
  document.getElementById("count-el").textContent=count;
}

