<template>
	<form>
		<fieldset class="form-group">
			<legend>Economical Indicators</legend>
			
			<template v-for="attribute in economicalAttributes">
				<div v-bind:key="attribute.title" class="form-check">
					<label class="form-check-label">
						<input v-on:click="economicalAttributeClicked" class="form-check-input" name="economicalAttribute" :id="attribute.title" :value="attribute.title" type="radio">
						{{attribute.title}}
					</label>
				</div>
			</template>

		</fieldset>
	</form>
</template>

<script>
export default {
	name:"EconomicalAttributeSelector",
	data: function(){
		return {
			economicalAttributes: []
		}
	},
	methods: {
		economicalAttributeClicked: function(event) {
			this.$parent.activeEconomicalAttributeChanged(event.target.id)
		}
	},
	mounted() {
		this.$nextTick(function(){
			// Render the thing manually if needed
		})
	}
}
</script>

