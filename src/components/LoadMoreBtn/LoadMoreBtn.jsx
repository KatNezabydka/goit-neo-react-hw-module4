import clsx from 'clsx';
import btnCss from '../Btn.module.css';

const LoadMoreBtn = ({ onClick }) => (
  <button className={clsx(btnCss.btn, btnCss.loadMoreBtn)} onClick={onClick}>Load More</button>
);

export default LoadMoreBtn;