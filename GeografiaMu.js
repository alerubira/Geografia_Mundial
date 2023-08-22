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
const userId = 1;
const updatedUserData = {
  name: 'Nuevo Nombre',
  email: 'nuevo@email.com'
};

fetch(`https://api.example.com/users/${userId}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(updatedUserData)
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Error al actualizar');
    }
    return response.json();
  })
  .then(data => {
    console.log('Actualización exitosa:', data);
  })
  .catch(error => {
    console.error('Error al actualizar:', error);
  });

