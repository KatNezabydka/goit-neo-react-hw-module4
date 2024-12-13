import css from '../SearchBar/SearchBar.module.css';
import { Field, Form, Formik } from 'formik';
import clsx from 'clsx';
import btnCss from '../Btn.module.css';
import toast from 'react-hot-toast';

const SearchBar = ({ search, loading }) => {
  const handleSubmit = (values, actions) => {
    (values.query.trim() === '') ? toast.error('Please enter a not empty search query') : search(values.query);
    actions.resetForm();
  };
  return (
    <header>
      <Formik initialValues={{ query: '' }} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form className={css.searchForm}>
            <Field className={css.input} disabled={loading} name="query" type="text" placeholder="Search images..." />
            <button
              className={clsx(btnCss.btn, {
                [btnCss.disabled]: loading || isSubmitting,
              })}
              type="submit">
              Search
            </button>
          </Form>
        )}
      </Formik>
    </header>
  );
};
export default SearchBar;