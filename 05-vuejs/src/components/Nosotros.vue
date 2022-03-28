<template>
    <div class="row p-5"> 
  <div class="col-6 ">  
    <div class="card" style="width: 18rem;">
      <img class="card-img-top" src="../assets/LogoPastel1.png" >
      <div class="card-body">
        <h5 class="card-title">Nosotros</h5>
        <p class="card-text">Dirección: {{$store.state.direccion}}</p>
        <p class="card-text">Teléfono : {{$store.state.telefono}}</p>
        <p class="card-text">Horarios de atención: {{$store.state.Horarios}}</p>
        <a href="https://solarviews.com/span/moon.htm" target="_blank" class="btn btn-primary">Ir a ubicación</a>
      </div>
    </div>
  </div>
  <div class="col-6"> 
    <img class="card-img-top" src="../assets/LogoPastel1.png">
  </div>
  </div>

</template>
<script>
export default ({
   name: 'Nosotros',  
})
</script>
