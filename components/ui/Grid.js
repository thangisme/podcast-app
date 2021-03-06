import PropTypes from 'prop-types';

const Grid = ({ children }) => {
  return (
    <div className="grid">
      {children}

      <style jsx>{`
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
          grid-gap: 2rem 0.8rem;
          padding: 24px 0;
        }
      `}</style>
    </div>
  );
};

export default Grid;

Grid.propTypes = {
  children: PropTypes.node.isRequired,
};
