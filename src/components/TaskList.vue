<script setup>
import api from '@/api/axios.js'
import MainMenu from '@/components/MainMenu.vue'
import { ref, onMounted } from 'vue'

const tasks = ref([])
const newTask = ref('')
const editingTaskId = ref(null) 
const editedTitle = ref('')  

const loading = ref(true)

async function fetchTasks() {
  loading.value = true;
  try {
    const res = await api.get('/tasks')
    tasks.value = res.data.data
  } catch (e) {
    console.error('Fetch tasks error:', e)
  } finally {
    loading.value = false
  }
}

async function addTask() {
  if (!newTask.value.trim()) return
  // loading.value = true
  try {
    const res = await api.post('/tasks', { title: newTask.value })
    tasks.value.push(res.data.data)
    newTask.value = ''
  } catch (e) {
    console.error('Add task error:', e)
  } finally {
    loading.value = false
  }
}

async function toggleComplete(task) {
  try {
    const res = await api.put(`/tasks/${task.id}`, {
      title: task.title,
      is_completed: !task.is_completed,
    })
    Object.assign(task, res.data.data)
  } catch (e) {
    console.error('Toggle complete error:', e)
  }
}

// New edit method
function editTask(task) {
  editingTaskId.value = task.id
  editedTitle.value = task.title
}

async function saveEdit(task) {
  if (!editedTitle.value.trim()) {
    editingTaskId.value = null
    return
  }

  try {
    await api.put(`/tasks/${task.id}`, { title: editedTitle.value, is_completed:true })
    task.title = editedTitle.value
    
  } catch (e) {
    console.error('Edit task error:', e)
  } finally {
    editingTaskId.value = null
  }
}

async function deleteTask(task) {
  // loading.value = true
  try {
    await api.delete(`/tasks/${task.id}`)
    tasks.value = tasks.value.filter((t) => t.id !== task.id)
  } catch (e) {
    console.error('Delete task error:', e)
  } finally {
    loading.value = false
  }
}

onMounted(fetchTasks)
</script>

<template>
  <MainMenu/>
  <div class="max-w-xl mx-auto mt-16 rounded-lg bg-white p-6 shadow-md outline outline-black/5">
    <h1 class="text-3xl font-bold mb-6">My Tasks</h1>

    <form @submit.prevent="addTask" class="flex gap-2 mb-4">
      <input
        v-model="newTask"
        type="text"
        placeholder="Add new task..."
        class="flex-grow border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <button type="submit" class="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 cursor-pointer">
        Add
      </button>
    </form>

    <ul v-if="!loading" class="divide-y divide-gray-200">
      <li
        v-for="task in tasks"
        :key="task.id"
        class="flex justify-between items-center py-3 px-4 hover:bg-gray-100 transition"
      >
        <div class="flex items-center gap-4">
          <input
            type="checkbox"
            :checked="task.is_completed"
            @change="toggleComplete(task)"
            class="form-checkbox w-5 h-5 cursor-pointer"
          />
        <!-- Inline edit mode -->
        <template v-if="editingTaskId === task.id">
          <input
            v-model="editedTitle"
            @keyup.enter="saveEdit(task)"
            @blur="saveEdit(task)"
            class="border rounded px-2 py-1 text-sm bg-white"
            autofocus
          />
        </template>

        <!-- Normal view -->
        <template v-else>
          <span
            :class="{ 'line-through text-gray-500': task.is_completed }"
            class="text-gray-800 font-medium"
          >
            {{ task.title }}
          </span>
        </template>
        </div>
        <div class="flex items-center gap-2">
           <!-- Edit button -->
         <!-- Edit button -->
        <button
          @click="editTask(task)"
          class="text-blue-600 hover:text-blue-800 transition cursor-pointer flex items-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="w-5 h-5"
          >
            <path d="M12 20h9" />
            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
          </svg>
        </button>
          <button
            @click="deleteTask(task)"
            class="text-red-600 hover:text-red-800 font-semibold transition cursor-pointer flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="w-5 h-5"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      </li>
    </ul>

     <!-- Loader -->
    <div v-else class="flex justify-center items-center py-4">
      <svg
        class="animate-spin h-8 w-8 text-blue-500"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
        ></path>
      </svg>
    </div>
  </div>

</template>