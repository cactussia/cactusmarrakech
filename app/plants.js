const plants = [
    {
        "id":"a",
        "name":"Astrophytum Myriostigma",
        "price":35.5,
        "img":"src/images/plants/a.png",
        "imgjpg":"src/images/plantsJPG/a.jpg",
        "temp":"-7 °C",
        "watering":"1/7 j",
        "sunshade":"soleil partiel",
        "info":`Astrophytum myriostigma est un cactus sans épine défini par la présence de trois à sept (généralement cinq) côtes verticales prononcées qui définissent la forme du cactus lorsqu'il est jeune (le nom de genre "astrophytum", littéralement, "plante étoilée", est dérivé de l'étoile résultante -forme similaire). Au fur et à mesure que le cactus vieillit, plus de côtes peuvent être ajoutées et il devient de forme plus cylindrique, atteignant environ 70–100 cm (2 pi 4 po – 3 pi 3 po) de hauteur et 10–20 cm (4–8 po) de po diamètre. Dans la nature, la tige globuleuse à cylindrique est recouverte d'un flocage blanchâtre de trichomes. Certaines variétés horticoles manquent de flocage.`
    },
    {
        "id":"b",
        "name":"Ferocactus echidne",
        "price":20.5,
        "imgjpg":"src/images/plantsJPG/b.jpg",
        "img":"src/images/plants/b.png",
        "temp":"-7 °C",
        "watering":"1/7 j",
        "sunshade":"soleil partiel",
        "info":`Échidné Ferocactus
        C'est un cactus baril de taille moyenne généralement non ramifié, parfois à plusieurs tiges à l'âge adulte. La tige est subglobuleuse à globuleuse déprimée, vert jaunâtre, verte, vert terne ou gris-vert.
        Origine et habitat : Centre du Mexique à Hidalgo, Nuevo León, Zimapan, San Luis Potosi, Querétaro, Tamaulipas et Guanajuato. Ferocactus échidné est répandu et localement abondant, au moins dans une partie de son aire de répartition. Cette espèce est particulièrement abondante dans la Barranca de Metztitlán, à Venado, Tolantongo, Tecozautla, Mez-quital, Tasquillo, Tula River et Tollina Canyon, Hidalgo.`
    },
    {
        "id":"c",
        "name":"Haworthia Zebra",
        "price":15.5,
        "imgjpg":"src/images/plantsJPG/c.jpg",
        "img":"src/images/plants/c.png",
        "temp":"5 °C",
        "watering":"1/7 j",
        "sunshade":"soleil partiel",
        "info":`L'Haworthia fasciata, également appelée "plante zèbre" ou zèbre Haworthia, est une succulente à petite croissance avec un aspect épineux. Le nom commun de cette plante succulente charnue vient de ses marques blanches cahoteuses en forme de zèbre sur les feuilles. Bien que Haworthia fasciata "plante zèbre" ressemble à de petits cactus ou aloès (on l'appelle communément "cactus zèbre"), c'est un vrai type de succulente.`
    },
    {
        "id":"d",
        "name":"Melocactus Curvispinus",
        "price":30.5,
        "imgjpg":"src/images/plantsJPG/d.jpg",
        "img":"src/images/plants/d.png",
        "temp":"-7 °C",
        "watering":"1/7 j",
        "sunshade":"soleil partiel",
        "info":`Melocactus curvispinus pousse individuellement et a une tige déprimée sphérique à courte cylindrique, vert foncé, légèrement glauque qui atteint un diamètre de 8 à 27 centimètres et atteint une hauteur de 6 à 30 cm. Il a 10 à 16 côtes pointues et parfois légèrement verruqueuses. Les aréoles sont légèrement enfoncées, d'où émergent des épines blanc sale à presque noires, dont certaines sont recourbées. Les 1 à 4 épines centrales, qui peuvent également être absentes, mesurent de 15 à 52 millimètres de long. Les 6 à 11 épines radiales mesurent entre 3 et 42 millimètres de long. Le céphalium est relativement petit avec une hauteur de 3 à 4 cm et un diamètre de 7 à 11 cm qui est bien mis en valeur par les longues soies brun rougeâtre. Les fleurs s'ouvrent l'après-midi et sont de couleur rose pourpre foncé, de 18 à 43 millimètres de long et de 10 à 25 millimètres de diamètre. Les fruits sont roses à rouge magenta vif.`
    },
    {
        "id":"e",
        "name":"Echinopsis Subdenudata",
        "price":18.5,
        "imgjpg":"src/images/plantsJPG/e.jpg",
        "img":"src/images/plants/e.png",
        "temp":"-1 °C",
        "watering":"1/7 j",
        "sunshade":"soleil partiel",
        "info":`Une ravissante petite plante succulente sud-africaine, frileuse, à protéger des gelées en hiver. Cet Echinopsis forme une petite colonne de 10 cm où se serrent des feuilles charnues de forme triangulaire, teintées de brun, partiellement couvertes de soies blanches décoratives. Elle s'orne de fleurs roses de 3 cm en été. Facile à cultiver au soleil, dans un substrat très drainant, elle fait merveille dans les jardinières et les compositions estivales.`
    }, 
    {
        "id":"f",
        "name":"Mammillaria Bocasana",
        "price":12.5,
        "imgjpg":"src/images/plantsJPG/f.jpg",
        "img":"src/images/plants/f.png",
        "temp":"-5 °C",
        "watering":"1/7 j",
        "sunshade":"plein soleil",
        "info":`Mammillaria bocasana (Powder Puff Cactus) est un petit cactus agglomérant qui a tendance à former de grosses touffes avec le temps. Les tiges sphériques, jusqu'à 5 po de haut (12 cm) et 3 po de large (8 cm), sont couvertes de poils blancs soyeux, chaque grappe entourant une épine crochue jaune à rouge. Les épines crochues étaient utilisées comme hameçons&nbsp;dans son Mexique natal. Au printemps et en été, il porte des fleurs en forme d'entonnoir, blanc crème, jaune crème ou rosées, jusqu'à 1 po de long (2,5 cm) et 0,6 po de large (1,5 cm). Les fleurs sont suivies de fruits cylindriques, rose-rosé à rouges, de 1 po de long (2,5 cm). Facile à cultiver et à floraison libre, ce cactus miniature est parfait pour les conteneurs. Il peut être cultivé comme plante d'intérieur mais pousse également bien à l'extérieur dans des climats sans gel. Protéger du froid, car cette espèce est sensible au gel et seulement rustique à 23°F (-5°C) pendant de brèves périodes.`
        },    
    {
        "id":"g",
        "name":"Mammillaria Microthele",
        "price":13.5,
        "imgjpg":"src/images/plantsJPG/g.jpg",
        "img":"src/images/plants/g.png",
        "temp":"-5 °C",
        "watering":"1/7 j",
        "sunshade":"soleil partiel",
        "info":`Mammillaria formosa subs. microthele est une plante aplatie à croissance basse, agglomérante avec des épines blanches courtes et serrées qui forment des monticules bas à plusieurs têtes dans le temps. Certains auteurs considèrent Mammillaria formosa subs. microthele suffisamment distinct pour mériter son propre statut formel : Mammillaria microthele.\n
        Tiges : Presque discoïdes à globuleuses, déprimées apicalement, se divisant de manière dichotomique, chaque tige mesure jusqu'à 6 cm de diamètre.\n
        Tubercules : Environ 6 mm de long, nus ou laineux à l'aisselle.\n
        Epines radiales : 22-24 minuscules, blanc-sétiformes, étalées, de 2 à 4 mm de long qui masquent presque la tige.\n
        Epines centrales : 2, beaucoup plus robustes que les radiales, 2 mm de long ou moins.`
        },    
    {
        "id":"h",
        "name":"Mammillaria Glochidiata",
        "price":23.5,
        "imgjpg":"src/images/plantsJPG/h.jpg",
        "img":"src/images/plants/h.png",
        "temp":"-7 °C",
        "watering":"1/7 j",
        "sunshade":"soleil partiel",
        "info":`Description: Plants irregularly forming tightly packed cluster of egg-shaped balls, up to 5 cm tall (in cultivation it can grow up to15 cm), 6 cm in diameter.\n
        Stems: Cylindrical, glossy bright green, rounded apically, 2 - 3.5 cm in diameter. Without latex.\n
        Tubercles: Flabby, widely separated, cylindrical to conical, 12 - 16 mm long.\n
        Radial spine: 9 - 11, threadlike, flexible, smooth, white, horizontal, to 12 mm long.\n
        Central spine: 1 - 4, needle-like, lower one hooked, dark yellow, 6 - 12 mm long.\n
        Flower: Bell shaped, pale cream-pink, to 10-15 mm long and 8-10 mm in diameter.
        Bloom season: Mid Spring through Mid Summer
        Fruit: Club shaped, scarlet, to 16 mm long.`
    },      
        {
        "id":"i",
        "name":"Parodia leninghausii",
        "price":23.5,
        "imgjpg":"src/images/plantsJPG/i2.jpg",
        "img":"src/images/plants/i2.png",
        "temp":"-7 °C",
        "watering":"1/7 j",
        "sunshade":"soleil partiel",
        "info":`Parodia leninghausii est une espèce subtropicale du genre Parodia, famille des Cactaceae.

Les producteurs de cactées Haage père et fils dédièrent ce cactus à son découvreur Wilhelm Lenninghaus (1845-1918), et non Leninghaus, sous le nom de Pilocereus leninghausii ; Karl Moritz Schumann rapporta ce nom et proposa de le rectifier en Echinocactus leninghausii (Monatsschrift für kakteenkunde, 1895, p. 147). Lenninghaus, fils de commerçant, quitta Ennepetal (Rhénanie-du-Nord-Westphalie) dans les années 1880 et émigra vers Porto Alegre où il se fit, sous le nom de Guillermo Lenninghaus, collecteur de cactées qu'il envoyait à la maison Haage d'Erfurt.

Cette Parodia est originaire de la province du Rio Grande do Sul au sud du Brésil. Dans des régions où les nuits d'hiver sont froides, avec même de légères gelées. Les plantes résistent, car à cette période le climat est très sec.`
    }
    
    /*
    ,     
    {
        "id":"j",
        "name":"Neobuxbaumia",
        "price":56.5,
        "imgjpg":"src/images/plantsJPG/i.jpg",
        "img":"src/images/plants/i.png",
        "temp":"-7 °C",
        "watering":"1/7 j",
        "sunshade":"soleil partiel",
        "info":`C'est un cactus colonnaire ramifié qui atteint entre 7 et 15 m de hauteur. Le nombre de branches d'une plante adulte peut varier de 1 à 10. Les plantes portent un céphalium rougeâtre à l'extrémité de chaque branche d'où émergent des fleurs rouge pourpre entre mai et juin, en fin de saison sèche. L'espèce est hermaphrodite et ses fleurs sont principalement nocturnes, s'ouvrant au coucher du soleil (1900 h) et se fermant le matin (1000 h). Les chauves-souris Choeronycteris mexicana Tschudi, Leptonycteris curasoae Miller et Leptonycteris nivalis (Saussure) sont les principaux pollinisateurs qui favorisent la production de graines. Les fruits mûrissent de juin à août et sont consommés par les chauves-souris et les espèces d'oiseaux qui agissent probablement comme disperseurs de graines. Neobuxbaumia macrocephala est présent à des densités comprises entre 130 et 200 individus/ha. La germination des graines et l'établissement des semis se produisent principalement sous le couvert de plusieurs espèces d'arbres et d'arbustes, tels que Pseudosmodingium multifolium, Lippia graveolens, Gochnatia hypoleuca et Aeschynomene compacta. La première reproduction a lieu lorsque les plantes mesurent environ 2 m de haut.`
    }
    */
    
    ,    
    {
        "id":"k",
        "name":"Chichituna",
        "price":60.5,
        "imgjpg":"src/images/plantsJPG/j.jpg",
        "img":"src/images/plants/j.png",
        "temp":"-7 °C",
        "watering":"1/7 j",
        "sunshade":"soleil partiel",
        "info":`Origine et habitat : Polaskia chichipe est endémique des régions plus chaudes du centre du Mexique (vallée de Tehuacán-Cuicatlán et Mixteca Alta adjacente dans les États mexicains d'Oaxaca et de Puebla)
        Altitude : Il pousse à des altitudes de 1 600 à 2 300 mètres au-dessus du niveau de la mer.
        Habitat et écologie : Polaskia chichipe est présent à l'état sauvage sur des cônes calcaires alluviaux et des sols noirs peu profonds dans des forêts de broussailles épineuses xérophylles avec Neobuxbaumia mezcalaensis, Heliabravoa chende, Mammillaria conspicua, Ferocactus robustus, Agave karwinskii, Agave lechuguilla et Yucca periculosa. Elle est abondante, tolérée et même promue dans les terres agricoles, n'est pas menacée et est présente dans les aires protégées.`    },
    {
        "id":"l",
        "name":"Mammillaria Zeilmanniana",
        "price":45.5,
        "imgjpg":"src/images/plantsJPG/k.jpg",
        "img":"src/images/plants/k.png",
        "temp":"-7 °C",
        "watering":"1/7 j",
        "sunshade":"plein soleil",
        "info":`Ce petit cactus peut atteindre 12 cm de haut et 8 cm de large. Quand il est jeune, cette espèce possède des aréoles laineuses, mais à maturité, elle a 13–15 épines radieuses et 4 épines centrales accrochées. Les fleurs ont un diamètre de 2 cm et apparaissent généralement en anneau le long du sommet de la plante, var. albiflora est une variation dont on ignore la présence dans la nature.
        Couleur`
    },
    {
        "id":"m",
        "name":"Echinocactus",
        "price":35.5,
        "imgjpg":"src/images/plantsJPG/l.jpg",
        "img":"src/images/plants/l.png",
        "temp":"-7 °C",
        "watering":"1/7 j",
        "sunshade":"plein soleil",
        "info":`Le genre Echinocactus comprend environ 6 espèces, originaires du Nord du Mexique et du Sud-Ouest des Etats-Unis. Echinocactus grusonii est l’une de ces espèces, originaire du Mexique.  Elle porte les noms communs de « cactus oursin » et de « coussin de belle-mère ». Cette cactée sphérique atteint 60 cm de diamètre, parfois 1 m. Aiguillons remarquables, jaune soufre, portés par 9 à 14 côtes mamelonnées. Floraison brune et jaune sur des plantes âgées de plus de 20 ans. Fleurs jaunes de 5 cm de long pour 4 cm de large.`
    },
    {
        "id":"n",
        "name":"Tephrocactus",
        "price":35.5,
        "imgjpg":"src/images/plantsJPG/m.jpg",
        "img":"src/images/plants/m.png",
        "temp":"-7 °C",
        "watering":"1/7 j",
        "sunshade":"plein soleil",
        "info":`Tephrocactus est un genre de la famille des cactus composé de 35 espèces. Il était autrefois inclus dans le genre Opuntia. Le nom vient du grec tephra (="cendres") en raison de la couleur de certaines plantes ou de leurs appendices.

        Ils sont originaires des régions d'altitude andines du Pérou au sud de l'Argentine, souvent jusqu'à 4,500 m.
        
        Les plantes sont basses dépassant rarement 10 cm de haut se ramifiant peu. Les articles sont longs de 3 cm environ, ovoïdes ou sphériques. Elles portent des soies de couleur grise ou marron parfois semblables à du papier.
        
        Elles sont de croissance lente et nécessitent un sol un peu plus humifère que les Opuntias.`
    },
    {
        "id":"o",
        "name":"Echinocactus Platyacanthus",
        "price":35.5,
        "imgjpg":"src/images/plantsJPG/n.jpg",
        "img":"src/images/plants/n.png",
        "temp":"-7 °C",
        "watering":"1/7 j",
        "sunshade":"plein soleil",
        "info":`Le echinocactus platyacanthus est un cactus boule très populaire, le plus vendu et le plus connu au monde. A l'état sauvage, il peut pousser en colonne mais quand il est cultivé en pot, il gardera sa forme sphérique. Sa croissance est très lente et il ne fleurit qu'après 30 ou 40 ans ! Il s'épanouira également dans une véranda ensoleillée.`
    }
];
const potsColors = ["#b81d01", "#ffcc00", "#840400", "#00239f", "#5f5f5f", "#278b8b", "#0182cc", "#e9a6a8", "#000000", "#ffffff", "#c1c4af", "#047965", "#87af19"];
const potsColorsname = ["rouge", "jaune", "bourdeu", "bleu majorelle", "gris", "turquoise", "blue ciel","rose",  "noir", "blanc", "biege",  "bleu canard" ,"pistache","vert foncé" ];

