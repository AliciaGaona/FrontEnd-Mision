<template>
  <div class="home">
    <img  class="imgLogo" alt="Vue logo" src="../assets/LogoPastel1.png">
    <HelloWorld msg="Bienvenidos"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
<style>
body{
  background-image: url("../assets/astronomy-gc46a45629_1920.jpg");
}
h1,h3{
  color: white;
}
.imgLogo{
width:250;
border-radius: 50px;
}



.labelPrincipalMenu{
  color: black;
  font-size: 20px;
}
.labelPrincipal{
  color: white;
  font-size: 0px;
}
.Title{
    color: black;
    size: 20px;
}
hr {
    margin: auto;
    width: 40%;
  }
  .ctn{
    color: white;
    font-size: 30px;
    background-color: blueviolet;
  }
  .txt{
     color: white;
    font-size: 25px;
    font-weight: bold;
  }
  .txtBlack{
     color: rgb(0, 0, 0);
    font-size: 25px;
    font-weight: bold;
  }
   .btn-primary {
    color: #fff;
    background-color: #007bff;
    border-color: #007bff;
    margin-right: 21px;
}
</style>
 