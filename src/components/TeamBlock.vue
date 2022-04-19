<template>
  <div>
    <div :class="$style.container">
      <h2 :class="$style.title">
        We are a team of seasoned scientists, entrepreneurs and diagnostics experts who have developed new
        science, built companies and delivered novel diagnostics solutions to the market.
      </h2>
      <div :class="$style.containerScrol">
        <div :class="$style.scrol">
          <div :class="$style.cardContainer">
            <div v-for="(user, i) in team" :key="`user-team-${i}`" :class="$style.card">
              <card-user :user="user" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CardUser from './card/CardUser.vue'

export default {
  name: 'TeamBlock',
  components: {
    CardUser,
  },
  computed: {
    ...mapGetters({
      team: 'getTeam',
    }),
  },
}
</script>

<style lang="scss" module>
.container {
  border-bottom: 1px solid #d9d9d9;
  padding-bottom: 243px;

  @media (max-width: 1000px) {
    padding-bottom: 160px;
  }
}

.title {
  font-family: 'Founders Grotesk';
  font-size: 50px;
  line-height: 60px;
  width: 79%;
  margin-bottom: 82px;

  @media (max-width: 1000px) {
    font-size: 35px;
    line-height: 42px;
    width: 99%;
  }
}

.containerScrol {
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  margin: 0 -36px;

  @media (max-width: 1000px) {
    margin: 0 -20px;
  }
}

.cardContainer {
  display: flex;
  // height: auto;

  .card {
    padding-right: 37px;
    border-bottom: 1px solid #d9d9d9;
    // height: 100%;

    &:first-child {
      margin-left: auto;
      // border-left: 1px solid #d9d9d9;

      @media (max-width: 1000px) {
        @apply ml-5;
      }
    }
    &:last-child {
      @apply mr-9 pr-0;

      @media (max-width: 1000px) {
        @apply mr-5 pr-0;
      }
    }
  }
}

.card {
  &:first-child > div > div > div {
    border-left: 0px;
  }
}
.card {
  &:first-child > div > div {
    border-left: 1px solid #d9d9d9;
  }
}
.scrol {
  display: inline-block;
  width: 100%;
}
</style>
