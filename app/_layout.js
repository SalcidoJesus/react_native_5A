import { Stack } from 'expo-router';
import { PaperProvider } from 'react-native-paper';

export default function Layout() {
	return (
		<PaperProvider>
			<Stack screenOptions={{
				animation: 'slide_from_right',
				headerStyle: {
					backgroundColor: 'orange',
				},
			}}>

				<Stack.Screen name="index" options={{
					headerTitle: 'Inicio',
					headerShown: false
				}} />
				<Stack.Screen name="home" options={{
					headerTitle: 'Home'
				}} />
				<Stack.Screen name="menu" options={{
					headerShown: false
				}} />

				<Stack.Screen name="cajas/flexbox" options={{
					headerTitle: 'FlexBox'
				}} />

				<Stack.Screen name="spotify" options={{
					headerShown: false,
				}} />

			</Stack>
		</PaperProvider>
	);
}
