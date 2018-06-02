<template>
	<div>
		<vue-c3 :handler="handler"></vue-c3>
	</div>
</template>

<script>
import Vue from 'vue'
import VueC3 from 'vue-c3'

export default {
	name:"Chart",
	components: {
      VueC3
    },
	data: function() {
		return {
			handler: new Vue(),
			economicalObject: {},
			healthObject: {},
		}
	},
	methods: {
		chartOptions: function() {

			var healthObject = this.$data.healthObject;
			var economicalObject = this.$data.economicalObject;
			/**
			 * The only job of this function is to prepare
			 * options for c3 chart and return it.
			 */

			// We always show X. LOL.
			var showYAxis = true;
			var showY2Axis = true;

			/**
			 * This is how our axis(s) will look:
			 * X  = Years
			 * Y  = Health
			 * Y2 = Economical
			 * 
			 * We will update stuff based on whatever is selected
			 */

			// Check if both objects are selected
			if(!healthObject.title) {
				showYAxis = false;
			} 
			if(!economicalObject.title) {
				showY2Axis = false;
			}

			// At this point if both objects are empty, return null.
			if(!showYAxis && !showY2Axis) {
				return null;
			}
			
			// For X axis values, we will give HealthObject a priority.
			// Meaning, we will not show economical data for 2016 if health data for the same is not present. But not vice-versa.
			var xValues;
			if(showYAxis) {
				// Health Object exists
				xValues = [healthObject.axis.x.title].concat(Object.keys(healthObject.values))
			} else if (showY2Axis) {
				// Health Object doesn't exist. Use Economical one
				xValues = [economicalObject.axis.x.title].concat(Object.keys(economicalObject.values))
			} else {
				// Something has gone horribly wrong. Execution should never have reached here.
				return null;
			}
			

			var yValues; 	// Health Values
			var y2Values;	// Economical Values

			if(showYAxis) {
				yValues = [healthObject.axis.y.title].concat(Object.values(healthObject.values))
			}
			
			if(showY2Axis) {
				y2Values = [economicalObject.axis.y.title].concat(Object.values(economicalObject.values))
			}

			// options skeleton
			var options = {
				data: {
					x: xValues[0],
					columns: [xValues],
					axes:{}
				},
				axis: {
					y:{
						show: false,
						label: {
							text: "",
							position: 'outer-middle'
						},
					},
					y2:{
						show: false,
						label: {
							text: "",
							position: 'outer-middle'
						},
					}
				}
			};

			// Now based on the flags defined above, keep modifying options object
			if(showYAxis) {
				// Create a Y col entry
				options.data.y = yValues[0]
				
				// Pass in values
				options.data.columns.push(yValues)
				
				// Make axes visible
				var yAxisKey = String(yValues[0])
				options.axis.y.show = true
				options.axis.y.label.text = yAxisKey
				options.axis.y.label.position = 'outer-middle'

				options.data.axes[yAxisKey] = 'y'

			} else {
				// Make axes invisible
				options.axis.y.show = false
			}

			if(showY2Axis) {
				// Create a Y@ col entry
				options.data.y2 = y2Values[0]
				
				// Pass in values
				options.data.columns.push(y2Values)
				
				// Make axes visible
				var y2AxisKey = String(y2Values[0])
				options.axis.y2.show = true
				options.axis.y2.label.text = y2AxisKey
				options.axis.y2.label.position = 'outer-middle'

				options.data.axes[y2AxisKey] = 'y2'

			} else {
				// Make axes invisible
				options.axis.y2.show = false
			}
			
			// Finally return the option object
			return options;
		}
	},
	mounted() {
		// Do some magic if necessary
	},
	watch: {
		economicalObject: function() {
			this.handler.$emit('init', this.chartOptions())
		},
		healthObject: function() {
			this.handler.$emit('init', this.chartOptions())
		}
	}
}
</script>
