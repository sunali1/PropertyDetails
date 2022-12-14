import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components'

export const AccountListItem = styled.li`
  display: flex;
  width: 100%;
  justify-content: space-between;
  &:not(:last-of-type) {
    margin-bottom: ${(props) => props.theme.space.m};
  }
`;

export const InfoText = styled.div`
  line-height: 1.6;
  font-size: ${(props) => props.theme.typography.m.fontSize};
  color: ${(props) => props.theme.colors.neutral[600]};
  align-self: center;
`;

const ListItem = ({item, children}) => (
    <AccountListItem>
        <InfoText>{item}</InfoText>
        {children}
    </AccountListItem>
)
ListItem.propTypes = {
    item: PropTypes.string,
    children: PropTypes.node,
}

export default ListItem