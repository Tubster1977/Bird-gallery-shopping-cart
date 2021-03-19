let carts = document.querySelectorAll('.add-cart');

let products = [
  {
    name: 'Chest out Robin',
    tag: 'chest out robin',
    price: 3.5,
    inCart: 0
  },
  {
    name: 'Goldfinch on the Wall',
    tag: 'goldfinch on the wall',
    price: 3.5,
    inCart: 0
  },
  {
    name: 'Grumpy Dunnock',
    tag: 'grumpy dunnock',
    price: 3.5,
    inCart: 0
  },
  {
    name: 'Hiding Pheasant',
    tag: 'hiding pheasant',
    price: 3.5,
    inCart: 0
  },
  {
    name: 'Incoming Robin',
    tag: 'incoming robin',
    price: 3.5,
    inCart: 0
  },
  {
    name: 'Longtailed Tit',
    tag: 'longtailed tit',
    price: 3.5,
    inCart: 0
  },
  {
    name: 'Mandarin Family Time',
    tag: 'mandarin family time',
    price: 3.5,
    inCart: 0
  },
  {
    name: 'Poised Grey Heron',
    tag: 'poised grey heron',
    price: 3.5,
    inCart: 0
  },
  {
    name: 'Great Crested Grebe',
    tag: 'great crested grebe',
    price: 3.5,
    inCart: 0
  },
  {
    name: 'Wet Duck',
    tag: 'wetduck',
    price: 3.5,
    inCart: 0
  },
]

for (let i=0; i < carts.length; i++) {
  carts[i].addEventListener('click', () => {
    cartNumbers(products[i]);
  })
}

function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem('cartNumbers');
  if(productNumbers) {
    document.querySelector('.cart span').textContent = productNumbers;
  }
}

function cartNumbers(product) {
  console.log("The product clicked is", product);
  let productNumbers = localStorage.getItem('cartNumbers');
  
  productNumbers = parseInt(productNumbers);

  if(productNumbers) {
    localStorage.setItem('cartNumbers', productNumbers + 1)
    document.querySelector('.cart span').textContent = productNumbers + 1;
  } else {
    localStorage.setItem('cartNumbers', 1);
    document.querySelector('.cart span').textContent = 1;
  }
  setItems(product);
}

function setItems(product) {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);


  if(cartItems == null) {

    if(cartItems[product.tag] != undefined) {
      cartItems = {
        ...cartItems,
        [product.tag]: product
      }
    }
    cartItems[product.tag].inCart += 1;
  } else {
    product.InCart = 1;
    cartItems = {
      [product.tag]: product
    }
  }

  
  localStorage.setItem("productsInCart", JSON.stringify 
  (cartItems));
}

onLoadCartNumbers();

const registerFormElement = document.querySelector("#submitting-forms form")

registerFormElement.addEventListener("submit", (event) => {
  event.preventDefault()

const email = registerFormElement.elements.email.value
const password = registerFormElement.elements.password.value
console.log("email",email)  
console.log("password",password)  

  alert("Registered Successfully")
})