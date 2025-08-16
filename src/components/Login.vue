<script setup lang="ts"></script>
<template>
  <main class="w-full max-w-md">
    <section class="bg-white/90 backdrop-blur-md border border-gray-200 rounded-2xl shadow-lg p-8">
      <header class="mb-6 text-center">
        <h1 class="text-2xl font-semibold text-slate-800">Welcome back</h1>
        <p class="text-sm text-slate-500 mt-1">Sign in to manage your todos</p>
      </header>

      <form id="loginForm" class="space-y-4" autocomplete="on">
        <div>
          <label for="email" class="text-sm font-medium text-slate-700">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            class="mt-1 block w-full rounded-lg border border-gray-200 px-4 py-2 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="text-sm font-medium text-slate-700">Password</label>
            <button type="button" id="togglePassword" class="text-xs text-sky-600 hover:underline">
              Show
            </button>
          </div>
          <input
            id="password"
            name="password"
            type="password"
            required
            minlength="6"
            class="mt-1 block w-full rounded-lg border border-gray-200 px-4 py-2 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent"
            placeholder="Enter your password"
          />
        </div>

        <div class="flex items-center justify-between text-sm">
          <label class="inline-flex items-center gap-2">
            <input
              type="checkbox"
              name="remember"
              class="h-4 w-4 rounded border-gray-300 text-sky-600 focus:ring-sky-500"
            />
            <span class="text-slate-600">Remember me</span>
          </label>
          <a href="#" class="text-sky-600 hover:underline">Forgot password?</a>
        </div>

        <div>
          <button
            type="submit"
            class="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-sky-600 px-4 py-2 text-white font-medium shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-400"
          >
            Sign in
          </button>
        </div>

        <div class="flex items-center gap-3 text-sm text-slate-400">
          <span class="flex-1 h-px bg-gray-200"></span>
          <span>or continue with</span>
          <span class="flex-1 h-px bg-gray-200"></span>
        </div>

        <div class="grid grid-cols-2 gap-3">
          <button
            type="button"
            class="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-sm hover:bg-gray-50"
          >
            <!-- Google SVG -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 533.5 544.3"
              class="h-4 w-4"
              aria-hidden
            >
              <path
                fill="#4285F4"
                d="M533.5 278.4c0-17.4-1.6-34.2-4.6-50.4H272.1v95.4h146.9c-6.3 34-25 62.8-53.4 82l86.4 67.1c50.4-46.5 81.5-115 81.5-193.1z"
              />
              <path
                fill="#34A853"
                d="M272.1 544.3c72.6 0 133.6-24.1 178.2-65.3l-86.4-67.1c-24.1 16.2-54.9 25.8-91.8 25.8-70.6 0-130.5-47.7-152-111.6L32.1 397.3c44.8 89.9 136 147 240 147z"
              />
              <path
                fill="#FBBC05"
                d="M120.1 321.9c-10.8-32.4-10.8-67.2 0-99.6L32.1 154.1c-43.3 85.2-43.3 184.8 0 270z"
              />
              <path
                fill="#EA4335"
                d="M272.1 108.6c39.5 0 75.1 13.6 103 40.3l77.3-77.3C403.1 24.4 343.8 0 272.1 0 168.1 0 76.9 57.1 32.1 147.9l88 74.4c21.5-63.9 81.4-111.6 151.9-111.6z"
              />
            </svg>
            Google
          </button>

          <button
            type="button"
            class="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-sm hover:bg-gray-50"
          >
            <!-- GitHub SVG -->
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-4 w-4" aria-hidden>
              <path
                fill="currentColor"
                d="M12 .5C5.4.5 0 5.9 0 12.5c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.6-4-1.6-.5-1.2-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.6 1.1 1.6 1.1 1 .1.8 1.7.8 1.7.9 1.6 2.3 1.1 2.9.8.1-.7.4-1.1.7-1.4-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.3 1.2.9-.2 1.9-.3 2.9-.3s2 .1 2.9.3c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 3 .1 3.3.8.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.5-5.4 5.8.4.3.8 1 .8 2v3c0 .3.2.7.8.6C20.6 22.3 24 17.8 24 12.5 24 5.9 18.6.5 12 .5z"
              />
            </svg>
            GitHub
          </button>
        </div>

        <p class="text-center text-sm text-slate-500">
          Don't have an account? <a href="#" class="text-sky-600 hover:underline">Sign up</a>
        </p>
      </form>
    </section>

    <p class="mt-4 text-center text-xs text-slate-400">© <span id="year"></span> Todo App</p>
  </main>
</template>
