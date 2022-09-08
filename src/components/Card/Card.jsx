import "./Card.css";

function Card({ favoris, image, prix, pricebare, description, title }) {
  return (
    <>
      <div className="section-products">
        <div id="product-1" className="single-product">
          <div className="part-1">
            <img className="test" src={image} alt="" />
            <ul>
              <li>
                <a href="#">
                  <i className="fas fa-heart"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fas fa-plus"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fas fa-expand"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="part-2">
            <h3 className="product-title">{title}</h3>
            <h4 className="product-old-price">${pricebare}</h4>
            <h4 className="product-price">{prix},00€</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;