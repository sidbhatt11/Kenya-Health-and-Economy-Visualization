<template>
	<div class="row bg-light" id="selectedAttributesPane">
		<div class="col-2">
			<span class="align-middle font-weight-bold">
				Selected Indicators
			</span>
		</div>
		<div class="col" id="attributesContainer">
			<template v-for="attribute in selectedAttributes" v-if="attribute">
				<!-- v-on:click="attributeClicked" -->
				<button v-bind:key="attribute" type="button" class="btn btn-primary btn-sm attribute" data-toggle="tooltip" data-placement="top" title="Click to Remove">
					{{ attribute }}
				</button>
			</template>
		</div>
	</div>
</template>

<script>
export default {
	name: 'SelectedAttributesPane',
	data: function() {
		return {
			selectedAttributes: []
		}
	},
	methods: {
		attributeClicked: function(event) {
			// This is needed everywhere
			event.preventDefault();
			var attributeToRemove = event.target.innerText;
			
			// Hide any visible tooltips and remove the attribute
			global.$(event.target).tooltip('dispose');
			
			// Removing it from the array is better than just removing the HTML element
			this.$data.selectedAttributes = this.$data.selectedAttributes.filter(function(item){ 
				return item != attributeToRemove;
			});
		},
		addNewAttribute: function(attributeToAdd) {
			this.$data.selectedAttributes.push(attributeToAdd);
		}
	}
}
</script>

<style scoped>
#selectedAttributesPane {
	margin-top: 10px;
	margin-bottom: 10px;

	padding-top: 10px;
	padding-bottom: 10px;
}

.attribute {
	margin-left: 5px;
}
</style>



