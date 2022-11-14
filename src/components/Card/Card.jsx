import "./Card.css";
import HoverVideoPlayer from 'react-hover-video-player';

function Card({ favories, image, prix, video, pricebare, title }) {

  return (
    <>
      <div className="section-products">
        <div id="product-1" className="single-product">
          <div className="part-1">
            {/* <img className="test" src={image} alt="" /> */}
            < HoverVideoPlayer 
      videoSrc={video}
      pausedOverlay={
        <img
          src={image}
          alt=""
          className="test"
          // style={{
          
          //   width: '101%',
          //    height: '101%',
          //   objectFit: 'cover',
            
          //  }}
        />
      }
      loadingOverlay={
        <div className="loading-overlay">
          <div className="loading-spinner"/>
        </div>
      }
    />
          </div>
          <div className="part-2">
            <h3 className="product-title">{title}</h3>
            <h4 className="product-old-price">{pricebare}€</h4>
            <h4 className="product-price">{prix}€</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;