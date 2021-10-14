<template>
  <div id="app" :class="{ easteregg: $store.state.easteregg }">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "~@/assets/scss/vendors/bootstrap-vue/index";
body{
  margin: 0;
  padding: 0;
  background-color: $light-background-color;
  color: $light-text-color;
}
* {
font-size: 25pt;
overflow-x: hidden;
}

.easteregg {
  cursor: url('https://marcrufeis.de/repo/share/luca/luca.png'), auto
}

.dark {
  background-color: $dark-background-color;
  color: $dark-text-color;
}
.light {
  background-color: $light-background-color;
  color: $light-text-color;
}

.scrolldownWrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-bottom: 1em;
  position: absolute;
  bottom: 0;
  width: 100%;
}
.centered-link {
  text-align: center;
  &:hover {
    color: $hover-color;
    text-decoration: none;
  }
}

.typed-cursor {
  font-size: 46pt;
}

/*
#nav{
  position: fixed;
  text-align: center;
  z-index: 2;
  width: 100%;
  height: 4em;
  line-height: 4em;
  font-size: 32pt;
}
*/
#app{
  position: relative;
}
</style>
