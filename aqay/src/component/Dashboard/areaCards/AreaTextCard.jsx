import PropTypes from "prop-types";

const AreaTextCard = ({ cardInfo }) => {
  return (
    <div className="area-card">
      <div className="area-card-info">
        <h5 className="info-title">{cardInfo.title}</h5>
        <div className="info-value">{cardInfo.value}</div>
        <p className="info-text">{cardInfo.text}</p>
      </div>
    </div>
  );
};

export default AreaTextCard;

AreaTextCard.propTypes = {
  colors: PropTypes.array.isRequired,
  percentFillValue: PropTypes.number.isRequired,
};
