<template>
  <div class="rating-section">
    <div class="container">
      <MainTitle :mainTitle="mainTitle" />
      <div class="ratings">
        <div class="rating">
          <img src="../assets/client1.jpg" alt="" />
          <div class="info">
            <h3>LusDen</h3>
            <span>،،</span>
          </div>
          <span>magna aliqua. Ut</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis
          </p>
        </div>
        <div class="rating">
          <img src="../assets/client1.jpg" alt="" />
          <div class="info">
            <h3>Zen Court</h3>
            <span>،،</span>
          </div>
          <span>magna aliqua. Ut</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis
          </p>
        </div>
        <div class="rating">
          <img src="../assets/client1.jpg" alt="" />
          <div class="info">
            <h3>Zen Court</h3>
            <span>،،</span>
          </div>
          <span>magna aliqua. Ut</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis
          </p>
        </div>
        <div class="rating">
          <img src="../assets/client1.jpg" alt="" />
          <div class="info">
            <h3>Zen Court</h3>
            <span>،،</span>
          </div>
          <span>magna aliqua. Ut</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis
          </p>
        </div>
      </div>
      <div class="scroll">
        <span @click="leftClick()" id="left" :class="leftActive ? 'active' : ''"
          >Left</span
        >
        <span
          @click="rightClick()"
          id="right"
          :class="rightActive ? 'active' : ''"
          >Right</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import MainTitle from "../components/global/MainTitle.vue";
export default {
  name: "RatingSection",
  components: { MainTitle },
  data: function () {
    return {
      mainTitle: "What says our <span>Customers</span>",
      Id: 1,
      counter: 0,
      marginLeft: 0,
      rightActive: false,
      leftActive: false,
    };
  },
  methods: {
    rightClick: function () {
      // Get info of ratings section
      const ratingsSection = document.querySelector(".ratings");
      const scrollHorizital = document.querySelector(
        ".ratings .rating:first-of-type"
      );
      const ratingsLength =
        document.querySelectorAll(".ratings .rating").length;

      if (ratingsSection.clientWidth == 1000) {
        scrollHorizital.style.marginLeft = this.Id * -50 + "%";
        this.marginLeft = this.Id * -50;
        this.Id++;
        this.counter++;
        if (ratingsLength / 2 === this.counter) {
          this.rightActive = true;
        }
        this.leftActive = false;
      } else {
        scrollHorizital.style.marginLeft = this.Id * -100 + "%";
        this.marginLeft = this.Id * -100;
        this.Id++;
        this.counter++;
        if (ratingsLength - 1 === this.counter) {
          this.rightActive = true;
        }
        this.leftActive = false;
      }
    },
    leftClick: function () {
      // Get info of ratings section
      const ratingsSection = document.querySelector(".ratings");
      const scrollHorizital = document.querySelector(
        ".ratings .rating:first-of-type"
      );

      if (ratingsSection.clientWidth == 1000) {
        scrollHorizital.style.marginLeft = this.marginLeft + 50 + "%";
        this.marginLeft = this.marginLeft + 50;
        this.Id--;
        this.counter--;
      } else {
        scrollHorizital.style.marginLeft = this.marginLeft + 100 + "%";
        this.marginLeft = this.marginLeft + 100;
        this.Id--;
        this.counter--;
      }

      if (this.counter == 0) {
        this.leftActive = true;
      }
      this.rightActive = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../sass/helpers/variables";

.rating-section {
  position: relative;
  padding: {
    top: $padding;
    bottom: $padding;
  }
  .ratings {
    display: flex;
    max-width: 100%;
    width: 1000px;
    margin: auto;
    padding-top: $padding;
    overflow: hidden;
    .rating {
      min-width: 500px;
      box-shadow: 5px 0px 15px 5px #eee;
      margin: 10px 0px;
      padding: 20px;
      transition: 0.3s;
      img {
        border-radius: 50%;
        margin-top: -75px;
      }
      .info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        h3 {
          font-weight: 500;
          margin-bottom: 8px;
        }
        span {
          font: {
            size: 26px;
            weight: 500;
          }
        }
      }
      span {
        font: {
          size: 14px;
        }
      }
      p {
        line-height: 1.6;
        font-size: 15px;
      }
      @media (#{$smallScreen}) {
        & {
          min-width: 330px;
        }
      }
    }
    @media (#{$extraLargeScreen}) {
      & {
        width: 500px;
      }
    }
    @media (#{$smallScreen}) {
      & {
        width: 330px;
      }
    }
  }
  .scroll {
    position: absolute;
    display: flex;
    left: 50%;
    transform: translateX(-50%);
    bottom: 50px;
    text-align: center;
    span {
      display: inline-block;
      width: 100px;
      margin: 0 20px;
      padding: 10px;
      box-shadow: 0px 0px 5px 2px #ddd;
      cursor: pointer;
      &#right.active,
      &#left.active {
        pointer-events: none;
      }
    }
  }
}
</style>
