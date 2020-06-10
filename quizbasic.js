

// STEP ONE: CREATING A NEW QUIZ -----------------------------------------------------


const newQuizArray = [];
let newQuizQ = [];
let newQuizA = [];

const addNewQuiz = () => {

  const num = prompt("how many questions would you like?");
  for (let i = 0; i < num; i++){
      newQuizQ[i] = prompt(`What is question ${i+1} ?`)
      newQuizA[i] = prompt(`What is the answer to quesion ${i+1}?`);

      let newQuiz = {
          question: newQuizQ[i],
          answer: newQuizA[i]
      }

      newQuizArray.push(newQuiz);
      sessionStorage.setItem("newQuizArray", JSON.stringify(newQuizArray));
    }
  };


      const createQuiz = document.getElementById("createQuiz");
      createQuiz.addEventListener("click", addNewQuiz);



// STEP 2: SAVING A NEW QUIZ --------------------------------------------------------



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



  // STEP THREE : CHOOSE HOW MANY PLAYERS ------------------------------------------



  const numplayers = document.getElementById("numplayers");

  const peeps = document.getElementById("peeps");

  const playersscores = document.querySelector("players");

  const choosePlayers = () => {
    if (peeps.value == "1"){
      const btn = document.createElement("BUTTON");
      btn.innerHTML = "Player One Score";
      btn.style.cssText = "background-color: #523D83;border-color: blue;color: white;font-weight: bolder;font-size: 1em;height: 100px;width: 150px;border-radius: 20px;box-shadow: 4px 4px 1px 0px darkblue;"
      btn.id = "btn"
      document.getElementById('playerdiv').appendChild(btn);
    } else if (peeps.value == "2") {
      const btn = document.createElement("BUTTON");
      btn.innerHTML = "Player One Score";
      btn.style.cssText = "background-color: #523D83;border-color: blue;color: white;font-weight: bolder;font-size: 1em;height: 100px;width: 150px;border-radius: 20px;box-shadow: 4px 4px 1px 0px darkblue;"
      btn.id = "btn";
      const btn2 = document.createElement("BUTTON");
      btn2.innerHTML = "Player Two Score"
        btn2.style.cssText = "background-color: #523D83;border-color: blue;color: white;font-weight: bolder;font-size: 1em;height: 100px;width: 150px;border-radius: 20px;box-shadow: 4px 4px 1px 0px darkblue;"
        btn2.id = "btn2";
      document.getElementById('playerdiv').appendChild(btn);
      document.getElementById('playerdiv').appendChild(btn2);
    } else if (peeps.value == "3") {
      const btn = document.createElement("BUTTON");
      btn.innerHTML = "Player One Score";
        btn.style.cssText = "background-color: #523D83;border-color: blue;color: white;font-weight: bolder;font-size: 1em;height: 100px;width: 150px;border-radius: 20px;box-shadow: 4px 4px 1px 0px darkblue;"
        btn.id = "btn"
      const btn2 = document.createElement("BUTTON");
      btn2.innerHTML = "Player Two Score";
        btn2.style.cssText = "background-color: #523D83;border-color: blue;color: white;font-weight: bolder;font-size: 1em;height: 100px;width: 150px;border-radius: 20px;box-shadow: 4px 4px 1px 0px darkblue;"
        btn2.id = "btn2";
      const btn3 = document.createElement("BUTTON");
      btn3.innerHTML = "Player Three Score";
        btn3.style.cssText = "background-color: #523D83;border-color: blue;color: white;font-weight: bolder;font-size: 1em;height: 100px;width: 150px;border-radius: 20px;box-shadow: 4px 4px 1px 0px darkblue;"
        btn3.id = "btn3";
      document.getElementById('playerdiv').appendChild(btn);
      document.getElementById('playerdiv').appendChild(btn2);
      document.getElementById('playerdiv').appendChild(btn3);
    } else if (peeps.value == "4") {
      const btn = document.createElement("BUTTON");
      btn.innerHTML = "Player One Score";
        btn.style.cssText = "background-color: #523D83;border-color: blue;color: white;font-weight: bolder;font-size: 1em;height: 100px;width: 150px;border-radius: 20px;box-shadow: 4px 4px 1px 0px darkblue;"
        btn.id = "btn"
      const btn2 = document.createElement("BUTTON");
      btn2.innerHTML = "Player Two Score";
        btn2.style.cssText = "background-color: #523D83;border-color: blue;color: white;font-weight: bolder;font-size: 1em;height: 100px;width: 150px;border-radius: 20px;box-shadow: 4px 4px 1px 0px darkblue;"
        btn2.id = "btn2";
      const btn3 = document.createElement("BUTTON");
      btn3.innerHTML = "Player Three Score";
        btn3.style.cssText = "background-color: #523D83;border-color: blue;color: white;font-weight: bolder;font-size: 1em;height: 100px;width: 150px;border-radius: 20px;box-shadow: 4px 4px 1px 0px darkblue;"
        btn3.id = "btn3";
      const btn4 = document.createElement("BUTTON");
      btn4.innerHTML = "Player Four Score";
        btn4.style.cssText = "background-color: #523D83;border-color: blue;color: white;font-weight: bolder;font-size: 1em;height: 100px;width: 150px;border-radius: 20px;box-shadow: 4px 4px 1px 0px darkblue;"
        btn4.id= "btn4";
      document.getElementById('playerdiv').appendChild(btn);
      document.getElementById('playerdiv').appendChild(btn2);
      document.getElementById('playerdiv').appendChild(btn3);
      document.getElementById('playerdiv').appendChild(btn4);
  }

  }

  numplayers.addEventListener("click", choosePlayers);



// STEP FOUR: CHOOSING A QUIZ -------------------------------------------------------------



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

// let data = sessionStorage.getItem("newQuizArray");
// console.log(data)


  // STEP 5: PLAYING THE QUIZ AND GETTING PLAYERS SCORES -------------------------------------------------------



  const startButton = document.getElementById("start");

  const player1Score = document.getElementById("playerdiv");
  player1Score.addEventListener("click", function(e){
    if(e.target && e.target.id == "btn"){
    alert(whosescore[0].score);
  }
  });
  const player2Score = document.getElementById("playerdiv");
  player2Score.addEventListener("click", function(e){
    if(e.target && e.target.id == "btn2"){
    alert(whosescore[1].score);
  }
  });
  const player3Score = document.getElementById("playerdiv");
  player3Score.addEventListener("click", function(e){
    if(e.target && e.target.id == "btn3"){
    alert(whosescore[2].score);
  }
  });
  const player4Score = document.getElementById("playerdiv");
  player4Score.addEventListener("click", function(e){
    if(e.target && e.target.id == "btn4"){
    alert(whosescore[3].score);
  }
  });
  //

  const whosescore = [
    {
      score : 0
    },
    {
      score : 0
    },
    {
      score : 0
    },
    {
      score : 0
    }
  ];

  startButton.addEventListener("click", function(readQuizFromFile){
    for(let i = 0; i < parseInt(peeps.value); i++){
      for (let j = 0; j < questions.length; j++){
        let response = prompt(questions[j].question);
        if (response == questions[j].answer){
        whosescore[i].score++;
      }
    }
  }
  });
