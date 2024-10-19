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
            label.innerHTML = 'Selected file is not an image';
            imagePreview.classList.remove('active');
        }
    } else {
        label.innerHTML = 'Click me to upload image';
        imagePreview.classList.remove('active');
    }
});