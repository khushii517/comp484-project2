// Giga Pet Project 2
// Unique jQuery methods used for this project: .on() and .html().
var pet_info = { name: 'Buddy', weight: 20, happiness: 50, energy: 50 };

var messages = {
  treat: 'Yum! Buddy loved the treat.',
  play: 'That was fun! Buddy is happy.',
  exercise: 'Great workout! Buddy feels healthier.',
  rest: 'Zzz... Buddy is feeling refreshed.'
};

$(function() {
  checkAndUpdatePetInfoInHtml();

  // .on() is one of Khushi Patel's two unique jQuery methods.
  $('.button-container').on('click', 'button', function() {
    var buttonClasses = this.className;
    var action = buttonClasses.indexOf('treat-button') !== -1 ? 'treat' :
      buttonClasses.indexOf('play-button') !== -1 ? 'play' :
      buttonClasses.indexOf('exercise-button') !== -1 ? 'exercise' : 'rest';
    performAction(action);
  });
});

function performAction(action) {
  if (action === 'treat') {
    pet_info.happiness += 10;
    pet_info.weight += 2;
  } else if (action === 'play') {
    pet_info.happiness += 8;
    pet_info.weight -= 1;
    pet_info.energy -= 5;
  } else if (action === 'exercise') {
    pet_info.happiness -= 3;
    pet_info.weight -= 2;
    pet_info.energy -= 10;
  } else if (action === 'rest') {
    pet_info.happiness += 4;
    pet_info.energy += 15;
  }
  checkAndUpdatePetInfoInHtml();
  showPetMessage(messages[action]);
}

function checkAndUpdatePetInfoInHtml() {
  checkPetStatsBeforeUpdating();
  updatePetInfoInHtml();
}

function checkPetStatsBeforeUpdating() {
  pet_info.weight = Math.max(0, pet_info.weight);
  pet_info.happiness = Math.max(0, pet_info.happiness);
  pet_info.energy = Math.max(0, pet_info.energy);
}

function updatePetInfoInHtml() {
  $('.name').text(pet_info.name);
  $('.weight').text(pet_info.weight);
  $('.happiness').text(pet_info.happiness);
  $('.energy').text(pet_info.energy);
}

function showPetMessage(message) {
  // .html() is the second unique jQuery method used in this project.
  $('.pet-message').html(message);
}
