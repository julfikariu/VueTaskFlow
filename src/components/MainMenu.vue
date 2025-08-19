<!-- NavBar.vue -->
<template>
  <nav class="bg-white shadow-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <!-- Left menu -->
        <div class="flex items-center">
          <div class="flex-shrink-0 font-bold text-xl">ToDoApp</div>
          <div class="hidden md:flex space-x-4 ml-10">
            <router-link to="/" class="text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md">Home</router-link>
            <router-link to="/tasks" class="text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md">Tasks</router-link>
            <router-link to="/about" class="text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md">About</router-link>
          </div>
        </div>

        <!-- Right menu -->
        <div class="flex items-center space-x-4">
          <!-- User dropdown -->
          <div class="relative">
            <button @click="toggleUserDropdown" class="flex items-center focus:outline-none cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
            </button>
            <div v-show="isUserDropdownOpen" class="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md py-2 z-20">
              <button @click="logout" class="w-full text-left block px-4 py-2 text-red-500 hover:bg-gray-100 cursor-pointer">Logout</button>
            </div>
          </div>

          <!-- Mobile menu button -->
          <div class="md:hidden">
            <button @click="toggleMobileMenu" class="text-gray-700 focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div v-show="isMobileMenuOpen" class="md:hidden bg-white shadow-md">
      <router-link to="/" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Home</router-link>
      <router-link to="/tasks" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Tasks</router-link>
      <router-link to="/about" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">About</router-link>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const isMobileMenuOpen = ref(false)
const isUserDropdownOpen = ref(false)

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

function toggleUserDropdown() {
  isUserDropdownOpen.value = !isUserDropdownOpen.value
}

function logout() {
  // Example: clear token and redirect
  localStorage.removeItem('token')
  window.location.href = '/'
}
</script>

<style scoped>
/* optional: smooth dropdown transition */
[v-cloak] { display: none; }
</style>
