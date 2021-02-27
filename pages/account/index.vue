<template>
  <div class="user-info">
    <img class="avatar" :src="$store.getters.user.avatar" alt="">
    <div class="name">
      {{ $store.getters.user.account }}
    </div>
    <div class="description">
      {{ $store.getters.user.description }}
    </div>
    <div>
      <button class="logout-button" @click="logout">
        登出
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AccountIndexPage',
  middleware: 'authenticated',
  mounted () {
    if (localStorage.getItem('expires_at') > Date.now() && localStorage.getItem('token')) {
      this.$store.dispatch('me')
    } else {
      this.$router.push({ name: 'index' })
    }
  },

  methods: {
    logout () {
      this.$store.dispatch('logout')
      this.$router.push({ name: 'index' })
    }
  }
}
</script>

<style scoped>
.user-info {
  display: grid;
  grid-auto-rows: auto;
  grid-gap: 16px;
}
.user-info .avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
</style>
