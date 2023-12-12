<template>
  <div class="why-us-section">
    <MainTitle :mainTitle="mainTitle" />
    <div class="container">
      <div class="why-us">
        <img src="../assets/w1.png" alt="" />
        <h3>Expert Management</h3>
        <p>
          Incidunt odit rerum tenetur alias architecto asperiores omnis cumque
          doloribus aperiam numquam! Eligendi corrupti, molestias laborum
          dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus
          officia id, aspernatur nihil. Tempore laborum nesciunt ut veniam, nemo
          officia ullam repudiandae repellat veritatis unde reiciendis possimus
          animi autem natus
        </p>
      </div>
      <div class="why-us">
        <img src="../assets/w2.png" alt="" />
        <h3>Secure Investment</h3>
        <p>
          Incidunt odit rerum tenetur alias architecto asperiores omnis cumque
          doloribus aperiam numquam! Eligendi corrupti, molestias laborum
          dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus
          officia id, aspernatur nihil. Tempore laborum nesciunt ut veniam, nemo
          officia ullam repudiandae repellat veritatis unde reiciendis possimus
          animi autem natus
        </p>
      </div>
      <div class="why-us">
        <img src="../assets/w3.png" alt="" />
        <h3>Instant Trading</h3>
        <p>
          Incidunt odit rerum tenetur alias architecto asperiores omnis cumque
          doloribus aperiam numquam! Eligendi corrupti, molestias laborum
          dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus
          officia id, aspernatur nihil. Tempore laborum nesciunt ut veniam, nemo
          officia ullam repudiandae repellat veritatis unde reiciendis possimus
          animi autem natus
        </p>
      </div>
      <div class="why-us">
        <img src="../assets/w4.png" alt="" />
        <h3>Happy Customers</h3>
        <p>
          Incidunt odit rerum tenetur alias architecto asperiores omnis cumque
          doloribus aperiam numquam! Eligendi corrupti, molestias laborum
          dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus
          officia id, aspernatur nihil. Tempore laborum nesciunt ut veniam, nemo
          officia ullam repudiandae repellat veritatis unde reiciendis possimus
          animi autem natus
        </p>
      </div>
    </div>
    <InputButton :nameButton="nameButton" />
  </div>
</template>

<script>
import MainTitle from "./global/MainTitle.vue";
import InputButton from "./global/InputButton.vue";
export default {
  name: "WhyusSection",
  components: { MainTitle, InputButton },
  data: function () {
    return {
      mainTitle: "Why Choose <span>Us</span>",
      nameButton: "Read More",
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../sass/helpers/variables";

.why-us-section {
  padding: {
    top: $padding;
    bottom: $padding;
  }
  text-align: center;
  .why-us {
    margin: {
      top: 26px;
      bottom: 26px;
    }
    img {
      width: 120px;
      border: 5px solid;
      border-radius: 50%;
      padding: 30px;
    }
    p {
      text-align: justify;
      max-width: 100%;
      width: 1000px;
      margin: auto;
      line-height: 1.6;
    }
  }
}
</style>
