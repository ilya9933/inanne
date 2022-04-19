<template>
  <div :class="$style.container">
    <div :class="$style.logo">
      <img :src="logo" />
      <div :class="$style.arrow">
        <img src="@/icon/arrow_diagram.svg" />
      </div>
    </div>
    <div :class="$style.containerText">
      <span>{{ card.text }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardTechnology',
  props: {
    card: { type: Object, default: () => {} },
  },

  data() {
    return {
      logo: null,
    }
  },

  mounted() {
    this.logo = require(`@/icon/${this.card.logo}`)
  },
}
</script>

<style lang="scss" module>
.container {
  display: flex;
  flex-direction: column;

  @media (max-width: 1000px) {
    flex-direction: row;
    gap: 20px;
    width: 100%;
  }
}

.logo {
  max-width: 295px;
  position: relative;
  padding-bottom: 20px;

  @media (max-width: 1000px) {
    width: 50%;
    padding-bottom: 0px;
  }
}

.containerText {
  padding-left: 34px;
  border-left: 1px solid #d9d9d9;
  max-width: 295px;
  color: #808080;
  height: 53px;
  font-size: 20px;
  line-height: 28px;

  @media (max-width: 1000px) {
    border-top: 1px solid #d9d9d9;
    border-left: 0px;
    padding-left: 0px;
    width: 50%;
    font-size: 18px;
    line-height: 24px;
  }
}

.arrow {
  position: absolute;
  width: 30%;
  top: 50%;
  right: 0;
  transform: translate(66%, -56%);
  z-index: 99;

  @media (max-width: 1000px) {
    right: 50%;
    bottom: 0;
    transform: translate(51%, 84%);

    img {
      transform: rotate(90deg);
    }
  }
}
</style>
