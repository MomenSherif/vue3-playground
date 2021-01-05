<template>
  <div class="home">
    <h1>Home</h1>
    <input type="text" v-model="search" />
    <p>search term - {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">{{ name }}</div>
  </div>
</template>

<script>
import { ref, computed, watch, watchEffect } from "vue";

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

    const stopWatch = watch(search, () => {
      console.log("watch");
    });

    // Watch effect runs when component mount & any dependency update
    const stopEffect1 = watchEffect(() => {
      console.log("effect");
    });

    const stopEffect2 = watchEffect(() => {
      console.log("effect", search.value); // has Dep
    });

    const matchingNames = computed(() =>
      names.value.filter((name) =>
        name.toLowerCase().includes(search.value.toLowerCase())
      )
    );

    return { names, search, matchingNames };
  },
};
</script>
