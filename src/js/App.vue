<template>
  <div class="header__body">
    <div>Hello world</div>
    <!-- <marquee-text /> -->
  </div>
</template>

<script>
// import MarqueeText from "./components/marquee.vue";

export default {
  name: "app",
  components: {
    // MarqueeText,
  },
};
</script>
<style scoped>
.header__body {
  background-image: linear-gradient(to right, #ff5858 0%, #f09819 100%);
  height: 30px;
}
</style>
