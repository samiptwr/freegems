
//getting elements
const arrows = document.getElementsByClassName('trackingClick');
const gemsTxt = document.getElementById("upmaha");
let chiya = localStorage.getItem("chiyas") ? parseInt(localStorage.getItem("chiyas")) : 0;
gemsTxt.textContent = chiya;


function saveData() {
    localStorage.setItem('chiyas', chiya);
}

//getting every links
const shrinkme = document.getElementById("shrinkme")
const shrinkearn = document.getElementById("shrinkearn")
const smoner = document.getElementById("smoner")
const clksh = document.getElementById("clksh")
const cloaking = document.getElementById("cloaking")
const gplinks = document.getElementById("gplinks")
const exe = document.getElementById("exe")
const btcut1 = document.getElementById("btcut1")
const btcut2 = document.getElementById("btcut2")
const btcut3 = document.getElementById("btcut3")
const clicksfly1 = document.getElementById("clicksfly1")
const clicksfly2 = document.getElementById("clicksfly2")
const clicksfly3 = document.getElementById("clicksfly3")
const clicksfly4 = document.getElementById("clicksfly4")
const linksly = document.getElementById("linksly")
const adpaylink = document.getElementById("adpaylink")
const v2links = document.getElementById("v2links")


const arr = [shrinkme, shrinkearn, smoner, clksh, cloaking, gplinks, exe, btcut1, btcut2, btcut3, clicksfly1, clicksfly2, clicksfly3, clicksfly4, linksly, adpaylink, v2links]


// Function to check if the link has been disabled for the day
function isLinkDisabled(linkId) {
    let disabledLinks = JSON.parse(localStorage.getItem('disabledLinks')) || {};
    let today = new Date().toDateString();
    return disabledLinks[linkId] === today;
}

// Function to disable the link for the day
function disableLink(linkId) {
    let disabledLinks = JSON.parse(localStorage.getItem('disabledLinks')) || {};
    let today = new Date().toDateString();
    disabledLinks[linkId] = today;
    localStorage.setItem('disabledLinks', JSON.stringify(disabledLinks));
}


// Function to enable the link
function enableLink(linkId) {
    let disabledLinks = JSON.parse(localStorage.getItem('disabledLinks')) || {};
    delete disabledLinks[linkId];
    localStorage.setItem('disabledLinks', JSON.stringify(disabledLinks));
}


for (let link of arr) {
    if (isLinkDisabled(link.id)) {
        console.log(link.id);
        link.parentElement.classList.add("disable");
        link.classList.add("isDisable");
    }
}


// Event listener for links
for (let link of arr) {
    link.addEventListener("click", () => {
        if (!isLinkDisabled(link.id)) {
            setTimeout(() => {
                chiya += 1;
                gemsTxt.textContent = chiya;
                saveData();
            }, 40000);
            link.parentElement.classList.add("disable");
            link.classList.add("isDisable");
            disableLink(link.id);
        } else {
            alert("This link has already been disabled for today.");
        }
    });
}