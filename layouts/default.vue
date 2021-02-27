<template>
  <div>
    <header class="header">
      <div class="logo">
        <nuxt-link to="/">
          <span>Logo</span>
        </nuxt-link>
      </div>
      <nav class="menu">
        <nuxt-link class="menu-item" :to="{ name: 'course' }">
          <span>課程</span>
        </nuxt-link>
      </nav>
      <nuxt-link class="account" :to="{ name: 'account' }">
        <span>帳戶</span>
      </nuxt-link>
    </header>
    <main class="layout">
      <Nuxt />
    </main>
  </div>
</template>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.header {
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40px;
  padding: 30px 40px;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
  z-index: 970;
  background-color: white;
}

.header .logo a {
  text-decoration: none;
}

.header .menu .menu-item {
  text-decoration: none;
  padding: 0 5px;
}

.header .account {
  text-decoration: none;
}

.layout {
  padding-top: 80px;
  width: 95%;
  max-width: 1080px;
  margin: 0 auto;
}
</style>
