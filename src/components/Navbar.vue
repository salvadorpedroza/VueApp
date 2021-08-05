<template>
  <nav class="navbar px-3 bg-light shadow-sm">
    <div class="navbar-container">
      <router-link class="navbar-brand" to="/">Home</router-link>
      <button
        class="navbar-toggler"
        type="button"
        @click="collapse = !collapse"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="navbar-collapse" :class="{ hidde: collapse }">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/components">Components</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/data">Data</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navbar",
  components: {},
  data() {
    return {
      collapse: true,
    };
  },
};
</script>
