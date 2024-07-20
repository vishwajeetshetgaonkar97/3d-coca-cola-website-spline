import Head from "next/head";
import React, { useState, useEffect, Suspense, useCallback } from "react";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/Components/Navbar/Navbar";
import IntroSection from "@/Components/IntroSection/IntroSection";
import ProductSection from "@/Components/ProductSection/ProductSection";
import Showcase from "@/Components/Showcase/Showcase";
import AnimatedCursor from "react-animated-cursor";
import Footer from "@/Components/Footer/Footer";

const Spline = React.lazy(() => import("@splinetool/react-spline"));

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [hasSplineError, setHasSplineError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      React.startTransition(() => {
        setIsScrolled(window.scrollY > 5);
      });
    };

    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        React.startTransition(() => {
          setIsMobile(window.innerWidth <= 768);
        });
      }, 150);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    handleResize(); // Check initial window size

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSplineError = useCallback(() => {
    setHasSplineError(true);
  }, []);

  return (
    <>
     <Head>
        <title>Vishwajeet Shetgaonkar</title>
        <meta name="description" content="Vishwajeet Shetgaonkar, a skilled UI/UX Designer and Front End Developer specializing in ReactJS and the MERN stack. Explore my portfolio and projects." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="Vishwajeet Shetgaonkar, UI/UX Designer, Front End Developer, ReactJS Specialist, MERN Stack Developer" />
        <link rel="icon" href="/logo.png" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vish.world/" />
        <meta property="og:title" content="Vishwajeet Shetgaonkar - UI/UX Designer & ReactJS Specialist" />
        <meta property="og:description" content="Vishwajeet Shetgaonkar, a skilled UI/UX Designer and Front End Developer specializing in ReactJS and the MERN stack. Explore my portfolio and projects." />
        <meta property="og:image" content="https://vish.world/logo.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://twitter.com/vshetgaonkar97" />
        <meta property="twitter:title" content="Vishwajeet Shetgaonkar - UI/UX Designer & ReactJS Specialist" />
        <meta property="twitter:description" content="Vishwajeet Shetgaonkar, a skilled UI/UX Designer and Front End Developer specializing in ReactJS and the MERN stack. Explore my portfolio and projects." />
        <meta property="twitter:image" content="https://vish.world/logo.png" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Person",
            "name": "Vishwajeet Shetgaonkar",
            "jobTitle": "UI/UX Designer & Front End Developer",
            "url": "https://vish.world",
            "sameAs": [
              "https://www.linkedin.com/in/vishwajeet-shetgaonkar",
              "https://github.com/vishwajeetshetgaonkar97",
              "https://twitter.com/vshetgaonkar97"
            ],
            "image": "https://vish.world/logo.png",
            "description": "Vishwajeet Shetgaonkar, a skilled UI/UX Designer and Front End Developer specializing in ReactJS and the MERN stack. Explore my portfolio and projects.",
          })}
        </script>
      </Head>
      <main className={styles.main}>
        {!isMobile && (
          <AnimatedCursor
            innerSize={18}
            outerSize={18}
            color="240, 230, 230"
            outerAlpha={0.2}
            innerScale={0.7}
            outerScale={5}
          />
        )}
        <Navbar />
        <div className={styles.introDummy}></div>
        <div className={styles.spline}>
          {!hasSplineError ? (
            <Suspense fallback={<div>Loading...</div>}>
              <Spline scene={isMobile ? "https://prod.spline.design/KXrq5-wwjBYGFkQD/scene.splinecode" : "https://prod.spline.design/cW9T8nT4Aoyqpwgd/scene.splinecode"} onError={handleSplineError} />
            </Suspense>
          ) : (
            <div>Failed to load Spline component.</div>
          )}
        </div>
        <div className={`${styles.scrollIcon} ${isScrolled ? styles.hidden : ""}`}>
          <div className={styles.mouse}></div>
        </div>
        <IntroSection />
        <Showcase />
        <ProductSection />
        <Footer />
      </main>
    </>
  );
}
