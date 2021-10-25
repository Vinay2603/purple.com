  
let projectcart=JSON.parse(localStorage.getItem('projectcart'))


let parent =document.getElementById('parents')
function showProduct(){

    projectcart.forEach(function(product){
   /* console.log(product.img)*/

  let div =document.createElement('div')

  let img =document.createElement('img');

   img.src = product.img;


  let price =document.createElement('p')

  price.textContent = 'Rs '+product.price;

  let text =document.createElement('p')

  text.textContent =  product.text;

  

  let removeFromcart_btn =document.createElement('button')

  removeFromcart_btn.innerText ='Remove';

  removeFromcart_btn.onclick =function(){
      removeFromcart(product.id)
  };


  div.append(img,text,price,removeFromcart_btn) //HTML element


  parent.appendChild(div)
});

}
  showProduct()


  var sum=0
  projectcart.forEach(function(p){

         sum+=Number(p.price)
        })     

        let totalPrice =document.getElementById('totalPrice')
      totalPrice.textContent = 'Rs '+ sum

      let totalPricef =document.getElementById('totalPricef')
      totalPricef.textContent ='Rs '+ sum




      
function removeFromcart(p){  
console.log('p:',p)

let product_cart = JSON.parse(localStorage.getItem('projectcart'))

//const remove = product_cart.filter((el) => id !== el.id)

const remove = product_cart.filter(function (el) {
    return p !== el.id
})

product_cart =remove

localStorage.setItem('projectcart',JSON.stringify(product_cart))
window.location.href='cart2.html'

//console.log('product_cart',product_cart)
}

let lengthofcart=document.getElementById('lengthofcart')
let product_cart = JSON.parse(localStorage.getItem('projectcart'))
lengthofcart.textContent = product_cart.length

