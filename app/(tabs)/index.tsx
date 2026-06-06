import React from 'react';
import {
  Alert,
  Button,
  Image,
  Text,
  View
} from 'react-native';
import { styles } from '@/styles/home.styles';

export default function index() {

  const mostrarMensaje = () => {
    Alert.alert(
      'La Tri',
      '¡Vamos Ecuador!'
    );
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Selección Ecuatoriana de Fútbol
      </Text>

      <Image
        source={require('../../assets/images/ecuadorTeamLogo.png')}
        style={styles.logo}
      />

      <Text style={styles.info}>
        Confederación: CONMEBOL
      </Text>

      <Text style={styles.info}>
        Entrenador: Sebastián Beccacece
      </Text>

      <Text style={styles.info}>
        Estadio: Rodrigo Paz Delgado
      </Text>

      <View style={styles.buttonContainer}>
        <Button
          title="Ver mensaje"
          onPress={mostrarMensaje}
        />
      </View>

    </View>
  );
}