<template>
  <transition name="fade">
    <form @submit="onSubmit">
      <input
        class="form-control"
        type="text"
        v-model="text"
        placeholder="Add Todo..."
        required
      />
      <input type="submit" value="OK" />
    </form>
  </transition>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AddTodo",
  data() {
    return {
      text: "",
    };
  },
  methods: {
    ...mapActions(["addTodo"]),
    onSubmit(e) {
      e.preventDefault();
      this.addTodo(this.text);
    },
  },
};
</script>

<style>
form {
  display: flex;
  margin-top: 10px;
}

form input[type="text"] {
  flex: 11;
  margin-right: 10px;
  padding: 12px;
  border: none;
  background: #f0f2f9;
  border-radius: 5px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

form input[type="submit"] {
  flex: 1;
  border: none;
  background: #2c3e50;
  color: white;
  border-radius: 5px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-weight: 600;
}

input[type="text"]:focus,
input[type="submit"]:focus {
  outline: none;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
