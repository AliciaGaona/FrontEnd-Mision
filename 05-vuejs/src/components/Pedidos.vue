<template>
  <div class="jumbotron">
    <div class="row">
      <div class="col-lg-4 col-md-12 col-sm-12">
        <label class="txtBlack">Nombre:</label>
        <div class="txtBlack">  {{$store.state.nombreFormulario}} </div>
      </div>
      <div class="col-lg-4 col-md-12 col-sm-12">
        <label class="txtBlack">Teléfono:</label>
        <div class="txtBlack"> {{$store.state.telFormulario}} </div>     
      </div>
      <div class="col-lg-4 col-md-12 col-sm-12">
        <label class="txtBlack">Correo Electrónico:</label>
        <div class="txtBlack"> {{$store.state.correoFormulario}} </div>
      </div>
    </div>
    <div class="row pt-5">
      <div class="col-lg-4 col-md-12 col-sm-12"><label class="txtBlack">Resumen:</label><br /></div>
      <div class="col-lg-4 col-md-12 col-sm-12">
        <label class="txtBlack"
          >Pastel: pastelFresa- {{ $store.state.pastelFresa }} , pastelChocolate
          : {{ $store.state.pastelChocolate }}, pastelVainilla:
          {{ $store.state.pastelVainilla }}, pastelLimon:
          {{ $store.state.pastelLimon }}</label
        ><br />
      </div>
      <div class="col-lg-4 col-md-12 col-sm-12">
        <label class="txtBlack"
          >Adorno: ChispasDeColores- {{ $store.state.ChispasDeColores }},
          Mermelada- {{ $store.state.Mermelada }}, Almendras-
          {{ $store.state.Almendras }}</label
        >
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Pedidos",
};
</script>
