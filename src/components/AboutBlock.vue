<template>
  <div>
    <div :class="$style.container">
      <h2 :class="$style.title">About</h2>
      <div :class="$style.content">
        <div :class="$style.text">
          While early cancer detection is the key to survival, many patients are diagnosed after the disease
          has progressed. A regular affordable screening test for ovarian and endometrial cancers would
          radically improve survival rates.
        </div>
        <div :class="$style.text">
          Inanna Diagnostics is developing a proprietary technology that enables isolation of a previously
          untapped source of DNA material for non-invasive early screening applications.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutBlock',
}
</script>

<style lang="scss" module>
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 66px 0px 196px 0px;

  .title {
    font-family: 'Founders Grotesk';
    font-size: 50px;
    line-height: 60px;
  }

  .content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 36px;
    padding-right: 25px;

    .text {
      font-size: 20px;
      line-height: 28px;
    }
  }

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    padding: 5px 0px 159px 0px;

    .title {
      height: 84px;
      margin: 13px;
      font-size: 35px;
      line-height: 42px;
    }

    .content {
      grid-template-columns: 1fr;
      grid-template-rows: auto auto;
      padding-right: 0px;

      .text {
        font-size: 18px;
        line-height: 24px;
      }
    }
  }
}
</style>
