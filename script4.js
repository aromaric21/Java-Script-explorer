const searchString = document.getElementById('search-field').value;
console.log(searchString);


const homepageField = document.getElementById('homepage-field');
const homepageURL = homepageField.value;
homepageField.value = homepageURL.toLowerCase();