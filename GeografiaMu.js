
const paises = [];
function P(nombre, capital, bandera) {
  this.nombre = nombre;
  this.capital = capital;
  this.bandera = bandera;
  
}
let nombrePais=document.getElementById("nombrePais");
let nombreCapital=document.getElementById("nombreCapital");
let div1=document.getElementById("div1");
fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((data) => {
    content = "";
    
    
    data.forEach((pais) => {
      p1= new P(pais.name.official,pais.capital,pais.flags.svg);
      
      paises.push(p1);
      
        
    });
    //console.log(paises[0]);
    nombrePais.textContent=paises[0].nombre;
    nombreCapital.textContent=paises[0].capital[0];
    ruta=paises[0].bandera;
    div1.innerHTML=`<img src="${ruta}" width="${200}" height="${100}"  />`;
    console.log(ruta);
    });
    
 


