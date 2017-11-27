# phase-0-js-application
Create Your Own JavaScript App

PSEUDOCODE

function START with 4 parameters for question answers
  INITIALIZE array ans=[param1, param2, param3, param4]
  INITIALIZE var score equals 0
  INITIALIZE var grade
  
  // Question 1 about addition in math
  SHOW question 1 with 1st parameter as the answer parameter
  START if on condition correct answer
    SHOW "You are correct!"
    ADD 25 to score
    START else if on condition wrong answer
    SHOW "You are wrong!"
    SUBSTRACT 10 from score
  END if
  
  // Question 2 about string
  SHOW question 2 with 2nd parameter as the answer parameter
  START if on condition correct answer
    SHOW "You are correct!"
    ADD 25 to score
    START else if on condition wrong answer
    SHOW "You are wrong!"
    SUBSTRACT 10 from score
  END if
  
  // Question 3 with 4 multiple choice using switch case
  SHOW question 3 
  START switch case with 3rd parameter as the answer parameter 
    START FIRST CASE 
      SHOW "You are wrong!"
      SUBSTRACT 10 from score
    END FIRST CASE
    START SECOND CASE 
      SHOW "You are wrong!"
      SUBSTRACT 10 from score
    END SECOND CASE
    START THIRD CASE 
      SHOW "You are correct!"
      ADD 25 to score
      BREAK
    END THIRD CASE
    START FOURTH CASE 
      SHOW "You are wrong!"
      SUBSTRACT 10 from score
    END FOURTH CASE
  END switch case
  
  // Question 4 about counting objects on screen, using "for" to make the objects appear on screen
  SHOW question 4
  FOR 1st loop
    INTIALIZE var star
    FOR 2nd loop
      star + *
    END FOR
    SHOW star
  END FOR
  INPUT with 4th parameter as the answer parameter
  
  // Calculating total score and final grade
  SHOW total score
  IF score is above 85
    SHOW grade equals A
  ELSE IF score is between 75 and 84
    SHOW grade equals B
  ELSE IF score is between 65 and 74
    SHOW grade equals C
  ELSE IF score is between 1 and 64
    SHOW grade equals D
  ELSE IF score is 0 or lower
    SHOW grade equals E
  END IF
  
  INPUT answers with 4 parameter
    
  
 END OF CODE
  
