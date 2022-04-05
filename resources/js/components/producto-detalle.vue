<template>
	<div>
		<h3>Detalles del producto</h3>

		<div v-for="(item, i) in detalle" :key='i'>
			<h1>{{ item.id }}</h1>
			<h2>{{ item.name }}</h2>
			<h3>{{ item.description }}</h3>
		</div>
		<button @click="back()">Regresa</button>
	</div>
</template>

<script>

export default {
	name: 'producto-detalle',	
	data(){
		return{
			productos:[
				{id:1,name:'VueJs', description:'Curso básico a avanzado'},
				{id:2,name:'Angular 12', description:'Curso básico a avanzado'},
				{id:3,name:'Laravel', description:'Curso básico a avanzado'},
				{id:4,name:'Ionic 5', description:'Curso básico a avanzado'},
				{id:5,name:'TypeScript', description:'Curso básico a avanzado'}
			],
			detalle:[],
			id:this.$route.params.id,
		}
	},
	mounted(){
		//alert('moutend');
		this.ver(this.id);

	},
	created(){
		//alert('created')
		//this.ver(this.id)
	},
	methods:{
		ver(index){
			this.detalle.push({	
				id:this.productos[index].id, 
				name:this.productos[index].name, 
				description:this.productos[index].description
			});
		},
		back(){
			this.$router.push("/productos");
		}
	}

}
</script>

<style lang="css" scoped>
</style>