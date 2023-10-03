import './index.scss';

const BgImage = () => {
  return (
    <div className="bg-image-grid">
      <div className="bg-1">
        <p>
          top left
        </p>
      </div>
      <div className="bg-2">
        <p>
          top center
        </p>
      </div>
      <div className="bg-3">
        <p>
          top right
        </p>
      </div>
      <div className="bg-4">
        <p>
          center left
        </p>
      </div>
      <div className="bg-5">
        <p>
          center center
        </p>
      </div>
      <div className="bg-5">
        <p>
          center right
        </p>
      </div>
      <div className="bg-6">
        <p>
          bottom left
        </p>
      </div>
      <div className="bg-7">
        <p>
          bottom center
        </p>
      </div>
      <div className="bg-8">
        <p>
          bottom right
        </p>
      </div>
    </div>
  );
};

export default BgImage;