import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import FastBreakHeader from '../components/FastBreakHeader';
import BackgroundImage from '../assets/background.png';

export default function () {
  const renderBroadcast = (league, time, teams) => (
    <View style={styles.broadcast}>
      <View style={styles.leagueContainer}>
        <Text style={styles.league}>{league}</Text>
        <Text style={styles.matchTime}>{time}</Text>
      </View>
      <View style={styles.teamsContainer}>
        <Text style={styles.teams}>{teams}</Text>
      </View>
    </View>
  );

  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <FastBreakHeader />

      <Text style={styles.title}>Трансляции</Text>

      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{paddingBottom: 100, marginTop: 15}}>
        {renderBroadcast(
          'EPL',
          '01.03 21:00',
          'Manchester City \n' + 'Liverpool',
        )}
        {renderBroadcast('Serie A', '04.03 19:30', 'Inter Milan \n' + 'Napoli')}
        {renderBroadcast('La Liga', '07.03 20:45', 'Sevilla \n' + 'Real Betis')}
        {renderBroadcast(
          'Bundesliga',
          '11.03 19:00',
          'RB Leipzig \n' + 'Bayern Munich',
        )}
        {renderBroadcast('Ligue 1', '14.03 20:00', 'Marseille \n' + 'Lyon')}
        {renderBroadcast(
          'MLS',
          '18.03 18:00',
          'LA Galaxy \n' + 'Portland Timbers',
        )}
        {renderBroadcast(
          'Cricket',
          '20.03 16:30',
          'England \n' + 'West Indies',
        )}
        {renderBroadcast(
          'Rugby',
          '24.03 20:00',
          'South Africa \n' + 'New Zealand',
        )}
        {renderBroadcast(
          'Tennis',
          '28.03 18:00',
          'Rafael Nadal \n' + 'Stefanos Tsitsipas',
        )}
        {renderBroadcast(
          'Golf',
          '31.03 10:00',
          'The Players Championship \n' + 'Final Round',
        )}
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height,
    width,
    backgroundColor: COLORS.white,
  },
  broadcast: {
    width: width * 0.9,
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: COLORS.main,
    elevation: 5,
    paddingLeft: 20,
  },
  league: {
    fontSize: 40,
    fontFamily: FONTS.black,
    color: COLORS.black,
    paddingVertical: 8,
  },
  leagueContainer: {
    width: '100%',
    borderRadius: 15,
    alignItems: 'center',
    flexDirection: 'row',
  },
  teamsContainer: {
    width: '100%',
    paddingBottom: 10,
  },
  matchTime: {
    fontSize: 14,
    fontFamily: FONTS.bold,
    color: COLORS.black,
    width: '60%',
    marginLeft: 15,
  },
  teams: {
    textAlign: 'right',
    fontFamily: FONTS.bold,
    fontSize: 20,
    color: COLORS.white,
    marginTop: 5,
    marginRight: 20,
  },
  title: {
    fontSize: 30,
    fontFamily: FONTS.bold,
    color: COLORS.black,
    margin: 20,
    textAlign: 'center',
  },
});
