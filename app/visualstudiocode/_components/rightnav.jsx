"use client";

import RightnavDesktop from "./rightnavDesktop";
import RightnavMobile from "./rightnavMobile";
import useViewport from "../_hooks/useViewport";

export default function Rightnav() {
  const { isMobile } = useViewport();
  const navbarMenu = [
    {
      text: "Work with multiple files using Copilot Edits",
      ref: "#work-with-multiple-files-using-copilot-edits",
    },
    {
      text: "Multiple models, your choice",
      ref: "#multiple-models-your-choice",
    },
    {
      text: "Custom instructions",
      ref: "#custom-instructions",
    },
    {
      text: "Full project awareness",
      ref: "#full-project-awareness",
    },
    {
      text: "Naming things and other hard problems",
      ref: "#naming-things-and-other-hard-problems",
    },
    {
      text: "Speak your mind",
      ref: "#speak-your-mind",
    },
    {
      text: "Be a terminal expert",
      ref: "#be-a-terminal-expert",
    },
    {
      text: "No fear of commitment",
      ref: "#no-fear-of-commitment",
    },
    {
      text: "Extensions are all you need",
      ref: "#extensions-are-all-you-need",
    },
    {
      text: "A vision for the future",
      ref: "#a-vision-for-the-future",
    },
    {
      text: "Keeping up with GitHub Copilot",
      ref: "#keeping-up-with-github-copilot",
    },
    {
      text: "GitHub Copilot in other places",
      ref: "#github-copilot-in-other-places",
    },
    {
      text: "The AI code editor for everyone",
      ref: "#the-ai-code-editor-for-everyone",
    },
  ];

  return (
    <>
      {isMobile && <RightnavMobile navbarMenu={navbarMenu} />}
      {!isMobile && <RightnavDesktop navbarMenu={navbarMenu} />}
    </>
  );
}
