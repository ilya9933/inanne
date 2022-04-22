<template>
  <div class="2" :class="$style.container">
    <div :class="$style.topContent">
      <div :class="$style.logo">
        <img src="../icon/Vector.svg" width="70px" />
        <img :class="$style.logoText" src="../icon/Inanna.svg" width="100px" />
      </div>
      <div>
        <nav :class="$style.navigationContainer">
          <a
            :href="`#${item.id}`"
            v-for="(item, i) in navigation"
            :key="`${item.titel}-titel-${i}`"
            :class="$style.navigationItem"
          >
            <span :class="$style.navigationItemText">{{ item.titel }}</span>
          </a>
        </nav>
      </div>
    </div>
    <div :class="$style.bottomContent">
      <a :style="{ marginRight: '210px' }" href="#about">
        <img src="../icon/arrow_cursor.svg" />
      </a>
      <h1 :class="$style.text">
        Deliver an Affordable, Non-Invasive Screening Test for Early Detection of Ovarian and Endometrial
        Cancers
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderBlock',
  data() {
    return {
      navigation: [
        {
          id: 'about',
          titel: 'About',
          hide: true,
        },
        {
          id: 'team',
          titel: 'Team',
          hide: false,
        },
        {
          id: 'technology',
          titel: 'Technology',
          hide: false,
        },
        {
          id: 'contact',
          titel: 'Contact us',
          hide: false,
        },
      ],
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" module>
.container {
  display: flex;
  color: white;
  flex-direction: column;
  justify-content: space-between;
}

.topContent {
  display: grid;
  grid-template-columns: 3fr 1fr;

  .logo {
    @apply flex;
    height: 70px;

    .logoText {
      margin-left: 15px;
    }
  }

  @media (max-width: 1000px) {
    display: grid;
    grid-template-columns: 1fr 1fr;

    .logo {
      @apply flex;
      height: 60px;

      img {
        width: 60px;
      }

      .logoText {
        display: none;
      }
    }

    .navigationItemText {
      font-size: 18px;
      line-height: 30px;
    }
  }
}

.navigationContainer {
  @apply flex flex-col;
}

.navigationItem {
  @apply cursor-pointer;

  &:hover {
    .navigationItemText {
      @apply border-b;
    }
  }
}

.navigationItemText {
  font-size: 20px;
  line-height: 32px;
  transition: all 0.3s ease-in-out;
}

.bottomContent {
  display: flex;
  width: 87%;
  flex-direction: column;
  align-items: flex-end;

  a {
    border-radius: 50%;
    margin: 37px 0px;
    transition: all 0.3s ease-in-out;
    &:hover {
      box-shadow: 0px 0px 34px 5px #fbe7df;
    }
  }

  .text {
    font-family: 'Founders Grotesk';
    font-size: 80px;
    line-height: 96px;
  }

  @media (max-width: 1000px) {
    width: 90%;
    flex-direction: column-reverse;
    align-items: flex-start;

    a {
      width: 60px;
      margin: 21px 0px 2px 0px;
    }

    .text {
      font-size: 35px;
      line-height: 42px;
    }
  }
}
</style>
