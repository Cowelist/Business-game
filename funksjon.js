let loop = 0
let moneyCounter = 0    
let shops = 0
let bet = 0

// 3.75* shop pris
// 5.17* upgrade

let dyrShopPris = 50000
let dyrShop = 0
let dyrUpgrade = 0
let dyrUpgradePris = 100000 

let lekkeShopPris = 187500
let lekkeShop = 0
let lekkeUpgrade = 0
let lekkeUpgradePris = 5170000

let spillShopPris = 703125
let spillShop = 0
let spillUpgrade = 0
let spillUpgradePris = 26728900

let matShopPris = 2636718.75
let matShop = 0
let matUpgrade = 0
let matUpgradePris = 138188413

let moneyMulti = dyrShop + lekkeShop + spillShop + matShop
//////

let shopping = false //Alt
let skole = false //Spill
let by = false //Mat
let barnehage = false //Lekker
let dyrepark = false  //Dyr




/////////
function betingelse(){
if (bet == 0){
    startLoop()
    moneyMulti += 1
    shops += 1
    bet += 1
    printShopsCounter()
    }
    else{
        console.clear();
        console.log("Kan ikke trykke")
    }
}

function startLoop(){  
    if(loop <= 0){
         moneyCounter += Math.floor(Math.random() * 10000 * moneyMulti)
         printMoneyCounter()
         setTimeout(startLoop, 1000)
    }
}
//////////////////////////////////////
// Dyr Shop
function Dyr(){
if (moneyCounter > dyrShopPris){
        moneyMulti += 1
        shops += 1
        dyrShop += 1
        moneyCounter -= dyrShopPris
        dyrShopPris *= 1.9
        printMoneyCounter()
        printShopsCounter()
        printDyrCounter()
  
    }
    else{
        console.clear();
        console.log("ikke nok penger \nDu trenger: " + Math.round(dyrShopPris - moneyCounter).toLocaleString() + "$")
    }
}

function upgradeDyr(){
    if (moneyCounter > dyrUpgradePris){
        moneyMulti += 1.25 * dyrShop
        dyrUpgrade += 1
        moneyCounter -= dyrUpgradePris
        dyrUpgradePris *= 2.15
        printMoneyCounter()
        printDyrUpgrade()
    }
    else{
        console.clear();
        console.log("ikke nok penger \nDu trenger: " + Math.round(dyrUpgradePris - moneyCounter).toLocaleString() + "$")
    }
}

//Lekke Shop
function Lekke(){
    if (moneyCounter > lekkeShopPris){
            moneyMulti += 1.25
            shops += 1
            lekkeShop += 1
            moneyCounter -= lekkeShopPris
            lekkeShopPris *= 1.9
            printMoneyCounter()
            printShopsCounter()
            printLekkeCounter()
        }
        else{
            console.clear();
            console.log("ikke nok penger \nDu trenger: " + Math.round(lekkeShopPris - moneyCounter).toLocaleString() + "$")
        }
    }
    
    function upgradeLekke(){
        if (moneyCounter > lekkeUpgradePris){
            moneyMulti += 1.3 * lekkeShop
            lekkeUpgrade += 1
            moneyCounter -= lekkeUpgradePris
            lekkeUpgradePris *= 2.15
            printMoneyCounter()
            printLekkeUpgrade()
        }
        else{
            console.clear();
            console.log("ikke nok penger \nDu trenger: " + Math.round(lekkeUpgradePris - moneyCounter).toLocaleString() + "$")
        }
    }

// Spill Shop
function Spill(){
    if (moneyCounter > spillShopPris){
            moneyMulti += 1.5
            shops += 1
            spillShop += 1
            moneyCounter -= spillShopPris
            spillShopPris *= 1.9
            printMoneyCounter()
            printShopsCounter()
            printSpillCounter()
        }
        else{
            console.clear();
            console.log("ikke nok penger \nDu trenger: " + Math.round(spillShopPris - moneyCounter).toLocaleString() + "$")
        }
    }
    
    function upgradeSpill(){
        if (moneyCounter > spillUpgradePris){
            moneyMulti += 1.35 * spillShop
            spillUpgrade += 1
            moneyCounter -= spillUpgradePris
            spillUpgradePris *= 2.15
            printMoneyCounter()
            printSpillUpgrade()
        }
        else{
            console.clear();
            console.log("ikke nok penger \nDu trenger: " + Math.round(spillUpgradePris - moneyCounter).toLocaleString() + "$")
        }
    }

