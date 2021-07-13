<template>
  <section>
    <div class="container">
      <h1>Get your Netflix Subscription mate</h1>
      <div class="video">
        <video src="../assets/karlson.webm" :autoplay="play" controls loop></video>
      </div>
      <h1>OR VIBE WITH ME !!!!</h1>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      play: false,
    };
  },
  created() {
    this.playVid();
  },
  methods: {
    playVid() {
      this.play = true;
    },
  },
};
</script>

<style scoped>
section {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background: red; */
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.video {
  height: 50vh;
  width: 30vw;
  background: yellow;
  margin: 1.5rem;
}

video {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

h1:nth-of-type(2) {
  font-size: 6rem;
  text-align: center;
}
</style>
