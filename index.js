// Code your orbitCircumference function here:
function getOrbitCircumference(radius = 2000) {
  return Math.round(2 * Math.PI * radius)
}

console.log(getOrbitCircumference())

// let distance;

// Code your missionDuration function here:

function getMissionDuration(numberOfOrbits, radius = 2000, speed = 28000) {
  let distance = numberOfOrbits * getOrbitCircumference(radius)
  
  let time = distance / speed

  time = Math.round(time * 100) / 100

  let distanceAndTime = {
    "distance": distance,
    "time": time
  }
  
  return distanceAndTime
}

durationAndTime = getMissionDuration(5)
console.log(`The mission will travel ${durationAndTime["distance"]} km around the planet, and it will take ${durationAndTime["time"]} hours to complete.`) // expected = 2.24

// Copy/paste your selectRandomEntry function here:
function selectRandomEntry(idNumbers) {
  let index = Math.floor(Math.random() * idNumbers.length)
  return idNumbers[index]
}

// Code your oxygenExpended function here:
function getOxygenExpended(candidateObject = selectRandomEntry(crew), radius) {
  let hrs = getMissionDuration(3, radius)["time"]
  let oxygenExpended = candidateObject.o2Used(hrs)
  return `${candidateObject.name} will perform the spacewalk, which will last ${hrs} hours and require ${oxygenExpended} kg of oxygen.`
}

// Candidate data & crew array.
let candidateA = {
  'name':'Gordon Shumway',
  'species':'alf',
  'mass':90,
  'o2Used':function(hrs){return 0.035*hrs},
  'astronautID':414
};
let candidateB = {
  'name':'Lassie',
  'species':'dog',
  'mass':19.1,
  'o2Used':function(hrs){return 0.030*hrs},
  'astronautID':503
};
let candidateC = {
  'name':'Jonsey',
  'species':'cat',
  'mass':3.6,
  'o2Used':function(hrs){return 0.022*hrs},
  'astronautID':796
};
let candidateD = {
  'name':'Paddington',
  'species':'bear',
  'mass':31.8,
  'o2Used':function(hrs){return 0.047*hrs},
  'astronautID':291
};
let candidateE = {
  'name':'Pete',
  'species':'tortoise',
  'mass':417,
  'o2Used':function(hrs){return 0.010*hrs},
  'astronautID':599
};
let candidateF = {
  'name':'Hugs',
  'species':'ball python',
  'mass':2.3,
  'o2Used':function(hrs){return 0.018*hrs},
  'astronautID':890
};

let crew = [candidateA,candidateC,candidateE];

console.log()
console.log(getOxygenExpended(candidateA, 50))
