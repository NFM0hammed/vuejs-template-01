<template>
  <div class="services-section">
    <div class="container">
      <MainTitle :mainTitle="mainTitle" />
      <p>
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration
      </p>
      <div class="services">
        <div class="service">
          <img src="../assets//currency_wallet.png" alt="" />
          <h3>CURRENCY WALLET</h3>
          <p>
            fact that a reader will be distracted by the readable content of a
            page when looking at its layout. The point of using
          </p>
          <a href="">Read More</a>
        </div>
        <div class="service">
          <img src="../assets/security_storage.png" alt="" />
          <h3>SECURITY STORAGE</h3>
          <p>
            fact that a reader will be distracted by the readable content of a
            page when looking at its layout. The point of using
          </p>
          <a href="">Read More</a>
        </div>
        <div class="service">
          <img src="../assets/expoert_support.png" alt="" />
          <h3>EXPERT SUPPORT</h3>
          <p>
            fact that a reader will be distracted by the readable content of a
            page when looking at its layout. The point of using
          </p>
          <a href="">Read More</a>
        </div>
      </div>
      <div class="button">
        <InputButton :nameButton="nameButton" />
      </div>
    </div>
  </div>
</template>

<script>
import InputButton from "./global/InputButton.vue";
import MainTitle from "./global/MainTitle.vue";
export default {
  name: "ServicesSection",
  components: { InputButton, MainTitle },
  data: function () {
    return {
      nameButton: "View All",
      mainTitle: `Our <span>Services</span>`,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../sass/helpers/variables";

.services-section {
  padding: {
    top: $padding;
    bottom: $padding;
  }
  p {
    text-align: center;
  }
  .services {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    text-align: center;
    margin: 30px 0;
    .service {
      background-color: #f9f9f9;
      margin: {
        left: 50px;
        right: 50px;
        top: 10px;
        bottom: 10px;
      }
      padding: 20px 0;
      img {
        width: 100px;
      }
      h3 {
        font: {
          size: 20px;
        }
        margin: 10px 0;
      }
      p {
        width: 70%;
        margin: 20px auto;
        line-height: 1.6;
      }
      a {
        color: #000;
        font: {
          weight: 500;
        }
        &:hover {
          color: $skyColor;
        }
      }
      @media (#{$largeScreen}) {
        & {
          margin: {
            left: 20px;
            right: 20px;
          }
        }
      }
    }
    @media (#{$largeScreen}) {
      & {
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      }
    }
  }
  .button {
    width: fit-content;
    margin: 20px auto 0;
  }
}
</style>
