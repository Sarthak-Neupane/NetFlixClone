<template>
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
    <div class="forTv">
      <slot name="tv"></slot>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["change-color"],
};
</script>

<style scoped>
.bg {
  width: 100%;
  height: 90vh;
  position: relative;
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
  height: 50px;
  overflow: hidden;
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

a {
  text-decoration: none;
}

@media screen and (max-width: 768px){
  .textarea{
    max-width: 100%;
    min-width: 20rem;
  }
  .actions{
    width: 100%;
  }
}
</style>
