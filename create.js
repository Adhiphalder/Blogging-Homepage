/*-----------------*\
      DROPDOWN
\*-----------------*/

document.addEventListener('DOMContentLoaded', function() {
    const dropdownButton = document.querySelector('.dropdown3-click-button');
    const dropdownContent = document.querySelector('.section-dropdown3');

    dropdownButton.addEventListener('click', function(event) {
        event.stopPropagation();
        dropdownContent.classList.toggle('show');
    });

    document.addEventListener('click', function(event) {
        if (!dropdownContent.contains(event.target) && !dropdownButton.contains(event.target)) {
            dropdownContent.classList.remove('show');
        }
    });
});

/*-----------------*\
  IMAGE UPLODATION
\*-----------------*/

document.getElementById('create-post-form-img').addEventListener('change', function() {
    const fileInput = this;
    const imagePreview = document.getElementById('image-preview');
    const label = document.getElementById('upload-label');

    imagePreview.innerHTML = '';

    if (fileInput.files && fileInput.files.length > 0) {
        const file = fileInput.files[0];

        if (file.type.startsWith('image/')) {
            const reader = new FileReader();

            reader.onload = function(e) {
                const img = document.createElement('img');
                img.src = e.target.result;

                imagePreview.classList.add('active');

                imagePreview.appendChild(img);
            };

            reader.readAsDataURL(file);

            label.innerHTML = `File selected: ${file.name}`;
        } else {
            label.innerHTML = 'Please select an image';
            imagePreview.classList.remove('active');
        }
    } else {
        label.innerHTML = 'Click me to upload image';
        imagePreview.classList.remove('active');
    }
});

/*-----------------*\
  COMMUNITY SEARCH
\*-----------------*/


function toggleSearchBar(event) {
    event.stopPropagation();
    const searchBar = document.getElementById('create-post-community-search-bar');
    const createButton = document.getElementById('create-post-community-button');

    searchBar.style.opacity = '1';
    searchBar.style.pointerEvents = 'auto';

    createButton.style.opacity = '0';
    createButton.style.pointerEvents = 'none';

    document.addEventListener('click', handleOutsideClick);
  }

  function handleOutsideClick(event) {
    const searchBar = document.getElementById('create-post-community-search-bar');
    const createButton = document.getElementById('create-post-community-button');
    const searchInput = document.getElementById('post-community-search-input');

    if (!searchBar.contains(event.target) && !searchInput.contains(event.target)) {
      searchBar.style.opacity = '0';
      searchBar.style.pointerEvents = 'none';

      createButton.style.opacity = '1';
      createButton.style.pointerEvents = 'auto';

      document.removeEventListener('click', handleOutsideClick);
    }
  }

  function search() {
    const query = document.getElementById('post-community-search-input').value;
    alert(`Searching for: ${query}`);
  }

  function search() {
    const query = document.getElementById('post-community-search-input').value;
    alert(`Searching for: ${query}`);
  }