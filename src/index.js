const siteContent = { // BU NESNEYİ DEĞİŞTİRMEYİN
  "nav": {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  "cta": {
    "h1": "Bu DOM Mükemmel",
    "button": "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik": "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik": "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği": "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği": "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği": "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "iletisim": {
    "iletişim-h4": "İletişim",
    "adres": "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    "telefon": "+90 (123) 456-7899",
    "email": "satis@birsirketsitesi.com.tr",
  },
  "footer": {
    "copyright": "Copyright Bir Şirket Sitesi 2022",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('Proje açıldı!')


/* Kodlar Buradan aşağıya */

const navItems = document.querySelectorAll("header nav a "); // bu kurala uyan hepsini alır. seleckt sadece ilk ögeyi alır.
//navItems[0].textContent = siteContent["nav"]["nav-item-1"] 
//navItems[1].textContent = siteContent["nav"]["nav-item-2"] 
//navItems[2].textContent = siteContent["nav"]["nav-item-3"] 
//navItems[3].textContent = siteContent["nav"]["nav-item-4"] 
//navItems[4].textContent = siteContent["nav"]["nav-item-5"]  

//navItems[0].setAttribute("class","italic") 
//navItems[1].setAttribute("class","italic")
//navItems[2].setAttribute("class","italic")
//navItems[3].setAttribute("class","italic")
//navItems[4].setAttribute("class","italic")

navItems.forEach((item,index)=>{
  let i= index+1;
  item.textContent = siteContent["nav"]["nav-item-"+i] 
  item.setAttribute("class","italic") //ekleme yapıyor.
  })

const logoImg = document.querySelector ("header img");//id den de gidilebilir.
logoImg.setAttribute("src",siteContent.images["logo-img"])  //sitecontent ne yapıyor? Hocaya sor.

document.getElementById("cta-img").src=siteContent.images["cta-img"]; //2.yol
document.getElementById("middle-img").src=siteContent.images["accent-img"]; //2.yol

const mainText = document.querySelector(".cta-text"); //içinde 2 tane şey var. h1 ve button. Bunları için ayrı ayrı oluşturmaktansa aşağıdaki gibi yapabiliriz!
mainText.querySelector("h1").textContent = siteContent.cta.h1;  
mainText.querySelector("button").textContent = siteContent.cta.button;

const topContent = document.querySelectorAll(".top-content .text-content");//sınıf olduğu için noktalı yazdık. text contentten 2 tane var. Bunu bir array gibi düşünebilirsin.
topContent[0].querySelector("h4").textContent = siteContent["ana-içerik"]["özellikler-h4"]; //topcontenrin ilk elemanına ualştım. quaryselector ile içerisinde h4 yazdım. yazısını değiştireceğim için textconteent dedim.
topContent[0].querySelector("p").textContent = siteContent["ana-içerik"]["özellikler-içerik"]; // köşeli parantezlerde yazanları yukarıdan seçtim
topContent[1].querySelector("h4").textContent = siteContent["ana-içerik"]["hakkımızda-h4"];
topContent[1].querySelector("p").textContent = siteContent["ana-içerik"]["hakkımızda-içerik"];

const bottomContent = document.querySelectorAll(".bottom-content  h4");

bottomContent[0].textContent = siteContent["ana-içerik"]["servisler-h4"];
bottomContent[1].textContent = siteContent["ana-içerik"]["ürünler-h4"];
bottomContent[2].textContent = siteContent["ana-içerik"]["vizyon-h4"];

const bottomContent_p = document.querySelectorAll(".bottom-content  p");

bottomContent_p[0].textContent = siteContent["ana-içerik"]["servisler-içeriği"];
bottomContent_p[1].textContent = siteContent["ana-içerik"]["ürünler-içeriği"];
bottomContent_p[2].textContent = siteContent["ana-içerik"]["vizyon-içeriği"];

document.querySelector(".contact h4").textContent=siteContent.iletisim["iletişim-h4"];
const contact = document.querySelectorAll(".contact p")
contact[0].textContent=siteContent.iletisim.telefon;
contact[1].textContent=siteContent.iletisim.adres;
contact[2].textContent=siteContent.iletisim.email;
document.querySelector("footer a").textContent=siteContent.footer.copyright;

document.querySelector("footer a").classList.add("bold");
//document.querySelector("footer a").setAttribute("class","bold");
