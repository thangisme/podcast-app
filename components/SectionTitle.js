import { colors, fontWeight } from 'styles/theme';
import PropTypes from 'prop-types';

const SectionTitle = ({ title, button }) => (
  <div className="section-title">
    <h2 className="main-title">{title}</h2>

    {button}

    <style jsx>{`
      .section-title {
        border-bottom: 1px solid ${colors.lightGray};
      }
      .main-title {
        font-weight: ${fontWeight.bold};
        color: ${colors.midGray};
      }
    `}</style>

    <style jsx>{`
      .section-title {
        display: flex;
        justify-content: space-between;
        align-content: center;
        padding: 1rem 0;
      }
      .main-title {
        font-size: 0.7rem;
        text-transform: uppercase;
        margin: auto 0;
      }
    `}</style>
  </div>
);

export default SectionTitle;

SectionTitle.defaultProps = {
  button: null,
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  button: PropTypes.element,
};
