<template>
    <div> 
<div class="row">
      <div class="col-lg-4 col-md-12 col-sm-12">
        <label class="txt">Chispas de colores----</label>
      </div>
      <div class="col-lg-4 col-md-12 col-sm-12 d-flex justufy-content-start">
       <button class="btn btn-primary" @click="$store.commit('subirContadorChispasDeColores')">Pedir</button>
      <button class="btn btn-primary" @click="$store.commit('bajarContadorChispasDeColores')">Quitar</button>
      </div>
      <div class="col-lg-4 col-md-12 col-sm-12 d-flex justufy-content-start txt">
        {{$store.state.ChispasDeColores}}
      </div>
</div>

<div class="row">
      <div class="col-lg-4 col-md-12 col-sm-12">
        <label class="txt">Mermelada natural----</label>
      </div>
      <div class="col-lg-4 col-md-12 col-sm-12 d-flex justufy-content-start">
       <button class="btn btn-primary" @click="$store.commit('subirContadorMermelada')">Pedir</button>
      <button class="btn btn-primary" @click="$store.commit('bajarContadorMermelada')">Quitar</button>
      </div>
      <div class="col-lg-4 col-md-12 col-sm-12 d-flex justufy-content-start txt">
        {{$store.state.Mermelada}}
      </div>
</div>

<div class="row">
      <div class="col-lg-4 col-md-12 col-sm-12">
        <label class="txt">Almendras----</label>
      </div>
      <div class="col-lg-4 col-md-12 col-sm-12 d-flex justufy-content-start">
       <button class="btn btn-primary" @click="$store.commit('subirContadorAlmendras')">Pedir</button>
      <button class="btn btn-primary" @click="$store.commit('bajarContadorAlmendras')">Quitar</button>
      </div>
      <div class="col-lg-4 col-md-12 col-sm-12 d-flex justufy-content-start txt">
        {{$store.state.Almendras}}
      </div>
</div>
</div>

</template>
<script>
export default ({
  name:'Adornos'
})
</script>
