import React from 'react';
import { FaCloudRain, FaWater, FaWind } from 'react-icons/fa';
import { AiFillThunderbolt } from 'react-icons/ai';
import { BsFillCloudMoonFill } from 'react-icons/bs';
import { IoMdWater } from 'react-icons/io';
import { GiCampfire, GiNestBirds, GiThreeLeaves, GiSoundWaves } from 'react-icons/gi';

import enUS from '../../assets/locales/enUS.locale.json';
import ptBR from '../../assets/locales/ptBR.locale.json';
import { SoundCard } from './components/SoundCard';

type Translation = typeof enUS | typeof ptBR;

export const sounds = ({ data }: Translation) => [
  // Water
  <SoundCard key={1} title={data['soundslist.sound.rain.title']} icon={FaCloudRain} sound='/sounds/rain.ogg'/>,
  <SoundCard key={2} title={data['soundslist.sound.thunders.title']} icon={AiFillThunderbolt} sound='/sounds/thunder.ogg'/>,
  <SoundCard key={3} title={data['soundslist.sound.night.title']} icon={BsFillCloudMoonFill} sound='/sounds/night.ogg'/>,
  <SoundCard key={4} title={data['soundslist.sound.waterstream.title']} icon={FaWater} sound='/sounds/water-stream.ogg'/>,
  <SoundCard key={5} title={data['soundslist.sound.raindropping.title']} icon={IoMdWater} sound='/sounds/rain-dropping.ogg'/>,
  <SoundCard key={6} title={data['soundslist.sound.wind.title']} icon={FaWind} sound='/sounds/wind.ogg'/>,

  // Nature
  <SoundCard key={7} title={data['soundslist.sound.campfire.title']} icon={GiCampfire} sound='/sounds/campfire.ogg'/>,
  <SoundCard key={8} title={data['soundslist.sound.birds.title']} icon={GiNestBirds} sound='/sounds/birds.ogg'/>,
  <SoundCard key={9} title={data['soundslist.sound.leaves.title']} icon={GiThreeLeaves} sound='/sounds/leaves.ogg'/>,
  <SoundCard key={10} title={data['soundslist.sound.brownnoise.title']} icon={GiSoundWaves} sound='/sounds/brown-noise.ogg'/>,
  <SoundCard key={11} title={data['soundslist.sound.brownnoise2.title']} icon={GiSoundWaves} sound='/sounds/brown-noise2.ogg'/>,
  <SoundCard key={12} title={data['soundslist.sound.brownnoise3.title']} icon={GiSoundWaves} sound='/sounds/brown-noise3.ogg'/>
];