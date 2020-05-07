<template lang="pug">
  #app
    .row
      .col-12
        h3 Job Application Tracker
    AppTracker
</template>

<script>
import AppTracker from './components/AppTracker.vue'

export default {
  components: {
    AppTracker
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
</style>
