import styled, { css } from "styled-components";

export const InfoValue = styled.span`
  line-height: 1.6;
  :first-child {padding-right: 10px;}
  font-size: ${(props) => props.theme.typography.m.fontSize};
  color: :${(props) => props.color == 'positive' ?  '#006b57' : props.theme.colors.neutral[600]};
`;

export const Inset = styled.div`
  padding: 0 ${(props) => props.theme.space.m};
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
