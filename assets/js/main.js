const { createApp } = Vue

createApp({
data() {
    return {
        darkModeBtn: true,
        taskToAdd: '',
        tasks: [],
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
    },
    
    darkMode(){
        if(this.darkModeBtn){
            document.querySelector("html").setAttribute('data-bs-theme','light' )
            this.darkModeBtn = false;
            
        }else{
            document.querySelector("html").setAttribute('data-bs-theme','dark' )
            this.darkModeBtn = true;
        }
    }



},
}).mount('#app')