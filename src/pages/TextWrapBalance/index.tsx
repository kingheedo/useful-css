import './index.scss';

/** 반응형으로 줄어들때 title 같은 부분이나 문단의 줄바꿈을 보기 좋게 해주도록
 * 
 * text-wrap: balance를 사용할 수 있다. 다만 safari 같은데서는 아직 지원하지 않는다.
 */
const TextWrapBalance = () => {
  return (
    <div className="text-wrap-balance">
      <h2>
      The purpose of lorem ipsum is to create a natural looking block
      </h2>
      <p>
        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
      </p>
    </div>
  );
};

export default TextWrapBalance;