<template>
  <div class="flex min-h-screen">
    <Sidebar class="w-1/4 bg-gray-100" msg="Hello from SideBar!"></Sidebar>
  <div class="flex flex-col flex-1 thien">
      <HeaderLayout class="bg-gray-100 thien-header"></HeaderLayout>
      <MainLayout class="flex-1" msg="Hello from MainLayout!"></MainLayout>
    </div>
  </div>
</template>

<script>
import Sidebar from './SideBar.vue';
import MainLayout from './MainLayout.vue';
import HeaderLayout from './HeaderLayout.vue';

export default {
  name: 'PageLayout',
  components: {
    Sidebar,
    HeaderLayout,
    MainLayout,
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
