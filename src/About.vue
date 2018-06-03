<template>
	<div id="aboutContent">
		<div class="container">
			<!-- Navigation component has a row in it -->
			<Navigation ref="Navigation"/>
		</div>
	</div>
</template>

<script>
import Navigation from './components/Navigation.vue'

export default {
	name: "About",
	components: {
		Navigation
	}
}
</script>

<style scoped>
#aboutContent{
	margin-top: 10px;
}
</style>