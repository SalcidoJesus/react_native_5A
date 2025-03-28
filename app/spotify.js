
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';
import Constants from 'expo-constants';
import { COLOR_BLANCO, COLOR_GRIS, COLOR_GRIS_OSCURO, COLOR_NEGRO, COLOR_VERDE_CLARO } from '../constants/spotify_colors';
import { StatusBar } from 'expo-status-bar';
import { Avatar, Button } from 'react-native-paper';
import PlayListItem from '../components/PlayListItem';
import PortadaCuadrada from '../components/PortadaCuadrada';
import PortadaRedonda from '../components/PortadaRedonda';

export default function spotify() {

	// variables
	const playlists = [
		{
			id: 1,
			nombre: 'Tus Me Gusta',
		},
		{
			id: 2,
			nombre: 'Y LLORO',
		},
		{
			id: 3,
			nombre: 'This Is Juanes',
		},
		{
			id: 4,
			nombre: 'Fear, and Loathing in Las Vegas',
		},
		{
			id: 5,
			nombre: 'Mix diario 2',
		},
		{
			id: 6,
			nombre: 'Lo Mejor de Hits de Internet 2024',
		},
		{
			id: 7,
			nombre: 'Post Punk Wave',
		},
		{
			id: 8,
			nombre: 'songs to pass the time',
		},
	];


	const this_is_artistas = [
		{
			id: 1,
			nombre: 'Canserbero',
			portada: require('../assets/canserbero.jpg')
		},
		{
			id: 2,
			nombre: 'The Neighbourhood',
			portada: require('../assets/this_is_the_nbhd.jpg')
		},
		{
			id: 3,
			nombre: 'Marilyn Manson',
			portada: require('../assets/this_is_marilyn_manson.jpg')
		},
		{
			id: 4,
			nombre: 'Lana del Rey',
			portada: require('../assets/lana_del_rey.jpg')
		},
		{
			id: 5,
			nombre: 'Junior H',
			portada: require('../assets/junior_h.jpg')
		},
	];


	const artistas_favoritos = [
		{
			id: 1,
			nombre: 'Lana del Rey',
			portada: 'https://i.scdn.co/image/ab6761610000e5ebb99cacf8acd5378206767261'
		},
		{
			id: 2,
			nombre: 'Crystal Castles',
			portada: 'https://i.scdn.co/image/ab67616d0000b273db4e506605774d3d90ebb7bb'
		},
		{
			id: 3,
			nombre: 'Solitario',
			portada: 'https://i.scdn.co/image/ab67616d0000b273feb80cfa066f9da49cdb6406'
		},
		{
			id: 4,
			nombre: 'Linkin Park',
			portada: 'https://i.scdn.co/image/ab6761610000e5ebc7e6bd9e65eab62a53355576'
		},
		{
			id: 5,
			nombre: 'Anya Taylor-Joy',
			portada: 'https://i.scdn.co/image/ab6761610000e5eb27b76cf804eecf2b5742fe9c'
		},
	];



	return (
		<ScrollView showsVerticalScrollIndicator={false} style={ estilos.contenedor }>

			<StatusBar style='light' backgroundColor={ COLOR_NEGRO }/>

			{/* header */}
			<ScrollView
				showsHorizontalScrollIndicator={false}
				horizontal
				contentContainerStyle={ estilos.header }>
				<Avatar.Image size={50} source={ require('../assets/perfil.webp') }/>
				<Button
					mode='contained'
					buttonColor={ COLOR_VERDE_CLARO }
					textColor={ COLOR_NEGRO }
				>
					Todas
				</Button>
				<Button
					mode='contained'
					buttonColor={ COLOR_GRIS_OSCURO }
				>
					Música
				</Button>
				<Button
					mode='contained'
					buttonColor={ COLOR_GRIS_OSCURO }
				>
					Podcasts
				</Button>
				<Button
					mode='contained'
					buttonColor={ COLOR_GRIS_OSCURO }
				>
					Artistas
				</Button>

			</ScrollView>

			<FlatList
				numColumns={ 2 }
				data={ playlists }
				scrollEnabled={ false }
				contentContainerStyle={{ marginVertical: 20 }}
				renderItem={ ({ item }) => <PlayListItem titulo={item.nombre} /> }
			/>

			<Text style={estilos.let}>Vuelve a tu música</Text>

			<ScrollView horizontal showsHorizontalScrollIndicator={false}>
				{ this_is_artistas.map( (item, key) => <PortadaCuadrada key={key} nombre={item.nombre} portada={ item.portada } /> ) }
			</ScrollView>

			<Text style={estilos.let}>Artistas favoritos</Text>

			<ScrollView horizontal showsHorizontalScrollIndicator={false}>
				{ artistas_favoritos.map( (item, key) => <PortadaRedonda key={key} nombre={item.nombre} portada={ item.portada } /> ) }
			</ScrollView>

		</ScrollView>
	)
}

const estilos = StyleSheet.create({
	contenedor: {
		marginTop: Constants.statusBarHeight,
		backgroundColor: COLOR_NEGRO
	},
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 20,
		marginVertical: 20
	},
	let: {
		fontSize: 30,
		fontWeight: 'bold',
		color: COLOR_BLANCO,
		marginHorizontal: 20,
		marginBottom: 20,
	}
})
