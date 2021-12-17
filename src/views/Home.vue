<template>
  <div>
    <div class="about">
      <div class="section">
        <div class="col">
          <b-img @click="countEasteregg" src="@/assets/portfoliobild.jpg" alt="Portrait" rounded="circle"
            class="portrait" style="align-self: center;" />
          <div class="scrolldownWrapper">
            <a v-smooth-scroll class="centered-link light" href="#aboutme">About me<br>
              <b-icon icon="chevron-compact-down" /></a>
          </div>
        </div>
        <div class="col dark" style="flex-grow: 1;">
          <vue-typed-js :strings="typedWords" :loop="true" :backDelay="2000" :backSpeed="100" :smartBackspace="true"
            :shuffle="true" :cursorChar="'_'" style="justify-content: center;">
            <h1 class="typing"></h1>
          </vue-typed-js>
          <p class="aboutme" v-if="false">
          </p>
          <div class="scrolldownWrapper">
            <a v-smooth-scroll class="centered-link dark" href="#projects">My Projects<br>
              <b-icon icon="chevron-compact-down" /></a>
          </div>
        </div>
      </div>
    </div>
    <div>
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="0"
        indicators
        background=#2f2f30
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333; height: 100vh;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <b-carousel-slide img-blank>
          <div class="row">
            <div class="col">
              <p class="beschreibung">
                Hi! 
                <br>
                I’m Luca Klingler and I live in the area around Stuttgart. 
                <br>
                I’m currently studying at the University of Applied
                Science Schwäbisch Gmünd. My field of study, „Internet of Things - Gestaltung vernetzter Systeme“ (engl:
                Design of Networked Systems), is not necessarily a familiar term to everyone. The easiest way to explain it
                would probably be with terms like "smart home", but there is much more to it than that. We are basically
                focused on the development of networked, digital products and services. 
                <br>
                So terms like machine learning, artificial intelligence and prototyping are not unfamiliar to me.
                I understand design as a tool for solving problems. In my studies, I learn to solve future problems through
                user-centered work and thus form the bridge between developers and designers.
              </p>
            </div>
            <div class="col">
              <b-img src="@/assets/iotcrew.png" alt="Portrait" rounded="circle" class="portrait"
                style="align-self: center; width: 70%; height: 70% !important;" />
            </div>
          </div>
        </b-carousel-slide>
        <b-carousel-slide img-blank>
          <div class="row">
            <div class="col">
              <p class="beschreibung">
                Due to my rural proximity to Affalterbach, <br> Zuffenhausen and Neckarsulm, a fascination for cars grew in me early on. <br>
                In the summer I also like to ride my motorcycle. When the winter doesn't allow it any more 
                I like to spend my free time snowboarding in the mountains. <br>
                I always try to expand my knowledge and apply what I have learned. <br>
                Above all, I have a great interest in design as well as technology, 
                which is why I found my way into the field of "IoT" after graduating from high school.
              </p>
            </div>
            <div class="col">
              <b-img src="@/assets/winter.png" alt="Portrait" rounded="circle" class="portrait"
                style="align-self: center; width: 70%; height: 100% !important;" />
            </div>
          </div>
        </b-carousel-slide>

      </b-carousel>
    </div>
    <div class="section dark" id="aboutme">
      <div class="col">
        <p class="beschreibung">
          Hi! 
          <br>
          I’m Luca Klingler and I live in the area around Stuttgart. 
          <br>
          I’m currently studying at the University of Applied
          Science Schwäbisch Gmünd. My field of study, „Internet of Things - Gestaltung vernetzter Systeme“ (engl:
          Design of Networked Systems), is not necessarily a familiar term to everyone. The easiest way to explain it
          would probably be with terms like "smart home", but there is much more to it than that. We are basically
          focused on the development of networked, digital products and services. 
          <br>
          So terms like machine learning, artificial intelligence and prototyping are not unfamiliar to me.
          I understand design as a tool for solving problems. In my studies, I learn to solve future problems through
          user-centered work and thus form the bridge between developers and designers.
        </p>
      </div>
      <div class="col">
        <b-img src="@/assets/iotcrew.png" alt="Portrait" rounded="circle" class="portrait"
          style="align-self: center;" />
      </div>
    </div>
    <div class="section" id="projects">
      <div class="col">
        <p class="beschreibung">
          Concentration is an application for measuring one's concentration while working at the computer. During the
          Corona pandemic, a lot of people worked from home, including us students. If you sit in front of the screen
          for hours in lectures every day, your motivation and also your concentration quickly drops. Here it is also
          difficult for lecturers to estimate how concentrated their students are due to the screens and many cameras
          being switched off. Our idea was to develop an application that determines concentration and can thus
          sustainably improve online teaching.
        </p>
      </div>
      <div class="col">
        <b-img src="@/assets/concentrationmockup.png" alt="Portrait" rounded="circle" class="portrait"
          style="align-self: center;" />
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
  .portrait {
    width: 20em;
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

  .beschreibung {
    padding-left: 3em;
    text-align: left;
    margin-left: 0em;
  }

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