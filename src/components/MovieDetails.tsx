import React from 'react';

import { Text, View } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import { MovieFull } from '../interfaces/movieInterface';
import { Cast } from '../interfaces/creditsInterface';


interface Props {
    movieFull: MovieFull;
    cast: Cast[];
}

export const MovieDetails = ( { movieFull, cast }: Props ) => {
    return (
        <>
            {/* Detalles */}
            <View style={{ marginHorizontal: 20 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Icon
                        name="star-outline"
                        color="grey"
                        size={ 16 } />
                    
                    <Text> { movieFull.vote_average } </Text>

                    <Text style={{ marginLeft: 5 }}>
                         - { movieFull.genres.map( g => g.name ).join(', ') }
                    </Text>

                </View>

                {/* Historia */}
                <Text style={{ fontSize:23, marginTop: 10, fontWeight: 'bold' }}>
                    Historia
                </Text>

                <Text style={{ fontSize: 16 }}>
                    { movieFull.overview }
                </Text>

                {/* Presupuest */}
                <Text style={{ fontSize:23, marginTop: 10, fontWeight: 'bold' }}>
                    Presupuesto
                </Text>

                <Text style={{ fontSize: 16 }}>
                    { movieFull.budget }
                </Text>

            </View>

            {/* Castin */}
            
        </>
    )
}
