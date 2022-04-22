<template>
  <div :class="$style.container">
    <h2 :class="$style.title">Contact us</h2>
    <div v-if="!messageSent" :class="$style.containerForm">
      <div :class="[$style.col, $style.left]">
        <div :class="[$style.text, $style.row, { [$style.required]: !form.placeholder.name.filled }]">
          {{ form.placeholder.name.text }}
        </div>
        <div :class="[$style.text, $style.row, { [$style.required]: !form.placeholder.email.filled }]">
          {{ form.placeholder.email.text }}
        </div>
        <div :class="[$style.text, $style.row, { [$style.required]: !form.placeholder.message.filled }]">
          {{ form.placeholder.message.text }}
        </div>
      </div>
      <form @submit.prevent="clickButton" :class="[$style.col, $style.right]">
        <div>
          <input
            v-model="form.name"
            name="name"
            :disabled="loading"
            :placeholder="form.placeholder.name.text"
            :class="[
              $style.input,
              $style.row,
              { [$style.requiredPlaceholder]: !form.placeholder.name.filled },
            ]"
          />
        </div>
        <div>
          <input
            v-model="form.email"
            name="email"
            :disabled="loading"
            :placeholder="form.placeholder.email.text"
            type="email"
            :class="[
              $style.input,
              $style.row,
              { [$style.requiredPlaceholder]: !form.placeholder.email.filled },
            ]"
          />
        </div>
        <div>
          <textarea
            v-model="form.message"
            name="message"
            :disabled="loading"
            :placeholder="form.placeholder.message.text"
            :class="[
              $style.input,
              $style.row,
              $style.inputText,
              { [$style.requiredPlaceholder]: !form.placeholder.message.filled },
            ]"
          />
        </div>
        <input type="submit" :disabled="loading" value="Send message" :class="$style.button" />
      </form>
    </div>
    <div v-else :class="[$style.containerForm, $style.containerMessage]">
      <div />
      <div>
        <div :class="[$style.title, $style.titleSent]">Thank you for reaching out!</div>
        <div :class="[$style.text, $style.textSent]">
          We will review your message and follow up with you shortly.
        </div>
        <button :class="[$style.button, $style.buttonSent]" @click="messageSent = false">Got it</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'ContactBlock',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: '',
        placeholder: {
          name: {
            text: 'Name',
            filled: true,
          },
          email: {
            text: 'Email',
            filled: true,
          },
          message: {
            text: 'Message',
            filled: true,
          },
        },
      },
      endpoint: 'https://formspree.io/f/xrgjyvvy',
      loading: false,
      messageSent: false,
    }
  },

  methods: {
    clickButton() {
      this.form.placeholder.name.text = 'Name'
      this.form.placeholder.name.filled = true
      this.form.placeholder.email.text = 'Email'
      this.form.placeholder.email.filled = true
      this.form.placeholder.message.text = 'Message'
      this.form.placeholder.message.filled = true

      if (!this.form.name) {
        this.form.placeholder.name.text = 'Name *'
        this.form.placeholder.name.filled = false
        return
      }
      if (!this.form.email) {
        this.form.placeholder.email.text = 'Email *'
        this.form.placeholder.email.filled = false
        return
      }
      if (!this.form.message) {
        this.form.placeholder.message.text = 'Message *'
        this.form.placeholder.message.filled = false
        return
      }
      this.submitForm()
    },

    async submitForm() {
      this.buttonDis = true
      const data = {
        name: this.form.name,
        email: this.form.email,
        message: this.form.message,
      }
      try {
        const response = await axios.post(this.endpoint, data)
        this.name = ''
        this.email = ''
        this.message = ''
        this.buttonDis = false
        this.messageSent = true
      } catch (error) {
        this.buttonDis = false
        console.log(error)
        alert('Something went wrong, please try again =)')
      }
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

  &:disabled {
    background: #cba09c;
    color: #ffffff;
  }

  &:focus {
    box-shadow: 0 0 15px #8181ee;
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
  transition: all 0.3s ease-in-out;

  &:hover {
    background: #ffffff;
    color: #0a10a0;
    // border: 1px solid rgba(13, 0, 202, 0.9);
  }

  &:disabled {
    background: #cba09c;
    color: #ffffff;
  }

  @media (max-width: 1000px) {
    width: 100%;
  }
}

.containerMessage {
  padding-bottom: 508px;
  @media (max-width: 1000px) {
    padding-bottom: 332px;
  }
}

.titleSent {
  @media (min-width: 1000px) {
    padding-bottom: 36px;
  }
}

.textSent {
  border: 0px;
  max-width: 376px;
  padding-top: 0px;
  padding-bottom: 56px;
  line-height: 28px;
  @media (max-width: 1000px) {
    padding-bottom: 42px;
  }
}

.buttonSent {
  @media (min-width: 1000px) {
    width: 34%;
  }
}

.required {
  color: #e0b09c;
}

.requiredPlaceholder {
  &::placeholder {
    color: #e0b09c;
  }
}
</style>
