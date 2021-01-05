<template>
  <h1>Job Deatils</h1>
  <p v-if="job">Job {{ job.title }}</p>
  <p v-else>Loading ...</p>
</template>

<script>
export default {
  name: "JobDeatils",
  // props: ['id'],
  data() {
    return {
      job: null,
    };
  },
  mounted() {
    fetch(`http://localhost:3000/jobs/${this.$route.params.id}`)
      .then((res) => res.json())
      .then((data) => (this.job = data))
      .catch(console.log);
  },
};
</script>

<style>
</style>