// rfc - cria a estrutura do componete

import React from 'react';

import DesktopHeader from '../DesktopHeader'
import MobileHeader from '../MobileHeader';
import LeftColumn from '../LeftColumn';
import MiddleColumn from '../MiddleColumn';
import RightColumn from '../RightColumn';

import { Container } from './styles';

const layout:React.FC = () => {
  return(
      <Container>
        <MobileHeader />
        <DesktopHeader />

          <main>
            <LeftColumn />
            <MiddleColumn />
            <RightColumn />
          </main>
      </Container>
  );
};

export default layout;