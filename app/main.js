var openBtn = document.getElementById("open");
var closeBtn = document.getElementById('close');
var linksbar = document.getElementById("linksbar");


openBtn.addEventListener("click",()=>{
    linksbar.style.display="flex";
    closeBtn.style.display="block";
    bagfixbotton.style.display='none';

})

closeBtn.addEventListener("click",()=>{
    linksbar.style.display="none";
    closeBtn.style.display="none";

    if (bag.length!=0) {
      bagfixbotton.style.display='block'
    } else {
      bagfixbotton.style.display='none'
    }

})



linksbar.addEventListener('click',()=>{
  if (window.innerWidth<=900) {
    linksbar.style.display="none";
    closeBtn.style.display="none";
    if (bag.length!=0) {
      bagfixbotton.style.display='block'
    } else {
      bagfixbotton.style.display='none'
    }
  }
})



var swiper = new Swiper(".mySwiper", {
    spaceBetween:2,
    centeredSlides: true,
    loop:true,
    loopFillGroupWithBlank: true,
    grabCursor: true,
    creativeEffect: {
      prev: {
        shadow: true,
        translate: ["-120%", 0, -500],
      },
      next: {
        shadow: true,
        translate: ["120%", 0, -500],
      }},
    // autoplay: {
    //   delay: 10000,
    //   disableOnInteraction: true,
    // },
    autoplay: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  var swiper = new Swiper(".myShopSwiper", {
    slidesPerView: 1.8,
    spaceBetween: 12,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 3.5,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4.5,
        spaceBetween: 25,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
    },
  });








  
  function getnow() {
    let text='';
      for (let i = 0; i < bag.length; i++) {
        text+="%0A + ( "+plants[bag[i][0]].id+" | "+ potsColorsname[bag[i][1]]+" ) => "+bag[i][2];
      }
      setTimeout(() => {
        window.open('https://wa.me/212669231618/?text=Bonjour je veux commander ces produits: '+text).focus();
      }, 650);
  }








  document.addEventListener('DOMContentLoaded', ()=>{
    loading.classList.add('hideloading');
    loading.style.display='none';
    setTimeout(() => {
    }, 2000);
  });




const faqQuest = document.querySelectorAll("[faq]");
faqQuest.forEach(faq => {
  faq.addEventListener('click', (e) => {
    let a = faq.classList.contains('collapes') ;
    if (innerWidth<=900) {
      for (let i = 0; i < faqQuest.length; i++) {
        faqQuest[i].classList.add('collapes')
      }
    }
    if (a) {
      faq.classList.remove("collapes");
      faq.setAttribute('title','press to close');
    }else{
      faq.classList.add('collapes')
      faq.setAttribute('title','press to open');
    }
  })
});






const linksheader = document.querySelectorAll('[linkheader]')

function linkactive(a) {
  
  linksheader.forEach(link=>{
    link.classList.remove('linkactive');
  })
  a.classList.add('linkactive');
}


document.addEventListener('scroll', autocheckedscroll);

function autocheckedscroll(){
  
  if (window.scrollY < 1300) {
    linkactive(linksheader[0])
  }else 
  if (window.scrollY > 1300 && window.scrollY < 2100) {
    (plantorpot == 'plant') ? linkactive(linksheader[1]) : linkactive(linksheader[2]);
  }else
  if (window.scrollY > 2100) {
    linkactive(linksheader[4]);
  }
}
setTimeout(() => {
  autocheckedscroll()
}, 20);












const scrollIndicateur = document.querySelector("[scrollIndicateur]");


var lastScrollTop = 0;
window.addEventListener('scroll', hideScrollIndicateur, false);

function hideScrollIndicateur(){
let scrollsize = window.pageYOffset || document.documentElement.scrollTop;
( scrollY > 100) ? scrollIndicateur.classList.add("hideScrollIndicateur") : scrollIndicateur.classList.remove("hideScrollIndicateur");
lastScrollTop = (scrollsize <= 0) ? 0 : scrollsize;
}



