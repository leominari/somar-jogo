<template>
  <v-app v-bind:style="{ backgroundColor: '#242424'}">
    <router-view></router-view>
    <Snackbar/>
  </v-app>
</template>

<script>
import Snackbar from './components/Snackbar'

export default {
  name: 'App',
  mixins: [],
  components: {
    Snackbar,
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background-color: rgb(250, 28, 65);
}
</style>
