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
import styled, { withTheme } from "styled-components";
import View from "./view";
import Heading1 from "./common/heading1";
import Heading2 from "./common/heading2";
import Heading3 from "./common/heading3";
import Heading4 from "./common/heading4";
import Heading5 from "./common/heading5";
import Heading6 from "./common/heading6";
import Paragraph from "./common/paragraph";
import Skeleton from "./common/skeleton";
import ContainedButton from "./common/contained-button";

const Container = styled.div`
  box-sizing: border-box;
  padding: 64px 32px;
  &:not(:last-child) {
    border-bottom: 1px solid #eee;
  }
  &:first-child {
    height: 100%;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.primaryColor};
    color: ${props => props.theme.textColorOnPrimary};
  }
`;

const Header = styled.div`
  margin: 0 auto;
  margin-bottom: 16px;
  max-width: 800px;
`;

const Content = styled.div`
  margin: 0 auto;
  max-width: 800px;
`;

const Section = (props) => {
  return (
    <Container className={props.className}>
      {
        props.title &&
        <Header>
          <Heading4>{props.title}</Heading4>
        </Header>
      }
      <Content>
        {props.children}
      </Content>
    </Container>
  );
};

class StyleguideView extends View {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <>
        <Section>
          <Heading1 color={this.props.theme.textColorOnPrimary}>hippo</Heading1>
        </Section>
        <Section title="Headings">
          <Heading1>h1. Heading</Heading1>
          <Heading2>h2. Heading</Heading2>
          <Heading3>h3. Heading</Heading3>
          <Heading4>h4. Heading</Heading4>
          <Heading5>h5. Heading</Heading5>
          <Heading6>h6. Heading</Heading6>
        </Section>
        <Section title="Skeletons" className="grid-8pt">
          <Skeleton kind="circle" />
          <Skeleton kind="rect" />
          <Skeleton kind="text" />
        </Section>
        <Section title="Buttons">
          <ContainedButton text="Button" onClick={() => { alert("Button has been clicked"); }}/>
          <ContainedButton text="Button" disabled />
        </Section>
        <Section title="Paragraphs">
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eleifend enim eget mi rhoncus, sit amet eleifend nisl 
            tempus. Mauris et tellus a eros mollis faucibus sed sit amet neque. Vivamus commodo quam vitae arcu euismod pretium. 
            Mauris ipsum tortor, efficitur id arcu ac, rhoncus dictum metus. Ut laoreet sed ex id posuere. Class aptent taciti 
            sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut pulvinar metus lectus, eu pharetra odio 
            commodo et. Donec tincidunt nibh et lacus eleifend, blandit semper libero eleifend. Pellentesque dignissim mauris 
            lectus, eget efficitur erat vestibulum malesuada. Phasellus ac rhoncus tortor, non suscipit elit. Proin cursus quam 
            ac risus dapibus, ac rutrum massa laoreet. Curabitur felis dui, bibendum nec rhoncus in, cursus vitae velit. Vivamus 
            ac tellus at lectus cursus hendrerit. Sed fringilla consequat ullamcorper.
          </Paragraph>
          <Paragraph>
            Duis a ipsum id arcu tempor consequat. Quisque congue dui nulla, quis convallis mauris imperdiet eget. In congue 
            lobortis ante, nec lobortis ipsum. Nullam non dolor vel mauris sagittis facilisis. Suspendisse efficitur justo sem, 
            eget venenatis libero consequat vel. Aliquam erat volutpat. Nam in pulvinar tortor. Suspendisse potenti. Nullam in 
            orci in nibh gravida laoreet.
          </Paragraph>
          <Paragraph>
            Quisque elementum diam id eros convallis, eget ornare tellus convallis. Aenean imperdiet velit lectus, at mollis 
            turpis hendrerit imperdiet. Quisque semper, nibh vitae pretium pulvinar, neque turpis dignissim sem, vitae facilisis 
            elit dolor ac mi. Donec cursus fermentum dui, sit amet sollicitudin est viverra sit amet. Vestibulum id efficitur nisi. 
            Praesent porta lectus ac tellus blandit, vel pretium erat tristique. Suspendisse euismod augue sit amet ex molestie 
            egestas. Praesent nec venenatis lorem, ut ultricies leo. Morbi ornare nec enim eu vestibulum. Nunc odio est, vulputate 
            sed rutrum quis, eleifend eget metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Paragraph>
        </Section>
      </>
    );
  }

}

export default withTheme(StyleguideView);