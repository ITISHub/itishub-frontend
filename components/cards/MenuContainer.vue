<template>
  <div>
    <v-container class="menu-content" v-if="menuElements.length > 0">
      <DynamicCard
        v-for="card in menuElements"
        :key="card.id"
        class="menu-content__card"
        :title="card.title"
        :link="card.url"
        title-size="20"
      />
    </v-container>
    <v-container v-else class="loading-content">
      <v-progress-circular
        :size="50"
        color="#33aade"
        indeterminate
      ></v-progress-circular>
    </v-container>
  </div>
</template>

<script>
import DynamicCard from "./DynamicCard";
export default {
  name: "MenuContainer",
  components: { DynamicCard },
  props: {
    menuElements: Array,
  },
};
</script>

<style scoped>
.menu-content {
  max-width: 700px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
}

.loading-content {
  height: 280px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.menu-content__card {
  margin: 5px;
}
</style>
