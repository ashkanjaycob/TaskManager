import { createStore } from "vuex";
import axios from "axios";
import Swal from "sweetalert2";

const store = createStore({
  state: {
    tasks: [],
  },
  getters: {
    allTasks(state) {
      return state.tasks;
    },
  },
  mutations: {
    setTasks(state, tasks) {
      state.tasks = tasks;
    },
    newTask(state, task) {
      state.tasks.unshift(task);
    },

  },
  actions: {
    async fetchTasks({ commit }) {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/todos"
        );
        commit("setTasks", response.data);
        console.log(response);
      } catch (error) {
        Swal.fire({
          title: "Error!",
          text: "some Error is Happening :(",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    },

    async filterTasks({ commit } , limit ) {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/todos?_limit=${limit}`
        );
        commit("setTasks", response.data);
        console.log(response);
      } catch (error) {
        Swal.fire({
          title: "Error!",
          text: "some Error is Happening :(",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    },

    async storeTask ({ commit } , title ) {
      try {
        const response = await axios.post(
          'https://jsonplaceholder.typicode.com/todos'
        , {
          title : title ,
          completed : false 
        });
        commit("newTask", response.data);
        Swal.fire({
          title:"Task added" , 
          icon:"success" ,
          showConfirmButton: false , 
          timerProgressBar : true , 
          timer: 2000 ,
          toast: true ,
          position : 'top' ,
        });
      } catch (error) {
        Swal.fire({
          title: "Error!",
          text: "some Error is Happening :(",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    },

  },
});

export default store;
