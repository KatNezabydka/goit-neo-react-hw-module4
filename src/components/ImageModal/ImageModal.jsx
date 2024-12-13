import Modal from 'react-modal';
import css from '../ImageModal/ImageModal.module.css';
import btnCss from '../Btn.module.css';
import clsx from 'clsx';

const ImageModal = ({ isOpen, image, onClose }) => {

  return <Modal
    isOpen={isOpen}
    onRequestClose={onClose}
    contentLabel="Image Modal"
    className={css.content}
    overlayClassName={css.overlay}
  >
    <div className={css.modalInner}>
      <img src={image.urls.regular} alt={image.alt_description || 'Image'} />
      <p>Author: {image.user.name}</p>
      <p>Likes: {image.likes}</p>
      <button className={clsx(btnCss.btn, btnCss.loadMoreBtn)} onClick={onClose}>Close</button>
    </div>
  </Modal>;
};

export default ImageModal;