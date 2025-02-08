"use client";

import { useEffect, useState } from "react";

export default function useActiveSection() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const sectionRatios = new Map();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          sectionRatios.set(entry.target.id, entry.intersectionRatio);
        });

        let mostVisibleSectionId = "";
        let highestRatio = 0;

        sectionRatios.forEach((ratio, id) => {
          if (ratio && ratio >= highestRatio) {
            highestRatio = ratio;
            mostVisibleSectionId = id;
          }
        });

        if (mostVisibleSectionId !== activeSection) {
          setActiveSection(mostVisibleSectionId);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, [activeSection]);

  return activeSection;
}