const shopplants=document.getElementById('shopplants');
const shoppots=document.getElementById('shoppots');

const getNowone = document.getElementById('getNowone');
const getNowtow = document.getElementById('getNowtow');


var bestSeller = [0,1,3];



var plantchecked=undefined;
var potchecked =undefined;
var plantorpot='plant';




shopplants.innerHTML="";
for (let i = 0; i < plants.length; i++) {
                    
    let card = `  <div plantcard ondblclick="showInfoPlant(${i});linkactive(linksheader[3])" shop-card-plant order=${i} class="shop-card swiper-slide"  id='plant-${plants[i].id}'>
    <div class="select-plant"></div>
    <img id="plant-img" src="${plants[i].imgjpg}" alt="">
    <h2 id="plant-title">${plants[i].name}</h2>
    </div>`
    
    shopplants.innerHTML+=card;
}

for (let i = 0; i < 14; i++) {
    
    let card = `  <div shop-card-pot order=${i} class="shop-card swiper-slide" id='pot-${plants[i].id}'>
    <div class="select-pot"></div>
    <img id="pot-img" src="src/images/potsJPG/${i+1}.jpg" alt="">
    <h2 >${potsColorsname[i]} </h2>
    </div>`
    shopplants.innerHTML+=card;
}

shopplants.innerHTML+="<div class='swiper-slide'></div>";


