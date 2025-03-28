import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import { useState } from "react";
import { Button } from "react-native";
import { Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export default function fecha() {
	const [date, setDate] = useState(new Date(1598051730000));

	const onChange = (event, selectedDate) => {
		const currentDate = selectedDate;
		setDate(currentDate);
	};

	const showMode = (currentMode) => {
		DateTimePickerAndroid.open({
			value: date,
			onChange,
			mode: currentMode,
			is24Hour: true,
		});
	};

	const showDatepicker = () => {
		showMode('date');
	};

	const showTimepicker = () => {
		showMode('time');
	};

	return (
		<SafeAreaView>
			<Button onPress={showDatepicker} title="Show date picker!" />
			<Button onPress={showTimepicker} title="Show time picker!" />
			<Text>selected: {date.toLocaleString()}</Text>
		</SafeAreaView>
	);
};