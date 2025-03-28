
import { View, Text } from 'react-native'
import { useState } from 'react'
import { Button, Switch, TextInput } from 'react-native-paper'
import { cliente_axios } from '../global/cliente_axios'
import { useLocalSearchParams } from 'expo-router'

export default function formulario() {

	const {
		_id,
		titulo: titulo_original,
		descripcion: descripcion_original,
		completado: completado_original
	} = useLocalSearchParams()
	console.log(completado_original);


	const [titulo, setTitulo] = useState( titulo_original )
	const [descripcion, setDescripcion] = useState( descripcion_original )
	const [errores, setErrores] = useState([])
	const [cargando, setCargando] = useState(false)
	const [completado, setCompletado] = useState(completado_original == "true")


	async function guardar() {
		setErrores([])
		setCargando(true)
		try {
			await cliente_axios.put('/tareas/'+_id, {
				titulo,
				descripcion,
				completado
			})
			alert('Guardado')
			setErrores([])

		} catch (error) {
			if (error.request) {
				console.log('error de validación');
				console.log(error.response.data.errores);
				setErrores(error.response.data.errores);
			} else {
				console.log(error)
				alert('Error al guardar')
				setErrores([])
			}
		} finally {
			// si funciona o da error, se ejecuta esto:
			setCargando(false)
		}

	}

	return (
		<View
			style={{
				flex: 1,
				backgroundColor: 'white',
				padding: 20,
				gap: 20
			}}
		>
			<Text>formulario</Text>
			<TextInput
				label='Título'
				mode='outlined'
				placeholder='Ingresa el título'
				value={titulo}
				onChangeText={ texto => setTitulo(texto) }
			/>
			<TextInput
				label='Descripción'
				mode='outlined'
				multiline
				numberOfLines={3}
				placeholder='Ingresa la descripción'
				value={descripcion}
				onChangeText={ texto => setDescripcion(texto) }
			/>

			<View style={{
				flexDirection: 'row',
				justifyContent: 'space-between',
				alignItems: 'center'
			}}>
				<Text>{ completado ? 'Completado' : 'No completado' }</Text>
				<Switch value={completado} onValueChange={ () => setCompletado(!completado) }/>
			</View>

			<Button loading={cargando} disabled={cargando} mode="elevated" onPress={ guardar }>
				{ cargando ? 'Guardando' : 'Guardar' }
			</Button>
			{
				errores.map((err, index) => (
					<Text key={index}>{err}</Text>
				))
			}
		</View>
	)
}
