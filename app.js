const app = Vue.createApp({
  data() {
    return {
      url: 'https://www.google.com',
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