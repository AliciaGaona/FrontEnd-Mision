<template>
<div class="jumbotron">   
<div class="row">  
     <div class="col-lg-4 col-md-12 col-sm-12 txtBlack">  
         Total Inicial Pastel Fresa:  100
     </div>
    <div class="col-lg-4 col-md-12 col-sm-12 txtBlack">  
         Total Inicial Pastel Chocolate: 100
     </div>
     <div class="col-lg-4 col-md-12 col-sm-12 txtBlack ">  
         Total Inicial Pastel Vainilla: 100
     </div>
     <div class="col-lg-4 col-md-12 col-sm-12 txtBlack">  
         Total Inicial Pastel Limon: 100
     </div>
 </div>
 <div class="row">  
 <div class="col-lg-4 col-md-12 col-sm-12 txtBlack">  
         Restante Pastel Fresa: {{$store.state.TotalPastelFresa}}
     </div>
    <div class="col-lg-4 col-md-12 col-sm-12 txtBlack">  
         Restante Pastel Chocolate: {{$store.state.TotalPastelChocolate}}
     </div>
     <div class="col-lg-4 col-md-12 col-sm-12 txtBlack ">  
         Restante Pastel Vainilla: {{$store.state.TotalPastelVainilla}}
     </div>
     <div class="col-lg-4 col-md-12 col-sm-12 txtBlack">
         Restante Pastel Limon: {{$store.state.TotalPastelLimon}}
     </div>
 </div>
</div>
 
</template>
<script>
export default ({
  name:'PastelesCantidad'
})
</script>
