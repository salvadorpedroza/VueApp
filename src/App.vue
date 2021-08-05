<template>
    <div>
      <router-view name="navbar" />
      <router-view />
    </div>
</template>
<script>
  export default {
    name: "app",
    components: {
    },
  };
</script>