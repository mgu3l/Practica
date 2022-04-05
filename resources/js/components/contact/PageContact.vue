<template>
<div>
   <div class="row">
      <div class="col-md-6">
         <h1>Formulario</h1>
      </div>
   </div>
   <div class="row">
      <div class="col-md-4">
         <tableContact :recibir=datos></tableContact>
      </div>
   </div>
</div>
</template>
<script>
//importar componentes
import tableContact from './TableContact.vue';

export default {
   components:{
      tableContact
   },
   data(){
      return {
         numero:1,
         saludo:'Hola mundo',
         datos:[
           {id:1, name:'Victor'},
           {id:2, name:'Miguel'}
         ]
      }
   }
}
</script>
