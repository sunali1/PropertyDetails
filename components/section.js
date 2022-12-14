import React from 'react';
import PropTypes from 'prop-types'
import styled, {css} from 'styled-components'
import RowContainer from './row-container';

export const AccountSectionWrapper = styled.div`
  padding: ${(props) => props.theme.space.m} 0;
  &:not(:last-of-type) {
    border-bottom: 1px solid ${(props) => props.theme.colors.neutral[200]};
  }
}
`;
export const AccountLabel = styled.div`
  font-size: ${(props) => props.theme.typography.xl.fontSize};
  line-height: ${(props) => props.theme.typography.xl.lineHeight};
  color: ${(props) => props.theme.colors.neutral[900]};
  margin-bottom: ${(props) => props.theme.space.s};
`;

export const AccountHeadline = styled.h2`
  font-size: ${(props) => props.theme.typography["3xl"].fontSize};
  line-height: ${(props) => props.theme.typography["3xl"].lineHeight};
  font-weight: normal;
  color: ${(props) => props.theme.colors.neutral[900]};
  margin-bottom: ${(props) => props.theme.space.m};
`;

export const AccountList = styled.ul`
display: flex;
flex-direction: column;
width:100%;
  list-style: none;
  padding-left: 0;
`;

const Section = ({label, amount, children}) => (
  <AccountSectionWrapper>
    {label && <AccountLabel>{label}</AccountLabel>}
    {amount && <AccountHeadline>{amount}</AccountHeadline>}
    <RowContainer onClick={() => alert(`You have navigated to the ${label} page`)}>
    <AccountList>
    {children}
    </AccountList>
    </RowContainer>
  </AccountSectionWrapper>
)

Section.propTypes = {
    label: PropTypes.string, 
    amount: PropTypes.string, 
    children: PropTypes.node, 
}

export default Section;