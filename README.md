## Work Day Scheduler 

GIVEN I am using a daily planner to create a schedule: 
- WHEN I open the planner THEN the current day is displayed at the top of the calendar
- WHEN I scroll down THEN I am presented with time blocks for standard business hours
- WHEN I view the time blocks for that day THEN each time block is color-coded to indicate whether it is in the past, present, or future
- WHEN I click into a time block THEN I can enter an event
- WHEN I click the save button for that time block THEN the text for that event is saved in local storage
- WHEN I refresh the page THEN the saved events persist

## Build With:
- Javascript - JQuery, Moment js
- CSS Stylying - Bootstrap, Font Aware, Google Fonts
- HTML

## Create Day Planner
First, the current date is formatted using Moment() and added to the header.  Second, time blocks are created for each hour of the day from 8 AM to 6 PM.  The function savedTasks populates the time blocks with information stored in local storage.  The function updateColor changes the background color as detailed in the "Update as Day Passes" section.

## Add and Save Tasks
For each time block, the user can click and add text for the task.  When the user clicks the Save button, the task is saved to local storage and retreived each time the page is refreshed.  When the user hovers over the Save button, it changes color to highlight which save button the user is clicking.  The function savedTasks updates the local storage with changes to the tasks.

## Update as Day Passes
Since the user may not refresh the page routinely, the function updateColor audits the hour blocks to see their relationship to the current hour.  If the hour block is in the past, the task area is greyed out.  If the the hour block is current, the task area is red.  If the hour block is in the future, the task area is green.

## Demo
<img src=https://github.com/texrob20/calander-app/blob/main/assets/scheduler-demo.png>

## Deployed App
https://texrob20.github.io/calander-app/
