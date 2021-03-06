lightbox.option({
  'resizeDuration': 500,
  'wrapAround': false
})

//SEARCH BAR
const input = document.getElementById('image-search');

function searchInput() {
// Declare variables
    let filter, images, getInfo, i;
    filter = input.value.toLowerCase();
    images = document.getElementsByClassName('thumb');

// Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < images.length; i++) {
        getInfo = images[i].getElementsByTagName("a")[0];
        if (getInfo.innerHTML.toLowerCase().indexOf(filter) > -1) {
            images[i].style.display = "";
        } else {
            images[i].style.display = "none";
        }
    }
}
