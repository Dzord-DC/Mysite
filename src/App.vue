<template>
  <div class="app">
    <heder-site></heder-site>
    <router-view></router-view>
    <FooterSite />
  </div>
</template>

<script>
import HederSite from './components/HederSite.vue'
import FooterSite from './components/FooterSite.vue'
export default {
  name: 'App',
  components: {
    HederSite,
    FooterSite
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
