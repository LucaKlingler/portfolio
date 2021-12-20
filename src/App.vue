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
font-family: 'Roboto', sans-serif;
/*font-family: 'Roboto Slab', serif;*/
}

.portrait {
    width: 20em;
    height: 20em;
  }

  .back {
    position: fixed;
    z-index: 2;
    top: 3em;
    left: 3em;
    width: 2rem;
    height: 2rem;
    cursor: pointer;
  }

  .title {
    font-size: 32pt;
  }

  
  .homescreen {
    text-align: center;
  }

  .beschreibung {
    padding-left: 6rem;
    text-align: left;
    margin-left: 0em;
  }

  .beschreibung-rechts {  
    padding-right: 6rem;
    text-align: left;
  } 

  .section {
    position: relative;
    display: flex;
    flex-direction: row;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
  }

  .col {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0;
  }
 .aboutme {
    display: flex;
    flex-direction: row;
    padding-left: 10em;
    height: 4em;
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

.carousel-control-prev .carousel-control-next {
  width: 5% !important;
}

.linkportfolio {
  font-size: smaller;
  color: $light-text-color;
  font-style: italic;
}
</style>
