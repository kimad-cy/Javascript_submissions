<template>
    <div class="post">
      <h2>{{ post.titre }}</h2>
      <p class="snippet">{{ post.snippet.substring(0, 50) }}...</p>
      <router-link :to="'/post/' + post.id">Read more</router-link>
      <div class="tag-container">
        <div v-for="tag in post.tags" :key="tag" class="tag">
          #{{ tag }}
        </div>
      </div>
      
    </div>
  </template>
  
  <script>
  export default {
    name: 'SinglePost',
    props: {
      post: Object
    }
  }
  </script>
  
  
  <style scoped>
  h2{
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.5rem;
    font-weight: bold;
    transition: color 0.3s ease-in-out;

  }
  h2:hover{
    color: #c0392b;
  }
  .post{
    font-family: 'Baloo 2', sans-serif;
    text-align: left;
    border-radius: 10px;
    padding: 15px;
    color: #1c2022;
  }
  
  .tag {
    background-color: #2980b9;
    color: white;
    padding: 4px 10px;
    border-radius: 12px;
    font-size: 0.9rem;
    display: inline-block;
    margin-right: 5px;
}

.tag:hover {
    background-color:rgba(30, 144, 255, 0.4) ;
}
  .tag-container{
    display: flex;
    gap: 3px;
  }
  .snippet{
    font-size: 100;
    color: rgb(82, 78, 78);
  }
  router-link{
    color: rgb(2, 2, 2);
  }
  </style>
  
  