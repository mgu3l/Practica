<template>
   <div>
      <div class="row">
         <div class="col-md-6">
            <h3>Mi datos</h3>
            <input type="text" v-model="dato">
            <button @click="agregar('0')">Agregar</button>
         </div>
         <div>
            {{ datos }}
         </div>
      </div>
      <div class="row">
         <div class="col-md-12">
            <table>
               <tr>
                  <td>Index</td>
                  <td>Id</td>
                  <td>Name</td>
               </tr>
               <tr v-for="(item, index) in recibir" :key="index">
                  <td @click="agregar(index)">{{index}}</td>
                  <td @click="agregar(index)">{{item.id}}</td>
                  <td @click="agregar(index)">{{item.name}}</td>
               </tr>
            </table>
         </div>
      </div>
   </div>
</template>
<script>
export default {
   props:['recibir'],
   data(){
      return{
         saludo:'Hola',
         datos:[],
         dato:null
      }
   },
   methods: {
     agregar(index){
       this.datos.push(this.recibir[index].name);
     }
   }
}
</script>
<style lang="">
   
</style>
