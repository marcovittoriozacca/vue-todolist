const { createApp } = Vue

createApp({
data() {
    return {
        tasks: [
            {
                text: 'Fare i compiti',
                done: false,
            },
            {
                text: 'Fare la spesa',
                done: false,
            },
            {
                text: 'Portare al parco i cani',
                done: false,
            },
        ]
    }
},
}).mount('#app')