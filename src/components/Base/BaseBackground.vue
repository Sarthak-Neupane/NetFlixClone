<template>
<section>
  <div class="bg">
    <slot name="background"> </slot>
  </div>
  <div class="textarea">
    <slot name="genres"></slot>
    <div class="header">
      <div class="title_time">
        <slot name="title"></slot>
      </div>
      <div class="release_and_adult">
        <slot name="runtime"></slot>
        <slot name="releaseDate"></slot>
        <slot name="adult"></slot>
      </div>
    </div>
    <slot name="desription"></slot>
    <div class="actions">
      <router-link to="/video">
        <base-button
          @mouseover="$emit('change-color', 'true')"
          @mouseleave="$emit('change-color', 'false')"
          mode="info"
        >
          <slot name="playNow"> </slot>
        </base-button>
      </router-link>

      <base-button
        @mouseover="$emit('change-color', 'true')"
        @mouseleave="$emit('change-color', 'false')"
        mode="info"
      >
        <slot name="info"> </slot>
      </base-button>
    </div>
    <div class="languages">
      <slot name="lang"></slot>
    </div>
    <div class="forTv">
      <slot name="tv"></slot>
    </div>
  </div>
  </section>
</template>

<script>
export default {
  emits: ["change-color"],
};
</script>

<style scoped>
section{
  height: 100%;
  width: 100%;
}
.bg {
  width: 100%;
  height: 100vh;
  position: relative;
}

ul{
  flex-wrap: wrap;
  margin-top: 5rem;
}

.bg::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50%;
  background-image: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
}

.actions {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  max-width: 100%;
    flex-wrap: wrap;
}

.textarea {
  position: absolute;
  top: 0;
  left: 20%;
  transform: translate(-20%, 0);
  max-width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  /* max-height: 100%; */
  margin-top: 10rem;
}

.header {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  text-align: left;
  padding: 0 1rem;
}

.release_and_adult {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.forTv {
  margin: 1.5rem 0rem;
}

.languages{
  margin: 1rem 0;
}

a {
  text-decoration: none;
}

@media screen and (max-width: 768px) {
  .textarea {
    /* max-width: 25rem; */
  }
  .actions {
    width: 100%;
  }
}
</style>
