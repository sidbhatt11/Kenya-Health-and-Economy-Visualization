<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    
    <div class="container" id="mainLand">
      <!-- First row contains Navbar etc-->
      <Navigation/>
      <!-- Second row contains selectors and charts-->
      <div class="row">
        <div class="col" id="healthSelectorContainer">
          <HealthAttributeSelector ref="HealthAttributeSelector"/>
        </div>
        <div class="col-8" id="chartContainer">
          <Chart ref="Chart"/>
        </div>
        <div class="col" id="economicalSelectorContainer">
          <EconomicalAttributeSelector ref="EconomicalAttributeSelector"/>
        </div>
      </div>
      <!-- Third row contains list of selected attributes etc-->
      <SelectedAttributesPane ref="selectedAttributesPane" />
      <!-- Fourth row contains news, explanations etc-->
      <div class="row">
          Full width row
      </div>
    </div>
  </div>

</template>

<script>
import Navigation from './components/Navigation.vue'
import Chart from './components/Chart.vue'
import EconomicalAttributeSelector from './components/EconomicalAttributeSelector.vue'
import HealthAttributeSelector from './components/HealthAttributeSelector.vue'
import SelectedAttributesPane from './components/SelectedAttributesPane.vue'

export default {
  name: 'app',
  components: {
    Navigation,
    Chart,
    EconomicalAttributeSelector,
    HealthAttributeSelector,
    SelectedAttributesPane
  },
  data: function() {
    return {
        economicalAttributes: [],
        selectedEconomicalAttribute: "",
        healthAttributes: [],
        selectedHealthAttribute: "",
    }
  },
  computed: {
      selectedAttributes: function() {
        return [this.$data.selectedHealthAttribute, this.$data.selectedEconomicalAttribute]
      }
  },
  methods: {
    reloadEconomicData: function() {
      
      // A workaround for referencing 'this' inside a d3 block
      var thisComponent = this;

      this.$d3.json("/data/economical.json", function(error, ecoArray){
        if(error) {
          return alert("Enable to get economical data");
        }

        // Reset economic attributes
        thisComponent.$data.economicalAttributes = ecoArray;
        return;
      })

    },
    reloadHealthData: function() {
      // A workaround for referencing 'this' inside a d3 block
      var thisComponent = this;

      this.$d3.json("/data/health.json", function(error, healthArray){
        if(error) {
          return alert("Enable to get health data");
        }

        // Reset economic attributes
        thisComponent.$data.healthAttributes = healthArray;
        return;
      })
    },
    activeEconomicalAttributeChanged: function(attribute) {
      this.$data.selectedEconomicalAttribute = String(attribute)
    },
    activeHealthAttributeChanged: function(attribute) {
      this.$data.selectedHealthAttribute = String(attribute)
    }
  },
  watch:{
    selectedAttributes : function(array) {
      this.$refs.selectedAttributesPane.selectedAttributes = array
    },
    economicalAttributes : function(array) {
      this.$refs.EconomicalAttributeSelector.economicalAttributes = array
    },
    healthAttributes : function(array) {
      this.$refs.HealthAttributeSelector.healthAttributes = array
    },
    selectedEconomicalAttribute: function(string) {
      var selectedObject = {}
      this.$data.economicalAttributes.forEach(element => {
        if(element.title == string) {
          selectedObject = element
        }
      });
      this.$refs.Chart.economicalObject = selectedObject
    },
    selectedHealthAttribute: function(string) {
      var selectedObject = {}
      this.$data.healthAttributes.forEach(element => {
        if(element.title == string) {
          selectedObject = element
        }
      });
      this.$refs.Chart.healthObject = selectedObject
    }
  },
  beforeMount() {
    // Load economic data
    this.reloadEconomicData()
    // Load health data
    this.reloadHealthData()
  },
  mounted() {
    this.$nextTick(function() {
      // Do any magic if necessary
    });
  }
}
</script>

<style scoped>
#mainLand {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
