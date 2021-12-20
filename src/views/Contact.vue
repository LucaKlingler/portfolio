<template>
  <div class="about">
    <b-icon class="back" style="color: white;" icon="chevron-left" @click="$router.push('/')" />
    <div class="section dark" id="aboutme">
      <div class="col">
        <p class="beschreibung title">CONTACT ME</p>
        <div class="beschreibung">
          <div>
            <a href="mailto:hello@lucaklingler.com" target="_blank" rel="noopener noreferrer" class="dark">E-Mail</a> <br>
            <a href="https://www.linkedin.com/in/luca-klingler-29790a216/" target="_blank" rel="noopener noreferrer" class="dark">LinkedIn</a> <br>
            <a href="https://www.instagram.com/lucaklingler/" target="_blank" rel="noopener noreferrer" class="dark">Instagram</a> <br>
        </div>
        </div>
      </div>
      <div class="col">
        <b-img src="@/assets/iotcrew.png" alt="Portrait" rounded="circle" class="portrait"
          style="align-self: center;" />
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
.icon {
}
.link {
  
}
</style>