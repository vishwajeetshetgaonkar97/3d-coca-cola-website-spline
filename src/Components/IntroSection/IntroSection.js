import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import founderImage from "../../Assets/founder.png";
import factoryImage from "../../Assets/factorypic.png";
import sustainabilityImage from "../../Assets/lab.png";
import bottlesImage from "../../Assets/bottles.png";
import ScrollAnimation from 'react-animate-on-scroll';

const IntroSection = (props) => {
  return (
    <div className={styles.introSectionContainer}>
      <div className={`${styles.introSection}`}>
 
 
        <Image
          className={styles.sectionImage}
          src={founderImage}
          alt="founderImage"
        />
        <div>
          <div className={styles.header}>A Recipe for Magic</div>
          <div className={styles.description}>
            The product that has given the world its best-known taste was born
            in Atlanta, Georgia, on May 8, 1886. Dr. John Stith Pemberton, a
            local pharmacist, produced the syrup for Coca‑Cola, and carried a
            jug of the new product down the street to Jacobs' Pharmacy, where it
            was sampled, pronounced "excellent" and placed on sale for five
            cents a glass as a soda fountain drink. Carbonated water was teamed
            with the new syrup to produce a drink that was at once "Delicious
            and Refreshing," a theme that continues to echo today wherever
            Coca‑Cola is enjoyed.
          </div>
        </div>
      </div>

      <div className={`${styles.introSection} ${styles.introSectionLeft}`}>
        <Image
          className={styles.sectionImage}
          src={factoryImage}
          alt="founderImage"
        />
        <div>
          <div className={styles.description}>
            Thinking that "the two Cs would look well in advertising," Dr.
            Pemberton's partner and bookkeeper, Frank M. Robinson, suggested the
            name and penned the now famous trademark "Coca‑Cola" in his unique
            script. The first newspaper ad for Coca‑Cola soon appeared in The
            Atlanta Journal, inviting thirsty citizens to try "the new and
            popular soda fountain drink." Hand-painted oilcloth signs reading
            "Coca‑Cola" appeared on store awnings, with the suggestion "Drink"
            added to inform passersby that the new beverage was for soda
            fountain refreshment. During the first year, sales averaged a modest
            nine drinks per day.
            <br /> <br />
            Dr. Pemberton never realized the potential of the beverage he
            created. He gradually sold portions of his business to various
            partners and, just prior to his death in 1888, sold his remaining
            interest in Coca‑Cola to Asa G. Candler. An Atlantan with great
            business acumen, Mr. Candler proceeded to buy additional rights and
            acquire complete control.
          </div>
        </div>
      </div>

      <div className={`${styles.introSection}`}>
        <Image
          className={styles.sectionImage}
          src={sustainabilityImage}
          alt="founderImage"
        />
        <div>
          <div className={styles.header}>
            Coca‑Cola’s Sustainability History
          </div>
          <div className={styles.description}>
            Sustainability is not something new at The Coca‑Cola Company. The
            Company’s sustainability efforts cover a wide range of topics
            including the following: water, women, community well-being,
            sustainable packaging, climate protection, human and workplace
            rights, and sustainable agriculture. Such efforts began over 100
            years ago and have since become an integral part of the Company.
            While there are countless sustainability projects and initiatives
            started by the Company, there are some monumental moments that have
            helped shape the company’s efforts. These efforts are highlighted in
            this timeline of events.
            <br /> <br />
            - 1917
            <br />
            The Coca‑Cola Company began its partnership with The Red Cross.
            During World War I, the Coca‑Cola system ran annual Red Cross drive
            campaigns which continued for over a decade. This partnership
            remains strong today and has been essential to the company’s
            involvement in disaster relief throughout the years.
            <br /> <br />
            - 1935
            <br />
            Lettie Pate Evans joined the Board of Directors as the 1st woman to
            serve on the board of a major company.
            <br /> <br />
            - 1963
            <br />
            The Coca‑Cola Company produced its first diet drink, Tab. Tab was
            introduced before the early growth of the low-calorie soft drink
            segment, and the beverage was developed for consumers who wished “to
            keep tab on their calories.” Several women chemists played a
            critical role in the development of Tab.
            <br /> <br />
            - 1966
            <br />
            The Coca‑Cola Company launched “The Nutrition Project”, assigning an
            international team of scientists and food technologists the task of
            finding a solution to the “protein gap” facing the impoverished
            nations of the world and provide more light, protein-rich beverages
            to consumers. This project led to the introduction of the brands
            Saci, Sanson and Taí, three protein-rich energy beverages developed
            in Latin America, utilizing the local ingredients such as soybeans
            and whey as protein source ingredients for the beverages.
            <br /> <br />
            - 1984
            <br />
            The Coca‑Cola Foundation was founded. The Coca‑Cola Company is
            committed to giving back 1 percent of its prior year’s operating
            income annually through the foundation. The foundation serves three
            priority areas: women, water and well-being.
            <br /> <br />
            - 2001
            <br />
            The Coca‑Cola Company established the Coca‑Cola Africa Foundation,
            which has worked to prevent and treat HIV/AIDS in Africa. Since it
            was established, the Coca‑Cola Africa Foundation has launched
            numerous projects and initiatives throughout Africa.
            <br /> <br />
            - 2007
            <br />
            The Coca‑Cola Company announced a transformational partnership with
            the World Wide Fund for Nature (WWF) to address challenges related
            to freshwater conservation. This partnership focused on five core
            areas including the following: conserve seven of the world’s most
            important freshwater basins, improve water efficiency within the
            company’s operations, reduce the company’s carbon emissions, promote
            sustainable agriculture and inspire a global movement to conserve
            water.
            <br /> <br />
            - 2009
            <br />
            The Coca‑Cola Company introduces PlantBottle Packaging - the first
            ever recyclable PET plastic beverage bottle made 30 percent from
            plants. The Coca‑Cola Company has continued to develop sustainable
            packaging, including the creation of the world’s first prototype PET
            bottle made entirely from plant materials in 2015.
            <br /> <br />
            - 2010
            <br />
            The Coca‑Cola Company launched the 5by20 Initiative. The goal of
            this initiative is to enable the economic empowerment of 5 million
            women entrepreneurs across the globe by 2020. Through the
            initiative, women are offered access to business skills training
            courses, financial services and connections with peers or mentors.
            <br /> <br />
            - 2013
            <br />
            The first EKOCENTER is established. EKOCENTER is a modular community
            market that is run by local woman entrepreneurs and provides safe
            drinking water, wireless communication, electricity and other
            functionality to jump-start entrepreneurship opportunities and
            community development. The 100th EKOCENTER was opened in 2016 and
            the project continues to grow around the globe. This project also
            complements the 5by20 initiative that was launched in 2010. The
            Coca‑Cola Company’s sustainability efforts and goals continue to
            develop as the years go on and their impact can be found across the
            globe. Within the last 5 years, the Coca‑Cola Company has launched
            new initiatives and achieved many goals, such as accomplishing its
            100 percent water replenishment goal five years ahead of schedule.
            The company will not stop once it has accomplished a goal; it
            creates new initiatives and works to create a bigger impact. The
            history of sustainability in the Coca‑Cola Company is an indication
            of how far the Company has come and how much farther it can go in
            the future.
          </div>
        </div>
      </div>


      <div className={`${styles.introSection} ${styles.introSectionLeft}`}>
        <Image
          className={styles.sectionImage}
          src={bottlesImage}
          alt="founderImage"
        />
        <div>
        <div className={styles.header}>
        The Creation of a Cultural Icon
          </div>
          <div className={styles.description}>
          One of the most famous shapes in the world is the iconic contour fluted lines of the Coca‑Cola bottle. Renowned as a design classic and described by noted industrial designer, Raymond Loewy as the “perfect liquid wrapper,” the bottle has been celebrated in art, music and advertising. When Andy Warhol wanted a shape to represent mass culture, he drew the bottle and when Volkswagen wanted to celebrate the shape of the Beatle, they compared the car to the bottle.
How did the bottle become so iconic? 
It began with the desire to protect brand Coca‑Cola and was a cooperative project between The Coca‑Cola Company and its bottlers
<br/> <br/>
Even though the bottle had gone into production in early 1916, not all bottlers immediately jumped to change out their glass stock. For many bottlers, the glass bottles were the most expensive portion of their business and they needed to be convinced to make the change. The company began to do that with national advertising featuring the exclusive bottle. The first national calendar featuring the bottle appeared in 1918 and by 1920, most of the bottlers were using the distinctive bottle.
<br/> <br/>
In 1923, the patent for the bottle was renewed. It was the custom of the patent office to issues the patent on the Tuesday of each week. For the 1923 patent, that Tuesday just happened to fall on December 25! As the new patent was issued, the date on the side of the bottle was changed to December 25th, 1923 and the bottle was quickly nicknamed the “Christmas Bottle.” Patents expire after 14 years (the bottle patent was renewed again in 1937,) by 1951, all patents on the shape had expired. The company approached the Patent Office that the bottles shape, “distinctively shaped contour,” was so well known that it should be granted Trademark status. While it was highly unusual for a commercial package to be granted that status, on April 12th, 1961, the Coca‑Cola bottle was recognized as a trademark, in part bolstered by the fact that a 1949 study showed that less than 1% of Americans could not identify the bottle of Coke by shape alone.
          
          </div>
        </div>
      </div>


    </div>
  );
};

export default IntroSection;
