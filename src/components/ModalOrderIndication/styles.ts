import styled from "styled-components/native";
import theme from "../../themes/theme";

const { colors, fonts } = theme;

export const Container = styled.View`
   width: 100%;
   height: 250px;
   padding: 15px;
`;

export const Title = styled.Text`
   font-size: 16px;
   font-family: ${fonts.bold};
`;

export const Description = styled.Text`
   font-size: 16px;
   font-family: ${fonts.bold};
`;

export const BoxButon = styled.View`
   flex-direction: row;
   justify-content: space-around;
   margin-top: 15px;
`;

export const ButonOk = styled.TouchableOpacity`
   width: 70px;
   height: 30px;
   border-radius: 5px;
   align-items: center;
   justify-content: center;

   background-color: ${colors.green[2]};
`;

export const ButonCancel = styled.TouchableOpacity`
   width: 70px;
   height: 30px;
   border-radius: 5px;
   align-items: center;
   justify-content: center;

   background-color: ${colors.alert[2]};
`;

export const TextButon = styled.Text`
   font-size: 16px;
   font-family: ${fonts.bold};
   color: ${colors.green[1]};
`;
