<template>
<div>
 <h2>Nosotros</h2>
<Nosotros/>
<h2>Menu</h2>
<Menu/>
<h2>Combina sabores</h2>
<Sabores/>
<h2>--------------------------------------------------------------------------------------------------------------------------------------------------</h2>
<h2>Combina adornos</h2>
<Adornos/><br><br>
<Formulario/>
</div>

</template>
<script>
import Nosotros from "../components/Nosotros.vue";
import Menu from "../components/Menu.vue";
import Sabores from "../components/Sabores.vue";
import Adornos from "../components/Adornos.vue";
import Formulario from "../components/Formulario.vue";

export default ({
   name: 'PateleroView',
   components:{
      Nosotros,
      Menu,
      Sabores,
      Adornos,
      Formulario,
    }
})
</script>
<style>
h2{
    color: white;
}

</style>