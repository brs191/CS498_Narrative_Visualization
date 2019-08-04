var margin = { top: 10, right: 20, bottom: 120, left: 50 };


// set the ranges
var x2 = d3.scaleBand()
  .range([0, width])
  .padding(0.1);
var y2 = d3.scaleLinear()
  .range([height, 0]);

// append the svg object to the body of the page
// append a 'group' element to 'svg'
// moves the 'group' element to the top left margin
var svg2 = d3.select("svg#barchart")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform",
    "translate(" + margin.left + "," + margin.top + ")");

// get the data
d3.csv("../data/ILRE.csv", function (error, data) {
  if (error) throw error;

  // format the data
  data.forEach(function (d) {
    d.Literacyrate = +d.Literacyrate;
  });

  // Scale the range of the data in the domains
  x2.domain(data.map(function (d) { return d.State; }));
  y2.domain([0, d3.max(data, function (d) { return d.Literacyrate; })]);

  // append the rectangles for the bar chart



  svg2.selectAll(".bar")
    .data(data)
    .enter().append("rect")
    .attr("class", "bar")
    .on("mouseover", function (d, i) {
      svg2.append("text")
        .attr("class", "title-text")
        .text(d.State + " " + d.Literacyrate +"%")
        .attr("text-anchor", "middle")
        .attr("x", (width - marginLine) / 2)
        .attr("y", 5);
    })
    .on("mouseout", function (d) {
      svg2.select(".title-text").remove();
    })
    .attr("x", function (d) { return x2(d.State); })
    .attr("width", x2.bandwidth())
    .attr("y", function (d) { return y2(d.Literacyrate); })
    .attr("height", function (d) { return height - y2(d.Literacyrate); });

  // add the x Axis
  svg2.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x2))
    .selectAll("text")
    .style("text-anchor", "end")
    .attr("dx", "-.8em")
    .attr("dy", ".15em")
    .attr("transform", function (d) {
      return "rotate(-65)";
    });

  // add the y Axis
  svg2.append("g")
    .call(d3.axisLeft(y2));

});