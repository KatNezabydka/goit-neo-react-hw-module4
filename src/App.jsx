import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import ImageGallery from './components/ImageGallery/ImageGallery.jsx';
import Loader from './components/Loader/Loader.jsx';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn.jsx';
import ImageModal from './components/ImageModal/ImageModal.jsx';
import { getImages } from './services/api.js';


const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [totalImages, setTotalImages] = useState(0);

  useEffect(() => {
    if (!query) return;
    if (!query.trim()) {
      toast.error('Please enter a search query.');
      return;
    }
    const fetchImages = async () => {
      setLoading(true);
      try {
        const response = await getImages(query, page);

        if (page === 1) {
          if (response.total === 0) {
            toast.error('There is no image for this queue.');
            return;
          }
          setTotalImages(response.total);
        }
        setImages((prev) => [...prev, ...response.results]);
      } catch {
        toast.error('Failed to fetch images.');
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [query, page]);

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setImages([]);
    setPage(1);
    setTotalImages(0);
  };

  const handleImageClick = (image) => {
    if (!selectedImage) {
      setSelectedImage(image);
    }
  };

  const loadMore = () => setPage((prev) => prev + 1);
  const canLoadMore = images.length < totalImages;

  return (
    <div>
      <Toaster position="top-right" />
      <SearchBar search={handleSearch} loading={loading} />
      <ImageGallery images={images} onImageClick={handleImageClick} />
      {loading && <Loader />}
      {canLoadMore && !loading && <LoadMoreBtn onClick={loadMore} />}
      {selectedImage && (
        <ImageModal
          isOpen={!!selectedImage}
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
};

export default App;