const { createApp } = Vue; 

const app = createApp ({
    data () {
        return {
            title:"Benvenuto",
            imgSrc: "https://us.123rf.com/450wm/studioaccendo/studioaccendo2306/studioaccendo230629596/207029059-ritratto-di-un-leone-maschio-nell-erba-al-tramonto-scena-della-fauna-selvatica-dall-africa.jpg?ver=6"
        }
    }
});

app.mount("#app");