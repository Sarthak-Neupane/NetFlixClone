<template>
  <div class="head">
    <p><slot name="title"></slot></p>
    <slot name="swiper"></slot>
  </div>
</template>

<script></script>

<style scoped>
.head {
  margin: 1rem 0rem;
}
p {
  font-size: 1.3rem;
  margin: 1.4rem 0;
}

@media(max-width: 768px){
  head{
    margin: 5rem 0;
  }
  p{
    text-align: center;
    margin-top: 3rem;
    font-weight: 500;
    font-size: 2rem;
  }
}
</style>
