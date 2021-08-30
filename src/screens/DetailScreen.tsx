import React from 'react';

import { StackScreenProps } from '@react-navigation/stack';
import { 
    ScrollView, 
    Image, 
    StyleSheet, 
    View, 
    Dimensions, 
    Text, 
    ActivityIndicator, 
    TouchableOpacity 
} from 'react-native';

import { RootStackParams } from '../nagivation/Navigation';

import { useMoviesDetails } from '../hooks/useMoviesDetails';
import { MovieDetails } from '../components/MovieDetails';
import Icon from 'react-native-vector-icons/Ionicons';

const { height: screenHeight } = Dimensions.get('screen');

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> { };

export const DetailScreen = ( { route, navigation }: Props ) => {

    const movie = route.params;
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const { isLoading, cast, movieFull } = useMoviesDetails( movie.id );

    return (
        <ScrollView>

            <View style={ styles.imageContainer }>
                <View style={ styles.imageBorder } >
                    <Image
                        source={{ uri }}
                        style={ styles.posterImage }
                        />
                </View>
            </View>

            <View style={ styles.marginContainer }>
                <Text style={ styles.subTitle } >{ movie.original_title }</Text>
                <Text style={ styles.title } >{ movie.title }</Text>
            </View>

            {
                ( isLoading ) 
                    ? <ActivityIndicator size={ 30 } color="grey" style={{ marginTop: 20 }} />
                    : <MovieDetails movieFull={ movieFull! } cast={ cast } />
            }

            {/* boton para cerrar */}
            <View style={ styles.backButton }>
                <TouchableOpacity
                    onPress={ () => navigation.pop() } >
                    <Icon
                        color="white"
                        name="arrow-back-outline"
                        size={ 40 } />
                </TouchableOpacity>
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        width: '100%',
        height: screenHeight * 0.7,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,

        elevation: 10,
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25        
    },
    imageBorder: {
        flex: 1,
        overflow: 'hidden',
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25
    },
    posterImage: {
        flex: 1,
    },
    marginContainer: {
        marginHorizontal: 20,
        marginTop: 20
    },
    subTitle: {
        fontSize: 16,
        opacity: 0.8
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    backButton: {
        position: 'absolute',
        zIndex: 999,
        elevation: 10,
        top: 30,
        left: 5
    }
});