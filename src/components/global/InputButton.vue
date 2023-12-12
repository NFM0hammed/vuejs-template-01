<template>
  <a href="">{{ nameButton }}</a>
</template>

<script>
export default {
  name: "InputButton",
  props: ["nameButton"],
};
</script>

<style lang="scss" scoped>
@import "../../sass/helpers/variables";

a {
  display: inline-flex;
  color: $whiteColor;
  background-color: $skyColor;
  padding: {
    left: 40px;
    right: 40px;
    top: 10px;
    bottom: 10px;
  }
  margin-top: 10px;
  &:hover {
    background-color: #007fa4;
    transition: $mainTransition;
  }
}
</style>
