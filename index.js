/* 
we have to ask three question to the user and they have to be yes or no question
if the user enter a nothing then give him a invalid string 
else push the answer on a array and let it print it out on the console
*/
let questionList = function(){
   let answers=[]
   let question1 =prompt("to you like to travel (yes/no)")
   answers.push(question1 || "invalid");
   let question2 =prompt("to you like to read (yes/no)")
   answers.push(question2 || "invalid");
   let question3 =prompt("to you like to playing video games (yes/no)")
   answers.push(question3 || "invalid");
   
   console.log("your answer is:")
   console.log(answers)

}
questionList();