CS498 7-3-3 Narrative Visualizaton Assignment

3/08/2019
Graded Assignment: 7-3-3 Create a Narrative Visualization
    1. Messaging
In the assignment, I am trying to convey the urgency of Indian education system by pointing out the huge number of illiteracies and high disparity in female literacy in my first slide. In my second slide, I depicted the growth rate of each state in India and argued that the rate of growth is sluggish, this prepares a stepping stone for my final slide which is government investment in public education.
In my final slide I depicted the Indian government investment in public education in primary, secondary and tertiary education and shown how the government investment in tertiary education is on a decreasing trend.
    2. Narrative structure
In this assignment, I have followed Interactive Slideshow as my narrative structure. In each tab the information is contained and the user is only allowed to explore the tangents in the dataset of the current viewing slide, so the user cannot form his own narrative by drilling down into the details.
        A. Example
            i. In slide 1, Demographics, the user is presented it a zoomable sunburst with multiple layers. The user can click on any of these layers and see how the data is distributed across may slices but he cannot at any point go to any other side by exploring the details of the slices, to go to the next slide he has to click on the tab, there by limiting free navigation and forcing the user to follow a predefined narrative.
    3.  Visual structure
In this assignment, I followed the same visual structure for all of my slides. First, I established a structure for my slides, which is to provide a brief on the information that is to be depicted in that particular slide followed by the d3 chart. I believe that the briefing would familiarize the user with the depiction of data and allow him to relate to the author’s point. Second, I highlighted the d3 visualization part with bright colors on a white background. This would increase the user’s focus on the important parts of the data in each scene. 
Third, every d3 visualization chart in the slides has some form of graphical transition, and in each slide the user will be provided with enough ground to know where he is in the data visualization by providing tab-based navigation. This would allow the user to move forward at his own pace and by following interactive slideshow, the understanding of the user is high when there is small amount of exploration is available on a limited amount of data (specific to slide) rather than complex drill down with free navigation. 
    4. Scenes
In this assignment, there are 3 scenes excluding credits. Each scene individually provides an important part of Indian education system but through interactive slideshow narrative, the scenes together project a sense of urgency and need for increased government involvement in Indian Education.
In Scene 1, Demographics the user is presented with an overview of the topic that is ‘disparity in Indian literacy’. This scene not only establishes the theme of the interactive slideshow but also instills the user with urge to explore how each state (Indian states) is doing after exploring the tangents in the first slide. 
In Scene 2, we answer the urges of the user by showing a simple bar-chart of ‘what is the status of each state (Indian states) in terms of literacy rate?’. The bar-chart is interactive with mouseover events, providing the user with much needed data.
In Scene 3, we conclude the slideshow pointing out the main problem and that is lack of government involvement in tertiary education, which could potentially brew more illiteracy in the next generation due to the current generation not able to find a job with out tertiary education in India.
    5. Annotations
There were different annotations in every scene, in Scene 1 (Demographics) text label and color of the sunburst chart act as annotation, while in Scene 3 circular bumps and color of each line act as annotation, different annotations are used because the visualization used to represent the data changes in each scene.   
    6. parameters
There are a lot of many parameters in this assignment, Scene Names (Tab names) used to transit between scenes, in the Scene 1 (Demographics) the slice parameter used to zoom in and out in the sunburst chart, in Scene 2 (Growth Rate) the individual bar used to trigger tooltip, in Scene 3 (Money Invested) the lines and circle bumps are used as parameters to trigger tooltips. The following are the list of parameters used in the program.
    7. triggers
All the above-mentioned parameters were used as triggers. 
        A. The tab names are used to show which slide should be shown. If slide ‘Demographics’ is selected the ‘tab-operation.js’ would replace the current active tab to Demographics.
        B. The mouse-over events in all three slides would show a detail data at the annotated point.
        C. The slices of the sunburst in Scene 1 would act as trigger to zoom in and out of the sunburst chart
        D. The bar in the bar-chart in Scene 2 would act as trigger to change the color of the mouse over bar and show a tooltip describing the data of that particular bar.
        E. The lines and circular bumps in the line-chart in Scene 3 would act as trigger to show a tooltip describing the data representing the line and the particular data point on the circular bumps. 