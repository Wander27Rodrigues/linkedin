import styled, { css } from 'styled-components';
import { GrLinkedin } from 'react-icons/gr';
import { AiFillHome, AiOutlineBell, AiFillCaretDown } from 'react-icons/ai';


export const Container = styled.header`
    backgound: var(--color-header);
    padding: 0 30px;

    position: fixed;
    top: 0;
    left: 0;
    rigth: 0;
    z-index: 2;

    display: none;

    @media(min-width: 1180px) {
        diplay:block;
    }
`;

export const Wrapper = styled.div`
    diplay: flex;
    justify-content: space-between;

    max-width: 1128px;
    margin: 0 auto;
    height: 52;

    .left,
    .right {
        display: flex;
        aling-items: center;
    }

    .right nav{
        height: 100%;
    }

    button {
        background: none;
        border: 0;
        outline: 0;

        display: flex;
        flex-direction: column;
        aling-items: center;
        justify-content: center;
        min-width: 90px;
        min-height: 100%;

        color: var(--color-icons);
        cursor: pointer;
        $:houver{
            color: var(--color-white);
        }
        &.active{
            border-bottom: 2px solid var(--color-white);
        }
    }
`;

export const LinkedInIcon = styled(GrLinkedin)``;

export const SearchInput = styled.div``;

// aplicando css em todos os icons
const generalIconCSS = css`
    width: 24px;
    height: 24px;
`;

export const HomeIcon = styled(AiFillHome)`
    ${generalIconCSS}
`;

export const NotificationIcon = styled(AiOutlineBell)`
    ${generalIconCSS}
`;

export const ProfileCircle = styled.div`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 1px solid var(--color-icons);
`;

export const CaretDownIcon = styled(AiFillCaretDown)`
    ${generalIconCSS}
`;
