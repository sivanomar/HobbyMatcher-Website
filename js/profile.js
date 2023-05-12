// List of bad words
const badWords = ['crap', 'bitch', 'sex', 'fuck', 'bastard'];

// Get user data from local storage
const avatarUrl = localStorage.getItem('avatar');
const userAvatar = document.getElementById('userAvatar');

// Set user avatar
userAvatar.src = avatarUrl;


function upload() {
  var file = document.getElementById('finput');
  var form = new FormData();

  form.append("image", file.files[0])

  var settings = {
    "url": "https://api.imgbb.com/1/upload?key=bcc56bad76ece711720725d2a509d3dc",
    "method": "POST",
    "timeout": 0,
    "processData": false,
    "mimeType": "multipart/form-data",
    "contentType": false,
    "data": form
  };


  $.ajax(settings).done(function (response) {
    console.log(response);
    var jx = JSON.parse(response);
    localStorage.setItem('avatar', jx.data.url);
    userAvatar.src = jx.data.url;
    console.log(jx.data.url);
  });
}


// set hobbies
const hobbiesField = document.getElementById('hobbiesField');
hobbiesField.innerHTML = localStorage.getItem('hobbies');


// updateHobbies
function updateHobbies() {
  const hobbies = document.getElementById('hobbies').value.trim().toLowerCase();
  
  // Check if the input contains any bad words
  const containsBadWords = badWords.some(word => hobbies.includes(word));
  
  if (containsBadWords) {
    alert('Please remove any bad words from your hobbies.');
    return;
  }
  
  localStorage.setItem('hobbies', hobbies);
  
  // reload the page
  location.reload();
  console.log(hobbies);
}


// set bios
const biofield = document.getElementById('biofield');
biofield.innerHTML = localStorage.getItem('bio');

// update bio
function updateBio() {
  const bio = document.getElementById('myBio').value.trim().toLowerCase();
  
  // Check if the input contains any bad words
  const containsBadWords = badWords.some(word => bio.includes(word));
  
  if (containsBadWords) {
    alert('Please remove any bad words from your bio.');
    return;
  }
  
  localStorage.setItem('bio', bio);
  
  // reload the page
  location.reload();
  console.log(bio);
}
