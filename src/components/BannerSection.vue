<template>
  <div class="banner">
    <div class="info">
      <h1>CRYPTO<br />CURRENCY #1</h1>
      <p>
        Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam
        fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat
        molestias, veniam, vel architecto veritatis delectus repellat modi
        impedit sequi.
      </p>
      <InputButton :nameButton="nameButton" />
    </div>
    <img src="../assets/BannerImg.png" alt="#" />
    <div class="bullets">
      <span
        v-for="i in 3"
        :class="i == 1 ? 'active' : ''"
        :id="i"
        @click="toggleActiveClass"
      ></span>
    </div>
  </div>
</template>

<script>
import InputButton from "./global/InputButton.vue";
export default {
  name: "BannerSection",
  components: { InputButton },
  data: function () {
    return {
      nameButton: "Read More",
    };
  },
  methods: {
    toggleActiveClass: function (e) {
      // Get info of bullets
      let spans = document.querySelectorAll(".bullets span");
      let content = document.querySelector(".info h1");

      // Remove all active class
      spans.forEach((span) => {
        span.classList.remove("active");
      });

      // Add active class to the current bullet
      if (e.target.className == "") {
        e.target.className = "active";
      }

      // Change the content of info
      if (e.target.id == 1) {
        content.innerHTML = `CRYPTO<br />CURRENCY #${e.target.id}`;
      } else if (e.target.id == 2) {
        content.innerHTML = `CRYPTO<br />CURRENCY #${e.target.id}`;
      } else {
        content.innerHTML = `CRYPTO<br />CURRENCY #${e.target.id}`;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../sass//helpers/variables";
@import "../sass//helpers/mixins";

.banner {
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: $mainBackgroundColor;
  padding: {
    top: $padding;
    bottom: $padding;
  }
  .info {
    flex-basis: 50%;
    color: $whiteColor;
    text-align: justify;
    h1 {
      font: {
        size: 45px;
      }
    }
    p {
      font: {
        size: 14px;
      }
      line: {
        height: 1.6;
      }
    }
    @media (#{$mediumScreen}) {
      & {
        margin: 0 20px;
      }
    }
  }
  img {
    width: 350px;
    animation: moveUpDown 4s infinite;
    @media (#{$mediumScreen}) {
      & {
        order: -1;
      }
    }
  }
  .bullets {
    position: absolute;
    bottom: 50px;
    left: 50%;
    transform: translate(-50%, -50%);
    span {
      display: inline-block;
      background-color: $whiteColor;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      margin: 0 5px;
      cursor: pointer;
      &.active {
        background-color: $skyColor;
        transform: scale(1.4);
      }
    }
  }
  @media (#{$mediumScreen}) {
    & {
      flex-direction: column;
    }
  }
}
@include moveUpDown;
</style>
