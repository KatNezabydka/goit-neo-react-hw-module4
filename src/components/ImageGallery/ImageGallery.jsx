import ImageCard from '../ImageCard/ImageCard.jsx';
import css from '../ImageGallery/ImageGallery.module.css';

const ImageGallery = ({ images, onImageClick }) => (
  <ul className={css.gallery}>
    {images.map((image) => (
      <ImageCard key={image.id} image={image} onClick={() => onImageClick(image)} />
    ))}
  </ul>
);

export default ImageGallery;