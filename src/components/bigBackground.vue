<template>
  <base-poster>
    <template #background>
      <img :src="background"> 
    </template>
    <template #title>
      <h1>{{ title }}</h1>
    </template>
    <template #desription>
      <p>{{ desc }}</p>
    </template>

    <template #playNow> Play </template>

    <template #info> Info </template>
  </base-poster>
</template>

<script>
export default {
  props: ["background", "title", "desc"],
};
</script>

<style scoped>
img {
  width: 100%;
  height: 100%;
  object-fit: cover
}

h1{
  margin: .5rem 0;
  font-size: 4rem
}

p{
  margin: 1rem 0;
}
</style>
