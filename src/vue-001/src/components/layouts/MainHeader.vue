<template>
    <header class="navbar bg-base-100 shadow-md px-4">
      <div class="flex-none">
        <button class="btn btn-ghost btn-circle" @click="$emit('toggle-sidebar')">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
  
      <div class="flex-1 px-4">
        <span class="text-xl font-bold">My Dashboard</span>
      </div>
  
      <div class="flex-none">
        <div class="avatar">
          <div class="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="https://i.pravatar.cc/100?img=32" />
          </div>
        </div>
      </div>
    </header>
  </template>
  