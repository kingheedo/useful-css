import './index.scss';

/** width가 auto 일떄와 100% 일때
 * 
 * p태그가 좌우 여백이 있는 상태에서 width가 100%라면 스크롤이 생기게 된다.
 * 이는 너비는 부모 너비 100프로를 가져간 상태에서 좌우 여백이 더 생기기 떄문이다.
 * 
 * 이때는 auto를 사용하는게 적절하다. auto는 사용가능한 공간을 넘치지 않고 사용한다는 의미이다.
 * 이렇게 하면 화면의 너비가 줄어들때에도 스크롤영역이 발생하지 않고 콘텐츠의 너비가 알맞게 줄어들게 된다.
 */
const WidthAuto100 = () => {
  return (
    <div className="width-auto-100">
      <p>
        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
      </p>
    </div>
  );
};

export default WidthAuto100;