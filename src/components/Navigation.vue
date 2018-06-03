<template>

	<div class="row">
		<div class="col">
			<nav class="navbar navbar-expand-lg navbar-expand-xl navbar-dark bg-dark">
				<a class="navbar-brand" href="#">Understanding Healthcare in Kenya</a>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>

				<div class="collapse navbar-collapse" id="navbarColor01">
					<ul class="navbar-nav mr-auto">
						<li class="nav-item active">
							<router-link class="nav-link" to="/">Home</router-link>
							<!-- <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a> -->
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#" v-on:click="reload">Reset</a>
						</li>
						<li class="nav-item">
							<router-link class="nav-link" to="/about">About</router-link>
							<!-- <a class="nav-link"href="#">About</a> -->
						</li>
					</ul>
				</div>
			</nav>
		</div>
	</div>
</template>

<script>
export default {
	name:'Navigation',
	methods: {
		reload: function(){
			location.reload();
		}
	}
}
</script>

