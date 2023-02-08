
let limit = 6;

let more__page = document.querySelector('.more__page')
let menue_for_shop=document.querySelector('.list__more');
  function getDataWithPage (elem =1) {

  menue_for_shop.innerHTML=''
fetch(`https://retoolapi.dev/teqiic/data?_page=${elem}&_limit=${limit}`)
.then(response=>response.json())
.then(data=>data.map(item=>{
   let div=document.createElement('div')
   div.className="shop__box"
   div.innerHTML=` 
                  <ul class ="img1">
                       <img src="${item.image}" class = "pagrishka">
                       <h1>${item.name}</h1>
                       <p class = "shop_text">${item.description}</p>
                       <a href="#" class = "cena__list"><span class = "cena">${item.price}</span><span class="minusplus"> <span class = "minus"> -</span> 1 <span class = "plus">+ </span></span> <i class="fa-solid fa-cart-shopping"></i></a>
                  </ul>
               `
  menue_for_shop.append(div)
}))
}
getDataWithPage()




async function zapros () { 
   let data=await  fetch('https://retoolapi.dev/teqiic/data')
   const dataResp=await data.json();
   dataCount=dataResp.length
}

async function pagination(){
    await  zapros ();
  let num= Math.ceil(dataCount/limit)
  more__page.innerHTML=''

  for(let i=1;i<=num;i++){
      let span=document.createElement('h4');
      span.innerText=i;
      span.addEventListener('click',()=>{
          getDataWithPage(i,limit)})
          more__page.append(span)
  }
}
pagination();