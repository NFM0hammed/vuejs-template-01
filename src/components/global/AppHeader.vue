<template>
  <div class="app-header">
    <nav class="container">
      <div class="logo">Finexo</div>
      <font-awesome-icon
        icon="fa-solid fa-bars"
        class="menu"
        @click="this.isActive = !this.isActive"
      />
      <ul :class="isActive ? 'active' : ''">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/services">Services</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/whyus">Why Us</router-link></li>
        <li><router-link to="/team">Team</router-link></li>
        <li>
          <router-link to="/login"
            ><font-awesome-icon
              icon="fa-regular fa-user"
              class="user"
            />Login</router-link
          >
        </li>
        <font-awesome-icon icon="fa-magnifying-glass" class="search" />
      </ul>
    </nav>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "AppHeader",
  data: function () {
    return {
      isActive: false,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../sass/helpers/variables";

.app-header {
  background: $mainBackgroundColor;
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    padding: {
      top: 10px;
      bottom: 10px;
    }
    .logo {
      font: {
        size: 25px;
        weight: 800;
      }
    }
    .menu {
      display: none;
      font-size: 20px;
      cursor: pointer;
      @media (#{$largeScreen}) {
        & {
          display: flex;
        }
      }
    }
    ul {
      display: flex;
      text-transform: uppercase;
      margin: 0;
      padding: 0;
      li {
        margin: {
          left: 20px;
          right: 20px;
        }
        a {
          color: $whiteColor;
          font: {
            size: 18px;
          }
          &:hover {
            color: #0056b3;
            transition: $mainTransition;
          }
        }
      }
      :last-of-type.user {
        color: $whiteColor;
        font-size: 16px;
        margin-right: 5px;
      }
      .search {
        font-size: 19px;
        cursor: pointer;
        &:hover {
          color: #0056b3;
          transition: $mainTransition;
        }
      }
      @media (#{$largeScreen}) {
        & {
          display: none;
          position: absolute;
          flex-direction: column;
          background: $mainBackgroundColor;
          text-align: center;
          top: 49px;
          right: 30px;
          padding: 10px;
        }
        &.active {
          display: flex;
          z-index: 1;
        }
        li {
          margin: 10px;
        }
      }
    }
  }
}
</style>
