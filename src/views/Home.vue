<template>
  <div class="home">
    <h1>Home</h1>
    <input type="text" v-model="search" />
    <p>search term - {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">{{ name }}</div>
  </div>
</template>

<script>
import { ref, computed } from "vue";

export default {
  name: "Home",
  setup() {
    const search = ref("");
    const names = ref([
      "mario",
      "yoshi",
      "lugi",
      "toad",
      "bowser",
      "koppa",
      "peach",
    ]);

    const matchingNames = computed(() =>
      names.value.filter((name) =>
        name.toLowerCase().includes(search.value.toLowerCase())
      )
    );

    return { names, search, matchingNames };
  },
};
</script>
