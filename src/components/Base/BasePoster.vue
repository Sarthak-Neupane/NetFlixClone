<template>
  <section>
    <div class="bg">
      <slot name="background"> </slot>
    </div>
    <div class="textarea">
      <slot name="title"></slot>
      <slot name="desription"></slot>
      <div class="actions">
        <base-button mode="play"> <slot name="playNow"> </slot> </base-button>
        <base-button mode="info"> <slot name="info"> </slot> </base-button>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
section {
  position: relative;
}

.bg {
  width: 100%;
  height: 80vh;
}

.bg::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background: red; */
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 0.1)
  );
}

.textarea {
  position: absolute;
  top: 50%;
  left: 20%;
  transform: translate(-20%, -50%);
  max-width: 40rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
</style>
