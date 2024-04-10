let body= document.querySelector('body')
let signInBox= document.querySelector('.sign-in-box')
let signInContainer= document.querySelector('.sign-in-container')

function hideBox(){
    signInContainer.style.display='none'
    document.body.style.overflow='auto'
    window.location.reload()
}

function showBox(){
    signInContainer.style.display='flex'
    document.body.style.overflow='hidden'
}


function check() {
    var re = /^[0-9]+$/;
    const ph = document.getElementById("number").value;

    if (!ph.match(re) || ph.length !== 10) {
      alert("Entered phone number is not correct");
    }
    else{
      alert("phone no. is correct you can proceed to our home page")
      window.location.href="index.html";

    }
  }