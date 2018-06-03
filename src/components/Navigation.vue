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
						<li id="homeLinkContainer" class="nav-item">
							<a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#" v-on:click="reload">Reset</a>
						</li>
						<li id="aboutLinkContainer" class="nav-item">
							<a class="nav-link" href="/about">About</a>
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
	},
	mounted() {
		this.$nextTick(function(){
			var currentURL = String(location.href);
			if(currentURL.includes("about")) {
				// Make about link active
				document.querySelector("li#homeLinkContainer").setAttribute("class","nav-item");
				document.querySelector("li#aboutLinkContainer").setAttribute("class","nav-item active");
			} else {
				// Make home link active
				document.querySelector("li#homeLinkContainer").setAttribute("class","nav-item active");
				document.querySelector("li#aboutLinkContainer").setAttribute("class","nav-item");
			}
		})
	}
}
</script>

