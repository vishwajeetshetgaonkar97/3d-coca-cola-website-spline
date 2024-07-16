import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import Image from "next/image";

const ProductSection = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const importImages = async () => {
      const imageImports = await Promise.all(
        Array.from({ length: 36 }, (_, i) => import(`../../Assets/productsLogo/c${i + 1}.png`))
      );

      const imagePaths = imageImports.map(importedModule => importedModule.default);
      setImages(imagePaths);
    };

    importImages();
  }, []);

  return (
    <div className={styles.introSection}>
      <div className={styles.header}>Explore the Flavors</div>

      <div className={styles.logoSection}>
        {images.map((image, index) => (
          <div key={index} className={styles.imageContainer}>
            <Image
              src={image}
              className={styles.productsImage}
              alt={`Product ${index + 1}`}
              width={200} // Set width as per your design needs
              height={200} // Set height as per your design needs
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
