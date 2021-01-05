<template>
  <h1>Job Deatils</h1>
  <p>Job ID is: {{ id }}</p>
</template>

<script>
export default {
  name: "JobDeatils",
  // props: ['id'],
  data() {
    return {
      id: this.$route.params.id,
    };
  },
};
</script>

<style>
</style>