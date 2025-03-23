<template>
    <div class="home">
      <div class="header">
        <h1>emploi.ma</h1>
        <button class="addJob" @click="editJob(0)">Ajouter un emploi</button>
      </div>
      <span style="margin-bottom: 17px; text-align: left;">* Click on job to see description, click again to go back.</span>
      <br><br>
      <div class="container">
        <section class="job-card" v-for="job in jobs" :key="job.id" @click="toggleDetail(job.id)" >
          <div v-if="!showDetail[job.id]">
            <span>{{ job.titre }} </span><br><br>
           <button @click="editJob(job)">Modifier</button>
           <button @click="deleteJob(job.id)">Supprimer</button>
          </div>
          <div v-if="showDetail[job.id]">
            <span>Description:</span> {{ job.description }} <br>
           <span>Salaire:</span> {{ job.salaire }} <br>
           <span>Contrat:</span> {{ job.type_contrat }} <br><br>
          </div>
        </section>
      </div>
      <EditJob v-if="selectedJob" 
             :job="selectedJob" 
             @update-job="updateJob"
             @close="selectedJob = null" />
    </div>
</template>
<script>
import EditJob from "@/components/EditJob.vue";
export default{
  components: { EditJob },
  data(){
    return{
      jobs: [],
      showDetail: new Array(8).fill(false),
      selectedJob: null
    }
  },
  methods: {
    deleteJob(id) {
      if (confirm("Do you want to delete this job?")) {
        let index = this.jobs.findIndex(job => job.id === id);
        if (index !== -1) {
          this.jobs.splice(index, 1);
        }
      }
    },
    toggleDetail(id){
      this.showDetail[id] = !this.showDetail[id];   
    },
    editJob(job) {
      if(!job){
        this.selectedJob = {
          "id":this.jobs.length +1 ,
          "titre": "",
          "description": "",
          "salaire": "",
          "date_creation": "",
          "localisation": "",
          "type_contrat": ""
        };
      }else{
        this.selectedJob = job;
      }
       // Open the edit form
    },
    updateJob(updatedJob) {
      let index = this.jobs.findIndex(job => job.id === updatedJob.id);
      if (index !== -1) {
        this.jobs[index] = updatedJob;
        alert("Job modified!");
      }else{
        this.jobs.push(updatedJob);
        alert("Job Added!");
      }
      this.selectedJob = null; // Close form after saving
    }
  
  },
  mounted() {
      fetch("/jobsApp.json")
        .then(response => response.json())
        .then(data => {
          this.jobs= data; 
        })
        .catch(error => console.error("Error loading JSON:", error));
  }
}
</script>
<style scoped>

.header,.addJob{
  font-family:Verdana, Geneva, Tahoma, sans-serif;
  background-color: #2c3e50;
  color: white;
  margin-top: 0;
  margin-bottom: 20px;
  height: 60px;
  border-radius: 10px;
  text-align: center;
  justify-content:space-between;
  display: flex;
  padding: 4px;
}
.addJob{
  font-weight: bold;
  width: 100px;
}
span{
  font-weight: bold;
}
.container{
  display: flex;
  flex-wrap: wrap;
  width: auto;
  gap: 10px;
  justify-content: center;
}
.job-card{
  font-family:Verdana, Geneva, Tahoma, sans-serif;
  border-style: solid;
  border-radius: 10px;
  height: 190px;
  width: 290px;
  margin-bottom: 10px;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 6px;
  cursor: pointer;
}
.job-card:hover{
  background-color:#2c3e50;
  color: white;
  transition: ease-in 0.3s;
  transform: translateY(-5px);
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.4);}
button{
  height: 34px;
  width: 80px;
  margin-right: 4px;
  border: none;
  border-radius: 8px;
  background-color: rgb(205, 77, 8);
  color: white;
  cursor: pointer;
}

</style>