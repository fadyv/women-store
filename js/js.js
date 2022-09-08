
var imgs =document.querySelectorAll('.imgs');
var fixedBox =document.getElementById('fixedBox');
var smallBox =document.getElementById('smallBox');
var nextBtn = document.getElementById('nextBtn');
var prevBtn = document.getElementById('prevBtn');
var clickedImg;
var imgSrc;
var imgArray=[];
var currentIndex;



// push images in array
    for (var index = 0; index < imgs.length; index++) {

        imgArray.push(imgs[index]);
        
    };
    
 // to open the hidden section
    for (var index = 0; index < imgs.length; index++) {
        imgs[index].addEventListener('click',function(e){
    
    
            fixedBox.classList.replace('d-none','d-flex');
             clickedImg = e.target;                          //bamsk l sora l dost 3aleha
             currentIndex = imgArray.indexOf(clickedImg);   //Ra2m l sora l dost 3aleha
             imgSrc = clickedImg.getAttribute('src');
             smallBox.style.backgroundImage=`url(${imgSrc})`;
    
        
        
        })
        
    }


 // function close the hidden section   
    function closeBtn() {
    
         fixedBox.classList.replace('d-flex','d-none');
        
    }
    
    
    // functions for stop propagation
    fixedBox.addEventListener('click', closeBtn)
    
    
     smallBox.addEventListener('click',function(e){
        e.stopPropagation(); 
     })


     nextBtn.addEventListener('click',function(e){
        e.stopPropagation();  
     })
    

     prevBtn.addEventListener('click',function(e){
        e.stopPropagation(); 
     })
    // -----------------------------------

    // functions for show next image
    nextBtn.addEventListener('click',function () {

        currentIndex++;
    
        if (currentIndex == imgArray.length) {
        currentIndex=0;
            
        }
        var Src =imgArray[currentIndex].getAttribute('src');
        smallBox.style.backgroundImage=`url(${Src})`;
    
    })

    // functions for back next image
    prevBtn.addEventListener('click',function () {

        currentIndex--;
    
        if (currentIndex == -1) {
        currentIndex=imgArray.length-1;
            
        }
        var Src =imgArray[currentIndex].getAttribute('src');
        smallBox.style.backgroundImage=`url(${Src})`;
    

    })
      
    // owlCarousel
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        autoplayTimeout:2000,
        responsive:{
            0:{
                items:3
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
     

  
    