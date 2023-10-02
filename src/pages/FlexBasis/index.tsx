import './index.scss';

/** flex-item의 특정 미디어쿼리 시점에서 flex-direction에 따라 가로 세로 너비를 서로 바꾸는 방법 */
const FlexBasis = () => {
  return (
    <div className="wrapper">
      <div className="flex-container">
        <div className="flex-item" />
        <div className="flex-item" />
        <div className="flex-item" />
        <div className="flex-item" />
      </div>
    </div>
  );
};

export default FlexBasis;