<script setup>
    import MainMenu from '@/components/MainMenu.vue'
</script>

<template>
    <MainMenu/>
    <div class="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md mt-6">
        <h1 class="text-3xl font-bold mb-4 text-gray-800">About ToDoApp</h1>
        <p class="text-gray-700 mb-4">
        ToDoApp is a full-stack task management application built with Vue.js (frontend) and Laravel REST API (backend). It provides a simple, clean, and efficient way to manage daily tasks, track progress, and boost productivity.
        </p>

        <h2 class="text-2xl font-semibold mt-6 mb-2 text-gray-800">📌 Features</h2>
        <ul class="list-disc list-inside text-gray-700 space-y-1">
        <li>✅ Add, edit, delete, and mark tasks as complete</li>
        <li>✅ RESTful API integration between Vue.js and Laravel</li>
        <li>✅ Responsive and minimal UI with Vue.js</li>
        <li>✅ Scalable backend with Laravel REST API</li>
        <li>✅ Easy to set up for learning or real-world usage</li>
        </ul>

        <h2 class="text-2xl font-semibold mt-6 mb-2 text-gray-800">🛠️ Tech Stack</h2>
        <ul class="list-disc list-inside text-gray-700 space-y-1">
        <li>Frontend: Vue.js (Vite, Tailwind CSS optional)</li>
        <li>Backend: Laravel REST API (MySQL / SQLite)</li>
        <li>Others: Axios for API calls, Eloquent ORM, JSON responses</li>
        </ul>
    </div>
</template>

