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

import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
/*
import Startup from "./startup";
import DependencyInjection from "./shared/dependency-injection";
import Application from "./components/application";
*/
import { grid4pt, grid8pt } from "./components/grid-8pt";
import theme from "./components/theme"; 
import StyleguideView from "./components/styleguide-view";

/*
var serviceProvider = new Startup()
  .configure()
  .createServiceProvider();

var WrappedApplication = DependencyInjection.inject(Application, serviceProvider);
*/

const Style = createGlobalStyle`
  body, html, #viewport {
    padding: 0;
    margin: 0;
    height: 100%;
    font-size: 16px;
    font-family: sans-serif;
    font-weight: 400;
  }
  ${grid4pt}
  ${grid8pt}
`;

ReactDOM.render(
  //<WrappedApplication />,
  <ThemeProvider theme={theme}>
    <Style />
    <StyleguideView />
  </ThemeProvider>,
  document.getElementById("viewport")
);