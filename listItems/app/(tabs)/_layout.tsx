import { Tabs } from 'expo-router';

import Ionicons from '@expo/vector-icons/Ionicons';


export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerTitleAlign: 'left', // 👈 Isso alinha o texto do header à esquerda
        tabBarActiveTintColor: 'white',
        headerStyle: { backgroundColor: 'white' },
        headerShadowVisible: false,
        headerTintColor: 'black',
        tabBarStyle: { backgroundColor: '#25292e' },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }: any) => (
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'About',
          tabBarIcon: ({ color, focused }: any) => (
            <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24} />
          ),
        }}
      />
    </Tabs>
  );
}



/*
Header de cada tela com:

  headerStyle (cor do fundo)

  headerTintColor (cor do texto e ícones)

  headerShadowVisible (sombra ou não)

Rodapé com abas (Bottom Tabs) com:

  tabBarStyle (cor e estilo do rodapé)

  tabBarActiveTintColor (cor da aba ativa)

*/