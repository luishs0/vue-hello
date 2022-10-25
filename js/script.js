const {createApp} = Vue;

createApp({

    data(){
        return {
            message: "Hello Vue",
            img: "img/vue-img.png",
        }
    }

}).mount("#app");