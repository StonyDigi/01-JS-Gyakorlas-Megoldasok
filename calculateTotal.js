/*

Ebben a példában egy egyszerű HTML űrlapot használunk két input mezővel (termék ára és ÁFA értéke),
 valamint egy gombbal, amely meghívja a calculateTotal függvényt. A calculateTotal függvény az input mezőkből kiolvassa az értékeket,
  majd meghívja a calculateGrossPrice függvényt a számoláshoz. Az eredményt az alert függvény segítségével jelenítjük meg felugró ablakban.
    (CC)

*/
function calculateTotal() {
    //Beolvasás az input mezőkből
    var productPrice = document.getElementById('productPrice').value;
    var vat = document.getElementById('vat').value;


    //számolás
    var netPrice = parseFloat(productPrice);
    var vatValue = parseFloat(vat);
    var grossPrice = calculateGrossPrice(netPrice, vatValue);

    //Eredmény megjelenítése felugró ablakban
    displayResult(grossPrice);
}

function calculateGrossPrice(netPrice, vatValue) {
    //Áfa hozzáadása a nettó árhoz
    var vatAmount = (vatValue / 100) * netPrice;
    var grossPrice = netPrice + vatAmount;

    return grossPrice;
}

function displayResult(result) {
    var formattedResult = result.toFixed(0).replace(".", ",");
    alert('A termék bruttó ára: ' + formattedResult + ' Ft');
}