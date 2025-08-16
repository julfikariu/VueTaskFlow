<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="bg-white text-gray-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        
        <!-- Logo -->
        <div class="flex-shrink-0 flex items-center">
          <a href="#" class="text-xl font-bold text-indigo-600">VueTaskFlow</a>
        </div>
        
        <!-- Menu -->
        <div class="flex space-x-4 items-center">
          <a href="/" class="px-3 py-2 rounded-md hover:bg-blue-500 hover:text-white">Home</a>
          <RouterLink to="/tasks" class="px-3 py-2 rounded-md hover:bg-blue-500 hover:text-white">Task</RouterLink>
          <RouterLink to="/about" class="px-3 py-2 rounded-md hover:bg-blue-500 hover:text-white">About</RouterLink>
          <RouterLink to="/register" class="px-3 py-2 rounded-md hover:bg-blue-500 hover:text-white">Register</RouterLink>
          <RouterLink to="/login" class="px-3 py-2 rounded-md hover:bg-blue-500 hover:text-white">Login</RouterLink>
        </div>

      </div>
    </div>
  </nav>

  <RouterView />
</template>
