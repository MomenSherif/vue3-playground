const app = Vue.createApp({
  data() {
    return {
      books: [
        { title: '📘', author: '🐱‍👤' },
        { title: '📗', author: '🐱‍🐉' },
        { title: '📕', author: '🐱‍🚀' },
      ],
    }
  },
  methods: {

  }
});

app.mount('#app');