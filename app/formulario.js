
import { View, Text } from 'react-native'
import { useState } from 'react'
import { Button, TextInput } from 'react-native-paper'
import { cliente_axios } from '../global/cliente_axios'

export default function formulario() {

	const [titulo, setTitulo] = useState('')
	const [descripcion, setDescripcion] = useState('')
	const [errores, setErrores] = useState([])
	const [cargando, setCargando] = useState(false)


	async function guardar() {
		setErrores([])
		setCargando(true)
		try {
			await cliente_axios.post('/tareas', {
				titulo,
				descripcion
			})
			alert('Guardado')
			setErrores([])
			setTitulo('')
			setDescripcion('')

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
