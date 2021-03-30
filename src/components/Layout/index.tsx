// rfc - cria a estrutura do componete

import React from 'react';


import MobileHeader from '../MobileHeader';
import LeftColumn from '../LeftColumn';
import MiddleColumn from '../MiddleColumn';
import RightColumn from '../RightColumn';

import { Container } from './styles';
import DesktopHeader from '../DesktopHeader';

const layout:React.FC = () => {
  return(
      <Container>
        <DesktopHeader />
        <MobileHeader />
        

          <main>
            <LeftColumn />
            <MiddleColumn />
            <RightColumn />
          </main>
      </Container>
  );
};

export default layout;