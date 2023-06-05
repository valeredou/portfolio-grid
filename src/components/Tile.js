const Tile = ({ className, children }) => {
  return (
    <div className={`tile ${className}`}>{children ? children : "Tile"}</div>
  );
};

export default Tile;
