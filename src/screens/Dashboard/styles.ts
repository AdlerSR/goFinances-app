import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${props => props.theme.colors.background};
`;

export const Header = styled.View`
  background-color: ${props => props.theme.colors.primary};
  height: ${RFPercentage(42)}px;
`;

export const UserWrapper = styled.View`
  padding: 28px 24px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const UserImage = styled.Image`
  width: ${RFValue(55)}px;
  height: ${RFValue(55)}px;
  border-radius: 10px;
  margin-right: 10px;
`;

export const UserName = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${props => props.theme.fonts.regular};
  color: ${props => props.theme.colors.shape};
`;

export const UserNameBold = styled.Text`
  font-family: ${props => props.theme.fonts.bold};
`;

export const PowerIcon = styled(Feather).attrs({ name: 'power' })`
  color: ${props => props.theme.colors.secondary};
  font-size: ${RFValue(24)}px;
`;

export const HighlightCards = styled.ScrollView.attrs({
  contentContainerStyle: { paddingLeft: 24 },
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  position: absolute;
  margin-top: ${RFPercentage(18)}px;
`;
