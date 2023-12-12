<template>
  <h3 class="main-title" v-html="mainTitle"></h3>
</template>

<script>
export default {
  name: "MainTitle",
  props: ["mainTitle"],
};
</script>
