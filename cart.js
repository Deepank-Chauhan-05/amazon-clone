let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartContainer = document.getElementById("cart-items");
const totalElement = document.getElementById("total");

function saveCart(){
    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );
}

function renderCart(){

    cartContainer.innerHTML = "";

    let total = 0;

    cart.forEach((item,index)=>{

        total += item.price * item.quantity;

        cartContainer.innerHTML += `
        
        <div class="cart-item">

            <img src="${item.image}" alt="">

            <div class="item-info">
                <h3>${item.name}</h3>
                <p>₹${item.price}</p>
            </div>

            <div class="qty">

                <button onclick="decreaseQty(${index})">
                    -
                </button>

                <span>
                    ${item.quantity}
                </span>

                <button onclick="increaseQty(${index})">
                    +
                </button>

            </div>

            <button
                class="remove"
                onclick="removeItem(${index})">
                Remove
            </button>

        </div>

        `;
    });

    totalElement.textContent = total;
}

function increaseQty(index){

    cart[index].quantity++;

    saveCart();

    renderCart();
}

function decreaseQty(index){

    if(cart[index].quantity > 1){

        cart[index].quantity--;

        saveCart();

        renderCart();
    }
}

function removeItem(index){

    cart.splice(index,1);

    saveCart();

    renderCart();
}

document
.getElementById("clear-cart")
.addEventListener("click",()=>{

    localStorage.removeItem("cart");

    cart = [];

    renderCart();
});

renderCart();