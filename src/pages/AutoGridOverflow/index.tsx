import './index.scss';

/** grid로 스크롤 영역 만들기
 * 
 * 1. grid-auto-flow: row는 세로 overflow를 시킬 때, grid-auto-flow: column은 가로 overflow를 시킬 때 적용
 * 2. grid-auto-rows: 30% => grid item의 세로가 컨테이너의 30프로를 차지하게 된다.
 * 3. scroll-snap-type: y mandatory, scroll-snap-align: start를 통해 스크롤시 아이템 첫번째가 보이도록 설정,
 * 4. scroll-padding 값을 주어 컨테이너와 아이템의 간격 재조정
 */
const AutoGridOverflow = () => {
  return (
    <div className="auto-grid-overflow">
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

export default AutoGridOverflow;