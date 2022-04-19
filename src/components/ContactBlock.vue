<template>
  <div :class="$style.container">
    <h2 :class="$style.title">Contact us</h2>
    <div :class="$style.containerForm">
      <div :class="[$style.col, $style.left]">
        <div :class="[$style.text, $style.row]">Name</div>
        <div :class="[$style.text, $style.row]">Email</div>
        <div :class="[$style.text, $style.row]">Message</div>
      </div>
      <form :class="[$style.col, $style.right]">
        <div>
          <input placeholder="Name" :class="[$style.input, $style.row]" />
        </div>
        <div>
          <input placeholder="Email" type="email" :class="[$style.input, $style.row]" />
        </div>
        <div>
          <textarea required placeholder="Message" :class="[$style.input, $style.row, $style.inputText]" />
        </div>
        <button :class="$style.button">Send message</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactBlock',
  data() {
    return {
      noPhoto: require('@/static/photo/no-img-doc.jpeg'),
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
  display: grid;
  grid-template-columns: 1fr 3fr;
  font-size: 20px;
  line-height: 24px;

  .title {
    font-family: 'Founders Grotesk';
    font-size: 50px;
    line-height: 60px;
  }

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    font-size: 18px;

    .title {
      font-size: 35px;
      line-height: 42px;
      padding-bottom: 58px;
      margin-top: -44px;
    }
  }
}

.containerForm {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 36px;

  .col {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .left {
    display: block;
  }

  .right {
    margin-bottom: 200px;
  }
  @media (max-width: 1000px) {
    grid-template-columns: 1fr;

    .col {
      gap: 10px;
    }

    .left {
      display: none;
    }

    .right {
      margin-bottom: 160px;
    }
  }
}

.text {
  padding-top: 18px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.row {
  width: 100%;
  height: 60px;
}

.input {
  background: rgba(255, 255, 255, 0.05);
  padding-left: 20px;
  &::placeholder {
    color: #7477cd;
    font-size: 18px;
    line-height: 21px;
  }

  @media (min-width: 1000px) {
    &::placeholder {
      opacity: 0;
    }
  }
}

.inputText {
  height: 309px;
  padding-top: 17px;
  resize: none;

  @media (max-width: 1000px) {
    margin-bottom: 10px;
  }
}

.button {
  width: 50%;
  border: 1px solid rgba(255, 255, 255, 0.9);
  padding: 18px;
  border-radius: 35px;

  @media (max-width: 1000px) {
    width: 100%;
  }
}
</style>
