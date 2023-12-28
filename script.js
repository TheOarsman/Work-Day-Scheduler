// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


$(function () {

  // TODO: Add code to display the current date in the header of the page.
  var todayDate = dayjs().format('dddd, MMM. D, YYYY, h:mm a');
  $('#currentDay').text(todayDate);

  // TODO: Add a listener for click events on the save button. This code should

  // var save = document.querySelectorAll(".saveBtn")
  // for (var i = 0; i < save.length; i++) {
  //   save[i].addEventListener("click", function (event) {
  //     event.preventDefault()
  //     var userInput = event.target.previousElementSibling.value
  //     // following the logic above from the event.target grab the parent's id and store it into the setItem
  //     localStorage.setItem('parentID', userInput)
  //   })

    // var save = $('.saveBtn')
    // save.on('click', function (event) {
    //   event.preventDefault()
    //   console.log('Work please');
    // })

    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
   
    function hourTracker() {
      var currentHour = dayjs().hour();

      $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr("id").split("hour")[1]);

        if (blockHour < currentHour) {
          $(this).addClass("past");
        }
        else if (blockHour === currentHour) {
          $(this).removeClass("past");
          $(this).addClass("present");
        }
        else {
          $(this).removeClass("present");
          $(this).removeClass("past");
          $(this).addClass("future");
        }
      });
    }

    hourTracker();

    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //

  }
);

