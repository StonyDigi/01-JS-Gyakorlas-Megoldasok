/*

Ebben a példában egy egyszerű HTML űrlapot használunk két input mezővel (termék ára és ÁFA értéke),
 valamint egy gombbal, amely meghívja a calculateTotal függvényt. A calculateTotal függvény az input mezőkből kiolvassa az értékeket,
  majd meghívja a calculateGrossPrice függvényt a számoláshoz. Az eredményt az alert függvény segítségével jelenítjük meg felugró ablakban.
    (CC)

*/

function szamolBrutto() {
    // Beolvasás az input mezőkből
    var termekAr = document.getElementById('productPrice').value;
    var afaErtek = document.getElementById('vat').value;

    // Számolás
    var nettoAr = parseFloat(termekAr);
    var afaErtekSzazalek = parseFloat(afaErtek);
    var bruttoAr = bruttoArSzamolas(nettoAr, afaErtekSzazalek);

    // Eredmény megjelenítése felugró ablakban
    eredmenyMegjelenitese(bruttoAr)
  }

  function bruttoArSzamolas(nettoAr, afaErtekSzazalek) {
    // ÁFA hozzáadása a nettó árhoz
    var afaOsszeg = (afaErtekSzazalek / 100) * nettoAr;
    var bruttoAr = nettoAr + afaOsszeg;

    return bruttoAr;
  }

  function eredmenyMegjelenitese(eredmeny) {
    var formaltEredmeny = eredmeny.toFixed(0).replace(".", ",");
    alert('A termék bruttó ára: ' + formaltEredmeny + ' Ft');
  }