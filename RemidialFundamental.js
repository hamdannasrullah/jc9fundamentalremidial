var array = [];


function getNum () {

  var nomor = prompt("Masukkan beberapa angka. \n Ketik huruf s untuk berhenti")

  if (nomor === 's') {

     console.log("Urutan angka " +  array.sort((a, b) => {return a - b}));

    console.log("Nilai maksimum adalah " + array.reduce((a, b) => Math.max(a, b)) + " Nilai minimum adalah " + array.reduce((a, b) => Math.min(a, b)));
    
    console.log("Angka Genap: " + array.filter(a => a%2 === 0) + " Angka Ganjil: " + array.filter(a => a%2 !== 0));
    
    console.log("Rata-rata (average) dari angka genap:" + ([array.filter(a => a%2 === 0)].reduce((a, b) => a + b),0) / array.length); 

    console.log("Jumlah (sum) dari angka ganjil:"  + ([array.filter(a => a%2 !== 0)].reduce((a, b) => a + b),0));
    

  } else if (nomor === "") {

    getNum();

  } else if (isNaN(nomor)) {

    getNum();

  } 

  else {

    array.push(nomor);

    getNum();

  }

}

getNum();
