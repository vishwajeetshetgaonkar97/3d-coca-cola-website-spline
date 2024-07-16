import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import showcase from "../../Assets/showcase.png";
import VideoComponent from "../VideoComponent/VideoComponent";

const Showcase = (props) => {
  return (
    <div className={styles.introSection}>
      <div className={styles.header}>
        Creating "I'd Like to Buy the World a Coke"
      </div>
      <iframe
        className={styles.videoSection}
        width="1920"
        height="1080"
        src="https://www.youtube.com/embed/tSNU1TvF4pc?si=146q9rv-kPglEzN4"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <div className={styles.description}>
        Bill Backer, creative director on the Coca‑Cola account for the McCann
        Erickson advertising agency, was flying to London to meet up with Billy
        Davis, the music director on the Coca‑Cola account, to write radio
        commercials with two successful British songwriters, Roger Cook and
        Roger Greenaway, to be recorded by the New Seekers, a popular British
        singing group. Relive Coca-Cola's iconic "I'd Like to Buy the World a
        Coke" history, inspiring unity and happiness with a timeless campaign.
        <br />
        <br />
        The heavy fog in London forced the plane to land in Shannon, Ireland.
        Passengers had to remain near the airport in case the fog lifted. Some
        of them were furious about their accommodations. By the next day, Backer
        saw some of the most irate passengers in the airport cafe. Brought
        together by a common experience, many were now laughing and sharing
        stories over snacks and bottles of Coca‑Cola. Backer wrote of the scene:
        <br />
        <br />
        "In that moment [I] saw a bottle of Coke in a whole new light... [I]
        began to see a bottle of Coca‑Cola as more than a drink that refreshed a
        hundred million people a day in almost every corner of the globe. So [I]
        began to see the familiar words, 'Let's have a Coke,' as more than an
        invitation to pause for refreshment. They were actually a subtle way of
        saying, 'Let's keep each other company for a little while.' And [I] knew
        they were being said all over the world as [I] sat there in Ireland. So
        that was the basic idea: to see Coke not as it was originally designed
        to be -- a liquid refresher -- but as a tiny bit of commonality between
        all peoples, a universally liked formula that would help to keep them
        company for a few minutes."
        <br />
        <br />
        When he finally arrived in London, Backer told Billy Davis and Roger
        Cook what he had seen in the airport café. After he expressed his
        thoughts about buying everybody in the world a Coke, Backer noticed that
        Davis's initial reaction was not at all what he'd expected and asked
        him, "Billy, do you have a problem with this idea?"
        <br /> <br />
        <div className={styles.commercial}>
          Commercial Text and Song Lyrics
          <br /> <br />
          1. The Commercial
          <br /><br />
          On a hilltop in Italy
          <br />
          We assembled young people
          <br />
          From all over the world
          <br />
          To bring you this message
          <br />
          From Coca‑Cola bottlers
          <br />
          All over the world
          <br />
          It's the real thing - Coke.
          <br />
          <br /> <br />
          AND THEY SANG:
          <br />
          <br />
          I'd like to buy the world a home
          <br />
          And furnish it with love
          <br />
          Grow apple trees and honey bees
          <br />
          And snow white turtle doves
          <br />
      
          <br />
          (Chorus)
          <br />
          <br />
          I'd like to teach the world to sing
          <br />
          In perfect harmony
          <br />
          I'd like to buy the world a Coke
          <br />
          And keep it company
          <br />
          That's the real thing
          <br />
          <br />
       
          (Repeat Chorus)
          <br /> <br />
          (Chorus 2)
          <br />
          What the world wants today
          <br />
          Is the real thing
          <br />
         
          <br />
          (Repeat Chorus 2)
          <br /> <br />
          2. The Pop Song Version: I'd Like to Teach the World to Sing (In
          Perfect Harmony)
          <br /><br />
          I'd like to build the world a home
        
          <br />
          And furnish it with love
          <br />
          Grow apple trees and honey bees
          <br />
          And snow white turtle doves
          <br />
          I'd like to teach the world to sing
          <br />
          In perfect harmony
          <br />
          I'd like to hold it in my arms
          <br />
          And keep it company
          <br />
          I'd like to see the world for once
          <br />
          All standing hand in hand
          <br />
          And hear them echo through the hills
          <br />
          For peace throughout the land
          <br />
          <br />
          (4th Verse included in Hillside Singers Version)
          <br /><br />
          Put your hand in my hand
          <br />
          Let's begin today
          <br />
          Put your hand in my hand
          <br />
          Help me find the way
          <br />
          <br />
          (Repeat 2nd verse)
        </div>
      </div>
    </div>
  );
};

export default Showcase;
