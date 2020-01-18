import { css } from "styled-components";

const grid4pt = css`
  .grid-4pt {
    background:
      repeating-linear-gradient(
        90deg,
        transparent,
        transparent 15px,
        #eeeeee 15px,
        #eeeeee 16px
      ),
      repeating-linear-gradient(
        transparent,
        transparent 15px,
        #eeeeee 15px,
        #eeeeee 16px
      ),
      repeating-linear-gradient(
        90deg,
        transparent,
        transparent 3px,
        #fafafa 3px,
        #fafafa 4px
      ),
      repeating-linear-gradient(
        transparent,
        transparent 3px,
        #fafafa 3px,
        #fafafa 4px
      );
  }
`;

const grid8pt = css`
  .grid-8pt {
    background:
      repeating-linear-gradient(
        90deg,
        transparent,
        transparent 31px,
        #eeeeee 31px,
        #eeeeee 32px
      ),
      repeating-linear-gradient(
        transparent,
        transparent 31px,
        #eeeeee 31px,
        #eeeeee 32px
      ),
      repeating-linear-gradient(
        90deg,
        transparent,
        transparent 7px,
        #fafafa 7px,
        #fafafa 8px
      ),
      repeating-linear-gradient(
        transparent,
        transparent 7px,
        #fafafa 7px,
        #fafafa 8px
      );
  }
`;

export {
  grid4pt,
  grid8pt
};