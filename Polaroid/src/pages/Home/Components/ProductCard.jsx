import PropTypes from 'prop-types';
export default function ProductCard({item}) {
  return (
    <div className="item item3">
      <div className="flex-col product-home">
        <div className="product-image">
          <img src={`${item.image}`} alt="polaroid" />
        </div>
        <h3>{item.product}</h3>
        <p>{item.price}</p>
      </div>
    </div>
  )
}

ProductCard.propTypes = {
  key: PropTypes.number.isRequired,
  item: PropTypes.object.isRequired,
};