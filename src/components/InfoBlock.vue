<template>
  <div :class="$style.container">
    <h2 :class="$style.title">Copyright 2022 Inanna. All Rights Reserved.</h2>
    <div :class="$style.containerHref">
      <a href="#head" :class="$style.href">
        <svg width="24" height="17" viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line
            x1="1"
            y1="15.9393"
            x2="11.9393"
            y2="5"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <line
            x1="0.75"
            y1="1.25"
            x2="23.25"
            y2="1.25"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path d="M23 15.9999L12 4.99992" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
        </svg>
      </a>
    </div>
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

  .containerHref {
    position: relative;

    .href {
      position: absolute;
      right: 0;
      padding: 15px;
      margin: -15px;
      color: #fff;

      &:hover {
        color: #cba09c;
      }
    }
  }

  @media (max-width: 1000px) {
    font-size: 18px;
  }
}
</style>
