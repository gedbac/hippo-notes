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

import React, { Component } from "react";
import styled from "styled-components";
import { textStyles } from "../typography";

var Heading = styled.h4`
  padding: 0;
  margin: 0;
  color: ${props => props.theme.textColorOnSurface};
  ${textStyles.h4}
`;

export default class Heading4 extends Component {

  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.children !== nextProps.children;
  }

  render() {
    const style = {
      color: this.props.color || null
    };
    return <Heading style={style}>{this.props.children}</Heading>;
  }

}