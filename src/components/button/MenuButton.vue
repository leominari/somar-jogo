<template>
  <div class="menuButton">
    <h3>
      {{ label }}
    </h3>

    <v-icon size="30" color="black">
      {{ icon }}
    </v-icon>
  </div>
</template>

<script>
export default {
  name: 'MenuButton',
  props: {
    label: {
      default: 'Menu'
    },
    icon: {
      defualt: 'icone'
    }
  },
  data() {
    return {}
  }
}
</script>


<style scoped>
.menuButton {
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px;
  margin-top: 20px;
  border-radius: 18px;
  width: 150px;
  cursor: pointer;
}

.menuButton > h3 {
  padding-right: 10px;
  padding-left: 20px;
}
</style>