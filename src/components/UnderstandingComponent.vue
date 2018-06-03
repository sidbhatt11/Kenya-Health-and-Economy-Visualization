<template>
	<div class="col" id="understandingComponent">
		<ul class="nav nav-tabs">

			<li class="nav-item">
				<a class="nav-link active" id="explanationTab" data-toggle="tab" href="#explanations">Explanations</a>
			</li>

			<li class="nav-item">
				<a class="nav-link" id="newsTab" data-toggle="tab" href="#news">News</a>
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
				<h3 v-if="showNotice">Please select one indicator</h3>
			</div>
			<div class="tab-pane fade" id="news">
				<div id="newsFilterContainer">
					<form>
						<div class="form-row">
							
							<!-- News Year -->
							<div class="col-md-4">
								<div class="form-group row">
									<label for="yearInputSelect" class="col-md-2 col-form-label">Year</label>
									<select class="form-control col-md-10" id="yearInputSelect" name="yearInput">
										<template v-for="year in yearsForNews" >
											<option v-bind:key="year" :id=year :value=year name="yearInput">{{year}}</option>
										</template>
									</select>
								</div>
							</div>

							<!-- Empty Space -->
							<div class="col-md-1"></div>

							<!-- News Category -->
							<div class="col-md-5">
								<div class="form-group row">
									<label for="categoryInputSelect" class="col-md-4  col-form-label">News Category</label>
									<select class="form-control col-md-8" id="categoryInputSelect" name="categoryInput">
										<template v-for="category in categoriesForNews" >
											<option v-bind:key="category" :id=category :value=category name="categoryInput">{{category}}</option>
										</template>
									</select>
								</div>
							</div>

							<!-- Empty Space -->
							<div class="col-md-1"></div>

							<!-- Submit Button -->
							<div class="col-md-1">
								<button v-on:click="formSubmitted" class="btn btn-primary">Search</button>
							</div>
						</div>
					</form>
				</div>
				<div v-show="newsLoading" class="progress">
					<div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>
				</div>
				<div id="newsContainer">
					<!-- <gcse:search gname="kenyaSearch"></gcse:search> -->
				</div>
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
      economicalAttribute: {},
      showNotice: true,
      newsLoading: false,
			yearsForNews: [2012, 2013, 2014, 2015, 2016],
			categoriesForNews: ["Health", "Business"]
    };
  },
  computed: {
    attributesToExplain: function() {
      return [this.$data.healthAttribute, this.$data.economicalAttribute];
    }
  },
  watch: {
    attributesToExplain: function(array) {
      this.$data.showNotice = array.length == 0;
    }
  },
  methods: {
    fetchNews: function(query) {
      // Hide container tab
      global.$("div#newsContainer").hide();

      // Start showing progress bar
      this.$data.newsLoading = true;

      // Manually set input value
      document.querySelector("input.gsc-input").value = String(query);

      // Fire search query
      global.$("button.gsc-search-button").click();

      var thisData = this.$data;

      // Wait for results to load and then only show the useful stuff
      setTimeout(function() {
        // Hide the searchbox
        global.$("form.gsc-search-box").hide();

        // Hide the result meta info
        global.$("div.gsc-above-wrapper-area").hide();

        // Hide Ads
        global.$("div.gsc-adBlock").hide();

        // Everything is hidden now.. time to reveal the result
        global.$("div#newsContainer").fadeIn();

        // Stop showing progress bar
        thisData.newsLoading = false;
      }, 4000);
		},
		formSubmitted: function(event) {
			event.preventDefault();
			
			var searchQuery = "Kenya "+ document.querySelector("#categoryInputSelect").value + " news " + document.querySelector("#yearInputSelect").value;
			this.fetchNews(searchQuery)
		}
  },
  mounted() {
    this.$nextTick(function() {
      // Initialize gcse componenets on run time
      var gcseElement = document.createElement("gcse:search");
      gcseElement.gname = "kenyaSearch";

      var newsElementContainer = document.querySelector("div#newsContainer");
      newsElementContainer.appendChild(gcseElement);

      // Hide it for now
      global.$(newsElementContainer).hide();
    });
  }
};
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
#newsFilterContainer {
	padding-top: 10px;
	border-bottom: 1px;
	border-bottom-color: rgba(0,0,0,0.1);
	border-bottom-style: solid;
}
</style>

