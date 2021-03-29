import styled, { css } from 'styled-components';
import {GrLinkedin} from 'react-icons/gr';
import {AiFillHome, AiOutlineBell, AiFillCaretDown} from 'react-icons/ai';


export const Container = styled.div``;

export const Wrapper = styled.div``;

export const LinkedInIcon = styled(GrLinkedin)``;

export const SearchInput = styled.div``;

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
