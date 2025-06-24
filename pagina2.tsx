import React from "react";
import { View, Text } from "react-native";
import { Link } from "expo-router";

export default function Page2() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>
        Página 2 do Stack Navigation
      </Text>
      
      <Link href="/stack/page1">
        <Text style={{ color: "blue" }}>
          Voltar para Página 1
        </Text>
      </Link>
    </View>
  );
}
