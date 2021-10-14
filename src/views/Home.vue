<template>
  <div class="about">
    <div class="section">
      <div class="col">
        <b-img @click="countEasteregg" src="@/assets/portfoliobild.jpg" alt="Portrait" rounded="circle" class="portrait" style="align-self: center;"/>
        <div class="scrolldownWrapper">
          <a v-smooth-scroll class="centered-link light" href="#aboutme">About me<br><b-icon icon="chevron-compact-down"/></a>
        </div>
      </div>
      <div class="col dark" style="flex-grow: 1;">
        <p class="aboutme">
          <vue-typed-js :strings="typedWords" :loop="true" :backDelay="2000" :backSpeed="100" :smartBackspace="true" :shuffle="true" :cursorChar="'_'">
            <h1 class="typing"></h1>
          </vue-typed-js>
          <!-- Through my studies at the Hochschule für Gestaltung Schwäbisch Gmünd I understand the language of design and development and can therefore combine the best of both worlds. -->
        </p>
        <div class="scrolldownWrapper">
          <a v-smooth-scroll class="centered-link dark" href="#projects">My Projects<br><b-icon icon="chevron-compact-down"/></a>
        </div>
      </div>
    </div>
    <div class="section" id="aboutme">
      <div class="col">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat odio pariatur quibusdam id, nobis dolor voluptas ipsa quod, laboriosam doloribus sequi earum beatae voluptatem! Ipsam mollitia dignissimos consectetur quam accusamus?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus reiciendis, voluptatem sed non optio placeat numquam quae nihil veritatis inventore quisquam consequuntur rerum, cumque quos dolore asperiores architecto nam maiores?
          Ratione enim, soluta dolores corporis labore illum neque accusantium expedita quia saepe! Nobis dolorem maxime facilis molestias unde consequatur deserunt numquam laborum maiores quaerat, tempore, voluptatum nostrum voluptas esse placeat!
          Doloribus quod ab facilis, esse ad impedit excepturi aliquid porro praesentium velit incidunt amet exercitationem cumque corporis delectus voluptatibus reiciendis repudiandae illo? Rem praesentium nemo rerum sit. Pariatur, nemo laboriosam.
          Est aliquid aut, placeat unde voluptas reiciendis laboriosam alias praesentium repudiandae optio, obcaecati architecto expedita possimus, ex cupiditate maxime similique magni modi rerum eum repellat totam. Animi voluptates ducimus pariatur.
          Corporis architecto vero sequi, natus voluptate exercitationem tempora! Corrupti tempora laboriosam dolores impedit reiciendis? Officia harum saepe molestias quos cumque id, iusto ratione, eum, laudantium ullam earum dignissimos similique laborum!
        </p>
      </div>
      <div class="col">
        <b-img src="@/assets/portfoliobild.jpg" alt="Portrait" rounded="circle" class="portrait" style="align-self: center;"/>
      </div>
    </div>
    <div class="section" id="projects">
      <div class="col">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat odio pariatur quibusdam id, nobis dolor voluptas ipsa quod, laboriosam doloribus sequi earum beatae voluptatem! Ipsam mollitia dignissimos consectetur quam accusamus?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus reiciendis, voluptatem sed non optio placeat numquam quae nihil veritatis inventore quisquam consequuntur rerum, cumque quos dolore asperiores architecto nam maiores?
          Ratione enim, soluta dolores corporis labore illum neque accusantium expedita quia saepe! Nobis dolorem maxime facilis molestias unde consequatur deserunt numquam laborum maiores quaerat, tempore, voluptatum nostrum voluptas esse placeat!
          Doloribus quod ab facilis, esse ad impedit excepturi aliquid porro praesentium velit incidunt amet exercitationem cumque corporis delectus voluptatibus reiciendis repudiandae illo? Rem praesentium nemo rerum sit. Pariatur, nemo laboriosam.
          Est aliquid aut, placeat unde voluptas reiciendis laboriosam alias praesentium repudiandae optio, obcaecati architecto expedita possimus, ex cupiditate maxime similique magni modi rerum eum repellat totam. Animi voluptates ducimus pariatur.
          Corporis architecto vero sequi, natus voluptate exercitationem tempora! Corrupti tempora laboriosam dolores impedit reiciendis? Officia harum saepe molestias quos cumque id, iusto ratione, eum, laudantium ullam earum dignissimos similique laborum!
        </p>
      </div>
      <div class="col">
        <b-img src="@/assets/portfoliobild.jpg" alt="Portrait" rounded="circle" class="portrait" style="align-self: center;"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      egCounter: 0,
      typedWords: [
        'iot student',
        'designer',
        'car enthusiast',
        'biker',
        'tech geek',
        'professional binge watcher',
        'Luca Klingler',
      ],
    };
  },
  methods: {
    countEasteregg() {
      this.egCounter++;
      if (this.egCounter > 10) this.$store.state.easteregg = true;
    }
  },
  mounted() {
  }
}
</script>

<style scoped>
.portrait{
  width: 20em;
}
.section{
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
</style>

