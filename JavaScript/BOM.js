// BOM-> interaction between browser window

function suraj(){

    // window.alert("Give Feedback");
    // window.confirm("Are you ok");
    // window.prompt("enter your name");

    // let confirmans=window.confirm("Are you sure you want to delete this file?");
    // console.log(confirmans);


    // let promptmes=window.prompt("Enter your name");
    // window.alert(promptmes)

    let ans=confirm("Do you like my website?");
    if(ans){
        alert("Thank you for your feedback");
    }
    else{
        alert("Sorry for the inconvenience");
    }

}
suraj()
