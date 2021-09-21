import PropTypes from 'prop-types';

import s from './Button.module.css';
export default function Button({ text, onClick }) {
  return (
    <button className={s.root} type="button" onClick={onClick}>
      {text}
    </button>
  );
}

Button.defaultProps = {
  onClick: () => null,
};
Button.propType = {
  onClick: PropTypes.func,
};
