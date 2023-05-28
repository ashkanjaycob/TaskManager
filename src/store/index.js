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

  },
});

export default store;
