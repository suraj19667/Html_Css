
// let change=() => {
//     let ptag=document.querySelector("#suraj")

//     ptag.style.fontSize="20px"
// }
// let hide=() => {
//     let text=document.querySelector("#suraj")

//     text.style.display="none";
// }
// let show=() => {
//     let text=document.querySelector("#suraj")

//     text.style.display="block";
// }

let count=0;
   let inc=()=>{
    
   let Show= document.querySelector("#show")
  
    count++;
    Show.innerHTML=count;

   }

   let dec=()=>{
    let Show= document.querySelector("#show")
    count--;
    Show.innerHTML=count;
    if(count<0){
        count=0;
        Show.innerHTML=count;
    }

   }
    let reset=()=>{
     let Show= document.querySelector("#show")
     count=0;
     Show.innerHTML=count;
    
    }

    let showalert=()=>{
        
        let name=document.querySelector("#name").value;
        alert(name);

    }

