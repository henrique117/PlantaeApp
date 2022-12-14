import { StackNavigationProp } from "@react-navigation/stack";

// Login Stack
export type LoginStackParamList = {
  Login: undefined;
  Cadastrar: undefined;
  Tab: undefined;
}
type LoginScreenNavigationProp = StackNavigationProp<LoginStackParamList, 'Login'>
export type LoginTypes = {
  navigation: LoginScreenNavigationProp
}

//Edit Stack
export type EditarPerfilStackParamList = {
  Perfil: undefined
  EditarPerfil: undefined
  Sair: undefined
}
type EditarPerfilScreenNavigationProp = StackNavigationProp<EditarPerfilStackParamList, 'Perfil'>
export type EditarPerfilTypes = {
  navigation: EditarPerfilScreenNavigationProp
}

