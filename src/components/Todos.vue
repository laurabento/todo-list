<template>
  <div class="card">
    <div class="card-header">
      <h2>Todo List</h2>
      <button @click="onClickOpen()">{{ button.text }}</button>
    </div>
    <AddTodo v-show="showAddTodo" />
    <div class="todo" v-for="todo in allTodos" :key="todo.id">
      <div class="input-check" @click="onClickTodo(todo)">
        <label :class="{ 'is-done': todo.checked }">{{ todo.text }}</label>
      </div>
      <i @click="deleteTodo(todo.id)" class="fas fa-trash"></i>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import AddTodo from "./AddTodo";

export default {
  name: "Todos",
  components: {
    AddTodo,
  },
  data() {
    return {
      showAddTodo: false,
      button: {
        text: "+",
      },
    };
  },
  methods: {
    ...mapActions(["fetchTodos", "deleteTodo", "updateTodo"]),
    onClickTodo(todo) {
      const updTodo = {
        id: todo.id,
        text: todo.text,
        checked: !todo.checked,
      };
      this.updateTodo(updTodo);
    },
    onClickOpen() {
      this.showAddTodo = !this.showAddTodo;
      this.button.text = this.showAddTodo ? "-" : "+";
    },
  },
  computed: mapGetters(["allTodos"]),
  created() {
    this.fetchTodos();
  },
};
</script>

<style>
.card {
  background: white;
  width: 400px;
  box-shadow: 0 35px 50px -30px rgba(0, 0, 0, 0.2);
  padding: 20px 40px;
  margin-top: 60px;
}

.card .card-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.card .card-header button {
  border: none;
  background: none;
  font-size: 26px;
  color: #2c3e50;
  cursor: pointer;
}

button:focus {
  outline: none;
}

.todo {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 25px 0;
  align-items: center;
}

.todo .input-check input {
  margin-right: 20px;
}

.todo .input-check label {
  color: #8792a1;
  cursor: pointer;
}

.fas {
  color: #8792a1;
  font-size: 16px;
  cursor: pointer;
}

.is-done {
  text-decoration: line-through;
  color: #b1b8c2 !important;
}

.card-footer {
  display: flex;
  justify-content: center;
}
</style>
