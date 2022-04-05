<template>
<div>
	<h1>Productos</h1>
	<Producto></Producto>
</div>
</template>

<script>

import Producto from '../components/producto.vue'

export default{
	components:{
		Producto
	},
	name: 'producto',	
	data () {
		return {

		}
	}
}
</script>

<style lang="css" scoped>
</style>