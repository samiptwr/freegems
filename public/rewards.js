
//getting gems
const gemsAmount = parseInt(localStorage.getItem("chiyas"));

//prices
const minecraftPrice = 1999;
const freefire500 = 499;
const freefire1000 = 999;
const robloxPrice = 1099;
const vboxPrice = 1099;
const google5 = 699;
const google10 = 1099;
const amazon10 = 1099;
const amazon50 = 4999;
const paypal = 4999;
const fortnitePrice = 1099;

//getting each element
const minecrafts = document.getElementById("minecraftPrice");
const ff500s = document.getElementById("ff500Price");
const ff1000s = document.getElementById("ff1000Price");
const robloxs = document.getElementById("roblox1000Price");
const vboxs = document.getElementById("vbox1000Price");
const google5s = document.getElementById("google5Price");
const google10s = document.getElementById("google10Price");
const amazon10s = document.getElementById("amazon10Price");
const amazon50s = document.getElementById("amazon50Price");
const paypals = document.getElementById("paypalPrice");
const fortnites = document.getElementById("vbox1000Price");


//giving each element their prices through js
minecrafts.textContent = minecraftPrice;
ff500s.textContent = freefire500;
ff1000s.textContent = freefire1000;
robloxs.textContent = robloxPrice;
vboxs.textContent = vboxPrice;
google5s.textContent = google5;
google10s.textContent = google10;
amazon10s.textContent = amazon10;
amazon50s.textContent = amazon50;
paypals.textContent = paypal;
fortnites.textContent = fortnitePrice;



//getting main div
const rewardsCards = document.querySelector(".rewards-cards");

//adding eventListener
rewardsCards.addEventListener("click", function(e){
    if(e.target.id === "minecraft-btn"){
        if(gemsAmount >= minecraftPrice) {
            document.querySelector(".outofstock").style.display = "flex";
        } else {
            document.querySelector(".notenoughgems").style.display = "flex";
        }
    }
    if(e.target.id === "diamonds-btn"){
        if(gemsAmount >= freefire500) {
            document.querySelector(".outofstock").style.display = "flex";
        } else {
            document.querySelector(".notenoughgems").style.display = "flex";
        }
    }
    if(e.target.id === "diamondss-btn"){
        if(gemsAmount >= freefire1000) {
            document.querySelector(".outofstock").style.display = "flex";
        } else {
            document.querySelector(".notenoughgems").style.display = "flex";
        }
    }
    if(e.target.id === "roblox-btn"){
        if(gemsAmount >= robloxPrice) {
            document.querySelector(".outofstock").style.display = "flex";
        } else {
            document.querySelector(".notenoughgems").style.display = "flex";
        }
    }
    if(e.target.id === "fortnite-btn"){
        if(gemsAmount >= fortnitePrice) {
            document.querySelector(".outofstock").style.display = "flex";
        } else {
            document.querySelector(".notenoughgems").style.display = "flex";
        }
    }
    if(e.target.id === "google-btn"){
        if(gemsAmount >= google5) {
            document.querySelector(".outofstock").style.display = "flex";
        } else {
            document.querySelector(".notenoughgems").style.display = "flex";
        }
    }
    if(e.target.id === "googlee-btn"){
        if(gemsAmount >= google10) {
            document.querySelector(".outofstock").style.display = "flex";
        } else {
            document.querySelector(".notenoughgems").style.display = "flex";
        }
    }
    if(e.target.id === "amazon-btn"){
        if(gemsAmount >= amazon10) {
            document.querySelector(".outofstock").style.display = "flex";
        } else {
            document.querySelector(".notenoughgems").style.display = "flex";
        }
    }
    if(e.target.id === "amazonn-btn"){
        if(gemsAmount >= amazon50) {
            document.querySelector(".outofstock").style.display = "flex";
        } else {
            document.querySelector(".notenoughgems").style.display = "flex";
        }
    }
    if(e.target.id === "paypal-btn"){
        if(gemsAmount >= paypal) {
            document.querySelector(".outofstock").style.display = "flex";
        } else {
            document.querySelector(".notenoughgems").style.display = "flex";
        }
    }
});

//making pop-up cards close
document.getElementById("stock-btn").addEventListener("click", () => {
    document.querySelector(".outofstock").style.display = "none";
});

document.getElementById("enough-btn").addEventListener("click", () => {
    document.querySelector(".notenoughgems").style.display = "none";
});