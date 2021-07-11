<template>
  <ul>
    <li :class="{ active: modelValue === 'movie' }">
      <button type="button" @click="activate('movie')">Movie</button>
    </li>
    <li :class="{ active: modelValue === 'tv' }">
      <button type="button" @click="activate('tv')">TV</button>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["modelValue"],
  emits: ["update:modelValue"],
  methods: {
    activate(option) {
      this.$emit("update:modelValue", option);
    },
  },
};
</script>

<style scoped>
.active {
  background: #db202c;
  border-radius: 10px;
}

.active button {
  color: whitesmoke;
}

ul {
  list-style: none;
  margin: 0.5rem 0;
  padding: 0;
  display: flex;
}

li {
  margin: 0 1rem;
  border: 1px solid black;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  font: inherit;
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
  color: white;
  padding: 0.4rem 0.8rem;
}
</style>
