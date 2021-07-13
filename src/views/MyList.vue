<template>
  <section class="list">
    <h2>{{ getUser }}</h2>
  </section>
</template>
<script>
export default {
  data() {
    return {
      movie: [],
    };
  },
  components: {
    // MovieList,
    // Swiper,
    // SwiperSlide,
  },
  computed: {
    getUser() {
      return this.$store.getters.getUser;
    },
  },
};
</script>
