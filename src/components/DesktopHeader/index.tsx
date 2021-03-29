import React from 'react';

import { SearchInput } from '../MobileHeader/styles';

import { 
  Container,
  Wrapper,
  LinkedInIcon,
  SearchInput,
  HomeIcon,
  NotificationIcon,
  CaretDownIcon,
} from './styles';

const DesktopHeader: React.FC = () => {
  return(
    <Container>
      <Wrapper>

        <div className="left">
          <LinkedInIcon />
          <SearchInput placeholder="Pesquisar"/>
        </div>

        <div className="right">
          <nav>
            <button className="active">
              <HomeIcon />
              <span>
                Inicio
              </span>
            </button>
            <button>
              <NotificationIcon />
              <span>
                Notificações
              </span>
            </button>
            <button>
            <ProfileCircle src="https://avatars.githubusercontent.com/u/48796830?v=4" />
              <span>
                Eu <CaretDownIcon />
              </span>
            </button>
          </nav>
        </div>

      </Wrapper>
    </Container>
  );
}

export default DesktopHeader;