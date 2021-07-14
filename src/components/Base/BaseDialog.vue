<template>
  <div class="backdrop" @click="$emit('close-dialog')"></div>
  <div class="container">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot name="body"></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.backdrop {
  height: 100vh;
  width: 100vw;
  background: rgba(0,0,0,.7);
  position: relative;
}
.container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 30vh;
  width: 50vw;
  min-width: 20rem;
  border: 1px solid white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 20px;
  overflow: hidden;
  background: black;
  z-index: 999;
}
header {
  background: red;
  width: 100%;
  text-align: center;
  min-height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
}
main {
  min-height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background: black;
}
footer {
  width: 100%;
  min-height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
