
      let images = [
        "https://media6.ppl-media.com/tr:w-1280,c-at_max,f-gif/mediafiles/ecomm/misc/1632392458_k-beauty-web-bbb.gif",
        "https://media6.ppl-media.com/tr:w-1280,c-at_max/mediafiles/ecomm/misc/1632469304_web_ft.jpg",
        "https://media6.ppl-media.com/tr:w-1280,c-at_max/mediafiles/ecomm/misc/1632848710_charmis_hoempage_web.jpg",
        "https://media6.ppl-media.com/tr:w-1280,c-at_max,f-gif/mediafiles/ecomm/misc/1632826398_gv-web-banner-1298x418-8.gif",
        "https://media6.ppl-media.com/tr:w-1280,c-at_max/mediafiles/ecomm/misc/1632828289_sb_web-5.jpg",
        "https://media6.ppl-media.com/tr:w-1280,c-at_max/mediafiles/ecomm/misc/1632827430_mac_web-1.jpg",
        "https://media6.ppl-media.com/tr:w-1280,c-at_max/mediafiles/ecomm/misc/1632910191_hair-carnival-header-banner_web-1.jpg",
        "https://media6.ppl-media.com/tr:w-1280,c-at_max/mediafiles/ecomm/misc/1632848355_simple_web.jpg"
    ];

    

    let container1 = document.getElementById("imgSliding");
    let img1 = document.createElement("img");
    img1.src = images[images.length-2];
    img1.style = "width:100%";
    container1.append(img1);


    let container = document.getElementById("navbar1");
    let img = document.createElement("img");
    img.src = images[images.length-1];
    img.style = "width:100%";
    container.append(img);

    
   
    let prev = document.querySelector(".prev");
    let next = document.querySelector(".next");
    let prevCnt = images.length-1;
    let nextCnt = 0;

    prev.addEventListener("click", function(){
       container.innerHTML = null; 
      if(prevCnt===0) {prevCnt =  images.length-1};
        
          let img = document.createElement("img");
          img.src = images[prevCnt];
          img.style = "width:100%";
          container.append(img);
          prevCnt--;
       
    });

    next.addEventListener("click", function(){
        container.innerHTML = null;
        if(nextCnt ==images.length) {nextCnt = 0};
        
            let img = document.createElement("img");
            container.append(img);
            img.src = images[nextCnt];
            img.style = "width:100%";
            nextCnt++;
        
    });

    function slideshow(){
        let cnt = 0;
        let interval = setInterval(function(){
          container.innerHTML = null;
          if(cnt==images.length) cnt = 0;
          let img = document.createElement("img");
          
          img.src = images[cnt++];
          container.append(img);
          img.style = "width:100%";
        }, 3000);
    }
    slideshow();




    let Data=[
   {
       id:'1',
       img:'https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/98857/biotique-bio-cucumber-pore-tightning-freshner-with-himalayan-waters-for-normal-to-skin-120-ml_1_display_1544606887_35636d5b.jpg',
       text:'Biotique Bio Cucumber Pore tightening Toner with himalaya',
       price:'203'
   },
   {
      id:'2',
       img:'https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/220930/good-vibes-radiant-glow-face-serum-rose-hip-10-ml-1-20_8_display_1622784171_bdb3f270.jpg',
       text:'Good Vibes Roseship Radiant Glow Face Serum',
       price:'83'
   },
   {
      id:'3',
       img:'https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/238831/ny-bae-kohl-black-the-big-apple-of-my-eye-17_5_display_1630922093_0c0d0607.jpg',
       text:'NY Bae The Big Apple of My Eye Kohl stick',
       price:'115'

   },
   {
      id:'4',
       img:'https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/249728/good-vibes-brightening-face-wash-papaya-120-ml_6_display_1620453029_e89fdd73.jpg',
       text:'Good Vibes Green Tea Glow Toner',
       price:'216'

   },
   {
      id:'5',
       img:'https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/252402/maybelline-new-york-fit-me-12hr-oil-control-compact-shade-220-8-g_1_display_1612766020_ad6f0df3.jpg',
       text:'Good Vibes Roseship Radiant Glow Face Serum',
       price:'293'
   },
   {
      id:'6',
       img:'https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/165202/lotus-herbals-whiteglow-skin-whitening-brightening-gel-creame-spf-25-20-g-62_2_display_1548134845_ba774678.jpg',
       text:'Lotus Herbal White Glow-skin',
       price:'185'

   },


   {
      id:'7',
       img:'https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/98857/biotique-bio-cucumber-pore-tightning-freshner-with-himalayan-waters-for-normal-to-skin-120-ml_1_display_1544606887_35636d5b.jpg',
       text:'Biotique Bio Cucumber Pore tightening Toner with himalaya',
       price:'203'
   },
   {
      id:'8',
       img:'https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/220930/good-vibes-radiant-glow-face-serum-rose-hip-10-ml-1-20_8_display_1622784171_bdb3f270.jpg',
       text:'Good Vibes Roseship Radiant Glow Face Serum',
       price:'83'
   },
   {
      id:'9',
       img:'https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/238831/ny-bae-kohl-black-the-big-apple-of-my-eye-17_5_display_1630922093_0c0d0607.jpg',
       text:'NY Bae The Big Apple of My Eye Kohl stick',
       price:'115'

   },
   {
      id:'10',
       img:'https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/249728/good-vibes-brightening-face-wash-papaya-120-ml_6_display_1620453029_e89fdd73.jpg',
       text:'Good Vibes Green Tea Glow Toner',
       price:'216'

   },
   {
      id:'11',
       img:'https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/252402/maybelline-new-york-fit-me-12hr-oil-control-compact-shade-220-8-g_1_display_1612766020_ad6f0df3.jpg',
       text:'Good Vibes Roseship Radiant Glow Face Serum',
       price:'293'
   },
   {
      id:'12',
       img:'https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/165202/lotus-herbals-whiteglow-skin-whitening-brightening-gel-creame-spf-25-20-g-62_2_display_1548134845_ba774678.jpg',
       text:'Lotus Herbal White Glow-skin',
       price:'185'

   },

]
    let parent = document.getElementById("parent");

    function showProduct(d){

      parent.innerHTML = null

    Data.forEach(function(product){
   /*  console.log(product.name)*/

       let div =document.createElement('div')
       
       let div1=document.createElement('div')
        let img =document.createElement('img');

          img.src = product.img;
          img.style.width = '100%'

          

          let addTocart_btn =  document.createElement('div')

         addTocart_btn.innerText ='Add to Cart';
        
       let text =document.createElement('p')

       
addTocart_btn.onclick =function(){
   addTocart(product)
};


text.textContent = product.text;

let price =document.createElement('p')

price.textContent = 'Rs '+product.price;

div1.append(img)

div.append(div1,addTocart_btn,text,price) //HTML element


parent.append(div)
});

}

showProduct()

//check if cart exist in local storage
//let arr=[{name:'messi'},{name:'ronaldo'}]
if(localStorage.getItem('projectcart') === null){

localStorage.setItem('projectcart', JSON.stringify([]));
}

// p-> [{id:1,data:data},{id:2,data:data},{}3]
//const newArr = arr.filter((el)=>id!==el.id)
//oldArr = newArr;

function addTocart(p){  
//console.log('p:',p)

let product_cart = JSON.parse(localStorage.getItem('projectcart'))

product_cart.push(p)

localStorage.setItem('projectcart',JSON.stringify(product_cart))

//console.log('product_cart',product_cart)
}

// let  cart_btn =document.getElementById('cart')
// cart_btn.addEventListener('click',whichcart)

function whichcart(){

  let product_cart = JSON.parse(localStorage.getItem('projectcart'))
 // console.log(product_cart.length)
  if(product_cart.length === 0){

     window.location.href= 'cart.html'

  }else if(product_cart.length > 0){

      window.location.href = 'cart2.html'
  }
}