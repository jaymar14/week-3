var myWords = ["funny", "longitude"];

function get_random()

{
    myrandomIndex = Math.floor(Math.random()*myWords.length)
    //document.myform.ltr.focus();
 
    //var ranNum= Math.floor(Math.random()*5);
 
    return myrandomIndex;
 
}
// Fetch the possible words using random number and array of choices
 
function getword()
 
{ 

    var myindex=get_random();

    theWord=myWords[myindex]; //this is computer's word
    toOutput="";
    for (var i = 0; i < theWord.length; i++) {
        toOutput = toOutput + "_ ";
    }

    document.getElementById("wordToGuess").innerHTML = toOutput;
  }  

    // var quote=new Array(5);

    // quote[0]="frank sinatra";

    // quote[1]="miles davis";

    // quote[2]="jimmy dean";

    // quote[3]="frank sinatra";

    // quote[4]="frank sinatra";

 

    // var answer = quote[myfortune];
 
 
 
    // Set hidden field to answer.
 
    //myform.answer.value = answer;
 
//}
 
 
 
//function formCheck()
 
//{
 
    // Read answer and decide if guess is in the string.
 
    //var answer = myform.answer.value;
 
    //var vposition = answer.indexOf(myform.ltr.value);
 
 
 
 
 
    // If it is not in string, add to wrong letters box.
 
    //if (vposition == -1) {
 
        //myform.wrongletters.value = myform.ltr.value + " " + myform.wrongletters.value;
 
    //}
 
    //else {
 
     
 
        // Guess is in string, not set one of the boxes to the letter based on position in string.
 
        //switch (vposition) {
 
            //case 0:
 
                //myform.boxone.value = answer.substring(0,1);
 
                //break;
 
            //case 1:
 
                //myform.boxtwo.value = answer.substring(1,2);
 
                //break;
 
            //case 2:
 
                //myform.boxthree.value = answer.substring(2,3);
 
                //break;
 
            //case 3:

                //myform.boxfour.value = answer.substring(3,4);
 
        //}
 
    //}
 
    // Set form guess box to empty string NOT SPACE
 
    //myform.ltr.value ="";
 
    //myform.ltr.focus();
 
//}