import axios from 'axios';

const state = {
    todos: []
};

const getters = {
    allTodos: (state) => state.todos
};

const actions = {
    async fetchTodos({ commit }){
        const res = await axios.get('http://localhost:5000/todos');
        console.log('setTodos');
        commit('setTodos', res.data);
    },
    async deleteTodo({ commit }, id){
        await axios.delete(`http://localhost:5000/todos/${id}`);
        commit('removeTodo', id);
    },
    async updateTodo({ commit }, updTodo){
        const res = await axios.put(`http://localhost:5000/todos/${updTodo.id}`, updTodo);
        commit('updateTodo', res.data);
    },
    async addTodo({ commit }, text) {
        const response = await axios.post('http://localhost:5000/todos', { text, completed: false });
    
        commit('newTodo', response.data);
    },
};

const mutations = {
    setTodos: (state,todos) => (state.todos = todos),
    removeTodo: (state, id) => state.todos = state.todos.filter(todo => todo.id !== id),
    updateTodo: (state, updTodo) => {
        const index = state.todos.findIndex(todo => todo.id === updTodo.id);
        if (index !== -1) {
          state.todos.splice(index, 1, updTodo);
        }
    },
    newTodo: (state, todo) => state.todos.unshift(todo),
};

export default{
    state,
    getters,
    actions,
    mutations
}