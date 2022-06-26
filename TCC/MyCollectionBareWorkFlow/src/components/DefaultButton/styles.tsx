import styled, {css} from "styled-components/native";
import color from 'color'

export const Button = styled.TouchableOpacity`
  background-color: ${props => props.theme.colors.primary};
  padding: 10px 20px;
  border-radius: ${props=> props.theme.measures.radius}px;
  margin: 5px 0px;
  align-items: center;
  justify-content: center;
  align-self: stretch;
  flex-direction: row;
`

export const ButtonTitle = styled.Text`
  color: ${props => props.theme.colors.background};
  font-weight: bold;
`

export const LoadingIndicator = styled.ActivityIndicator`
  margin: 0;
  margin-right: 5px;
`
