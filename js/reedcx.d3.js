	'use strict';

	/* ============ return new chart obj ==================== */
	function makeChart(_data){
		this.data =_data;
		return this;
	};

	/* ============ set graph =================== */
		makeChart.prototype.setgraph = function(){
			var width =440;
			var height=300;
			var $data = this.data;
			var margin = {top: 10, right: 10, bottom: 10, left: 10};

			var dataGroup = d3.nest()
                        .key(function(d) {return d.Client;})
                        .entries($data);

			var canvas = d3.select("#visualisation"),
                        width = 440,
                        height = 280,

                        margin = {
                            top: 10,
                            right: 10,
                            bottom: 10,
                            left: 10
                        };
           var lSpace = width/dataGroup.length;
					 var xScale = d3.scaleLinear().range([margin.left, (width-margin.right)])
                        .domain([
                            d3.min($data,function(d) {
                                    return d.point;
                                }),
                                d3.max($data, function(d) {
                                    return d.point;
                                })
                            ]);

            var yScale = d3.scaleLinear().range([(height - margin.top), margin.bottom])
                        .domain([
                                d3.min($data, function(d) {
                                    return d.sale;
                                }),
                                d3.max($data, function(d) {
                                    return d.sale;
                                })
                            ]);

            var xAxis = d3.axisBottom()
                .scale(xScale);

            var yAxis = d3.axisLeft()
                .scale(yScale);

                    canvas.append("svg:g")
                        .attr("class", "x axis")
                        .attr("transform", "translate(0," + (height - margin.bottom) + ")")
                        .call(xAxis);

                    canvas.append("svg:g")
                        .attr("class", "y axis")
                        .attr("transform", "translate(" + (margin.left) + ",0)")
                        .call(yAxis);


                    var lineGen = d3.line()
                        .x(function(d) {
                            return d.point;
                        })
                        .y(function(d) {
                            return d.sale;
                        })
                        .curve(d3.curveBasis);


                    dataGroup.forEach(function(d,i) {

                        canvas.append('svg:path')
                        .attr('d', lineGen(d.values))
                        .attr('stroke', function(d,j) {
                            console.log(j);
                                return "hsl(" + Math.random() * 160 + ",100%,20%)";
                        })
                        .attr('stroke-width', 4)
                        .attr('id', 'line_'+d.key)
                        .attr('fill', 'none');


                        canvas.append("text")
                            .attr("x", ((lSpace/2)+i*lSpace)-10)
                            .attr("y", (height-20))
                            .style("fill", "black")
                            .attr("class","legend")
                            .on('click',function(){
                                var active   = d.active ? false : true;
                                var opacity = active ? 0 : 1;

                                d3.select("#line_" + d.key).style("opacity", opacity);
                                d.active = active;
                            })
                            .text(d.key);
                    });
		};
/* ============================================== */
/* ============ return new donut obj ============= */
		function makeDonut(_data){
				this.data = _data;
			return this;
		};
/* ============ set donut attributes ============= */
		makeDonut.prototype.setfeatures = function(_contain){
			 var width = 90;
		   var height = 90;
		   var radius = Math.min(width, height) / 2;

				var canvas =d3.select('body')
						.select('#'+_contain)
					    .append("svg")
					    .attr("width", 100)
					    .attr("height", 100)
					    .append("g")
					    .attr("transform", "translate(50,50)");

			 var arc = d3.arc()
			 			.innerRadius(25)
			 			.outerRadius(50);


			 var pie = d3.pie()
			 			.value(function(d){
			 				return d.num;
			 			});

			var $data = this.data;

			 var arcs = canvas.selectAll('.arc')
			 			.data(pie($data))
			 			.enter()
			 			.append('g')
			 			.attr('class','arc');

				 	arcs.append('path')
				 			.attr("d",arc)
				 			.attr('fill', function(d){
				 				return d.data.color;
				 	});
		};
