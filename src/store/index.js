import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state: {
    tasks: [],
  }, 
  actions: {
    fetchTasks() {
      axios
        .get("https://jsonplaceholder.typicode.com/todos")
        .then(function (response) {
          // handle success
          console.log(response);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    },
  },
});

export default store;
