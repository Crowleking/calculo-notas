<script setup ts>
import IconAdd from '@/icons/IconAdd.vue'
import IconClear from '@/icons/IconClear.vue'
</script>

<template>
  <header>
    <nav class="navbar justify-center bg-base-300">
      <a class="btn btn-ghost text-lg no-animation"> Calculadora Promedio Ponderado </a>
    </nav>

    <nav class="flex justify-center bg-base-200">
      <ul class="menu menu-horizontal justify-center gap-2">
        <li>
          <a
            class="btn btn-secondary text-secondary-content"
          >
            <icon-add />
            Agregar
          </a>
        </li>

        <li>
          <a class="btn btn-secondary text-secondary-content">
            <icon-clear />
            Limpiar
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>