const shopCardPlants = document.querySelectorAll("[shop-card-plant]");
shopCardPlants.forEach(card => {
    card.addEventListener("click", (e)=>{
        for (let i = 0; i < shopCardPlants.length; i++) {
            shopCardPlants[i].classList.remove("checked");
        }
        card.classList.toggle("checked");
        plantchecked = card.getAttribute("order");
        qntchang(0);
        sweetchinfo2();
        setTimeout(() => {
            if (potchecked==undefined) {
                view('pot');
            }
        }, 300);
    })
});



const shopCardpots = document.querySelectorAll("[shop-card-pot]");
const crntPotColor = document.querySelector("[crnt-pot-color]");
shopCardpots.forEach(card => {
    card.addEventListener("click", (e)=>{
        for (let i = 0; i < shopCardpots.length; i++) {
            shopCardpots[i].classList.remove("checked");
        }
        card.classList.toggle("checked");
        potchecked = card.getAttribute("order");
        crntPotColor.style.backgroundColor = potsColors[potchecked];
        qntchang(0);
        setTimeout(() => {
            if (plantchecked==undefined) {
            view('plant');
            }
        }, 300);
    })
});




const plantsShop = document.getElementById("plants-shop");
const potsShop = document.getElementById("pots-shop");
const hint = document.getElementById("hint");





