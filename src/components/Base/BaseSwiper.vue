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
    margin: 2rem
  }
  p{
    text-align: center;
    margin: 0rem 0;
    font-weight: 700;
    font-size: 2rem;
  }
}
</style>
