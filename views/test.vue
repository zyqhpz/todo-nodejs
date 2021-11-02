<template>
<div>
    <head>
    <title><%= title %></title>
    <link rel='stylesheet' href='/stylesheets/style.css' />
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
  </head>
  <body class="bg-gray-800"> 
    <h1 class="text-2xl font-bold text-white"></h1>
    <p class="text-lg text-white">Welcome to </p>
  </body>
  <div id="app">
    <div class="my-2 mx-auto">
      <div class="border-pink-200 border-2 w-32 my-2 p-2" v-for="todo in todos" :key="todo._id">
        <h3 class="font-sans font-medium text-base text-white">
          {{ todo.title }}
        </h3>
      </div>
    </div>
  </div>
</div>
</template>
<script>
    import axios from 'axios';
    export default {
        name: 'app',
        data() {
            return {
            todos: [],
            }
        },
        mounted() {
            axios.get('/api/todos')
            .then(response => {
                this.todos = response.data;
            })
            .catch(error => {
                console.log(error);
            })
        }
    }
</script>