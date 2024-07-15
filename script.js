let btn=document.getElementById('btn');
let place=document.getElementById('holder');
btn.addEventListener('click',LoadData)

function LoadData(){

    let xhr=new XMLHttpRequest();
     xhr.open('GET','country.json',true);
     xhr.send();

     xhr.onload=function(){

        if(xhr.status==200){

        let result=xhr.responseText
       result=JSON.parse(result)

       let str=`<table border=2px><tr>`
       for(key in result){
        str=str+`<th>${key}</th>`
       }
       str=str+`</tr><tr>`
       for(key in result){
        str=str+`<td>${result[key]}</td>`
       }
       str=str+`</tr></table>`

       place.innerHTML=str

        }
        else{

            place.innerHTML='File not found';

        }
        
     }
     
     

}