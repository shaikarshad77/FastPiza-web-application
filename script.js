let cart = [];
let total = 0;

function addToCart(name, price) {
  cart.push({ name, price });
  total += price;

  document.getElementById("cart-count").innerText = cart.length;
  document.getElementById("total").innerText = total;

  const li = document.createElement("li");
  li.className = "flex justify-between mb-2";
  li.innerHTML = `
    ${name} - ₹${price}
    <button onclick="removeItem(${cart.length - 1})" class="text-red-500">
      ❌
    </button>
  `;

  document.getElementById("cart-items").appendChild(li);
}

function removeItem(index) {
  total -= cart[index].price;
  cart.splice(index, 1);
  renderCart();
}

function renderCart() {
  const cartList = document.getElementById("cart-items");
  cartList.innerHTML = "";

  cart.forEach((item, index) => {
    cartList.innerHTML += `
      <li class="flex justify-between mb-2">
        ${item.name} - ₹${item.price}
        <button onclick="removeItem(${index})" class="text-red-500">
          ❌
        </button>
      </li>
    `;
  });

  document.getElementById("cart-count").innerText = cart.length;
  document.getElementById("total").innerText = total;
}

function placeOrder() {
  if (cart.length === 0) {
    alert("🛒 Your cart is empty!");
    return;
  }

  alert("🎉 Order placed successfully!");

  cart = [];
  total = 0;
  renderCart();
}
function confirmOrder() {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const address = document.getElementById("address").value;

  if (!name || !phone || !address) {
    alert("Please fill all delivery details");
    return;
  }

  if (cart.length === 0) {
    alert("Your cart is empty");
    return;
  }

  alert(`Thank you ${name}! 🍕\nYour order is on the way! 🚀`);

  cart = [];
  total = 0;
  renderCart();

  document.getElementById("name").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("address").value = "";
}