// Mat Shop
function Mat(){
    if (moneyCounter > matShopPris){
            moneyMulti += 1.75
            shops += 1
            matShop += 1
            moneyCounter -= matShopPris
            matShopPris *= 1.9
            printMoneyCounter()
            printShopsCounter()
            printMatCounter()
        }
        else{
            console.clear();
            console.log("ikke nok penger \nDu trenger: " + Math.round(matShopPris - moneyCounter).toLocaleString() + "$")
        }
    }
    
    function upgradeMat(){
        if (moneyCounter > matUpgradePris){
            moneyMulti += 1.4 * matShop
            matUpgrade += 1
            moneyCounter -= matUpgradePris
            matUpgradePris *= 2.15
            printMoneyCounter()
            printMatUpgrade()
        }
        else{
            console.clear();
            console.log("ikke nok penger \nDu trenger: " + Math.round(matUpgradePris - moneyCounter).toLocaleString() + "$")
        }
    }

//////////////////////////////////////

function shoppingMall(){
//Alt
    if (skole == true){
        skole = false
        moneyMulti -= spillShop * 0.01
    }
    else if (by == true){
        by = false
        moneyMulti -= matShop * 0.01
    }
    else if (barnehage == true){
        barnehage = false
        moneyMulti -= lekkeShop * 0.01
    }
    else if (dyrepark == true){
        dyrepark = false
        moneyMulti -= dyrShop * 0.01
    }
    else if (shopping == true){
        console.clear();
        console.log("kan ikke trykke flere ganger")
    }
    else{
        spillShop, matShop, lekkeShop, dyrShop *= 50
        shopping = true
    }

}

function school(){
// spill
    if (shopping == true){
        shopping = false
        barnehage, by, skole, dyrepark /= 50
    }
    else if (by == true){
        by = false
        moneyMulti -= matShop * 0.01
    }
    else if (barnehage == true){
        barnehage = false
        moneyMulti -= lekkeShop * 0.01
    }
    else if (dyrepark == true){
        dyrepark = false
        moneyMulti -= dyrShop * 0.01
    }
    if (skole == true){
        console.clear();
        console.log("kan ikke trykke flere ganger")
     }
    else {
        moneyMulti += 100 * spillShop
        skole = true
    }
}

function city(){
// mat
    if (shopping == true){
        shopping = false
        barnehage, by, skole, dyrepark /= 50
    }
    else if (skole == true){
        skole = false
        moneyMulti -= spillShop * 0.01
    }
    else if (barnehage == true){
        barnehage = false
        moneyMulti -= lekkeShop * 0.01
    }
    else if (dyrepark == true){
        dyrepark = false
        moneyMulti -= dyrShop * 0.01
    }
    if (by == true){
        console.clear();
        console.log("kan ikke trykke flere ganger")
     }
    else {
        moneyMulti += 100 * matShop
        by = true
    }
}

function kindergarten(){
//lekker
    if (shopping == true){
        shopping = false
        barnehage, by, skole, dyrepark /= 50
    }
    else if (skole == true){
        skole = false
        moneyMulti -= spillShop * 0.01
    }
    else if (by == true){
        by = false
        moneyMulti -= matShop * 0.01
    }
    else if (dyrepark == true){
        dyrepark = false
        moneyMulti -= dyrShop * 0.01
    }
    if (barnehage == true){
        console.clear();
        console.log("kan ikke trykke flere ganger")
        console.error("Feil")
     }
    else {
        moneyMulti += 100 * lekkeShop
        barnehage = true
    }
}

function zoo(){
//dyr

    if (shopping == true){
        shopping = false
        barnehage, by, skole, dyrepark /= 50
    }
    else if (skole == true){
        skole = false
        moneyMulti -= spillShop * 0.01
    }
    else if (by == true){
        by = false
        moneyMulti -= matShop * 0.01
    }
    else if (barnehage == true){
        barnehage = false
        moneyMulti -= lekkeShop * 0.01
    }  
    if (dyrepark == true){
        console.clear();
        console.log("kan ikke trykke flere ganger")
     }
    else {
        moneyMulti += 100 * dyrShop
        dyrepark = true
    }


}



//////////////////////////////////////

function printMoneyCounter(){
     document.getElementById("penger").textContent = Math.round(moneyCounter).toLocaleString();
}

///////////////////////////////////////

function printShopsCounter(){
    document.getElementById("shop").textContent = shops
}

//

function printDyrCounter(){
    document.getElementById("dyrCounter").textContent = dyrShop
}

function printDyrUpgrade(){
    document.getElementById("uppgradeDyrCounter").textContent = dyrUpgrade
}

//

function printLekkeCounter(){
    document.getElementById("lekkeCounter").textContent = lekkeShop
}

function printLekkeUpgrade(){
    document.getElementById("uppgradeLekkeCounter").textContent = lekkeUpgrade
}
//

function printSpillCounter(){
    document.getElementById("spillCounter").textContent = spillShop
}

function printSpillUpgrade(){
    document.getElementById("uppgradeSpillCounter").textContent = spillUpgrade
}

//
function printMatCounter(){
    document.getElementById("matCounter").textContent = matShop
}

function printMatUpgrade(){
    document.getElementById("uppgradeMatCounter").textContent = matUpgrade
}
