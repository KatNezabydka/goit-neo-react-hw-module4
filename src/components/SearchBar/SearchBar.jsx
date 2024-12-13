import css from '../SearchBar/SearchBar.module.css';
import { Field, Form, Formik } from 'formik';
import clsx from 'clsx';
import btnCss from '../Btn.module.css';

const SearchBar = ({ search, loading }) => {
  const handleSubmit = (values, actions) => {
    if (values.query.trim() !== '') {
      search(values.query);
    }
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