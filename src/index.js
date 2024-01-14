console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function() {
    fetchImages()
    fetchBreeds()
    changeColor()
    filterBreeds()
  })
  
  
  // Challenge 4 - Add a dropdown menu to the page that filters the breeds that are displayed in the <ul> by letter. For example, if the user selects 'a' in the dropdown, only show the breeds with names that start with the letter a. For simplicity, the dropdown only includes the letters a-d. However, we can imagine expanding this to include the entire alphabet
  function filterBreeds() {
      const dropdown = document.querySelector('#breed-dropdown')
      console.log(dropdown)
      
      dropdown.addEventListener('change', function(event) {
          const letter = event.target.value;
          const ul = document.getElementById('dog-breeds');
          const li = ul.getElementsByTagName('li');
          for (let i = 0; i < li.length; i++) {
              if (li[i].innerText.charAt(0) === letter) {
                  li[i].style.display = '';
              } else {
                  li[i].style.display = 'none';
              }
          }
      });
  }
  
  // Creating a function for changing the color of the text when the user clicks on it
  function changeColor() {
      const ul = document.getElementById('dog-breeds');
      // console.log(ul)
      ul.addEventListener('click', function(event) {
          event.target.style.color = 'red';
      });
      
  }
  
  function fetchImages() {
      const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
      fetch(imgUrl)
      .then(resp => resp.json())
      .then(json => renderImages(json));
  }
  
  function renderImages(json) {
      const main = document.getElementById('dog-image-container');
      json.message.forEach(image => {
          const img = document.createElement('img');
          img.src = image;
          main.appendChild(img);
      });
  }
  
  function fetchBreeds() {
      const breedUrl = 'https://dog.ceo/api/breeds/list/all'
      fetch(breedUrl)
      .then(resp => resp.json())
      .then(json => renderBreeds(json));
  }
  
  function renderBreeds(json) {
      const ul = document.getElementById('dog-breeds');
      for (const breed in json.message) {
          const li = document.createElement('li');
          li.innerText = breed;
          ul.appendChild(li);
      }
  }