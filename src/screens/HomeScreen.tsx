import React from 'react';

import { ActivityIndicator, Dimensions, View, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Carousel from 'react-native-snap-carousel';

import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';
import { HorizontalSlider } from '../components/HorizontalSlider';

const { width: windowWidth } = Dimensions.get('window');

export const HomeScreen = () => {

    const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();
    const { top } = useSafeAreaInsets();

    if ( isLoading ) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                <ActivityIndicator color="red" size={ 100 } />
            </View>
        )
    }

    return (
        <ScrollView>
            <View style={{ marginTop: top + 20 }}>

                {/* Carousel principal */}
                <View style={{ height: 440 }}>

                    <Carousel
                        data={ nowPlaying }
                        renderItem={ ({ item } : any ) => <MoviePoster movie={ item } /> }
                        sliderWidth={ windowWidth }
                        itemWidth={ 300 } 
                        inactiveSlideOpacity={ 0.9 }/>
                        
                </View>
                
                {/* Peliculas principal */}
                <HorizontalSlider title="Populares" movies={ popular } />
                <HorizontalSlider title="Los mas valorados" movies={ topRated } />
                <HorizontalSlider title="Proximos" movies={ upcoming } />

            </View>
        </ScrollView>
    )

}
