<template>
  <button :class="mode"><slot> </slot></button>
</template>

<script>
export default {
  props: ["mode"],
};
</script>

<style scoped>
button {
  padding: 0.7rem 2rem;
  border: none;
  outline: none;
  /* margin: 3rem 1rem; */
}
.info {
  background: rgba(0, 0, 0, 0.4);
  color: white;
  margin: 0 1rem;
  /* padding: 0.7rem 3rem; */
  font-size: 1.1rem;
  font-weight: 700;
  transition: all 0.2s ease-in;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.info:hover {
  background: whitesmoke;
  color: black;
  box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.3);
}

.play {
  background: rgba(255, 255, 255);
  color: black;
  margin-right: 2rem;
}
</style>
