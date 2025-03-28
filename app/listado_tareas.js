
import { View, Text, TouchableOpacity, ScrollView, Button } from 'react-native'
import { cliente_axios } from '../global/cliente_axios'
import { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, List } from 'react-native-paper';
import { router, useFocusEffect } from 'expo-router';

export default function listado_tareas() {

	// variables
	const [tareas, setTareas] = useState([]);
	const [cargando, setCargando] = useState(true);

	async function leer_tareas() {
		setCargando(true);
		const resultado = await cliente_axios.get('/tareas');
		console.log(resultado.data);
		setTareas( resultado.data );
		setCargando(false);
	}

	// se ejecuta cuando la pantalla se enfoca
	useFocusEffect(
		useCallback(() => {
			// cuando entro a la pantalla se ejecuta esto
			leer_tareas();
		}, [])
	)


	function verDetalle( tarea ) {
		// con esto cambio de pantalla y envío parámetros
		router.push({
			pathname: 'detalle_tarea',
			params: tarea
		});
	}


	return (
		<ScrollView>

			<Button
				title='Registrar'
				color='green'
				onPress={ () => router.push('formulario') }
			/>

			{ cargando && <ActivityIndicator size='large' style={{ marginVertical: 20 }}/> }

			<Text>Tareas: { tareas.length }</Text>

			{ tareas.map( (tarea, index)=>(
				<TouchableOpacity key={index} onPress={ () => verDetalle(tarea) }>
					<List.Item
						title={tarea.titulo}
						description={tarea.descripcion}
						right={() => <List.Icon icon="pencil" />}
					/>
				</TouchableOpacity>
			)) }
		</ScrollView>
	)
}
