<template>
    <button :class="mode"> <slot> </slot> </button>
</template>

<script>
    export default {
        props: ['mode']
    }
</script>

<style scoped>
    button{
        padding: .7rem 2rem;
        border: none;
        outline: none;
        /* margin: 3rem 1rem; */
    }
    .info{
        background: rgba(0,0,0,.2);
        color: white
    }
    .play{
        background: rgba(255, 255, 255);
        color: black;
        margin-right: 2rem
    }
</style>