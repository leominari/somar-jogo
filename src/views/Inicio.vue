<template>
  <div class="inicio">
    <h1 align="center">MATEMATICANDO</h1>
    <h2 align="center">O melhor e mais desafiador jogo de matematica</h2>
    <div class="nomeInput">
      <h3>NOME:</h3>
      <VTextField align="center" background-color="white" v-model="nome" outlined color="white"/>
    </div>
    <div class="buttons">
      <div class="buttonLogin" @click="login">
        <h3>ENTRAR</h3>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations} from "vuex";

export default {
  name: 'Inicio',
  data() {
    return {
      nome: '',
    }
  },
  methods: {
    ...mapMutations([
      "SET_USUARIO"
    ]),
    login() {
      this.SET_USUARIO(this.nome);
      this.$router.push({name: 'Menu'});
    }
  }
}
</script>


<style scoped>
.buttons {
  display: flex;
  align-content: center;
  justify-content: center;
  padding-top: 100px;
}

.buttonLogin {
  width: 200px;
  height: 100px;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  align-content: center;
  justify-content: center;
  background-color: white;
}

h1, h2 {
  color: white;
}

h2 {
  padding-top: 50px;
  font-size: 1.5em;
}

h1 {
  font-size: 4em;
}

.buttonLogin > h3 {
  padding-top: 13%;
  font-size: 2em;
}

.inicio {
  margin-left: 8%;
  margin-right: 8%;
}

.nomeInput {
  display: flex;
  flex-direction: row;
  font-size: 2em;
  color: white;
  padding-top: 100px;
}
</style>