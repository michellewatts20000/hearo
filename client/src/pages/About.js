import React from "react";
import { Text, Heading, SimpleGrid} from "@chakra-ui/react";
import {
  GiAppleCore,
  GiBookCover,
  GiCarSeat,
  GiElectricalSocket,
  GiFireworkRocket,
  GiHairStrands,
  GiHelicopter,
  GiJetFighter,
  GiPerson,
  GiPoliceCar,
  GiRaining,
  GiTalk,
  GiThreeLeaves,
  GiTruck,
  GiTrumpet,
} from "react-icons/gi";
import DbLevel from "../components/DbLevel";

const About = () => {
  return (
    <>
      <Heading mb={7}>About HEARO</Heading>

      <Text variant={"lowkey"} mb={5}>
        Ever wanted to go out with friends and not have to shout at them to be heard?
      </Text>

      <Text mb={5} fontFamily="Roboto">
        A long, long time ago... before COVID, we could go out, and sometimes
        when we went out, the places we went to eat or drink were too loud.
      </Text>

      <Text fontFamily="Roboto">
        This app will allow you to search for venues that are quiet or not too
        loud based on what you feel like. It will also allow you to rate and
        review the venues you go to, for how loud they are. It’s like
        TripAdvisor or Google Review... but for sound.
      </Text>

      <SimpleGrid columns={{ base: 2, sm: 3, md: 3, lg: 7 }} spacing={5}>
        <DbLevel title="Breathing" icon={<GiPerson />} db="10db" />
        <DbLevel title="Leaves" icon={<GiThreeLeaves />} db="20db" />
        <DbLevel title="Whisper" icon={<GiBookCover />} db="30db" />
        <DbLevel title="Refrigerator" icon={<GiElectricalSocket />} db="40db" />
        <DbLevel title="Rainfall" icon={<GiRaining />} db="50db" />
        <DbLevel title="Conversation" icon={<GiTalk />} db="60db" />
        <DbLevel title="Traffic" icon={<GiCarSeat />} db="70db" />
        <DbLevel title="Truck" icon={<GiTruck />} db="80db" />
        <DbLevel title="Hair Dryer" icon={<GiHairStrands />} db="90db" />
        <DbLevel title="Helicopter" icon={<GiHelicopter />} db="100db" />
        <DbLevel title="Trumpet" icon={<GiTrumpet />} db="110db" />
        <DbLevel title="Police Siren" icon={<GiPoliceCar />} db="120db" />
        <DbLevel title="Jet Engine" icon={<GiJetFighter />} db="130db" />
        <DbLevel title="Fireworks" icon={<GiFireworkRocket />} db="140db" />
      </SimpleGrid>

    </>
  );
};

export default About;
