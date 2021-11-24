// adds current date to jumbotron
var currentDay= moment().format('dddd, MMMM DD, YYYY');
$("#currentDay").text(currentDay)

var hourRow = ""
//loop to dispaly 9am-18pm
for (var i= 8 ; i<=18; i++){
// creates and displays each hour block from 8 AM to 6 PM
  hourRow = $(`<div class="row">`);
  timeBlock = $(`<div class ="col-lg-2 time-block hour">${displayAmPm(i)}</div>`);
  taskBlock = $(`<div class ="col-lg-8"><input data-input="${i}" id="inputText${i}" class="form-control" type="text" ></div>`);
  saveBlock = $(`<div class ="col-lg-2"><button data-id="${i}" class="btn btn-success btn-block saveBtn"><i class="fas fa-save"></i> Save</button></div>`);
  hourRow.append(timeBlock);
  hourRow.append(taskBlock);
  hourRow.append(saveBlock);
  $("#plannerDay").append(hourRow);
  savedTasks(i);
  updateColor(i);
}

// save in local storage the task assigned to a time block
$("button.btn.btn-success").click(function() {
  var id = $(this).data("id");
  var saveText = $(this).parent().siblings().find("input").val();
  localStorage.setItem(id,saveText);
});

//  displays hours in 12-hour AM or PM format
function displayAmPm (hour) {
  var amPM = "";
  if (hour<=12) {
    amPM = "AM";
  } else {
    hour = hour-12;
    amPM = "PM";
  }
  return hour + " " + amPM;
  }

// pulls by hour saved tasks and displays in correct text box
function savedTasks(hour) {
  var inputval = localStorage.getItem(hour);
  if (inputval != null) {
    $(`input#inputText${hour}`).val(inputval);
    console.log(inputval);
  } else {
    $(`input#inputText${hour}`).val("");    
  }}

  // changes color based on if hour block is past, current, or future
  function updateColor(){
    var hour = new Date().getHours();
    //console.log("cycling", hour);
    for (var i= 8 ; i<=18; i++) {
      if (hour>i) {  // blocks in the past are greyed out
        $(`#inputText${i}`).addClass("past");   
        $(`#inputText${i}`).removeClass("present");          
      } else if (hour==i) { // the current hour block is red with white text
        $(`#inputText${i}`).addClass("present");
        $(`#inputText${i}`).removeClass("future");        
      } else if (hour<i) { // future hours are green
        $(`#inputText${i}`).addClass("future");
  }}}

  setInterval(function(){
    updateColor();
   },60000)
