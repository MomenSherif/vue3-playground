const app = Vue.createApp({
  data() {
    return {
      url: 'https://www.google.com',
      books: [
        { title: '📘', author: '🐱‍👤', isFav: true },
        { title: '📗', author: '🐱‍🐉', isFav: false },
        { title: '📕', author: '🐱‍🚀', isFav: true },
      ],
    }
  },
  methods: {
  },
  computed: {
    filteredBooks() {
      return this.books.filter(book => book.isFav)
    }
  }
});

app.mount('#app');