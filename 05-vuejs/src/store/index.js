import { createStore } from 'vuex'

export default createStore({
  state: {
    direccion:"Av.Junto a la luna",
    telefono:"55-55-55-44-33",
    Horarios:"Lunes a Domingo de 09:00am- 06:00pm",
    pastelFresa:0,
    pastelChocolate:0,
    pastelVainilla:0,
    pastelLimon:0,
    ChispasDeColores:0,
    Mermelada:0,
    Almendras:0,
    nombreFormulario:'Fulano',
    telFormulario:'5555555555',
    correoFormulario:'correo@hotmail.com',
    TotalPastelFresa:100,
    TotalPastelChocolate:100,
    TotalPastelVainilla:100,
    TotalPastelLimon:100,
    TotalChispasDeColores:100,
    TotalMermelada:100,
    TotalAlmendras:100,
  },
  getters: {
   
  },
  mutations: {
    subirContadorPastelFresa(state){
      state.pastelFresa++;
      state.TotalPastelFresa--;
    },
    bajarContadorPastelFresa(state){
      state.pastelFresa--;
      state.TotalPastelFresa++;
    },
    subirContadorPastelChocolate(state){
      state.pastelChocolate++;
      state.TotalPastelChocolate--;
    },
    bajarContadorPastelChocolate(state){
      state.pastelChocolate--;
      state.TotalPastelChocolate++;
    },
    subirContadorPastelVainilla(state){
      state.pastelVainilla++;
      state.TotalPastelVainilla--;
    },
    bajarContadorPastelVainilla(state){
      state.pastelVainilla--;
      state.TotalPastelVainilla++;
    },
    subirContadorPastelLimon(state){
      state.pastelLimon++;
      state.TotalPastelLimon--;
    },
    bajarContadorPastelLimon(state){
      state.pastelLimon--;
      state.TotalPastelLimon++;
    },
    subirContadorChispasDeColores(state){
      state.ChispasDeColores++;
      state.TotalChispasDeColores--;
    },
    bajarContadorChispasDeColores(state){
      state.ChispasDeColores--;
      state.TotalChispasDeColores++;
    },
    subirContadorMermelada(state){
      state.Mermelada++;
      state.TotalMermelada--;
    },
    bajarContadorMermelada(state){
      state.Mermelada--;
      state.TotalMermelada++;
    },
    subirContadorAlmendras(state){
      state.Almendras++;
      state.TotalAlmendras--;
    },
    bajarContadorAlmendras(state){
      state.Almendras--;
      state.TotalAlmendras++;
    }
  },
  actions: {
  },
  modules: {
  }
})
