import * as React from "react";
import { ViewProps, SafeAreaView, View } from "react-native";
export function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a * b);
}

export function JigoScreenWrapper({ children }: ViewProps | any) {
  if (Platform.OS === "ios") {
    return (
      <SafeAreaView style={{ flex: 1, }}>
        {children}
      </SafeAreaView>
    )
  } else {
    return (
      <View style={{ flex: 1, }}>
        {children}
      </View>
    )
  }

}