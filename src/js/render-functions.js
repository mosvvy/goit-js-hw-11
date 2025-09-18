import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  overlayOpacity: 0.8,
});

/*
Ця функція повинна приймати масив images, 
створювати HTML-розмітку для галереї, 
додавати її в контейнер галереї та 
викликати метод екземпляра SimpleLightbox refresh(). 
Нічого не повертає*/
function createGallery(images) {}

/*
Ця функція нічого не приймає та 
повинна очищати вміст контейнера галереї. 
Нічого не повертає. */
function clearGallery() {}

/*
Ця функція нічого не приймає, 
повинна додавати клас для відображення лоадера. 
Нічого не повертає. */
function showLoader() {}

/*
Ця функція нічого не приймає, 
повинна прибирати клас для відображення лоадера. 
Нічого не повертає. */
function hideLoader() {}
