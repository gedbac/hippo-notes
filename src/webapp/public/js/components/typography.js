/*
 *  Hippo Notes
 *
 *  Copyright (C) 2016 - 2020 The Hippo Notes Authors
 *
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU Affero General Public License as
 *  published by the Free Software Foundation, either version 3 of the
 *  License, or (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU Affero General Public License for more details.
 *
 *  You should have received a copy of the GNU Affero General Public License
 *  along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

import { css } from "styled-components";

const fonts = css`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700,700i&display=swap');
`;

const h1 = css`
  font-size: 96px;
  line-height: 128px;
  letter-spacing: -1.5px;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
`;

const h2 = css`
  font-size: 60px;
  line-height: 80px;
  letter-spacing: -0.5px;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
`;

const h3 = css`
  font-size: 48px;
  line-height: 64px;
  letter-spacing: 0;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
`;

const h4 = css`
  font-size: 34px;
  line-height: 48px;
  letter-spacing: 0.25px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
`;

const h5 = css`
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
`;

const h6 = css`
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0.15px;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
`;

const subtitle1 = css`
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.15px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
`;

const subtitle2 = css`
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
`;

const body1 = css`
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.5px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
`;

const body2 = css`
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.25px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
`;

const button = css`
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 1.25px;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  text-transform: uppercase;
`;

const caption = css`
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.4px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
`;

const overline = css`
  font-size: 10px;
  line-height: 14px;
  letter-spacing: 1.5px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  text-transform: uppercase;
`;

const textStyles = {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  subtitle1,
  subtitle2,
  body1,
  body2,
  button,
  caption,
  overline
};

export {
  fonts,
  textStyles
};