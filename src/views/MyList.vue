<template>
  <div class="spinner"><base-spinner v-if="loading"></base-spinner></div>
  <section v-if="!loading" class="list">
    <list-item
      v-for="item in getStoredMovies"
      :key="item.id"
      :title="item.title"
      :id="item.id"
      :mediaType="item.mediaType"
      :poster="item.poster"
      :genres="item.genres"
    >
    </list-item>
  </section>

  <teleport to="body">
    <div class="dialog" v-if="error" @close-dialog="clearError">
      <base-dialog>
        <template #header>
          <h1>Unable To Load Data</h1>
        </template>

        <template #body>
          {{ error }}
        </template>

        <template #footer>
          <base-button @click="clearError" mode="close"> Close </base-button>
        </template>
      </base-dialog>
    </div>
  </teleport>
</template>

<script>
import ListItem from "../components/ListItem.vue";
export default {
  data() {
    return {
      error: null,
      loading: false,
    };
  },
  components: {
    ListItem,
  },
  computed: {
    // getUser() {
    //   return this.$store.getters.getUser;
    // },
    getStoredMovies() {
      return this.$store.getters.getStoredMovies;
    },
  },
  created() {
    this.getStored();
  },
  methods: {
    clearError() {
      this.error = null;
    },
    async getStored() {
      this.loading = true;
      await this.$store.dispatch("getList");
      this.loading = false;
    },
  },
};
</script>

<style scoped>
.list{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.spinner{
  position: absolute;
  top: 50%;
  left:50%;
  transform: translate(-50%, -50%);
  z-index: 999;
}
</style>
