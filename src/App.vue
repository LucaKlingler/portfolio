<template>
  <div id="app" :class="{ easteregg: $store.state.easteregg }">
    <div id="nav">
      <router-link class="router-link" to="/about">About Me</router-link> 
      <router-link class="router-link" to="/">My Projects</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "~@/assets/scss/vendors/bootstrap-vue/index";
body{
  margin: 0;
  padding: 0;
}
* {
font-size: 25pt;
}

.easteregg {
  cursor:url(https://i.ibb.co/PhLGzZn/luca.png), auto
}

.dark {
  background-color: $dark-background-color;
  color: $dark-text-color;
}

#nav{
  position: fixed;
  text-align: center;
  z-index: 2;
  width: 100%;
  height: 4em;
  line-height: 4em;
  font-size: 32pt;
}
#app{
  position: relative;
}
.router-link{
  color: black !important;
  margin: 1em;
}
</style>
