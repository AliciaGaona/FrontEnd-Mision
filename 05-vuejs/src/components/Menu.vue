<template>
    <div class="accordion pt-5" id="accordionExample">
  <div class="card">
    <div class="card-header" id="headingOne">
      <h2 class="mb-0">
        <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Pasteles
        </button>
      </h2>
    </div>

    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div class="card-body">

          <div class="row"> 
<div class="col-4">
  <div class="card-body">
    <div class="card" style="width: 18rem;">
      <img src="../assets/ferrero-rocher-cake-gcae06d890_1920.jpg" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">Chocolate espacial</h5>
        <p class="card-text">Estandar</p>
        <p class="card-text">$100</p>
      </div>
    </div>
  </div>
</div>
<div class="col-4">
  <div class="card-body">
    <div class="card" style="width: 18rem;">
      <img src="../assets/vainilla.jpg" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">Vainilla Lunar</h5>
        <p class="card-text">Estandar</p>
        <p class="card-text">$200</p>
      </div>
    </div>
  </div>
</div>
<div class="col-4">
  <div class="card-body">
    <div class="card" style="width: 18rem;">
      <img src="../assets/Fresa.jpg" class="card-img-top" >
      <div class="card-body">
        <h5 class="card-title">Fresa galáctica</h5>
        <p class="card-text">Estandar</p>
        <p class="card-text">$100</p>
      </div>
    </div>
  </div>
</div>
          </div>      
          <div class="row"> 
            <div class="col-4">
              <div class="card-body">
                <div class="card" style="width: 18rem;">
                  <img src="../assets/limon.jpg" class="card-img-top">
                  <div class="card-body">
                    <h5 class="card-title">Limón Solar</h5>
                    <p class="card-text">Estandar</p>
                    <p class="card-text">$100</p>                  
                  </div>
                </div>
              </div>
            </div>

                      </div>

      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingTwo">
      <h2 class="mb-0">
        <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Adornos
        </button>
      </h2>
    </div>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
      <div class="row pt-4">       
        <div class="col-12"> 
          <table class="table table-striped table-dark">
            <thead>
              <tr>
                <th scope="col">Ingrediente extra</th>
                <th scope="col">Precio Adicional</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Chispas de colores</th>
                <td>$30</td>
              </tr>
              <tr>
                <th scope="row">Mermelada natural</th>
                <td>$20</td>
              </tr>
              <tr>
                <th scope="row">Almendras</th>
                <td>$10</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
 
</div>
</template>
<script>
export default ({
   name:'Menu',
})
</script>
