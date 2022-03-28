<template>
<div>
 <h2>Cantidad de pasteles</h2>
<PastelesCantidad/>
<h2>Cantidad de adornos</h2>
<AdornosCantidad/>
<h2>--------------------------------------------------------------------------------------------------------------------------------------------------</h2>
<h2>Pedidos</h2>
<Pedidos/>
</div>

</template>
<script>
import PastelesCantidad from "../components/PastelesCantidad.vue";
import AdornosCantidad from "../components/AdornosCantidad.vue";
import Pedidos from "../components/Pedidos.vue";

export default ({
   name: 'PateleroView',
   components:{
      PastelesCantidad,
      AdornosCantidad,
      Pedidos
    }
})
</script>