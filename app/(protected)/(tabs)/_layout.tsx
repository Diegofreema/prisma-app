import { Tabs } from 'expo-router';

import { TabsIcon } from '~/components/TabsIcon';
import { colors } from '~/constants';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarInactiveTintColor: colors.dark,
        tabBarActiveTintColor: colors.yellow,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ focused, size }) => <TabsIcon focused={focused} name="home" size={size} />,
        }}
      />
      <Tabs.Screen
        name="menu"
        options={{
          title: 'Menu',
          tabBarIcon: ({ focused, size }) => <TabsIcon focused={focused} name="bars" size={size} />,
        }}
      />
      <Tabs.Screen
        name="more"
        options={{
          title: 'More',
          tabBarIcon: ({ focused, size }) => (
            <TabsIcon focused={focused} name="amazon" size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: 'Account',
          tabBarIcon: ({ focused, size }) => <TabsIcon focused={focused} name="user" size={size} />,
        }}
      />
    </Tabs>
  );
}
