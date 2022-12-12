import styled, { css } from "styled-components";

export const AccountList = styled.ul`
width:100%;
  list-style: none;
  padding-left: 0;
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

export const InfoText = styled.div`
  line-height: 1.6;
  font-size: ${(props) => props.theme.typography.m.fontSize};
  color: ${(props) => props.theme.colors.neutral[600]};
  align-self: center;
`;
export const InfoValue = styled.div`
  line-height: 1.6;
  :first-child {padding-right: 10px;}
  font-size: ${(props) => props.theme.typography.m.fontSize};
  color: :${(props) => props.color == 'positive' ?  '#006b57' : props.theme.colors.neutral[600]};
`;

export const AccountSection = styled.div`
  padding: ${(props) => props.theme.space.m} 0;
  &:not(:last-of-type) {
    border-bottom: 1px solid ${(props) => props.theme.colors.neutral[200]};
  }
}
`;

export const AccountListItem = styled.div`
  display: flex;
  justify-content: space-between;
  &:not(:last-of-type) {
    margin-bottom: ${(props) => props.theme.space.m};
  }
`;

export const Inset = styled.div`
  padding: 0 ${(props) => props.theme.space.m};
`;

export const ValueChange = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
margin-bottom: ${(props) => props.theme.space.m};
`;

export const InfoValueWrapper = styled.div`
display: flex;
justify-content: center;
  /* colours are used to indicate positive change */
background-color:${(props) => props.bg == 'positive' ?  '#c2f7e1' : props.theme.colors.neutral};
font-weight: bold;
border-radius: ${(props) => props.theme.space.m};
padding: ${(props) => (css` ${props.theme.space.xs} ${props.theme.space.l}`)};
border: none;
min-width: fit-content;
flex-basis: 50%;
${(props) => (css` 
  @media screen and (min-width: 768px) {
  flex-basis: 33%;
  }`
)}
`;

export const InfoPercent = styled.div`
display: flex;
border-radius: ${(props) => props.theme.space.m};
line-height: 1.6;
padding-right: 0;
font-size: ${(props) => props.theme.typography.m.fontSize};
  /* colours are used to indicate positive change */
color: :${(props) => props.color == 'positive' ?  '#006b57' : props.theme.colors.neutral[600]};
`;
