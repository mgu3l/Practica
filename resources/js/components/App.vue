<template>
   <div>
      <div>
         <nav>
            <router-link to="/home">Home</router-link>
            <router-link to="/contact">Contact</router-link>
            <router-link to="/productos">Productos</router-link>
         </nav>
      </div>
      <div class="container">           
         <router-view></router-view>
      </div>
   </div>
</template>
