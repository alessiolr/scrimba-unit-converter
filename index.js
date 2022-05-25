

function unitConverter(valNum) {
  document.getElementById("unit-meters").innerHTML = valNum
  let feetCalc = valNum * 3.281
  feetCalc = feetCalc.toFixed(3);
  document.getElementById("feet-calc").innerHTML = feetCalc 
  
  document.getElementById("unit-feet").innerHTML = valNum
  let metersCalc = valNum / 3.281
  metersCalc = metersCalc.toFixed(3);
  document.getElementById("meters-calc").innerHTML = metersCalc
  
  document.getElementById("unit-liters").innerHTML = valNum
  let gallonsCalc = valNum / 4.546
  gallonsCalc = gallonsCalc.toFixed(3);
  document.getElementById("gallons-calc").innerHTML = gallonsCalc
  
  document.getElementById("unit-gallons").innerHTML = valNum 
  let litersCalc = valNum * 4.546
  litersCalc = litersCalc.toFixed(3);
  document.getElementById("liters-calc").innerHTML = litersCalc
  
  document.getElementById("unit-kilos").innerHTML = valNum
  let poundsCalc = valNum * 2.205
  poundsCalc = poundsCalc.toFixed(3);
  document.getElementById("pounds-calc").innerHTML = poundsCalc
  
  document.getElementById("unit-pounds").innerHTML = valNum 
  let kilosCalc = valNum / 2.205
  kilosCalc = kilosCalc.toFixed(3);
  document.getElementById("kilos-calc").innerHTML = kilosCalc
}



