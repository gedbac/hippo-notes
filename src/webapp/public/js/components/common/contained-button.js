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
import styled  from "styled-components";
import { textStyles } from "../typography";

const ButtonBase = styled.a`
  height: 36px;
  min-width: 96px;
  margin: 0;
  margin-right: 8px;
  display: inline-flex;
  align-items: center;
  text-align: center;
  padding: 0 16px;
  box-sizing: border-box;
  outline: none;
  border-radius: 4px;
  user-select: none;
  color: ${props => props.theme.textColorOnPrimary};
  ${textStyles.button}
  background-color: ${props => props.theme.primaryColor};
`;

const EnabledButton = styled(ButtonBase)`
  cursor: pointer;
  background-position: center;
  background-size: 0;
  background-image: radial-gradient(circle, transparent 1%, ${props => props.theme.primaryColor} 1%);
  transition: background-size 0.8s;
  &:hover {
    background-color: ${props => props.theme.primaryColorLight};
  }
  &:active {
    background-size: 15000%;
    transition: background-size 0s;
  }
`;

const DisabledButton = styled(ButtonBase)`
  background-color: ${props => props.theme.disabledColor};
  color: ${props => props.theme.textColorOnDisabled};
`;

export default class ContainedButton extends Component {

  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.text !== nextProps.text || this.props.disabled !== nextProps.disabled;
  }

  render() {
    if (this.props.disabled) {
      return (
        <DisabledButton>{this.props.text}</DisabledButton>
      );
    }
    return (
      <EnabledButton tabIndex='0' onClick={e => this.onClick(e)}>{this.props.text}</EnabledButton>
    );
  }

  onClick(e) {
    if (this.props.onClick) {
      this.props.onClick(e);
    }
  }

}