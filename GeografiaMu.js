
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
const aleatorio=(al)=>{
  return Math.floor(Math.random() * al) ;
}
const vaciar=()=>{
  div1.innerHTML="";
  div2.innerHTML="";
  div3.innerHTML="";
  div4.innerHTML="";
  adivinaBandera.innerHTML="";
  adivinaCapital.innerHTML="";
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
    
    //const posicion=Math.floor(Math.random() * cantidad) ;
    //adivinaBandera.textContent="Adivina Bandera";
    //adivinaCapital.textContent="Adivina Capital";
    //nombrePais.textContent=paises[posicion].nombre;
    //nombreCapital.textContent=paises[posicion].capital[0];
    //ruta=paises[posicion].bandera;
    //llenarDiv(div1,ruta);
    //llenarDivC(div1,paises[posicion].capital[0]);
    //console.log(ruta);
    });
    
    const cantidad=paises.length;
    inicio.addEventListener("click", function() {
           aliasObligatorio.innerHTML="";
           if(alias.value==""){
            
            aliasObligatorio.innerHTML="el alias debe se obligatorio";
           }else{
            empezar();
           }
          
          });
 
const empezar=()=>{
  vaciar();
  if(aleatorio(2)==1){
      eligeBandera();
  }else{
    eligeCapital();
  }

}
const eligeCapital=()=>{
  adivinaCapital.textContent="Adivina Capital";
  var posPais=aleatorio(cantidad);
  nombrePais.textContent=paises[posPais].nombre;
  llenarDivC(div1,paises[posPais].capital[0]);
  
}
const eligeBandera=()=>{
  adivinaBandera.textContent="Adivina Bandera";
}

