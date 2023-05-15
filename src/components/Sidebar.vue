<template>
  <div class="sidebar">
    <h2 class="sidebar__title">Menú</h2>
    <ul class="sidebar__list">
      <li>
        <router-link to="/empresas" class="sidebar__link">Empresas</router-link>
        <router-link to="/montacargas" class="sidebar__link">Montacragas</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
};
</script>

<style scoped>
.sidebar {
  width: 250px;
  background-color: #f1f1f1;
  height: 100vh;
  padding: 20px;
  position: fixed;
}

.sidebar__title {
  font-size: 1.5rem;
  color: #6c892f;
}

.sidebar__list {
  list-style-type: none;
  padding-left: 0;
}

.sidebar__link {
  text-decoration: none;
  color: #6c892f;
  font-size: 1.2rem;
  transition: color 0.3s ease;
}

.sidebar__link:hover {
  color: #3d615b;
}
</style>
