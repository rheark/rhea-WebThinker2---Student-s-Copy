const calculateBMI = (weight,height) => {
  const BMI = weight / (height**2);
  return BMI;
};

const onCalcBMIPress = () => {
  let height = $('#height-m').val();
  let weight = $('#weight-m').val();
  let BMI = calculateBMI(weight, height);
  $('#results').removeClass('bg-danger bg-success bg-warning');

  $('#results').html('');

  $('#results').append("<p> Your BMI is: " + BMI.toFixed(2) + '</p>');

  if(BMI < 18.5){
    $('#results').append('<p> Hello Skinny, eat more to grow well!</p>');
    $('#results').addClass('bg-danger');
  }
  else if (BMI < 25 ){
    $('#results').append('<p> Hello Healthy, you are doing well!</p>');
    $('#results').addClass('bg-success');
  }
  else if (BMI < 30 ){
    $('#results').append('<p> You should start shaking off with work out!</p>');
    $('#results').addClass('bg-warning');
  }
  else{
    $('#results').append('<p> Shake it off for a healthier and longer life!</p>');
    $('#results').addClass('bg-danger');
  }
};

// const adam = calculateBMI(85,1.8);
// const mary = calculateBMI(54,1.6);
// const cecilia = calculateBMI(75,1.7);

// console.log("BMI of adam:" + adam);
// console.log("BMI of mary:" + mary);
// console.log("BMI of cecilia:" + cecilia);
