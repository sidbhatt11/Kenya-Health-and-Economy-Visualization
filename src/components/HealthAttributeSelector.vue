<template>
	<form>
		<fieldset class="form-group">
			<legend>Health Indicators</legend>
			
			<template v-for="attribute in healthAttributes">
				<div v-bind:key="attribute.title" class="form-check">
					<label class="form-check-label">
						<input v-on:click="healthAttributeClicked" class="form-check-input" name="healthAttribute" :id="attribute.title" :value="attribute.title" type="radio">
						{{attribute.title}}
					</label>
				</div>
			</template>

		</fieldset>
	</form>
</template>

<script>
export default {
	name:"HealthAttributeSelector",
	data: function(){
		return {
			healthAttributes: []
		}
	},
	methods: {
		healthAttributeClicked: function(event) {
			this.$parent.activeHealthAttributeChanged(event.target.id)
		}
	},
	mounted() {
		this.$nextTick(function(){
			// Render the thing manually if needed
		})
	}
}
</script>

