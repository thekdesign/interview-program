<template>
  <div class="container">
    <div class="login-form">
      <div>登入</div>
      <label for="login-account">
        <input id="login-account" v-model="form.account" type="text" placeholder="帳號">
      </label>
      <label for="login-password">
        <input id="login-password" v-model="form.password" type="password" placeholder="密碼">
      </label>
      <button @click="login">
        登入
      </button>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'authenticated',
  data () {
    return {
      form: {
        account: '',
        password: ''
      }
    }
  },

  mounted () {
    if (localStorage.getItem('expires_at') > Date.now() && localStorage.getItem('token')) {
      this.$store.commit('SET_TOKEN', localStorage.getItem('token'))
      this.$router.push({ name: 'account' })
    }
  },

  methods: {
    login () {
      this.$authRepository.login(this.form).then((response) => {
        this.$store.commit('SET_TOKEN', response.access_token)
        localStorage.setItem('expires_at', Date.now() + response.expires_in)
        this.$store.dispatch('me')
        this.$router.push({ name: 'account' })
      }).catch(() => {
        this.$store.dispatch('logout')
      })
    }
  }
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.login-form {
  display: grid;
  grid-auto-rows: auto;
  grid-gap: 16px;
}
</style>
