
<template>
     <div class="p-4 sm:ml-64">
      <router-view></router-view>

     </div>
    </template>
    
    <script>
    export default {
      name: 'MainLayout',
      props: {
        msg: String
      }
    }
    </script>
    
    
    <style scoped>
    </style>
     