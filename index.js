const input = require("readline-sync");
const chalk = require('chalk');
console.log(chalk.bgRed("Gk Quiz Game") + "\n-----------------")
var userName  = input.question("Whats Your Name ?_")
console.log(`Welcome ${userName} Lets Play...`+ "\n-----------------")
var qnaObject = {
  "Who is PM of India(2021)? " : "NARENDRA MODI", 
  "Which is largest river in India? " : "GANGA", 
  "Which city is called 'Silicon valley' of India ?" : "BANGALORE",
  "NSE is Located in ? " : "MUMBAI",
  "Which is the national bird of India? " : "PEACOCK"
}
var list = Object.keys(qnaObject)
var score = 0
var highScore = 5

function game() {
  for (i=0;i<list.length;i++) {
    var userAns = input.question(list[i])
    userAns = userAns.toUpperCase()
    //hellllo
    if (userAns == qnaObject[list[i]]) {
      console.log(chalk.green("correct!"))
      score++
    }else {
      console.log(chalk.red('Wrong! ')+"Correct Ans : "+qnaObject[list[i]])
    }
  }
  console.log("------------------\nYour Score is : "+score+'\nHigh Score is : '+highScore+' (By Pawan) \n------------------')

}
game()