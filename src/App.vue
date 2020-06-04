<template>
  <div id="app">
    <header-comp></header-comp>
    <router-view></router-view>
    <footer-comp></footer-comp>
  </div>
</template>

<script>
import HeaderComp from './components/Header.vue';
import FooterComp from './components/Footer.vue';
export default {
  name: "App",
  components: {
      HeaderComp,
      FooterComp
  }
};
</script>

<style>
</style>
