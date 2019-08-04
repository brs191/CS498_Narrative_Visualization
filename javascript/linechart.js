var data = [
    {
      name: "Expenditure on Secondary Education",
      values: [
        { date: "1999", price: "37.80" },
        { date: "2000", price: "40.09" },
        { date: "2003", price: "41.67" },
        { date: "2004", price: "41.62" },
        { date: "2005", price: "39.89" },
        { date: "2006", price: "39.50" },
        { date: "2009", price: "34.92" },
        { date: "2010", price: "36.99" },
        { date: "2011", price: "36.96" },
        { date: "2012", price: "38.73" },
        { date: "2013", price: "41.35" }
      ]
    },
    {
      name: "Expenditure on Primary Education",
      values: [
        { date: "1999", price: "30.05" },
        { date: "2000", price: "37.56" },
        { date: "2003", price: "36.08" },
        { date: "2004", price: "36.38" },
        { date: "2005", price: "35.59" },
        { date: "2006", price: "35.38" },
        { date: "2009", price: "26.68" },
        { date: "2010", price: "25.21" },
        { date: "2011", price: "26.55" },
        { date: "2012", price: "27.21" },
        { date: "2013", price: "28.4" }
      ]
    },
    {
      name: "Expenditure on Tertiary Education",
      values: [
        { date: "1999", price: "17.54" },
        { date: "2000", price: "20.30" },
        { date: "2003", price: "20.09" },
        { date: "2004", price: "20.01" },
        { date: "2005", price: "19.55" },
        { date: "2006", price: "20.28" },
        { date: "2009", price: "36.45" },
        { date: "2010", price: "36.08" },
        { date: "2011", price: "34.68" },
        { date: "2012", price: "32.17" },
        { date: "2013", price: "28.5" }
      ]
  
    }
  ];
  
  
  var marginLine = 100;
  var duration = 250;
  
  var lineOpacity = "0.25";
  var lineOpacityHover = "0.85";
  var otherLinesOpacityHover = "0.1";
  var lineStroke = "1.5px";
  var lineStrokeHover = "2.5px";
  
  var circleOpacity = '0.85';
  var circleOpacityOnLineHover = "0.25"
  var circleRadius = 3;
  var circleRadiusHover = 6;
  
  
  /* Format Data */
  var parseDate = d3.timeParse("%Y");
  data.forEach(function (d) {
    d.values.forEach(function (d) {
      d.date = parseDate(d.date);
      d.price = +d.price;
    });
  });
  
  
  /* Scale */
  var xScale = d3.scaleTime()
    .domain(d3.extent(data[0].values, d => d.date))
    .range([0, width - marginLine]);
  
  var yScale = d3.scaleLinear()
    .domain([15, d3.max(data[0].values, d => d.price)])
    .range([height - marginLine, 0]);
  
  var colorLine = d3.scaleOrdinal(d3.schemeCategory10);
  
  
  /* Add SVG */
  var svg3 = d3.select("svg#linechart")
    .attr("width", (width + marginLine) + "px")
    .attr("height", (height + marginLine) + "px")
    .append('g')
    .attr("transform", `translate(${marginLine}, ${marginLine})`);
  
  
  /* Add line into SVG */
  var line = d3.line()
    .x(d => xScale(d.date))
    .y(d => yScale(d.price));
  
  let lines = svg3.append('g')
    .attr('class', 'lines');
  
  lines.selectAll('.line-group')
    .data(data).enter()
    .append('g')
    .attr('class', 'line-group')
    .on("mouseover", function (d, i) {
      svg3.append("text")
        .attr("class", "title-text")
        .style("fill", colorLine(i))
        .text(d.name)
        .attr("text-anchor", "middle")
        .attr("x", (width - marginLine) / 2)
        .attr("y", 5);
    })
    .on("mouseout", function (d) {
      svg3.select(".title-text").remove();
    })
    .append('path')
    .attr('class', 'line')
    .attr('d', d => line(d.values))
    .style('stroke', (d, i) => colorLine(i))
    .style('opacity', lineOpacity)
    .on("mouseover", function (d) {
      d3.selectAll('.line')
        .style('opacity', otherLinesOpacityHover);
      d3.selectAll('.circle')
        .style('opacity', circleOpacityOnLineHover);
      d3.select(this)
        .style('opacity', lineOpacityHover)
        .style("stroke-width", lineStrokeHover)
        .style("cursor", "pointer");
    })
    .on("mouseout", function (d) {
      d3.selectAll(".line")
        .style('opacity', lineOpacity);
      d3.selectAll('.circle')
        .style('opacity', circleOpacity);
      d3.select(this)
        .style("stroke-width", lineStroke)
        .style("cursor", "none");
    });
  
  
  /* Add circles in the line */
  lines.selectAll("circle-group")
    .data(data).enter()
    .append("g")
    .style("fill", (d, i) => colorLine(i))
    .selectAll("circle")
    .data(d => d.values).enter()
    .append("g")
    .attr("class", "circle")
    .on("mouseover", function (d) {
      d3.select(this)
        .style("cursor", "pointer")
        .append("text")
        .attr("class", "text")
        .text(`${d.price}`)
        .attr("x", d => xScale(d.date) + 5)
        .attr("y", d => yScale(d.price) - 10);
    })
    .on("mouseout", function (d) {
      d3.select(this)
        .style("cursor", "none")
        .transition()
        .duration(duration)
        .selectAll(".text").remove();
    })
    .append("circle")
    .attr("cx", d => xScale(d.date))
    .attr("cy", d => yScale(d.price))
    .attr("r", circleRadius)
    .style('opacity', circleOpacity)
    .on("mouseover", function (d) {
      d3.select(this)
        .transition()
        .duration(duration)
        .attr("r", circleRadiusHover);
    })
    .on("mouseout", function (d) {
      d3.select(this)
        .transition()
        .duration(duration)
        .attr("r", circleRadius);
    });
  
  
  /* Add Axis into SVG */
  var yAxis = d3.axisLeft(yScale);
  
  svg3.append("g")
    .attr("transform", "translate(0," + (height - marginLine) + ")")
    .call(d3.axisBottom(xScale))
  
  svg3.append("g")
    .attr("class", "y axis")
    .call(yAxis)
    .append('text')
    .attr("y", 15)
    .attr("transform", "rotate(-90)")
    .attr("fill", "#000")
    .text("% of GOVT Expenditure");