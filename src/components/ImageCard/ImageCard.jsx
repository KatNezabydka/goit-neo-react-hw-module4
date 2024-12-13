import css from './ImageCard.module.css';

const ImageCard = ({ image, onClick }) => (
  <li className={css.galleryCard} onClick={onClick}>
    <img className={css.galleryImg} src={image.urls.small} alt={image.alt_description || 'Image'} />
  </li>
);

export default ImageCard;