<template>
  <div :class="$style.container">
    <h2 :class="$style.title">Copyright 2022 Inanna. All Rights Reserved.</h2>
    <a href="#head" :class="$style.href">
      <img src="@/icon/arrow_scroll-to-top.svg" />
    </a>
  </div>
</template>

<script>
export default {
  name: 'InfoBlock',
}
</script>

<style lang="scss" module>
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-size: 20px;
  line-height: 24px;

  .href {
    position: relative;

    img {
      position: absolute;
      right: 0;
    }
  }

  @media (max-width: 1000px) {
    font-size: 18px;
  }
}
</style>
