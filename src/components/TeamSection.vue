<template>
  <div class="team-section">
    <div class="container">
      <MainTitle :mainTitle="mainTitle" />
      <div class="teams">
        <div class="team" v-for="profile in profiles">
          <img :src="profile.img" alt="#" />
          <h3>{{ profile.user }}</h3>
          <span>Marketing Head</span>
          <div class="social-media">
            <font-awesome-icon icon="fa-brands fa-facebook-f" class="icon" />
            <font-awesome-icon icon="fa-brands fa-twitter" class="icon" />
            <font-awesome-icon icon="fa-brands fa-linkedin-in" class="icon" />
            <font-awesome-icon icon="fa-brands fa-instagram" class="icon" />
            <font-awesome-icon icon="fa-brands fa-youtube" class="icon" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MainTitle from "./global/MainTitle.vue";
export default {
  name: "TeamSection",
  components: { MainTitle },
  data: function () {
    return {
      mainTitle: "<span style='color: white;'>Our</span> <span>Team</span>",
      profiles: [
        {
          user: "Joseph Brown",
          img: require("../assets/team-1.jpg"),
        },
        {
          user: "Earl Martinez",
          img: require("../assets/team-2.jpg"),
        },
        {
          user: "Joseph Brown",
          img: require("../assets/team-1.jpg"),
        },
        {
          user: "Earl Martinez",
          img: require("../assets/team-2.jpg"),
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../sass/helpers/variables";

.team-section {
  background-color: $secondBackgroundColor;
  padding: {
    top: $padding;
    bottom: $padding;
  }
  .teams {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    justify-items: center;
    text-align: center;
    padding-top: 50px;
    .team {
      background: $thirdBackgroundColor;
      width: calc(100% - 30px);
      margin: {
        top: 10px;
        bottom: 10px;
      }
      padding: 50px 0;
      img {
        width: 120px;
        border: 4px solid $whiteColor;
        border-radius: 50%;
      }
      h3 {
        color: $skyColor;
        margin-bottom: 8px;
      }
      span {
        color: $whiteColor;
      }
      .social-media {
        display: flex;
        justify-content: center;
        color: $whiteColor;
        .icon {
          margin: {
            top: 30px;
            right: 10px;
            left: 10px;
          }
          cursor: pointer;
        }
      }
    }
  }
}
</style>
