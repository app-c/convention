import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import theme from "../../themes/theme";

const { colors } = theme;

interface IProps {
   select: boolean;
}

export const Container = styled.TouchableOpacity`
   width: ${RFValue(25)}px;
   height: ${RFValue(25)}px;
   border-radius: 15px;
   border-width: 3px;
   border-color: ${colors.gray[2]};
   align-items: center;
   justify-content: center;
`;

export const Circle = styled.View<IProps>`
   width: ${RFValue(12)}px;
   height: ${RFValue(12)}px;
   border-radius: 15px;
   background-color: ${({ select }) =>
      select ? colors.yellow[1] : colors.gray[2]};
`;

export const Title = styled.Text``;
