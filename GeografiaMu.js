var paises = [];
var nombrePais=document.getElementById("nombrePais");
var div1=document.getElementById("div1");
fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((data) => {
    
    data.forEach((pais) => {
      paises.push(pais);
      
        
    });
});
//nombrePais.textContent=(paises[0].altSpellings[3]);
//console.log(paises[0].altSpellings[3]);
div1.textContent=(paises[0].flags[0]);
