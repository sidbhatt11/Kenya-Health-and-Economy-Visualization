<template>
  <div id="app">
    <div class="container" id="mainLand">
      <!-- Second row contains selectors and charts-->
      <div class="row" id="chartRow">
        <div class="col bg-light" id="healthSelectorContainer">
          <HealthAttributeSelector ref="HealthAttributeSelector"/>
        </div>
        <div class="col-8" id="chartContainer">
          <Chart ref="Chart"/>
        </div>
        <div class="col bg-light" id="economicalSelectorContainer">
          <EconomicalAttributeSelector ref="EconomicalAttributeSelector"/>
        </div>
      </div>
      <!-- Third row contains list of selected attributes etc-->
      <SelectedAttributesPane ref="selectedAttributesPane" />
      <!-- Fourth row contains news, explanations etc-->
      <div class="row">
          <UnderstandingComponent ref="UnderstandingComponent"/>
      </div>
    </div>
  </div>

</template>

<script>
import Chart from './components/Chart.vue'
import EconomicalAttributeSelector from './components/EconomicalAttributeSelector.vue'
import HealthAttributeSelector from './components/HealthAttributeSelector.vue'
import SelectedAttributesPane from './components/SelectedAttributesPane.vue'
import UnderstandingComponent from './components/UnderstandingComponent.vue'

export default {
  name: 'app',
  components: {
    Chart,
    EconomicalAttributeSelector,
    HealthAttributeSelector,
    SelectedAttributesPane,
    UnderstandingComponent
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
    fetchNews: function(query) {
        // Fire GCSE
        // eval("var newsElement = google.search.cse.element.getElement('kenyaSearch'); newsElement.execute(" + String(query) + ");")

        document.querySelector("input.gsc-input").value = String(query);

        // Fire search query
        global.$("button.gsc-search-button").click();

        var refToChild = this.$refs.UnderstandingComponent;

        // Wait for results to load and then hide useless stuff
        setTimeout(function() {

            // $("div#newsContainer").hide();

            // Hide the searchbox
            global.$("form.gsc-search-box").hide();

            // Hide the result meta info
            global.$("div.gsc-above-wrapper-area").hide();

            // Hide Ads
            global.$("div.gsc-adBlock").hide();

            // Everything is hidden now.. time to reveal the result
            global.$("div#newsContainer").show();

            refToChild.newsLoading = false

        }, 4000);
    },
    reloadEconomicData: function() {
      
      // A workaround for referencing 'this' inside a d3 block
      var thisComponent = this;

      this.$d3.json("/data/economical.json", function(error, ecoArray){
        if(error) {
          alert("Enable to get economical data")
          return
        }

        // Reset economic attributes
        thisComponent.$data.economicalAttributes = ecoArray;
      })

    },
    reloadHealthData: function() {
      // A workaround for referencing 'this' inside a d3 block
      var thisComponent = this;

      this.$d3.json("/data/health.json", function(error, healthArray){
        if(error) {
           alert("Enable to get health data")
           return
        }

        // Reset economic attributes
        thisComponent.$data.healthAttributes = healthArray;
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
      this.$refs.UnderstandingComponent.economicalAttribute = selectedObject
    },
    selectedHealthAttribute: function(string) {
      var selectedObject = {}
      this.$data.healthAttributes.forEach(element => {
        if(element.title == string) {
          selectedObject = element
        }
      });
      this.$refs.Chart.healthObject = selectedObject
      this.$refs.UnderstandingComponent.healthAttribute = selectedObject
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
#mainLand, #chartRow {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
