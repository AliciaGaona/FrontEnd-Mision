<template>
  <div>
    <div class="row">
      <div class="col-lg-4 col-md-12 col-sm-12">
        <label class="txt">Chocolate espacial----</label>
      </div>
      <div class="col-lg-4 col-md-12 col-sm-12 d-flex justufy-content-start">
        <button class="btn btn-primary" @click="$store.commit('subirContadorPastelChocolate')">
          Pedir
        </button>
        <button class="btn btn-primary" @click="$store.commit('bajarContadorPastelChocolate')">
          Quitar
        </button>
      </div>
      <div class="col-lg-4 col-md-12 col-sm-12 d-flex justufy-content-start txt">
        {{ $store.state.pastelChocolate }}
      </div>
    </div>

    <div class="row">
      <div class="col-lg-4 col-md-12 col-sm-12">
        <label class="txt">Vainilla Lunar----</label>
      </div>
      <div class="col-lg-4 col-md-12 col-sm-12 d-flex justufy-content-start">
        <button class="btn btn-primary" @click="$store.commit('subirContadorPastelVainilla')">
          Pedir
        </button>
        <button class="btn btn-primary" @click="$store.commit('bajarContadorPastelVainilla')">
          Quitar
        </button>
         </div>
        <div class="col-lg-4 col-md-12 col-sm-12 d-flex justufy-content-start txt">{{ $store.state.pastelVainilla }}</div>  
    </div>

    <div class="row">
      <div class="col-lg-4 col-md-12 col-sm-12">
        <label class="txt">Fresa galáctica----</label>
      </div>
      <div class="col-lg-4 col-md-12 col-sm-12 d-flex justufy-content-start">
        <button class="btn btn-primary" @click="$store.commit('subirContadorPastelFresa')">
          Pedir
        </button>
        <button class="btn btn-primary" @click="$store.commit('bajarContadorPastelFresa')">
          Quitar
        </button>
      </div>
      <div class="col-lg-4 col-md-12 col-sm-12 d-flex justufy-content-start txt">{{ $store.state.pastelFresa }}</div>
    </div>

    <div class="row">
      <div class="col-lg-4 col-md-12 col-sm-12">
        <label class="txt">Limón Solar----</label>
      </div>
      <div class="col-lg-4 col-md-12 col-sm-12 d-flex justufy-content-start">
        <button class="btn btn-primary" @click="$store.commit('subirContadorPastelLimon')">
          Pedir
        </button>
        <button class="btn btn-primary" @click="$store.commit('bajarContadorPastelLimon')">
          Quitar
        </button>
      </div>
      <div class="col-lg-4 col-md-12 col-sm-12 d-flex justufy-content-start txt">{{ $store.state.pastelLimon }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Sabores",
};
</script>
