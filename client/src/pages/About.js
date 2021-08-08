import React from "react";
import { Text, Heading, SimpleGrid, Box, Center } from "@chakra-ui/react";
import Bar from "react-meter-bar";
import {
  GiAppleCore,
  GiBookCover,
  GiCarSeat,
  GiFireworkRocket,
  GiFriedEggs,
  GiHairStrands,
  GiHelicopter,
  GiJetFighter,
  GiPerson,
  GiPoliceCar,
  GiRaining,
  GiTalk,
  GiThreeLeaves,
  GiTrafficCone,
  GiTruck,
  GiTrumpet,
} from "react-icons/gi";
import DbLevel from "../components/DbLevel";

const About = () => {
  return (
    <>
      <Heading mb={10}>About HEARO</Heading>

      <Text variant={"h3"} mb={5}>
        Ever wanted to go out with friends and not have to shout at them?
      </Text>

      <Text mb={5}>
        A long, long time ago … before COVID, we could go out, and sometimes
        when we went out, the places we went to eat or drink were too loud.
      </Text>

      <Text mb={5}>
        This app will allow you to search for places that are quiet or not too
        loud based on what you feel like. It will also allow you to rate and
        review the places you go to, for how loud they are.
      </Text>

      <Text mb={5}>It’s like TripAdvisor or Google Review for sound.</Text>

      <SimpleGrid columns={{ base: 2, sm: 3, md: 3, lg: 7 }} spacing={5}>
        <DbLevel title="Fireworks" icon={<GiJetFighter />} db="140db" />
        <DbLevel title="Jet Engine" icon={<GiFireworkRocket />} db="130db" />
        <DbLevel title="Police Siren" icon={<GiPoliceCar />} db="120db" />
        <DbLevel title="Trumpet" icon={<GiTrumpet />} db="110db" />
        <DbLevel title="Helicopter" icon={<GiHelicopter />} db="100db" />
        <DbLevel title="Hair Dryer" icon={<GiHairStrands />} db="90db" />
        <DbLevel title="Truck" icon={<GiTruck />} db="80db" />
        <DbLevel title="Traffic" icon={<GiCarSeat />} db="70db" />
        <DbLevel title="Conversation" icon={<GiTalk />} db="60db" />
        <DbLevel title="Rainfall" icon={<GiRaining />} db="50db" />
        <DbLevel title="Refrigerator" icon={<GiAppleCore />} db="40db" />
        <DbLevel title="Whisper" icon={<GiBookCover />} db="30db" />
        <DbLevel title="Leaves" icon={<GiThreeLeaves />} db="20db" />
        <DbLevel title="Breathing" icon={<GiPerson />} db="10db" />
      </SimpleGrid>

      <Box mt={"20"}>
        {/* <Bar
          labels={[
            0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140,
          ]}
          labelColor="#fff"
          progress={40}
          barColor="#7FE6D1"
          seperatorColor="white"
        /> */}
      </Box>
    </>
  );
};

export default About;