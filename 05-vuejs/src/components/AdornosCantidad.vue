<template>
<div class="jumbotron">
<div class="row">  
     <div class="col-lg-4 col-md-12 col-sm-12 txtBlack">  
         Total Inicial ChispasDeColores: 100
     </div>
    <div class="col-lg-4 col-md-12 col-sm-12 txtBlack">  
         Total Inicial Mermelada: 100
     </div>
     <div class="col-lg-4 col-md-12 col-sm-12 txtBlack">  
         Total Inicial Almendras: 100
     </div>
 </div>
 <div class="row">
<div class="col-lg-4 col-md-12 col-sm-12 txtBlack">  
         Restante ChispasDeColores: {{$store.state.TotalChispasDeColores}}
     </div>
    <div class="col-lg-4 col-md-12 col-sm-12 txtBlack">  
          Restante Mermelada: {{$store.state.TotalMermelada}}
     </div>
     <div class="col-lg-4 col-md-12 col-sm-12 txtBlack">    
         Restante Almendras: {{$store.state.TotalAlmendras}}
     </div>
 </div>
</div>
 
</template>
<script>
export default ({
  name:'AdornosCantidad'
})
</script>
