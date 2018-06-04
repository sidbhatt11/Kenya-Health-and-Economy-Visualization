<template>
	<div id="aboutContent">
		<div class="container">
			<h1>About</h1>
			<p>This project aims at helping the user explore and understand the relationship between economy and healthcare in a rapidly developing nation like Kenya, by providing visualizations and supporting descriptions for various indicators and access to news and events throughout the period for which the data is available and visualized.</p>

			<h1>How do I use it?</h1>
			<p>You can start by selecting an indicator from either side of the page. The left side of the page contains all the healthcare related indicators and the right side contains all the economical indicators.</p>
			<p>As soon as you select an indicator, you will instantly see a chart rendered in the middle of the screen and some explanation about the selected indicator(s) at the bottom of the screen. You can select maximum two indicators at a time, one healthcare related and one economy related.</p>
			<p>Data from both the indicators will be plotted on the chart each on a different Y(vertical) axis. The Y-axis on the left side will always show healthcare related indicator and the one on the right will always show economical indicator. The X(horizontal) axis will always show years between 2012 and 2016.</p>
			<p>To further help you understand why some data looks like it does in some particular year, the application can show you some news related to health or economy for a particular year. You can select 'News' tab from the bottom of the screen (just beside 'Explanation' tab) and it will let you choose the year and the category for which you want the news. Once you press 'Search' button, you will be able to see news according to your preference in a moment or two. </p>

			<h1>Umm, can you give me an example?</h1>
			<p>Let's start by selecting 'Measles immunization' from health indicators. You will notice that the data shows a drop in immunization from 93% in 2012 to 73% in 2013. That's huge. Wondering what may have caused that? Click on 'News' tab and search for news related to Health in 2012. You will find an article by <a href="https://www.theguardian.com/world/2012/mar/08/kenya-sacks-25000-health-workers" target="_blank">The Guardian</a> that says Govt. of Kenya sacked some 25K health workers in 2012. See how news are important?</p>
			
			<h1>Wow! Who made this?</h1>
			<p>This app was developed by <a target="_blank" href="http://siddharthbhatt.com/">Siddharth Bhatt</a> for Data Visualization project for <a href="http://www.monash.edu/pubs/2018handbooks/units/FIT5147.html" target="_blank">FIT5147</a> at <a href="https://www.monash.edu/" target="_blank">Monash University</a>.</p>

			<h1>How did he make it?</h1>
			<p>Siddharth used publicly available datasets from WorldBank, WHO, Kenyan Govt. and a number of other sources (links are given in the 'Explanation' tab) and used the following tools/libraries/frameworks to build this app:</p>
			<p>
				<ul>
					<li><a href="https://vuejs.org/" target="_blank">Vue.js</a></li>
					<li><a href="https://d3js.org/" target="_blank">D3.js</a></li>
					<li><a href="http://c3js.org/" target="_blank">C3.js</a></li>
					<li><a href="https://getbootstrap.com" target="_blank">Bootstrap 4</a></li>
					<li><a href="https://bootswatch.com/litera/" target="_blank">Bootswatch Theme 'Litera'</a></li>
					<li>..and a whole bunch of stuff designed to work with <a href="https://nodejs.org/en/" target="_blank">Node.js</a></li>
				</ul>
			</p>
		</div>
	</div>
</template>

<script>

export default {
	name: "About"
}
</script>

<style scoped>
#aboutContent{
	margin-top: 10px;
}
</style>