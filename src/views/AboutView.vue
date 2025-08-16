<template>
  <div class="about">
    <section class="min-h-screen flex flex-col items-center justify-center px-4 py-16">
      <!-- Heading -->
      <div class="text-center max-w-2xl">
        <h1 class="text-4xl font-bold text-gray-800 mb-4">About VueTaskFlow</h1>
        <p class="text-gray-600 text-lg">
          VueTaskFlow is a lightweight and efficient task management application built with Vue.js
          and Laravel REST API. It helps you organize your daily tasks, track progress, and stay
          productive with a clean and intuitive interface.
        </p>
      </div>

      <!-- Features Section -->
      <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
        <div class="bg-white shadow-md rounded-lg p-6 text-center">
          <h2 class="text-xl font-semibold mb-2">Organize Tasks</h2>
          <p class="text-gray-600">
            Add, edit, and delete tasks effortlessly. Keep your workflow organized.
          </p>
        </div>
        <div class="bg-white shadow-md rounded-lg p-6 text-center">
          <h2 class="text-xl font-semibold mb-2">Track Progress</h2>
          <p class="text-gray-600">Mark tasks as complete and track your productivity over time.</p>
        </div>
        <div class="bg-white shadow-md rounded-lg p-6 text-center">
          <h2 class="text-xl font-semibold mb-2">Seamless Sync</h2>
          <p class="text-gray-600">
            Fully integrated with a Laravel REST API backend for smooth data management.
          </p>
        </div>
      </div>

      <!-- Footer Text -->
      <div class="mt-12 text-center max-w-2xl text-gray-500">
        <p>
          Built with ❤️ using Vue.js, Tailwind CSS, and Laravel. Perfect for personal productivity
          or small projects.
        </p>
      </div>
    </section>
  </div>
</template>
