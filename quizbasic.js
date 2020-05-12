// CHOOSING A QUIZ
function readQuizFromFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    console.log(file);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200"){
          callback(rawFile.responseText);
        }
    }
     rawFile.send(null);
};

const booton = document.getElementById("chooseQuiz");
booton.addEventListener("change", userSelectQuiz);

const submitbutton = document.getElementById("submit");
submitbutton.addEventListener("click", handleClick);

function handleClick(){
  readQuizFromFile(userSelectQuiz(), theCallBack);
}

function userSelectQuiz(){
      let file = booton.files[0];
      console.log(booton.files[0].name);
      const reader = new FileReader();
      reader.readAsText(file);
      reader.onload = function(){
        console.log(reader.result);
      }
      return file.name;
    };

function theCallBack(text){
    questions = JSON.parse(text);
    console.log(questions);
    return questions;
};


//GETTING PLAYERS
function readPlayersFromFile(file, callback) {
    var rawsFile = new XMLHttpRequest();
    rawsFile.overrideMimeType("application/json");
    rawsFile.open("GET", "players.json", true);
    rawsFile.onreadystatechange = function() {
        if (rawsFile.readyState === 4 && rawsFile.status == "200"){
          callback(rawsFile.responseText);
        }
    }
     rawsFile.send(null);
};

readPlayersFromFile("D:\Practice Code\Quiz\players.json", function(text){
  players = JSON.parse(text);
  return players;
})



//PLAYING THE QUIZ AND GETTING PLAYERS SCORES

const startButton = document.getElementById("start");

startButton.addEventListener("click", function(readPlayersFromFile, readQuizFromFile){
console.log(questions);
  //let saveScore = [];
  //let score = 0
  for(let i = 0; i < players.length; i++){
    //saveScore.push(score);
    for (let j = 0; j < questions.length; j++){
      let response = prompt(questions[j].question);
      if (response == questions[j].answer){
      players[i].score++;
      console.log(players[i].score);
    }
  }
}
});



const player1Score = document.getElementById("player1")

player1Score.addEventListener("click", function(){
  alert(players[0].score);
});

const player2Score = document.getElementById("player2")

player2Score.addEventListener("click", function(){
  alert(players[1].score);
});

const player3Score = document.getElementById("player3")

player3Score.addEventListener("click", function(){
  alert(players[2].score);
});

const player4Score = document.getElementById("player4")

player4Score.addEventListener("click", function(){
  alert(players[3].score);
});

const player5Score = document.getElementById("player5")

player5Score.addEventListener("click", function(){
  alert(players[4].score);
});

const player6Score = document.getElementById("player6")

player6Score.addEventListener("click", function(){
  alert(players[5].score);
});

const player7Score = document.getElementById("player7")

player7Score.addEventListener("click", function(){
  alert(players[6].score);
});



// CREATING AND SAVING A NEW QUIZ BUTTON


const newQuizArray = [];
let newQuizQ = [];
let newQuizA = [];

const addNewQuiz = () => {

  for (let i = 0; i < 10; i++){
      newQuizQ[i] = prompt(`What is question ${i+1} ?`)
      newQuizA[i] = prompt(`What is the answer to quesion ${i+1}?`);

      let newQuiz = {
          question: newQuizQ[i],
          answer: newQuizA[i]
      }

      newQuizArray.push(newQuiz);
      sessionStorage.setItem("NewQuiz", JSON.stringify(newQuiz));
    }
  };


      const createQuiz = document.getElementById("createQuiz");
      createQuiz.addEventListener("click", addNewQuiz);


  function download(data, filename, type) {
      var file = new Blob([JSON.stringify(newQuizArray)], {type: "application/json"});
      if (window.navigator.msSaveOrOpenBlob) // IE10+
          window.navigator.msSaveOrOpenBlob(file, filename);
      else { // Others
          var a = document.createElement("a"),
           url = URL.createObjectURL(file);
          a.href = url;
          a.download = filename;
          document.body.appendChild(a);
          a.click();
          setTimeout(function() {
              document.body.removeChild(a);
              window.URL.revokeObjectURL(url);
          }, 0);
      }
  }
