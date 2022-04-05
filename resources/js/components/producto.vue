<template>
	<div>
		<h3>Listados productos</h3>
		<ul v-for="(item, index) in productos">
			<li>{{ item.id +' '+ item.name }}</li>
			<div><router-link :to="{name:'producto', params:{id:index}}">Ver detalles</router-link></div>
		</ul>		
	</div>
</template>

<script>

export default {
	name: 'producto',
	data () {
		return {
			productos:[
				{id:1,name:'VueJs'},
				{id:2,name:'Angular 12'},
				{id:3,name:'Laravel'},
				{id:4,name:'Ionic 5'},
				{id:5,name:'TypeScript'}
			],
		}
	},
	methods:{
		back(){
			this.route.push('/productos')
		}
	}
}
</script>

<style lang="css" scoped>
</style>