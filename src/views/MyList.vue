<template>
  <div class="spinner"><base-spinner v-if="loading"></base-spinner></div>
  <section class="list" v-if="empty && !loading">
    <p>Add Something to the List. Currently, You have none</p>
  </section>
  <section v-if="!loading && !empty && data" class="list">
    <list-item
      v-for="item in data"
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
      loading: null,
      empty: false,
      data: null,
    };
  },
  components: {
    ListItem,
  },
  computed: {
    // getUser() {
    //   return this.$store.getters.getUser;
    // },
  },

  created() {
    this.getStored();
  },
  methods: {
    clearError() {
      this.error = null;
    },
    async getStored() {
      this.data = null;
      this.loading = true;
      await this.$store.dispatch("getList");
      if (this.$store.getters.getStoredMovies.length !== 0) {
        this.data = this.$store.getters.getStoredMovies;
        console.log(this.data);
        this.loading = false;
      } else {
        this.loading = false;
        this.empty = true;
      }
    },
  },
};
</script>

<style scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  margin: 7rem 2rem;
}
.spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
}

@media screen and (max-width: 768px) {
  .list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 7rem 2rem;
  }
}
</style>