function view(p) {
    plantorpot = p;
    if (p=="plant") {
        linkactive(linksheader[1]);
        plantsShop.classList.add("active");
        potsShop.classList.remove("active");

        shopCardpots.forEach(pot => {
            pot.style.display="none"
        });

        shopCardPlants.forEach(plant => {
            plant.style.display="flex"
        });

        hint.style.opacity=".7";
    }else{
        linkactive(linksheader[2]);
        potsShop.classList.add("active");
        plantsShop.classList.remove("active");
    
        shopCardPlants.forEach(plant => {
            plant.style.display="none"
        });
    
        shopCardpots.forEach(pot => {
            pot.style.display="flex"
        });

        hint.style.opacity="0";
    }

}

view("plant");







var qntviewer = document.getElementById("qntviewer");
var priceviewer = document.getElementById("priceviewer");
var qntval=1;
var price=0;
var dlvr=0;

function qntchang(m) {
    price=0
    qntval+=m;
    
    if (qntval<=0) {
        qntval=1
    }
    if (qntval>=50) {
        qntval=50
    }
    
    if (plantchecked) {
            price=0
            if (qntval==1) {
                price=65;
            } else if (qntval==2){
                price=129;
            } else if (qntval==3){
                price=195;
            } else if (qntval==4){
                price=249;
            } else {
                price=((qntval-4)*50)+249;
            }
    }
    


    qntviewer.innerHTML=qntval;
    if (plantchecked!=undefined&&potchecked!=undefined) {
        priceviewer.innerHTML=price+" MAD";
    }else{
        price=0
        priceviewer.innerHTML=price+" MAD";
    }

    if (potchecked!=undefined) {
        crntPotColor.style.display='block'
    } else {
        crntPotColor.style.display='none'
    }


    ref()

}
qntchang(0);



