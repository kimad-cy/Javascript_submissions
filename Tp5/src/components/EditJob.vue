<template>
    <div class="edit-modal">
      <div class="edit-container">
        <h2>Modifier l'emploi</h2>
        <label>Titre:</label>
        <input type="text" v-model="editedJob.titre" />
        <br>
        <label>Description:</label>
        <textarea v-model="editedJob.description"></textarea>
        <br>
        <label>Salaire:</label>
        <input type="text" v-model="editedJob.salaire" />
        <br>
        <label>Contrat:</label>
        <input type="text" v-model="editedJob.type_contrat"/>
         
        <div class="buttons">
          <button @click="saveJob">Enregistrer</button>
          <button @click="$emit('close')">Annuler</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ["job"],
    data() {
      return {
        editedJob: { ...this.job } // Create a local copy of the job
      };
    },
    methods: {
      saveJob() {
        this.$emit("update-job", this.editedJob);
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
    background: white;
    padding: 20px;
    border-radius: 10px;
    width: 500px;
    height: 340px;
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
    background-color: rgb(205, 77, 8);
    color: white;
    cursor: pointer;
  }
  </style>
  