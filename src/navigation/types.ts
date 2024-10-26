import { NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Splash: undefined;
  AuthStack: undefined;
  BottomNavigation: undefined;
  Onboarding: undefined;
};

export type HomeStackParamList = {
  Home: undefined;
  Details: { name: string };
  Search: undefined;
  CreateFarm: undefined;
};
export type AuthStackParamList = {
  Signup: undefined;
  Login: undefined;
};

export type TabParamList = {
  HomeStack: NavigatorScreenParams<HomeStackParamList>;
  HistoryStack: undefined;
  NotificationsStack: undefined;
  SettingsStack: NavigatorScreenParams<SettingsStackParamList>;
  ProfileStack: NavigatorScreenParams<ProfileStackParamList>;
  Merchant: undefined;
};

export type SettingsStackParamList = {
  Settings: undefined;
  ProfileStack: undefined;
  ChangePin: undefined;
  ChangePassword: undefined;
};

export type ProfileStackParamList = {
  UpdateProfile: { userId: string };
  Profile: undefined;
};
export type NotificationsStackParamList = {
  Notifications: undefined;
  NotificationDetail: undefined;
};
export type HistoryStackParamList = {
  // UpdateProfile: { userId: string };
  History: undefined;
};
export type UserKycStackParamList = {
  KycDetails: undefined;
  KycSuccess: undefined;
  KycType: undefined;
  front: undefined;
  back: undefined;
  selfie: undefined;
  VerifyKyc: undefined;
};
export type ScreenProps = NativeStackScreenProps<RootStackParamList>;
