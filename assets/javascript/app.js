
 $('#start').on('click' , function(){
   start();
 });

  $(document).on('click' , '#end' , function(){

  done();
  })
   
var questions = [{
    question: "What county has has pryamids? ",
    answers: [ "France" , "South Africa", "Mexico" , "China"],
    correctAnswe: "Mexico"
// image : "AJ.jpeg"
},
 
 {
    question: "Capital city of China?",
    answers: [ "ShangHai" , "Beijing", "Hongkong" , "Tokyo"],
    correctAnswer: "Beijing" 
// image : "AJ.jpeg"

},

{
    question: "Who submitted this project?",
    answers: [ "Akandu" , "James", "Michael" , "John"],
    correctAnswer: "Akandu" 

},
    {
    question: "What color is the sky?",
    answers: [ "Blue" , "Red", "Yellow" , "Orange"],
    correctAnswer: "Orange" 

 },

    {
    question: "Who was the oldest American President to take office?",
    answers: [ "Washington" , "Kennedy", "Obama" , "Trump"],
    correctAnswer: "Trump" 

}];

 var time = 120;
 var correct = 0;
 var incorrect = 0;
 


 function countdown () {

  time --

  $('#time').html(time);

  if (time<=0) {
        
    console.log ('times up');
    done()

  } 

}

function start () {

  timer = setInterval(countdown,1000);
  $('#subwrapper').prepend('<h2> Time Remaning: <span id= "time" > 12o</span> Seconds </h2>');
  for (var i = 0; i < questions.length; i++) {
    $('#subwrapper').append('<h2>'+ questions[i].question + '</h2>')

  for (var j = 0; j < questions[i].answers.length; j++) 
  {
    $('#subwrapper').append("<input type= 'radio' name= 'question-" + i + " ' value= ' " + questions[i].answers[j] + "'>" + questions[i].answers[j])
    }
   }
 
   $('#subwrapper').append('<br> <button id= "end">Done </button>');
}


function done (){

  $.each($('input[name = " question-0]":checked'), function() {

    if ($(this).val()==questions[0].correctAnswer){
      correct ++
    } else {

      incorrect ++
    }
  })

   $.each($('input[name = " question-1]":checked'), function() {

    if ($(this).val()==questions[1].correctAnswer){
      correct ++
    } else {

      incorrect ++
    }
  })

    $.each($('input[name = " question-2]":checked'), function() {

    if ($(this).val()==questions[2].correctAnswer){
      correct ++
    } else {

      incorrect ++
    }
  })

     $.each($('input[name = " question-3]":checked'), function() {

    if ($(this).val()==questions[3].correctAnswer){
      correct ++
    } else {

      incorrect ++
    }
  })

      $.each($('input[name = " question-4]":checked'), function() {

    if ($(this).val()==questions[4].correctAnswer){
      correct ++
    } else {

      incorrect ++
    }
  })


      this.result();

    }



      function result (){
         clearInterval(timer);
    $('#subwrapper h2').remove();
    $('#subwrapper').html( '<h2> All Done </h2>' );
    $('#subwrapper').append( '<h3> Correct: '  + this.correct  + '</h3>');
    $('#subwrapper').append( '<h3> Incorrect: '  + this.incorrect + '</h3>');
    $('#subwrapper').append( ' <h3> Unanswered: '  + (questions.length-(this.incorrect+this.correct))  + '</h3>');
    $('#subwrapper').append("<button id='reset'> Reset </button>")
      }no