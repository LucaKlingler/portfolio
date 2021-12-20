<template>
  <div class="about">
    <b-icon class="back" icon="chevron-left" @click="$router.push('/')" />
    <div class="section" id="projects">
      <div class="col">
        <p class="beschreibung title">MY PROJECTS</p>
        <p class="beschreibung">
          Concentration is an application for measuring one's concentration while working at the computer. During the
          Corona pandemic, a lot of people worked from home, including us students. If you sit in front of your screen
          for hours in lectures every day, your motivation and also your concentration quickly drops. Here it is also
          difficult for lecturers to estimate how concentrated their students are due to the screens and many cameras
          being switched off. Our idea was to develop an application that determines concentration and can thus
          sustainably improve online teaching. <br> <a href="https://portfolio.hfg-gmuend.de/s-2121/projekte/concentration" target="_blank"><p class="linkportfolio">learn more</p></a>
        </p>
      </div>
      <div class="col">
        <b-img src="@/assets/concentrationmockup.png" alt="Portrait" rounded="circle" class="portrait"
          style="align-self: center;" />
      </div>
    </div>
    <div class="section" id="projects">
      <div class="col">
        <b-img src="@/assets/hardware-2.png" alt="Portrait" rounded="circle" class="portrait"
          style="align-self: center;" />
      </div>
      <div class="col">
        <p class="beschreibung-rechts">
          Spotter was a project in which we tried to develop a product that helps blind people to be more independent in their everyday life and thus contributes to inclusion.
          Technical components are built into a pair of glasses. But why exactly glasses, if blind people can't see anything anyway? It's simple: some people with residual vision, for example, can perceive their surroundings better through sunglasses. Therefore, this is supposed to be an aid that is integrated into already existing aids.
          <br> <a href="https://portfolio.hfg-gmuend.de/s-2121/projekte/spotter-eine-brille-fuer-blinde" target="_blank"><p class="linkportfolio">learn more</p></a>
        </p>
      </div>
    </div>
    <div class="section">
      <div class="col">
        <p class="beschreibung">This was a small project at the beginning of my third semester. We were given the task to redesign a dashboard under the aspect that the intuitive usability, along with the constant development of technology, became worse and worse and simultaneously more and more new concepts for car sharing emerge, making the car an object suitable for many different users.</p>
      </div>
      <div class="col">
        <b-img src="@/assets/Armaturenbrettskizzen.jpg" alt="Portrait" rounded="circle" class="portrait"
          style="align-self: center;" />
      </div>
    </div>
    <div class="section">
      <div class="col">
        <b-img src="@/assets/Smartkitchen2.jpg" alt="Portrait" rounded="circle" class="portrait"
          style="align-self: center;" />
      </div>
      <div class="col">
      <p class="beschreibung-rechts">
          In collaboration with the famous chefs Christian Rach, Johann Lafer and Alexander Herrmann, 
          we developed a concept for the cuisine of the future. Our kitchen concept addresses the lifestyle of the future. 
          Based on future <br> IoT technologies, our users should experience a new lifestyle of cooking and 
          be presented with an intelligent kitchen experience. However, the most important thing for us here is 
          that the technology supports and <br> does not take over. 
          <br> <a href="https://portfolio.hfg-gmuend.de/w-2021/projekte/smart-kitchen" target="_blank"><p class="linkportfolio">learn more</p></a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>