function ref() {
    if (potchecked!=undefined&&plantchecked!=undefined) {
        getNowone.classList.remove("notready");
        getNowtow.classList.remove("notready");
    }else{
        getNowone.classList.add("notready");
        getNowtow.classList.add("notready");
    }
}

ref()








/////////////////////////////////////plant info bar 








const cactusinfo = document.getElementById('cactusinfo');
const imginfo =document.getElementById('imginfo')
const plantinfoname = document.getElementById('plantinfoname');
var sunshade = document.getElementById('sunshade');
var temp = document.getElementById('temp');
var watering = document.getElementById('watering');
var info = document.getElementById('info');
var topsecinfo = document.getElementById('topsecinfo')
sweetchinfo2()

function showInfoPlant() {
    cactusinfo.style.left='0px';
    view('plant')
}


function sweetchinfo2 (){
    let aaa = plants[plantchecked].info+'<img onclick="divinfosecimg.classList.add("openimginfo")" class="secimg" id="secimg" src="src/images/infoimg/'+plants[plantchecked].id+'.jfif" alt="">';
    imginfo.classList.remove('slidedown');
    imginfo.classList.add('slideup');

    imginfo.src=plants[plantchecked].img;
    plantinfoname.textContent=plants[plantchecked].name
    sunshade.textContent=plants[plantchecked].sunshade
    temp.textContent=plants[plantchecked].temp
    watering.textContent=plants[plantchecked].watering
    info.innerHTML=aaa
    imginfo.classList.remove('slideup');
    imginfo.classList.add('slidedown');


}








function closeinfoplant() {
    cactusinfo.style.left='-1000px';
}

function searchingoogle() {
    window.open('https://www.google.com/search?q='+plants[plantchecked].name).focus();
}



function sweetchinfo(n) {
    plantchecked*=1
    plantchecked+=n;
    plantchecked=(plantchecked > plants.length-1)? 0 : plantchecked ;
    plantchecked=(plantchecked < 0)? plants.length-1 : plantchecked ;
    sweetchinfo2()
    rechecking(plantchecked)
}





const plantcardselem = document.querySelectorAll("[plantcard]");

function rechecking(idx) {
    for (let i = 0; i < plantcardselem.length; i++) {
        plantcardselem[i].classList.remove('checked')
    }
    plantcardselem[idx].classList.add('checked')
}
