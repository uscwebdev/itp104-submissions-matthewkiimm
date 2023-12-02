$(document).ready(function() {
    $('.img-gallery img').click(function() {
        // Remove 'active-image' class from all images
        $('.img-gallery img').removeClass('active-image');

        // Add 'active-image' class to the clicked image
        $(this).addClass('active-image');
    });
});
