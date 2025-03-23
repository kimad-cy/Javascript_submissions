<template>
    <div class="tagPage-container">
      <h1>Articles Tagged with #{{ tag }}</h1>
      <div class="articles-container">
        <SinglePost 
          v-for="post in filteredPosts" 
          :key="post.id" 
          :post="post" 
        />
      </div>
    </div>
  </template>
  
  <script>
  import SinglePost from '../components/SinglePost.vue';
  
  export default {
    name: 'TagPage',
    components: {
      SinglePost
    },
    props: ['tag'],  // The tag is passed as a route parameter
    data() {
      return {
        posts: []
      };
    },
    created() {
      // Fetch all articles when the page is created
      this.fetchArticles();
    },
    computed: {
      // Filter the articles by the selected tag
      filteredPosts() {
        return this.posts.filter(post => 
            post.tags && post.tags.includes(this.tag)  // Check if the tag is in the post's tags array
        );
    }
    },
    methods: {
      fetchArticles() {
        // Fetch articles from the JSON file (you can also use a service if you have one)
        fetch('/articles.json')
          .then(response => response.json())
          .then(data => {
            this.posts = data;
          })
          .catch(error => console.error('Error fetching articles:', error));
      }
    }
  };
  </script>
  
  <style>
  /* Your styling here */
  </style>
  