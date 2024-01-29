const { createApp } = Vue

createApp({
data() {
    return {
        taskToAdd: '',
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
methods: {
    addTask(){
        if(this.taskToAdd.length !== 0){
            this.tasks.unshift(
                {
                    text: this.taskToAdd,
                    done: false,
                } 
            )
        }
        this.taskToAdd = '';
    },
    taskDone(index){
        if(this.tasks[index].done == false){
            this.tasks[index].done = true
        }else{
            this.tasks[index].done = false
        }   
    },
    deleteTask(index){
        this.tasks.splice(index, 1)
    }

},
}).mount('#app')