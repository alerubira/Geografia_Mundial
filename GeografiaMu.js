
const paises = [];
function P(nombre, capital, bandera) {
  this.nombre = nombre;
  this.capital = capital;
  this.bandera = bandera;
  
}
let adivinaCapital=document.getElementById("adivinaCapital");
let adivinaBandera=document.getElementById("adivinaBandera");
let nombrePais=document.getElementById("nombrePais");
let div1=document.getElementById("div1");
let div2=document.getElementById("div2");
let div3=document.getElementById("div3");
let div4=document.getElementById("div4");
let inicio=document.getElementById("inicio");
let alias=document.getElementById("alias");
let bandera;
let aliasObligatorio=document.getElementById("aliasObligatorio");
const llenarDiv=(a,b)=>{
  a.innerHTML=`<img src="${b}" width="${200}" height="${100}"  />`;
}
const llenarDivC=(a,b)=>{
  a.textContent=b;
}
fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((data) => {
    //content = "";
    
    
    data.forEach((pais) => {
      p1= new P(pais.name.official,pais.capital,pais.flags.svg);
      
      paises.push(p1);
      
        
    });
    //console.log(paises[0]);
    const cantidad=paises.length;
    const posicion=Math.floor(Math.random() * cantidad) ;
    //adivinaBandera.textContent="Adivina Bandera";
    adivinaCapital.textContent="Adivina Capital";
    nombrePais.textContent=paises[posicion].nombre;
    //nombreCapital.textContent=paises[posicion].capital[0];
    //ruta=paises[posicion].bandera;
    //llenarDiv(div1,ruta);
    llenarDivC(div1,paises[posicion].capital[0]);
    //console.log(ruta);
    });
    boton.addEventListener("click", function() {
           if(alias.value==""){
            bandera=false;
            aliasObligatorio.innerHTML="el alias debe se obligatorio";
           }else{
            bandera=true;
           }
    });
 


