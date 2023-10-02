import './index.scss';

/** grid로 flex-wrap: wrap 과 같은 효과 적용하기
 * 
 * minmax 내에 min(var(--min-column-size), 100%)을 넣는 이유는 
 * 브라우저 크기가 매우 작아졌을때 column이 컨테이너 밖으로 overflow 되는 현상을 막기 위해서
 */
const AutoGridWrap = () => {
  return (
    <div className="auto-grid-wrap">
      <div className="item">
          item1
      </div>
      <div className="item">
          item2
      </div>
      <div className="item">
          item3
      </div>
      <div className="item">
          item4
      </div>
      <div className="item">
          item5
      </div>
      <div className="item">
          item6
      </div>
      <div className="item">
          item7
      </div>
      <div className="item">
          item8
      </div>
    </div>
  );
};

export default AutoGridWrap;