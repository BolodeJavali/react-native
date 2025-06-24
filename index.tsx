import React from "react";
import { useRouter } from 'expo-router'
import { View, Text, Button } from "react-native";
import { Link } from "expo-router";

export default function Page1() {
  const router = useRouter() 
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>
        Página 1 do Stack Navigation
      </Text>
      
      <Link href="/stack/page2">
        <Text style={{ color: "blue", marginBottom: 10 }}>
          Clique aqui para ir para Página 2
        </Text>
      </Link>

      <Button
        title="Ir para Página 2"
        onPress={() => router.push("/pagina2")}
      />
    </View>
  );
}
