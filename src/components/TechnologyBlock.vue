<template>
  <div :class="$style.container">
    <div :class="$style.textContainer">
      <h2 :class="$style.title">Summary of technology</h2>
      <div :class="$style.text">
        <span>
          Our early cancer detection technology is based on the unique and patented method for processing pap
          smear samples.
        </span>
      </div>
    </div>
    <div :class="$style.cardContainer">
      <div v-for="(card, i) in cards" :key="`card-${i}`" :class="$style.card">
        <card-technology :card="card" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CardTechnology from './card/CardTechnology.vue'

export default {
  name: 'TechnologyBlock',
  components: {
    CardTechnology,
  },
  computed: {
    ...mapGetters({
      cards: 'getCard',
    }),
  },
}
</script>

<style lang="scss" module>
.container {
  display: block;

  @media (max-width: 1000px) {
    // width: 266px;
  }
}

.textContainer {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-bottom: 88px;

  .title {
    font-family: 'Founders Grotesk';
    font-size: 50px;
    line-height: 60px;
  }

  .text {
    max-width: 548px;
    font-size: 20px;
    line-height: 28px;
  }

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    padding-bottom: 74px;

    .title {
      font-size: 35px;
      line-height: 42px;
    }

    .text {
      font-size: 18px;
      line-height: 24px;
    }
  }
}

.cardContainer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 204px;

  .card {
    &:last-child {
      margin-right: 0;

      > div > div {
        &:first-child > div {
          display: none;
        }
      }
    }
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 20px;
    padding-bottom: 160px;
  }
}
</style>
