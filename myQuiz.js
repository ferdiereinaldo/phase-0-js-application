function quiz(ans1, ans2, ans3, ans4) {
  var ans = [ans1, ans2, ans3, ans4];
  var score = 0;
  var grade;
  
  console.log("28 + 9 = " + ans1);
  if (ans1 === 35) {
    console.log("You are correct!");
    score = score + 25;
    console.log("Current Score : " + score);
    console.log('==============================================================');
  } else if (ans1 !== 35) {
    console.log("Sorry, you are wrong!");
    score = score - 10;
    console.log("Current Score : " + score);
    console.log('==============================================================');
  }
  
  console.log("Finish this lyrics of a song 'Twinkle twinkle little [...]'");
  if (ans1 === 35) {
    console.log("You are correct!");
    score = score + 25;
    console.log("Current Score : " + score);
    console.log('==============================================================');
  } else if (ans1 !== 35) {
    console.log("Sorry, you are wrong!");
    score = score - 10;
    console.log("Current Score : " + score);
    console.log('==============================================================');
  }
  
  console.log("What syntax to use when you want to merge an array?");
  console.log("1. splice | 2. slice | 3. join | 4. pop");
  console.log(ans3)
  switch(ans3) {
    case 1: {
      console.log("Sorry, you are wrong!");
      score = score - 10;
      console.log("Current Score : " + score);
      console.log('==============================================================');
      break;
    }
    case 2: {
      console.log("Sorry, you are wrong!");
      score = score - 10;
      console.log("Current Score : " + score);
      console.log('==============================================================');
      break;
    }
    case 3: {
      console.log("You are correct!");
      score = score + 25;
      console.log("Current Score : " + score);
      console.log('==============================================================');
      break;
    }
    case 4: {
      console.log("Sorry, you are wrong!");
      score = score - 10;
      console.log("Current Score : " + score);
      console.log('==============================================================');
      break;
    }
  }
  
  console.log("How many stars are in this pyramid?");
  for (var i = 1; i <= 3; i++) {
    var star = "";
    
    for (var j = 1; j <= i; j++) {
      star +="*";
    }
    console.log(star);
  }
  console.log(ans4);
  if (ans1 === 35) {
    console.log("You are correct!");
    score = score + 25;
    console.log("Current Score : " + score);
    console.log('==============================================================');
  } else if (ans1 !== 35) {
    console.log("Sorry, you are wrong!");
    score = score - 10;
    console.log("Current Score : " + score);
    console.log('==============================================================');
  }
  
  console.log("Your final score is : " + score);
  if (score >= 85){
    console.log("Your overall grade is A! Keep it up!");
  } else if (75 <= score < 85){
    console.log("Your overall grade is B! Nice one!")
  } else if (65 <= score < 75){
    console.log("Your overall grade is C! You should learn more!")
  } else if (0 <= score < 65){
    console.log("Your overall grade is D! You need to repeat this test!")
  } else if (score < 0){
    score = 0;
    console.log("You got 0! You will need to retake the class!")
  }
}
console.log(quiz(35,"star",3,6));
