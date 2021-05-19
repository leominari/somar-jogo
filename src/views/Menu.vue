<template>
  <div>
    <h1 align="center">MATEMATICANDO</h1>

    <div class="menuclass">
      <div class="menu">
        <MenuButton @click.native="redirect('Play')" label="Jogar" icon="mdi-play"/>
        <MenuButton @click.native="redirect('Tutorial')" label="Tutorial" icon="mdi-bookshelf"/>
        <MenuButton @click.native="redirect('Ranking')" label="Recordes" icon="mdi-star"/>
        <MenuButton @click.native="redirect('Menu')" label="Sair" icon="mdi-logout-variant"/>
      </div>
    </div>
  </div>
</template>


<script>
import MenuButton from "../components/button/MenuButton";

export default {
  name: 'Menu',
  components: {MenuButton},
  methods: {
    redirect(routeName) {
      console.log(routeName);
      this.$router.push({name: routeName});
    }
  }
}
</script>


<style scoped>
.menuclass {
  margin-top: 80px;
  display: flex;
  align-content: center;
  justify-content: center;
}

.menu {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
}

h1 {
  margin-top: 50px;
  font-size: 4em;
  color: white;
}
</style>