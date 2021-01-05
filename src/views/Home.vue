<template>
  <div class="home">
    <h1>Home</h1>
    <h2>Refs</h2>
    <p>{{ ninjaOne.name }} - {{ ninjaOne.age }}</p>
    <button @click="updateNinjaOne">Update ninja one</button>
    <h2>Reactive</h2>
    <p>{{ ninjaTwo.name }} - {{ ninjaTwo.age }}</p>
    <button @click="updateNinjaTwo">Update ninja two</button>
  </div>
</template>

<script>
import { ref, reactive } from "vue";

export default {
  name: "Home",
  setup() {
    const ninjaOne = ref({ name: "Mario", age: 30 });
    const ninjaTwo = reactive({ name: "Luigi", age: 35 });

    // Reactive does not work with primitive values
    const nameOne = ref("Mario");
    const nameTwo = reactive("Luigi");

    const updateNinjaOne = () => {
      ninjaOne.value.age = 40;
      nameOne.value = "New Mario";
    };

    const updateNinjaTwo = () => {
      ninjaTwo.age = 45;
      nameTwo = "New Luigi";
    };

    return {
      ninjaOne,
      updateNinjaOne,
      ninjaTwo,
      updateNinjaTwo,
    };
  },
};
</script>
