// signup cross function
 
 var signcross = document.getElementById("sign-x")


 var signdiv = document.getElementById("sign")

    signcross.addEventListener("click",function(){
       signdiv.style.display = "none";
    })

    var slideimages = document.querySelectorAll('img')
    var next = document.querySelector('.next')
    var prev = document.querySelector('.prev')

    var count = 0;

    next.addEventListener("click",function(){
        slideimages[count].style.animation = 'next1 0.5s ease-in forwards';
        if(count == 0){
            count = slideimages.length-1;
        }
        else{
            count--;
        }
        slideimages[count].style.animation = 'next2 0.5s ease-in forwards';
    })

    prev.addEventListener("click",function(){
        slideimages[count].style.animation = 'prev1 0.5s ease-in forwards';
        if(count>=slideimages.length-1){
            count = 0;
        }
        else{
            count++;
        }
        slideimages[count].style.animation = 'prev2 0.5s ease-in forwards';
    })

    // var navigation = document.querySelector(".brand__home")
    // var brand__home__nav = document.getElementById("Brand_home")
    // navigation .addEventListener("click",function(){
    //     brand__home__nav.style.animation = "ease-in";
    //  })