<template>
  <div class="postList-container">
          <div class="wa">
              <div style="display: flex; align-items: end; gap: 5px;">
                  <div class="sub-head1">
                  ARTICLES
                  </div>
                  <div class="sub-head2">
                      <button @click="showForm">Add Post</button>
                      <CreatePost v-if="newpost"  
                      @save-post="savePost"
                      @close="newpost = null" />
                  </div>
              </div>
              <div class="articles-container">
                  <SinglePost 
                      v-for="post in posts" 
                      :key="post.id" 
                      :post="post" 
                      @view-post="viewPost(post)"
                  />
              </div>
          </div>  

          <div class="wa2">
              <div class="sub-head3">Tags</div>
              <div class="tags-container">
                  <ul  v-for="(tag, index) in uniqueTags" :key="index"  >
                      <li @click="goToTagPage(tag)">
                        <router-link :to="'/tags/' + tag"># {{ tag }}</router-link>
                      </li>
                  </ul>

              </div>     
          </div>
  </div>     
</template>

<script>
import SinglePost from './SinglePost.vue';
import CreatePost from './CreatePost.vue'; 

export default {
  name: 'PostList',
  components: {
    SinglePost,CreatePost
  },
  data() {
    return {
      posts: [],
      newpost:null
    };
  },
  methods:{
        savePost(newPost){
            this.posts.push(newPost);
        },
        showForm() {
            this.newpost = {}; // This will trigger `v-if="newpost"` to display the form
        },
        viewPost(post) {
            // Navigate to PostDetailView with the post's ID
            this.$router.push({ path: `/post/${post.id}` });
        },
        goToTagPage(tag) {
          this.$router.push({ name: 'tagPage', params: { tag } });
        }
    },
    created() {
    // Fetch articles from the JSON file
    fetch('/articles.json')
      .then(response => response.json())
      .then(data => {
        this.posts = data;
      })
      .catch(error => console.error('Error fetching articles:', error));
  },
    computed:{
        uniqueTags(){ 
            return [...new Set(this.posts.flatMap(post => post.tags))];
        }
    }
}

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@700&display=swap');

.postList-container{
    display: flex;
    gap:30px;
    justify-content: space-around;
    
   
}
.wa{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 65%;
   
}
.wa2{
    width: 30%;
    margin-top: 19px;
}
.sub-head1,.sub-head2,.sub-head3{
    border: solid 2px rgb(31, 30, 30);
    background-color: rgb(31, 30, 30);
    color: white;
    width: 150px;
    height: 30px;
    border-radius: 8px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    text-align: left;
    padding: 6px;
    font-weight: bold;
    font-family: 'Baloo 2', sans-serif;
    transition:  0.3s ease-in-out;  
}
.sub-head1{
    margin-left: 4px;
    margin-top: 20px; 
}
.sub-head2 button{
   background-color:rgb(31, 30, 30) ;
   color: white;
   text-align: left;
   cursor: pointer;
   width: 100%;
   border:none;
   font-weight: bold;
   font-size: 18px;
   font-family: 'Baloo 2', sans-serif;    
}
.sub-head3{
    margin-left: 3px;
}
.articles-container,.tags-container{
    border: solid 2px rgb(31, 30, 30);
    border-radius: 8px;
    justify-self: center;  
}
.articles-container{
  width: 100%;
}

.tags-container{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}
li{
    list-style: none;
    background-color: #2980b9;
    color: white;
    padding: 4px 10px;
    border-radius: 12px;
    display: inline-block;
    margin: none;
    cursor: pointer;
}

li:hover {
    background-color:rgba(30, 144, 255, 0.4) ;
}

</style>