<template>
  <div v-if="post">
    <h1>{{ post.titre }}</h1>
    <p class="content">{{ post.snippet }}</p> <!-- Affichez le contenu complet de l'article -->
  </div>
  <div v-else>
    <p>Article non trouvé.</p>
  </div>
</template>

<script>
export default {
  props: ['id'],  // Le paramètre `id` passé depuis la route
  data() {
    return {
      post: null,  // L'article que nous allons afficher
      posts: [
    {
      "id": "1", 
      "titre": "The Evolution of Rock Music in the 21st Century",
      "tags": ["Rock", "Music History", "21st Century"],
      "snippet": "Rock music has seen a massive transformation over the past two decades, influenced by new technologies and evolving societal trends. In this article, we explore the major shifts in the genre, from the rise of alternative rock to the mainstream acceptance of indie and experimental styles. The evolution of rock is a reflection of broader changes in society, especially in how music is consumed. Today, streaming services and social media platforms play an essential role in the popularity of new rock acts. These factors have reshaped the sound and culture of rock music in ways never seen before.",
      "routerLink": "/post/1"
    },
    {
      "id": "2", 
      "titre": "The Rise of Electronic Dance Music (EDM)",
      "tags": ["EDM", "Electronic", "Dance Music"],
      "snippet": "From underground clubs to main stage festivals, EDM has become a dominant force in global music culture. But how did this genre gain such immense popularity? Let's dive deep into the evolution of EDM, from its early roots in the rave scene to its current status as a mainstream phenomenon. The genre's growth is closely tied to the development of new music production technologies, which allowed artists to experiment with sound. EDM also capitalized on the growth of social media, which gave rise to viral hits and superstar DJs.",
      "routerLink": "/post/2"
    },
    {
      "id": "3", 
      "titre": "Exploring Jazz: The Sound of Freedom",
      "tags": ["Jazz", "Classic Music", "Improvisation"],
      "snippet": "Jazz music, born in the early 20th century, has played a pivotal role in shaping modern music. Discover how this genre represents freedom and improvisation, and why it still resonates today. Jazz is characterized by its emphasis on individual expression, with artists constantly pushing the boundaries of harmony and rhythm. Throughout its history, jazz has served as a medium for social change, from the Harlem Renaissance to the civil rights movement. Today, jazz continues to inspire musicians across all genres, solidifying its legacy as a timeless art form.",
      "routerLink": "/post/3"
    },
    {
      "id": "4",
      "titre": "The Influence of Hip-Hop on Modern Pop Culture",
      "tags": ["Hip-Hop", "Pop Culture", "Music Impact"],
      "snippet": "Hip-hop is not just a genre of music; it’s a cultural movement. In this article, we’ll explore how hip-hop has shaped not only music but also fashion, language, and activism. From its origins in the Bronx to its global dominance, hip-hop has provided a voice to marginalized communities. Over the decades, it has influenced everything from politics to advertising, making it a driving force in modern pop culture. The genre’s ability to adapt to changing times ensures its continued relevance in today’s music scene.",
      "routerLink": "/post/4"
    },
    {
      "id": "5", 
      "titre": "Classical Music: A Journey Through Time",
      "tags": ["Classical", "Music History", "Orchestra"],
      "snippet": "Classical music, with its rich history and timeless compositions, remains a cornerstone of Western musical traditions. Join us on a journey through its most iconic periods and compositions. From the Baroque masterpieces of Bach and Handel to the symphonic works of Beethoven and Mozart, classical music continues to be studied and performed worldwide. The genre's precision, emotional depth, and structural complexity make it an art form that transcends time. Today, classical music finds itself in the modern world, influencing a wide array of genres and remaining as relevant as ever.",
      "routerLink": "/post/5"
    }
  ],
    };
  },
  created() {
    this.fetchPost();
  },
  methods: {
    fetchPost() {
      // Trouver l'article correspondant à l'ID dans le tableau local `posts`
      this.post = this.posts.find(post => post.id === this.id);  // Comparaison avec l'ID en string
    },
  },
};
</script>
<style>
.content{
  width: 80%;
  font-size: large;
}
</style>
