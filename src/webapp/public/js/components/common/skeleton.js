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
import styled, { keyframes } from "styled-components";

const fadeInAndOut = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
`;

const SkeletonBase = styled.div`
  background-color: ${props => props.theme.disabledColor};
  animation-name: ${fadeInAndOut};
  animation-duration: 1.5s;
  animation-timing-function: ease-in-out;
  animation-delay: 0.5s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
`;

const Circle = styled(SkeletonBase)`
  display: flex;
  flex-direction: column;
  width: 64px;
  height: 64px;
  border-radius: 50%;
`;

const Text = styled(SkeletonBase)`
  width: 256px;
  height: 16px;
  margin: 3px 0;
  border-radius: 4px;
`;

const Rectangle = styled(SkeletonBase)`
  width: 384px;
  height: 96px;
  margin: 16px 0;
`;

export default class Skeleton extends Component {

  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render() {
    if (this.props.kind === 'circle') {
      return <Circle />;
    } else if (this.props.kind === 'text') {
      return <Text />;
    } else if (this.props.kind === 'rect') {
      return <Rectangle />;
    }
  }

}