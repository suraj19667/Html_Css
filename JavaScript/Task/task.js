
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


    let count = 0;

    const button = document.getElementById('clickButton');
    const countDisplay = document.getElementById('countDisplay');

    button.addEventListener('click', function() {
        count++;
        countDisplay.textContent = 'Count: ' + count;
    });

