let activeDog = 0;

let dogs = [{
  name: 'Zues',
  pets: 0,
  moods: ['Sad', 'Alert', 'Happy', 'Overjoyed'],
  tolerance: 4,
  moodIndex: 0,
  images: ['/assets/sad-dog.jpg', '/assets/dog-att.jpg', '/assets/happy-dog.jpg', '/assets/super-excited-dog.jpg']
}, {
  name: 'Archiles',
  pets: 0,
  moods: ['Sad', 'Alert', 'Happy', 'Overjoyed'],
  tolerance: 4,
  moodIndex: 0,
  images: ['/assets/sad-dog.jpg', '/assets/dog-att.jpg', '/assets/happy-dog.jpg', '/assets/super-excited-dog.jpg']
}, {
  name: 'Hercules',
  pets: 0,
  moods: ['Sad', 'Alert', 'Happy', 'Overjoyed'],
  tolerance: 4,
  moodIndex: 0,
  images: ['/assets/sad-dog.jpg', '/assets/dog-att.jpg', '/assets/happy-dog.jpg', '/assets/super-excited-dog.jpg']
}, {
  name: 'Duke',
  pets: 0,
  moods: ['Sad', 'Alert', 'Happy', 'Overjoyed'],
  tolerance: 4,
  moodIndex: 0,
  images: ['/assets/sad-dog.jpg', '/assets/dog-att.jpg', '/assets/happy-dog.jpg', '/assets/super-excited-dog.jpg']
}, {
  name: 'Shadow',
  pets: 0,
  moods: ['Sad', 'Alert', 'Happy', 'Overjoyed'],
  tolerance: 4,
  moodIndex: 0,
  images: ['/assets/sad-dog.jpg', '/assets/dog-att.jpg', '/assets/happy-dog.jpg', '/assets/super-excited-dog.jpg']
}]

function pet() {
  dogs[activeDog]++
  if (dogs[activeDog].pets % dogs[activeDog].tolerance == 0) {
    dogs[activeDog].moodIndex++;
  }
  setDog()
}

function setDog() {
  document.getElementById('mood').innerText = dogs[activeDog].mood
  document.getElementById('pet').innerText = dogs[activeDog].pet
  document.getElementById('dog-image').setAttribute('src', dogs[activeDog].images[dogs[activeDog].moodIndex])
  if (dogs[activeDog].moodIndex == dogs[activeDog].mood.length - 1) {
    document.getElementById('pet-button').disabled = true;
  } else {
    document.getElementById('pet-button').disabled = false;
  }
}

function abandoned() {
  dogs[activeDog].moodIndex = 0;
  dogs[activeDog].pet = 0;
  setDog();
}

function activeDog() {
  activeDog = index;
  setDog()
}


function setDogButtons() {
  let template = ''
  for (let i = 0; i < dogs.length; i++) {
    let dog = dogs[i];
    template += `
        <button class="btn btn-dark" onclick="setActiveDog(${i})">${dog.name}</button>`
  }
  document.getElementById('dog-buttons').innerHTML = template
}
setDogButtons()
