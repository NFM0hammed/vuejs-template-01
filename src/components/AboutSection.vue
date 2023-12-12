<template>
  <div class="about-section">
    <div class="container">
      <MainTitle :mainTitle="mainTitle" />
      <p>
        Magni quod blanditiis non minus sed aut voluptatum illum quisquam
        aspernatur ullam vel beatae rerum ipsum voluptatibus
      </p>
      <div class="about-us">
        <img src="../assets/about.png" alt="" />
        <div class="info">
          <h3>We Are Finexo</h3>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All<br /><br />Molestiae odio earum non qui cumque
            provident voluptates, repellendus exercitationem, possimus at iste
            corrupti officiis unde alias eius ducimus reiciendis soluta eveniet.
            Nobis ullam ab omnis quasi expedita.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MainTitle from "./global/MainTitle.vue";
export default {
  name: "AboutSection",
  components: { MainTitle },
  data: function () {
    return {
      mainTitle: "<span style='color: white;'>About</span> <span>Us</span>",
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../sass/helpers/variables";

.about-section {
  background: $secondBackgroundColor;
  color: $whiteColor;
  padding: {
    top: $padding;
    bottom: $padding;
  }
  p:first-of-type {
    text-align: center;
  }
  .about-us {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    img {
      max-width: 100%;
      width: 500px;
    }
    .info {
      flex-basis: 40%;
      h3 {
        font: {
          size: 28px;
        }
      }
      p {
        text-align: justify;
        line-height: 1.6;
        text-wrap: balance;
      }
    }
    @media (#{$largeScreen}) {
      & {
        flex-direction: column;
      }
    }
  }
}
</style>
