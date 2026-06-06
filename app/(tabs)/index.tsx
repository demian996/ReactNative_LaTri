import { styles } from '@/styles/home.styles';
import React, { useState, useEffect } from 'react';
import {
  Alert,
  Button,
  Image,
  Text,
  View
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function Index() {
  const insets = useSafeAreaInsets();
  
  // Static match configuration
  const targetDateString = '2026-06-14T18:00:00-05:00'; // Ecuador Time (UTC-5)
  const matchTitle = 'Ecuador vs. Costa de Marfil';

  const calculateTimeLeft = (targetStr: string) => {
    const target = new Date(targetStr);
    const difference = +target - +new Date();
    
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isCompleted: true };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isCompleted: false
    };
  };

  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(targetDateString));

  useEffect(() => {
    // Initial run
    setTimeLeft(calculateTimeLeft(targetDateString));

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDateString));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // The hour '0' should be '12'
    const hoursStr = hours.toString().padStart(2, '0');
    return `${hoursStr}:${minutes} ${ampm}`;
  };

  const formatDate = (date: Date) => {
    const days = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
    const months = [
      'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun',
      'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'
    ];
    const dayName = days[date.getDay()];
    const day = date.getDate();
    const monthName = months[date.getMonth()];
    const year = date.getFullYear();
    return `${dayName}, ${day} de ${monthName} de ${year}`;
  };

  const mostrarMensaje = () => {
    Alert.alert(
      'La Tri',
      '¡Vamos Ecuador!'
    );
  };

  // Render elements for header
  const renderHeaderContent = () => {
    const matchDateObj = new Date(targetDateString);
    const dateFormatted = `${formatDate(matchDateObj)} a las ${formatTime(matchDateObj)}`;

    let countdownDisplay = `${timeLeft.days.toString().padStart(2, '0')}d ${timeLeft.hours.toString().padStart(2, '0')}h ${timeLeft.minutes.toString().padStart(2, '0')}m ${timeLeft.seconds.toString().padStart(2, '0')}s`;
    if (timeLeft.isCompleted) {
      countdownDisplay = "¡PARTIDO EN CURSO!";
    }

    return (
      <>
        <Text style={styles.headerTitleText}>Cuenta Regresiva Partido</Text>
        <Text style={styles.countdownText}>{countdownDisplay}</Text>
        <Text style={styles.matchDetailText}>{matchTitle}</Text>
        <Text style={styles.matchDateText}>{dateFormatted}</Text>
      </>
    );
  };

  return (
    <View style={styles.container}>
      <View style={[styles.headerContainer, { paddingTop: insets.top }]}>
        <View style={styles.yellowStripe} />
        <View style={styles.blueStripe}>
          {renderHeaderContent()}
        </View>
        <View style={styles.redStripe} />
      </View>

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