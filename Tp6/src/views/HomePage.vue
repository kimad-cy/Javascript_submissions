<template>
    <div class="home-container">
        <div class="header">
            <h1>THE POP <br>SHOW</h1>
            <img :src="imageSrc" alt="">
            <div>
                <h3>A Music Blog for Music Lovers</h3>
                <p>Dive into the beats, stories, and evolution of music. From classic rock to the latest chart-toppers, we explore the sounds that shape our world. </p>
            </div>
            
        </div>
        <div>
            <PostList/>
        </div>
        
    </div>
    
</template>
  
  <script>
import PostList from '../components/PostList.vue'; // Adjust the path accordingly
import TagPage from './TagPage.vue';
  
  export default {
    name: 'Home',
    components: {
      PostList,
      TagPage
    },
    data(){
        return{
        imageSrc: require('@/assets/vynil.jpeg')
        };
    }
  }
  </script>
  
<style>
@import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@700&display=swap');


img {
  width: 100%;
  max-width: 200px;
  border-radius: 10px;
}
body {
    background: #f5f5dc; /* Soft beige */
    font-family: 'Baloo 2', sans-serif;

}

body::before {
    content: "";
    position: absolute;
    width: 300px;
    height: 300px;
    background:  rgba(255, 99, 71, 0.4); /* Soft red */
    filter: blur(100px);
    top: 10%;
    left: 20%;
    z-index: -1;
}

body::after {
    content: "";
    position: absolute;
    width: 250px;
    height: 250px;
    background:  rgba(30, 144, 255, 0.4); /* Soft blue */
    filter: blur(100px);
    bottom: 10%;
    right: 20%;
    z-index: -1;
}



.home-container{
    display: flex;
    flex-direction: column;
}

.header h1{
    margin: 5x;
    font-size: 56px;
    text-align: center;
    font-weight: bold;
    text-align: left;
    font-family: 'Baloo 2', sans-serif;
    font-size: 55px;

}
.header{
    color: rgb(31, 30, 30);
    display: flex;
    justify-content: space-between;
    align-self: center;
    align-items: center;
    width: 60%;  
    
} 

.header div{
    width: 20%;
    text-align: left;
}  
</style>