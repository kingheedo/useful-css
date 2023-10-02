/* eslint-disable max-len */
import './index.scss';

/** 특정 엘리먼트 ex: (.accent의 첫번째)를 nth-of-type 으로 접근시 css가 적용 되지 않는 현상 해결법
 * 
 * :nth-child(1 of .accent) 와 같이 작성하면 정상 작동.
 */
const NthChild = () => {
  return (
    <article className="article">
      <h1 className="article-title">
        <code>:nth-child</code>
      </h1>
      <time dateTime="2023-10-02">October 2th</time>
      <p>
        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
      </p>
      <p>
        The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
      </p>
      <p className="accent">
        this is accent paragraph
      </p>
      <p>
        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
      </p>
      <p className="accent">
        The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout.
      </p>
      <p>
        The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
      </p>
      <p className="accent">
        A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.
      </p>
      <p>
        The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
      </p>
      <p className="accent">
        The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software.
      </p>
    </article>
  );
};

export default NthChild;