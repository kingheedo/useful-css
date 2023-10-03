/* eslint-disable max-len */
import './index.scss';

/** main과 aside가 있을 때의 레이아웃
 * 
 *  1. aside의 영역을 제외한 나머지는 main이 차지하도록
 *  2. aside가 wrap 적용되어 내려올때 빈영역을 차지하도록
 *  3. flex-grow 수치를 main에 매우 크게 잡으면 우선순위가 aside보다 높아지므로 
 *  브라우저 사이즈 줄일시 main만 커지고 aside는 너비 그대로 유지할 수 있게 된다. */
const MainWithSideBar = () => {
  return (
    <div className="main-with-sidebar">
      <main>
        <h2>
          Lorem ipsum dolor sit amet
        </h2>
        <p>
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p>
          t enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        <p>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          From its medieval origins to the digital era, learn everything there is to know about the ubiquitous lorem ipsum passage.
        </p>
        <p>
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with
        </p>
        <p>
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”
        </p>
      </main>
      <aside>
        <p>
          The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.
        </p>
        <p>
          The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it's seen all around the web; on templates, websites, and stock designs. Use our generator to get your own, or read on for the authoritative history of lorem ipsum.
        </p>
      </aside>
    </div>
  );
};

export default MainWithSideBar;