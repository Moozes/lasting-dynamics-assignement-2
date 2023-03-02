import { ParamListBase } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleProp, ViewStyle } from "react-native";

export type TfontWeight =
  | "normal"
  | "bold"
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900"
  | undefined;

export type ScreenProps = NativeStackScreenProps<ParamListBase>;

export type ViewStyleProp = StyleProp<ViewStyle>;

export type TUser = {
  id: string;
  name: string;
  status: string;
  birthday: string;
  city: string;
  country: string;
  number: string;
};

export type TPayment = {
  id: string;
  title: string;
  date: string;
  price: string;
};
