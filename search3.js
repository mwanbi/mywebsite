import products from "./data copy 2.js";
for(let i of products.data){
    //create card
    let card = document.createElement("div");
    //card should have category and stay hidden intially use the encodeuricomponent to convert spaces into
    //url-encoded characters which are valid thus remove uncaught domain error encodeURIComponnent(i.productName)
    card.classList.add("card",i.category,"hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.Image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //price
    let price = document.createElement("h6");
    price.innerText = "ksh" + i.price;
    container.appendChild(price);
    card.appendChild(container);
    document.getElementById("products").appendChild(card);

}
function search()
{
  let filter = document.getElementById("search-input").value.toUpperCase();
  let item = document.querySelectorAll(".card");
  let l = document.getElementsByTagName("h5");

  for(var i = 0;i < l.length;i++)
  {
   let a = item[i].getElementsByTagName('h5')[0];
   console.log(a);
   let value = a.innerHTML || a.innerText || a.textContent;
   if(value.toUpperCase().indexOf(filter) > -1){
    item[i].style.display="";
    } 
   else{
    item[i].style.display="none";
   }
  }
};
const searchingDiv = document.getElementById("searching");
if(searchingDiv){
    const searchcontainer =document.createElement("div");
    searchcontainer.id = "search-container";
    const searchinput =document.createElement("input");
    searchinput.type= "text";
    searchinput.id = "search-input";
    searchinput.placeholder ="search product name...";
    searchinput.addEventListener("keyup",search);
    const searchButton = document.createElement("button");
    searchButton.id = "search";
    searchButton.textContent = "Search";
    searchcontainer.append(searchinput,searchButton);
    searchingDiv.appendChild(searchcontainer);
}
else{
    console.error("Element with ID'searching'not found");
}
//parameter passed from button(parameter same as category)
//parameter passed from button(parameter same as category)


function filterProduct(value){
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) =>{
        //check if the value equals innertext
        if (value.toUpperCase() == button.innerText.toUpperCase()){
            button.classList.add("active");
        }
        else{
            button.classList.remove("active");
        }
    });
    //select allcards 
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element)=>{
        //display all cards on all button click
        if(value == 'All'){
            element.classList.remove("hide");
        }
        else{
            // check if element contains category class
            if(value == 'Clothes'){
                element.classList.remove("hide");
            }
            if(element.classList.contains(value)){
                //display elements based on category
                element.classList.remove("hide");

            }
            else{
                //hide other elements 
                element.classList.add("hide");
            }
        }
    });
}
let pard = document.createElement("div");
pard.id="cuttons";
let bput = document.createElement("button");
bput.className= "button-value";
bput.onclick = () =>{
    filterProduct("All");
};
bput.innerText= "All";
pard.appendChild(bput);
let cput = document.createElement("button");
cput.className= "button-value";
cput.innerText= "Clothes";
cput.onclick = () =>{
    filterProduct("Clothes");
};
pard.appendChild(cput);
let dput = document.createElement("button");
dput.className= "button-value";
dput.onclick = () =>{
    filterProduct("Shoes");
};
dput.innerText= "Shoes";
pard.appendChild(dput);
let eput = document.createElement("button");
eput.className= "button-value";
eput.onclick = () =>{
    filterProduct("Accessories");
};
eput.innerText= "Accessories";
pard.appendChild(eput);
let fput = document.createElement("button");
fput.className= "button-value";
fput.onclick = () =>{
    filterProduct("Jersey");
};
fput.innerText= "Jersey";
pard.appendChild(fput);
document.getElementById("buttons").appendChild(pard);
//search button click
document.getElementById("search").addEventListener("click",()=>{
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
    //loop through all elements
    elements.forEach((element,index)=>{
      //chack if text includes the search value
      if(element.innerText.includes(searchInput.toUpperCase())){
        //display matching card
        cards[index].classList.remove("hide");
      }
      else{
        //hideothers
      cards[index].classList.add("hide");
      }
    });
});

//initaially display all products
window.onload = () =>{
    filterProduct("All");
};

