<template>
  <div>
    <div class="about">
      <div class="section">
        <div class="col">
          <div class="homescreen">
          <h2>Welcome to my Portfolio!</h2>
          <br>
          <p>I created this website to strengthen my web presence. <br>
          You can have a look at some of my projects and learn more about me. <br>
          If you are interested, please do not hesitate to contact me.</p>
          <br>
          <router-link class="link" to="/about">ABOUT ME</router-link> <br>
          <router-link class="link" to="/projects">MY PROJECTS</router-link> <br>
          <router-link class="link" to="/contact">CONTACT ME</router-link>
          </div>
          <div v-if="false" class="scrolldownWrapper">
            <a v-smooth-scroll class="centered-link light" href="#aboutme">About me<br>
              <b-icon icon="chevron-compact-down" /></a>
          </div>
        </div>
        <div class="col dark" style="flex-grow: 1;">
          <b-img @click="countEasteregg" src="@/assets/portfoliobild.jpg" alt="Portrait" rounded="circle"
            class="portrait" style="align-self: center;" />
            <br>
          <vue-typed-js :strings="typedWords" :loop="true" :backDelay="2000" :backSpeed="100" :smartBackspace="true"
            :shuffle="true" :cursorChar="'_'" style="justify-content: center;">
            <h2 class="typing"></h2>
          </vue-typed-js>
          <p class="aboutme" v-if="false">
          </p>
          <div v-if="false" class="scrolldownWrapper">
            <a v-smooth-scroll class="centered-link dark" href="#projects">My Projects<br>
              <b-icon icon="chevron-compact-down" /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {

      return {
        slide: 0,
        sliding: null,
        egCounter: 0,
        typedWords: [
          'iot student',
          'designer',
          'car enthusiast',
          'biker',
          'tech geek',
          'pro binge watcher',
          'Luca Klingler',
        ],
      };
    },
    methods: {
      countEasteregg() {
        this.egCounter++;
        if (this.egCounter > 10) this.$store.state.easteregg = true;
      },
      onSlideStart() {
        this.sliding = true;
      },
      onSlideEnd() {
        this.sliding = false;
      },
    },
    mounted() {}
  }
</script>

<style lang="scss" scoped>

  .ml11 {
    font-weight: 700;
    font-size: 3.5em;
  }

  .ml11 .text-wrapper {
    position: relative;
    display: inline-block;
    padding-top: 0.1em;
    padding-right: 0.05em;
    padding-bottom: 0.15em;
  }

  .ml11 .line {
    opacity: 0;
    position: absolute;
    left: 0;
    height: 100%;
    width: 3px;
    background-color: #fff;
    transform-origin: 0 50%;
  }

  .ml11 .line1 {
    top: 0;
    left: 0;
  }

  .ml11 .letter {
    display: inline-block;
    line-height: 1em;
  }

  .carousel-item img {
    height:100vh!important ;
    background-color: $dark-background-color !important;
  }

  .carousel-caption {
    left: 0% !important;
    right: 0% !important;
  }

</style>