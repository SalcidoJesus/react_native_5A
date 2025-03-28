
import { router, useLocalSearchParams } from 'expo-router'
import { View, Text, Button, Alert } from 'react-native'
import { cliente_axios } from '../global/cliente_axios'
import { useState } from 'react'

export default function detalle_tarea() {

	const { titulo, descripcion, completado, _id } = useLocalSearchParams()
	const [borrando, setBorrando] = useState(false);

	function confirmar() {
		Alert.alert(
			'¿Eliminar?',
			'Esta acción es irreversible',
			[
				{
					text: 'Cancelar'
				},
				{
					text: 'Eliminar',
					onPress: eliminarTarea
				}
			],
			{
				cancelable: true
			}
		)
	}

	async function eliminarTarea() {
		// CORS
		try {
			setBorrando(true);
			await cliente_axios.delete('/tareas/'+_id)
			alert('Eliminado')
			router.back()
		} catch (error) {
			alert(error)
			console.log(error);
		} finally {
			setBorrando(false);
		}
	}


	return (
		<View>
			<Text>Título: {titulo}</Text>
			<Text>Descripción: {descripcion}</Text>
			<Text>Completado: {completado}</Text>

			<Button
				disabled={borrando}
				color='red'
				title={ borrando ? 'Borrando' : 'Borrar' }
				onPress={confirmar}/>

			<Button
				color='blue'
				title='Editar'
				onPress={ () => router.push({
					pathname: 'formulario_editar',
					params: { _id, titulo, descripcion, completado }
				}) }/>
		</View>
	)
}
