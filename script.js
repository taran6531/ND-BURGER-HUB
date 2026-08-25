const menuData = {
  burgers: [
    ["Veg. Zinger Burger","Crispy veg patty, fresh lettuce & signature sauce","₹119"],
    ["ND Regular Burger","Classic loaded burger with fresh vegetables","₹129"],
    ["Spicy Grilled Burger","Grilled patty with a spicy kick","₹139"],
    ["Veg. Fantasy Burger","Creamy, crunchy and indulgent","₹149"],
    ["Cheese Slice Burger","Classic burger finished with cheese","₹159"],
    ["Tandoori Burger","Tandoori flavours in a loaded burger","₹169"],
    ["Paneer Crispy Burger","Crispy paneer with creamy sauce","₹179"],
    ["Double Tekker Burger","Double the patty, double the craving","₹199"],
    ["Pizza Burger","Burger-style pizza flavour","₹210"]
  ],
  pizza: [
    ["Margherita Pizza","Classic cheese & tomato","from ₹199"],
    ["Cheese & Onion Pizza","Cheesy with sweet onion","from ₹209"],
    ["Corn Pizza","Sweet corn & cheese","from ₹219"],
    ["Veg. Mushroom Pizza","Mushroom, vegetables & cheese","from ₹229"],
    ["ND Special Pizza","The house-style loaded pizza","from ₹249"],
    ["Makhni Pizza","Creamy makhni sauce & cheese","from ₹259"],
    ["Tandoori Tikka Pizza","Tandoori tikka with cheese","from ₹309"],
    ["Farm House Pizza","Loaded farm-fresh vegetables","from ₹329"]
  ],
  wraps: [
    ["Veg. Wrap","Fresh veggies in a soft wrap","₹79 / ₹139"],
    ["Veg. Salads Wrap","Crisp salad filling & dressing","₹89 / ₹149"],
    ["Veg. Strips Wrap","Crispy veg strips with sauce","₹99 / ₹169"],
    ["Veg. Makhni Wrap","Creamy makhni-style wrap","₹109 / ₹179"],
    ["Tandoori Wrap","Smoky tandoori filling","₹129 / ₹199"],
    ["Crispy Paneer Wrap","Crispy paneer & fresh salad","₹139 / ₹209"]
  ],
  sides: [
    ["Medium Fries","Golden crispy fries","₹99"],
    ["Lemon Fries","Fries with a zesty twist","₹109"],
    ["Lemon Pepper Fries","Peppery, citrusy and crisp","₹109"],
    ["Peri Peri Fries","Spicy peri-peri seasoning","₹119"],
    ["Creamy Fries","Loaded with creamy sauce","₹129"],
    ["Veg. Strips","Crispy vegetable strips","₹99 / ₹189"],
    ["ND Cheese Bullets","Cheesy bite-sized favourites","₹119 / ₹199"],
    ["Zingy Parcel","Crispy filled parcel","₹69 / ₹189"]
  ],
  drinks: [
    ["Vanilla Shake","Classic creamy vanilla","₹109 / ₹159"],
    ["Butterscotch Shake","Rich butterscotch flavour","₹109 / ₹159"],
    ["Strawberry Shake","Sweet strawberry classic","₹109 / ₹159"],
    ["Oreo Shake","Creamy Oreo favourite","₹109 / ₹159"],
    ["Kitkat Shake","Chocolate wafer shake","₹119 / ₹169"],
    ["Black Current Shake","Fruity and creamy","₹109 / ₹159"],
    ["Cold Coffee","Chilled coffee classic","₹129 / ₹179"],
    ["Green Apple Mocktail","Fresh, fizzy and fruity","₹69"],
    ["Virgin Mojito","Mint, lime and fizz","₹69"],
    ["Black Mojito","Bold citrus cooler","₹89"]
  ]
};

const menuItems = document.getElementById("menuItems");
const tabs = document.querySelectorAll(".menu-tab");

function renderMenu(category) {
  menuItems.innerHTML = menuData[category].map(item => `
    <div class="menu-row">
      <div><h3>${item[0]}</h3><p>${item[1]}</p></div>
      <span class="price">${item[2]}</span>
    </div>
  `).join("");
}
renderMenu("burgers");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    renderMenu(tab.dataset.category);
  });
});

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
navToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", open);
});
document.querySelectorAll(".nav-links a").forEach(a => a.addEventListener("click", () => navLinks.classList.remove("open")));

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
document.querySelectorAll("[data-lightbox]").forEach(el => {
  el.addEventListener("click", () => {
    lightboxImage.src = el.dataset.lightbox;
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden","false");
  });
});
function closeLightbox(){
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden","true");
  lightboxImage.src = "";
}
document.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
lightbox.addEventListener("click", e => { if(e.target === lightbox) closeLightbox(); });
document.addEventListener("keydown", e => { if(e.key === "Escape") closeLightbox(); });
