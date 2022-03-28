<template>
    <div class="jumbotron">
        <div class="txtBlack" >Formulario de pedido</div><br><br>
         <div class="form-group">
  <label class="txtBlack" for="formGroupExampleInput">Nombre:</label>
 <input type="text" placeholder="Escribe tu nombre"  v-model="formularioGuardarNombre">
             </div>
<div class="form-group">
  <label class="txtBlack"  for="formGroupExampleInput">Teléfono:</label>
 <input type="text" placeholder="Escribe tu telefono" v-model="formularioGuardarTel">
    </div>
    <div class="form-group">
  <label class="txtBlack"  for="formGroupExampleInput">Correo Electrónico:</label>
 <input type="text"  placeholder="Escribe tu correo" v-model="formularioGuardarCorreo">
    </div>
     <label class="txtBlack">Resumen:</label><br>
     <label class="txtBlack">Pastel: pastelFresa- {{$store.state.pastelFresa}} , pastelChocolate : {{$store.state.pastelChocolate}}, pastelVainilla: {{$store.state.pastelVainilla}}, pastelLimon: {{$store.state.pastelLimon}}</label><br>    
   <label class="txtBlack">Adorno: ChispasDeColores- {{$store.state.ChispasDeColores}}, Mermelada- {{$store.state.Mermelada}}, Almendras- {{$store.state.Almendras}}</label>
    </div>
</template>

<script>
export default ({
  name:'Formulario',
    computed: {
    formularioGuardarNombre: {
      get(){
        return this.$store.state.nombreFormulario;
      },
      set(nombreFormulario){
        this.$store.dispatch("formularioGuardarNombre",nombreFormulario);
      }
    },
    formularioGuardarTel: {
      get(){
        return this.$store.state.telFormulario;
      },
      set(telFormulario){
        this.$store.dispatch("formularioGuardarTel",telFormulario);
      }
    },
    formularioGuardarCorreo: {
      get(){
        return this.$store.state.correoFormulario;
      },
      set(correoFormulario){
        this.$store.dispatch("formularioGuardarCorreo",correoFormulario);
      }
    },

  },
})
</script>
