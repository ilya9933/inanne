<template>
  <div>
    <header id="head" :class="$style.headerSection">
      <video :class="$style.video" loop="loop" autoplay muted>
        <source src="../static/Inanna.mp4" type="video/mp4" />
      </video>
      <header-block class="1" :class="[$style.container, $style.containerAbsolute]" />
    </header>
    <section id="about" :class="$style.about">
      <about-block :class="$style.container" />
    </section>
    <section id="team" :class="[$style.team, $style.colorWhite]">
      <team-block :class="$style.container" />
    </section>
    <section id="technology" :class="[$style.technology, $style.colorWhite]">
      <technology-block :class="$style.container" :style="{ paddingTop: '0px' }" />
    </section>
    <section id="contact" :class="[$style.contact, $style.colorBlue]">
      <contact-block :class="$style.container" :style="{ paddingTop: '64px' }" />
    </section>
    <footer id="info" :class="[$style.info, $style.colorBlue]">
      <info-block :class="$style.container" />
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderBlock from '@/components/HeaderBlock.vue'
import AboutBlock from '@/components/AboutBlock.vue'
import TeamBlock from '@/components/TeamBlock.vue'
import TechnologyBlock from '@/components/TechnologyBlock.vue'
import ContactBlock from '@/components/ContactBlock.vue'
import InfoBlock from '@/components/InfoBlock.vue'

export default {
  name: 'HomeInanna',
  components: {
    HeaderBlock,
    AboutBlock,
    TeamBlock,
    TechnologyBlock,
    ContactBlock,
    InfoBlock,
  },
}
</script>

<style lang="scss" module>
.headerSection {
  @apply relative;
}

.video {
  @apply w-screen h-screen object-cover;
  min-height: 600px;
}

.container {
  @apply p-9;

  @media (max-width: 1000px) {
    @apply p-5;
  }
}

.containerAbsolute {
  @apply absolute w-full h-full left-0 top-0;
}

.about {
  background: #fbe7df;
}

.colorWhite {
  background: #ffffff;
}

.colorBlue {
  background: #0a10a0;
  color: #ffffff;
}
</style>
