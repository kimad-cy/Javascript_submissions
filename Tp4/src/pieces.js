const app = Vue.createApp({
    data() {
        return {
            pieces: []
        };
    },
    mounted() {
        fetch("/pieces-autos.json")
            .then(response => response.json())
            .then(data => {
                this.pieces = data;
            })
            .catch(error => console.error("Error loading JSON:", error));
    }
});

app.mount("#app"); // Mount Vue on #app
