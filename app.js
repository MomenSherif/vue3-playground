const app = Vue.createApp({
  data() {
    return {
      title: 'The Final Empire',
      author: '🐱‍👤',
      age: 24,
      showBooks: true,
    }
  },
  methods: {
    handleEvent(e, number) {
      console.log(e, number);
    }
  }
});

app.mount('#app');