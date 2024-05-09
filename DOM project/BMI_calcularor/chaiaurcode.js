const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault(); // Corrected: It's preventDefault(), not defaultPrevented()

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');
  
  if(height===""||height<=0||isNaN(height)){
    result.innerHTML="Please give a valid height "
  }
  else if(weight===""||weight<=0||isNaN(weight)){
    result.innerHTML="Please give a valid height "
  }
  else{
    
   const bmi=(weight/((height*height)/10000)).toFixed(2)
   if(bmi<=18.6){
    result.innerHTML=`You are Under Weight & your BMI is ${bmi}`
   }
    else if(bmi<=18.6||bmi<=24.6){
        result.innerHTML=`You are Normal & your BMI is ${bmi}`}
        else{
          result.innerHTML=`You are Overweight & your BMI is ${bmi}`
        }
    }
});
