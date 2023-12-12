<template>
  <div class="login-section">
    <MainTitle :mainTitle="mainTitle" />
    <div class="container">
      <div class="login">
        <div class="form">
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <InputButton :nameButton="nameButton" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MainTitle from "@/components/global/MainTitle.vue";
import InputButton from "@/components/global/InputButton.vue";
export default {
  name: "LoginView",
  components: { MainTitle, InputButton },
  data: function () {
    return {
      mainTitle: "Login <span>Page</span>",
      nameButton: "Login",
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../sass/helpers/variables";

.login-section {
  padding: {
    top: $padding;
    bottom: $padding;
  }
  .login {
    background: $mainBackgroundColor;
    max-width: 500px;
    margin: auto;
    .form {
      display: flex;
      flex-direction: column;
      padding: 45px 25px;
      margin: 30px 0;
      input {
        background-color: transparent;
        color: $whiteColor;
        margin: {
          top: 10px;
          bottom: 10px;
        }
        padding: 8px 0;
        border: none;
        border-bottom: 1px solid $whiteColor;
        outline: none;
        &::placeholder {
          color: $whiteColor;
        }
      }
      & > * {
        justify-content: center;
      }
    }
  }
}
</style>
