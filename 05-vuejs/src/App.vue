<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/cliente">Quiero comprar pastel</router-link>|
    <router-link to="/pastelero">Soy pastelero</router-link>
   
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  padding-left: 5px;
}

nav a.router-link-exact-active {
    color: #ffffff;
    font-size: 24px;
}
nav a{
  color: #ffffff;
  font-size: 24px;
}
</style>
