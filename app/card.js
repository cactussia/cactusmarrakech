var bag = []
var bagbtn = document.getElementById('bag')



var showbar;

var bagfixbotton= document.getElementById('bagfixbotton')
var bagfixbotton2 = document.getElementById('bagfixbotton2')


function addtocard() {
    if (potchecked!=undefined&&plantchecked!=undefined) {
        bagfixbotton2.classList.add("new");
        bagbtn.classList.add("new");
        bag.push([plantchecked,potchecked,qntval])
        console.log(bag)
        plantchecked=undefined;
        potchecked=undefined;
        ds();
        ref()
    }
    price=0;
    qntval=1;
    bagchecker()
    bagref()
    qntchang(0)

    if (bag.length!=0) {
        bagfixbotton.style.display='block'
      } else {
        bagfixbotton.style.display='none'
    }
    closeinfoplant();
    view('plant');
}


function ds() {
    for (let i = 0; i < shopCardpots.length; i++) {
        shopCardpots[i].classList.remove("checked");
        shopCardPlants[i].classList.remove("checked");
    }
}

const getnowbtnbag = document.getElementById('getnowbtnbag')
function bagchecker() {
    if (bag.length!=0) {
        bagbtn.classList.add("new");
        bagfixbotton2.classList.add("new");
        bagfixbotton.classList.add('showbag');
        getnowbtnbag.classList.remove('disable')

    } else {
        bagbtn.classList.remove("new");
        bagfixbotton2.classList.remove("new");
        bagfixbotton.classList.remove('showbag');
        getnowbtnbag.classList.add('disable')


    }
    if (bag.length!=0) {
        bagfixbotton.style.display='block'
      } else {
        bagfixbotton.style.display='none'
    }

}
bagchecker()







var bagviewer = document.getElementById('bagviewer');
var gapPrice = document.getElementById('gapPrice');
var dlvrprice = document.getElementById('dlvr');
var bagfixbotton = document.getElementById('bagfixbotton');
 const bagtotalprice = document.getElementById("bagtotalprice");

var totalpots = 0

function bagref(){
    bagviewer.innerHTML='';
    price=0;
    totalpots = 0
    for (let i = 0; i < bag.length; i++) {
        if (bag.length!=0) {
            l=bag.length;
            let colorworb=''
            if(bag[l-i-1][1]=="9"||bag[l-i-1][1]=="10"||bag[l-i-1][1]=="1") {colorworb= '#444'}else{colorworb= "#fff"}
            bagviewer.innerHTML+=`
            <div class="cardinbag">
                <div style="background-image: url(${plants[bag[l-i-1][0]].imgjpg})" class="imgcardinbag"></div>
                <div class="plantinfo">
                <h1>${plants[bag[l-i-1][0]].name}</h1>
                <div class="potcolordiv">
                    <h1>Pot : ${potsColorsname[bag[l-i-1][1]]}</h1>
                </div>
                <div class='bagqntconfg'>
                <button onclick="qntconfig(-1,${l-i-1})">-</button>
                <span id='cardinbagqnt'>${bag[l-i-1][2]}</span>
                <button onclick="qntconfig(1,${l-i-1})">+</button>
                </div>
                </div>
                <div>
                    <button onclick="deleteOrdernumber(${l-i-1})" class="removeorder"></button>
                </div>
            </div>
    
            `
            bag
            price+=65*bag[l-i-1][2]
            totalpots += bag[l-i-1][2]
            
        }
    }
    if (totalpots==1) {
        price=65;
    } else if (totalpots==2){
        price=129;
    } else if (totalpots==3){
        price=195;
    } else if (totalpots==4){
        price=249;
    } else {
        price=((totalpots-4)*50)+249;
    }
    gapPrice.innerHTML='<img src="src/icons/flower.png" alt="">'+price+" MAD";
    
    if (totalpots>=3) {
        dlvrprice.innerHTML='<img src="src/icons/truck-black.png" alt="">Gratuit';
        bagtotalprice.textContent = `${price} MAD`;
        
    } else {
        dlvrprice.innerHTML='<img src="src/icons/truck-black.png" alt="">35 MAD';
        bagtotalprice.textContent = `${price + 35} MAD`;
        
    }
    
    bagtotalprice.innerHTML += '<img src="src/icons/price.png" alt=""></img>';

    if (totalpots==2) {
        bagviewer.innerHTML +='<div class="motiv"><img src="src/icons/smile.png" alt=""><h5>Ajouter un autre 3ème pot cactus pour la livraison gratuite</h5></div>'
    }
    if (totalpots>=3) {
        bagviewer.innerHTML +='<div class="motiv"><img src="src/icons/truck-green.png" alt=""><h5>à votre maison gratuitement</h5></div>'
    }

}

function deleteOrdernumber(n) {
    bag.splice(n,1)
    bagref();
    if (bag.length==0) {
        sectionbag.style.right='-1000px'
        bagchecker()
    }
    
}


var bagClose = document.getElementById('bagClose');
var sectionbag = document.getElementById('sectionbag');
var bagbtn = document.getElementById('bag');

bagClose.addEventListener('click',()=>{
    sectionbag.style.right='-1000px';
    if (bag.length!=0) {
        bagfixbotton.style.display='block';
      } else {
        bagfixbotton.style.display='none';
      }
})

bagbtn.addEventListener('click',()=>{
    if (sectionbag.style.right=='0px') {
        sectionbag.style.right='-1000px';
    } else {

            sectionbag.style.right='0px';
        }

    if (bag.length==0) {
        // bagviewer.innerHTML='<h1>no orders </h1>'
    }
})





bagfixbotton.addEventListener('click',()=>{
    if (sectionbag.style.right=='0px') {
        sectionbag.style.right='-1000px';
    } else {
            sectionbag.style.right='0px';
    }
    if (bag.length==0) {
        // bagviewer.innerHTML='<h1>no orders </h1>'  
    }
})
bagfixbotton2.addEventListener('click',()=>{
    if (sectionbag.style.right=='0px') {
        sectionbag.style.right='-1000px';
    } else {
            sectionbag.style.right='0px';
    }
    if (bag.length==0) {
        // bagviewer.innerHTML='<h1>no orders </h1>'  
    }
})


// var cardinbagqnt = 1;



function qntconfig(cpt, idx){
    bag[idx][2] += cpt
    if(bag[idx][2] <= 0 ){ bag[idx][2] = 1 };
    console.log(bag[idx][2]);
    // cardinbagqntviewer.textContent = bag[idx][2];
    bagref();
}

