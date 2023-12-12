<template>
  <div class="home">
    <banner-section />
    <services-section />
    <about-section />
    <whyus-section />
    <team-section />
    <rating-section />
  </div>
</template>

<script>
import BannerSection from "@/components/BannerSection.vue";
import ServicesSection from "@/components/ServicesSection.vue";
import AboutSection from "@/components/AboutSection.vue";
import WhyusSection from "@/components/WhyusSection.vue";
import TeamSection from "@/components/TeamSection.vue";
import RatingSection from "@/components/RatingSection.vue";

export default {
  name: "HomeView",
  components: {
    BannerSection,
    ServicesSection,
    AboutSection,
    WhyusSection,
    TeamSection,
    RatingSection,
  },
};
</script>
