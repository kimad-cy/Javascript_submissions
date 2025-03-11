
<template>
  <div id="app">
    <header>
      <img src="images/logo-a.jpg" id="logo">
      <h1>Les Bonnes Pièces</h1>
    </header>

    <main>
      <section class="filtres">
        <h3>Recherche</h3>
        <input type="text" v-model="search" placeholder="Rechercher...">
        <h3>Filtres</h3>
  
         <select name="" id="" v-model="filtre1">
          <option value="">Par categorie</option>
          <option value="Électricité">Électricité</option>
          <option value="Filtration">Filtration</option>
          <option value="Moteur">Moteur</option>
          <option value="Freinage">Freinage</option>
          <option value="Refroidissement">Refroidissement</option>
          <option value="Suspension">Suspension</option>
          <option value="Sécurité">Sécurité</option>
          <option value="Transmission">Transmission</option>
          <option value="Carburant">Carburant</option>
          <option value="Carrosserie">Carrosserie</option>
          <option value="Échappement">Échappement</option>
          <option value="Direction">Direction</option>
         </select>
         <br>
         <br>
         <select name="" id="" v-model="filtre2">
          <option value="">Par disponibilité</option>
          <option value="true">Disponible</option>
          <option value="false">Pas disponible</option>
         </select>
         <br><br>
         <select name="" id="" v-model="filtre3">
          <option value="">Par prix</option>
          <option value="asc">Croissant</option>
          <option value="desc">Decroissant</option>
         </select>
         <br><br>
         <h3>Panier</h3>
         <div v-for="elem in cart" :key="elem.id">
            <div class="piece-content" >
              <img :src="`images/${elem.image}`" class="piece-image" />
              <p > {{ elem.nom }}  
                <br> Categorie: {{ elem.categorie }} 
                <br><span style="color: green; font-weight: bold;">Price:</span>  {{ elem.prix }} $
                <br><span style="color: red;">{{elem.dispo ? 'Disponible' : 'Pas disponible'}}</span>
              </p>
              <button @click.prevent="removeFromCart(elem)">Supprimer du panier</button>
            </div>

         </div>
      </section>

      <section class="fiches" >
        <div v-for="piece in filteredAndSorted" :key="piece.id">
          <div  class="piece-card">
            <div  class="piece-content">
              <img :src="`images/${piece.image}`" class="piece-image" />
              <p > {{ piece.nom }}  
                <br> Categorie: {{ piece.categorie }} 
                <br><span style="color: green; font-weight: bold;">Price:</span>  {{ piece.prix }} $
                <br><span style="color: red;">{{piece.dispo ? 'Disponible' : 'Pas disponible'}}</span>
              </p>
              <button @click.prevent="addToCart(piece)">Ajouter au panier</button>
                
            </div>
        </div>

        </div>
        
      </section>
    </main>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        pieces: [], 
        cart: [],
        filtre1:"" ,
        filtre2: "",
        filtre3:"",
        search: ""
      };
    },
    methods: {
      addToCart(piece){
        this.cart.push(piece);
      },
      removeFromCart(elem) {
        this.cart = this.cart.filter(item => item.id !== elem.id);
      }
      
    },
    mounted() {
      
      fetch("/pieces-autos.json")
        .then(response => response.json())
        .then(data => {
          this.pieces = data; 
        })
        .catch(error => console.error("Error loading JSON:", error));
    },

    computed: {
      filteredAndSorted() {
        let filtered = [];
        if(!this.filtre1 && !this.filter2 && !this.filtre3){
          filtered = this.pieces.filter(piece => piece.dispo === true); 
        }else{
          filtered = [...this.pieces];
        }

        
        if (this.search) {
          filtered = filtered.filter(piece =>
            piece.nom.toLowerCase().includes(this.search.toLowerCase())
          );
        }

        
        if (this.filtre1) {
          filtered = filtered.filter(piece => piece.categorie === this.filtre1);
        }

        
        if (this.filtre2 !== '') {
          filtered = filtered.filter(piece => piece.dispo === (this.filtre2 === 'true'));
        }

        
        if (this.filtre3 === 'asc') {
          filtered.sort((a, b) => a.prix - b.prix); 
        } else if (this.filtre3 === 'desc') {
          filtered.sort((a, b) => b.prix - a.prix); 
        }

        return filtered; 
      }
  }


    
  };
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  margin: 0;
  padding: 16px;
  background-color: #f4f4f4;
}

header {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  background-color: rgb(243, 121, 50);
  color: rgb(64, 64, 75);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

header img {
  height: auto;
  width:170px;
  margin-right: 16px;
}

header h1 {
  font-size: 24px;
  text-align: center;
}

main {
  display: flex;
  flex-direction: row;
  gap: 30px;
  justify-content: space-between;
  padding-top: 16px;
}

.filtres {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  width: 550px;
  background-color: #ffffff;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: rgb(64, 64, 75);
}
.filtres input, .filtres select{
  width: 90%;
  height: 30px;
  border-radius: 4px;
  border:solid;
  border-width: 1px;
  border-color: grey;
}

.fiches {
  width: 65%;
}

.piece-card {
  width: 550px;
  background-color: white;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin-bottom: 5px;
}
button{
  background-color: rgb(243, 121, 50);
  border: none;
  border-radius: 8px;
  color: white;
  font-weight: bold;
  padding: 8px;
  cursor: pointer;

}
button:hover{
  background-color: #ee9b64;
}


.piece-content {
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  display: flex;
  align-items: center;  
  justify-content:space-between;
  gap: 16px;  
}


.piece-image {
  width: 100px;  
  height: auto;

}
</style>
