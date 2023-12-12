<template>
  <app-header />
  <router-view />
  <app-footer />
</template>

<script>
import AppHeader from "./components/global/AppHeader.vue";
import AppFooter from "./components/global/AppFooter.vue";

export default {
  name: "App",
  components: { AppHeader, AppFooter },
};
</script>
