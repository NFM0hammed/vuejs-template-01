<template>
  <footer>
    <div class="container">
      <div class="data">
        <div class="info">
          <h3>Address</h3>
          <span>Location</span>
          <span>Call +01 1234567890</span>
          <span>mail@domain.com</span>
          <div class="social-media">
            <font-awesome-icon icon="fa-brands fa-facebook-f" class="icon" />
            <font-awesome-icon icon="fa-brands fa-twitter" class="icon" />
            <font-awesome-icon icon="fa-brands fa-linkedin-in" class="icon" />
            <font-awesome-icon icon="fa-brands fa-instagram" class="icon" />
          </div>
        </div>
        <div class="info">
          <h3>Info</h3>
          <p>
            necessary, making this the first true generator on the Internet. It
            uses a dictionary of over 200 Latin words, combined with a handful
          </p>
        </div>
        <div class="info">
          <h3>Links</h3>
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/services">Services</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/whyus">Why Us</router-link></li>
            <li><router-link to="/team">Team</router-link></li>
            <li><router-link to="/login">Login</router-link></li>
          </ul>
        </div>
        <div class="info">
          <h3>Subscribe</h3>
          <div class="form">
            <input type="text" placeholder="Enter email" />
            <InputButton :nameButton="nameButton" />
          </div>
        </div>
      </div>
    </div>
  </footer>
  <div class="copy-rights">
    &copy; <span>{{ date }}</span> All Rights Reserved.
    <a href="https://github.com/NFM0hammed">By Vue.js Design</a>
  </div>
</template>

<script>
import InputButton from "./InputButton.vue";
export default {
  name: "AppFooter",
  components: { InputButton },
  data: function () {
    return {
      nameButton: "Subscribe",
      date: new Date().getFullYear(),
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../sass/helpers/variables";

footer {
  background-color: $secondBackgroundColor;
  color: $whiteColor;
  padding: {
    top: $padding;
    bottom: $padding;
  }
  .data {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    justify-items: center;
    @media (#{$largeScreen}) {
      & {
        justify-items: self-start;
      }
    }
    .info {
      h3 {
        font: {
          size: 24px;
          weight: 500;
        }
      }
      span {
        display: block;
        padding: 15px 0;
      }
      .social-media {
        display: flex;
        justify-content: space-evenly;
        font-size: 20px;
        & > * {
          cursor: pointer;
        }
      }
      p {
        line-height: 1.6;
        margin: 0;
        padding: 13px 0;
      }
      ul {
        padding: 0;
        li {
          padding-bottom: 15px;
          a {
            color: $whiteColor;
            &:hover {
              color: $skyColor;
            }
          }
        }
      }
      .form {
        @media (#{$largeScreen}) {
          & {
            display: flex;
            flex-direction: column;
          }
        }
        input {
          color: $whiteColor;
          width: 159.16px;
          background: transparent;
          border: none;
          border-bottom: 1px solid $whiteColor;
          &:focus {
            outline: none;
          }
        }
      }
    }
  }
}
.copy-rights {
  text-align: center;
  padding: 20px 0;
  a {
    color: #000;
  }
}
</style>
