<template>
  <div :class="$style.container">
    <img :src="photo" width="375px" />
    <div :class="$style.containerInfo">
      <div :class="$style.info">
        <div>
          <div :class="[$style.nameText, $style.alltext]">
            <span>{{ user.name }} {{ user.surname }}</span>
            <span v-if="user.rank">, {{ user.rank }}</span>
          </div>
          <div :class="$style.alltext">
            <span>{{ user.position }}</span>
          </div>
          <div :class="[$style.alltext, $style.jobText]">
            <span>{{ user.job }}</span>
          </div>
        </div>
        <div :class="$style.containerButton">
          <button :class="$style.button">
            <img src="@/icon/linkedin.svg" width="45px" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardUser',
  props: {
    user: { type: Object, default: () => {} },
  },
  data() {
    return {
      noPhoto: '/no-img-doc.jpeg',
    }
  },

  computed: {
    photo() {
      return this.user?.photo || this.noPhoto
    },
  },
}
</script>

<style lang="scss" module>
.container {
  display: flex;
  flex-direction: column;
  // display: grid;
  // grid-template-columns: 375px;
  // grid-template-rows: auto 100%;
  width: 375px;
  height: 100%;

  @media (max-width: 1000px) {
    width: 266px;
  }
}

.containerInfo {
  margin-top: 33px;
  padding-bottom: 33px;
  flex: 1;
  display: flex;

  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0px 0px 0px 33px;
    // height: 100%;
    border-left: 1px solid #d9d9d9;

    @media (max-width: 1000px) {
      // height: 266px;
    }
  }
}

.nameText {
  font-weight: bold;
  font-style: normal;
  padding-bottom: 5px;
}

.alltext {
  font-size: 20px;
  line-height: 24px;
  white-space: normal;

  @media (max-width: 1000px) {
    font-size: 18px;
    line-height: 24px;
  }
}

.jobText {
  line-height: 28px;
  color: #818181;
  padding: 15px 0px 0px 0px;
}

.containerButton {
  margin-top: auto;
  padding-top: 80px;

  .button {
    transition: all 0.3s ease-in-out;
    border-radius: 50%;
    &:hover {
      box-shadow: 0px 0px 34px 5px #ffcaa1;
    }
  }

  @media (max-width: 1000px) {
    padding-top: 20px;
  }
}
</style>
