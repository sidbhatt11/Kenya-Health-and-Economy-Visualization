<template>
	<div class="col" id="understandingComponent">
		<ul class="nav nav-tabs">

			<li class="nav-item">
				<a class="nav-link active" data-toggle="tab" href="#explanations">Explanations</a>
			</li>

			<li class="nav-item">
				<a class="nav-link" data-toggle="tab" href="#news">News</a>
			</li>

		</ul>
		<div id="tabContentContainer" class="tab-content">
			<div class="tab-pane fade active show" id="explanations">
				<template v-for="attribute in attributesToExplain" v-if="attribute.title != null">
					<div v-bind:key="attribute.title" class="card">
						<div class="card-body">
							<h4 class="card-title">{{attribute.title}}</h4>
							<p class="card-text">{{attribute.definition}}</p>
							<h6 class="card-subtitle mb-2 text-muted">Sources:</h6>
							<p class="card-text">{{attribute.source}}</p>
							<a :href=attribute.sourceLink class="card-link" target="_blank">Link to source</a>
						</div>
					</div>
				</template>
			</div>
			<div class="tab-pane fade" id="news">
				<h3>This feature is work in progress</h3>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "UnderstandingComponent",
	data: function() {
		return {
			healthAttribute: {},
			economicalAttribute: {}
		}
	},
	computed: {
		attributesToExplain: function(){
			return [this.$data.healthAttribute, this.$data.economicalAttribute]
		}
	},
	methods: {

	},
	mounted() {
		this.$nextTick(function(){
			// Magic here..
		})
	}
}
</script>

<style scoped>
#understandingComponent {
	margin-top: 10px;
}
#tabContentContainer {
	margin-top: 10px;
}
.card {
	margin-top: 10px;
}
</style>

