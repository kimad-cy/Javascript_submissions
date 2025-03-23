<template>
  <div class="edit-modal">
    <div class="edit-container">
      <h2>Add Article</h2>
      <label>Titre:</label>
      <input type="text" v-model="newPost.titre" />
      <br>
      <label>Tags:</label>
      <textarea v-model="tagsInput"></textarea>
      <br>
      <label>Body:</label>
      <textarea v-model="newPost.snippet" ></textarea>
      <br>
      <label>Router:</label>
      <input v-model="newPost.router"/>
       
      <div class="buttons">
        <button @click="savePost">Save</button>
        <button @click="$emit('close')">Annuler</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["post"],
  data() {
    return {
      newPost: {
              title: "",
              tags: [],
              snippet: "",
              router: ""
      },
      tagsInput: ""
    };
  },
  methods: {
    savePost() {
      this.newPost.tags = this.tagsInput.split(/\s+/).map(tag => tag.trim()).filter(tag => tag.length > 0);
      console.log(this.newPost.tags);
      this.$emit("save-post", this.newPost);
      this.newPost = { title: "", tags: [], snippet: "", router: "" };
      this.tagsInput = ""; 
      this.$emit("close");
    }
  }
};
</script>

<style scoped>

.edit-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}
.edit-container {
  text-align: left;
  background: #1d1d1b;
  color: white;
  padding: 20px;
  border-radius: 10px;
  width: 600px;
  display: flex;
  flex-direction: column;
}

.buttons {
  display: flex;
  justify-content:center;
  margin-top: 10px;
}

button {
  height: 28px;
  width: 80px;
  margin-right: 4px;
  border: none;
  border-radius: 8px;
  background-color: #a7baeb;
  color: black;
  cursor: pointer;
  font-weight: bold;
}
</style>
