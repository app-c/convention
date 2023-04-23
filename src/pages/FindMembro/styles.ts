import { RFPercentage } from "react-native-responsive-fontsize";
import { FlatList } from "react-native";
import styled from "styled-components/native";
import { IUserDtos } from "../../dtos";

export const Container = styled.KeyboardAvoidingView`
   flex: 1;
`;

export const Title = styled.Text``;

export const Flat = styled(FlatList as new () => FlatList<IUserDtos>)`
   padding: 20px;
`;

export const Box = styled.View`
   padding: 20px;
`;
