<template>
  <div class="about">
    <b-icon class="back" style="color: white;" icon="chevron-left" @click="$router.push('/')" />
    <div class="section dark" id="aboutme">
      <div class="col">
        <p class="beschreibung title">ABOUT ME</p>
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
    <div class="section dark" id="aboutme">
      <div class="col">
        <b-img src="@/assets/winter.png" alt="Portrait" rounded="circle" class="portrait"
          style="align-self: center;" />
      </div>
      <div class="col">
        <p class="beschreibung-rechts">
                Due to my rural proximity to Affalterbach, <br> Zuffenhausen and Neckarsulm, a fascination for cars grew in me early on. <br>
                In the summer I also like to ride my motorcycle. When the winter doesn't <br> allow it any more 
                I like to spend my free time snowboarding in the mountains. <br>
                I always try to expand my knowledge and apply what I have learned. <br>
                Above all, I have a great interest in design as well as technology, 
                which is why I found my way into the field of "IoT" after graduating from high school.
              </p>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
}
</script>

<style lang="scss" scoped>
</style>