import midJourneyGreekImage from "./imgs/midjourneygreek2.png";
import thecosmicdanceImage from "./imgs/thecosmicdance2.png";
import cyclesOfChangeImage from "./imgs/cyclicalhistory.png";
import AusterityHiddenImpactImage from "./imgs/austerityhiddenimpact.png"
import CollectiveActionDigitalAgeImage from "./imgs/collectiveactiondigitalage.png"
import TheBoxImage from "./imgs/thebox.png"
import DiscussingDelphiImage from "./imgs/discussingdelphi.png"
import DiscussingDelphi2Image from "./imgs/discussingdelphi2.png"
import CanvasOfTomorrowImage from "./imgs/canvasoftomorrow.png"
import leadershipAlaEuthyphroText from "./posts/LeadershipAlaEuthyphro.md";
import thecosmicdanceText from "./posts/TheCosmicDance.md";
import cyclesOfChangeText from "./posts/CyclesOfChange.md";
import AusterityHiddenImpactText from "./posts/AusterityHiddenImpact.md"
import CollectiveActionDigitalAgeText from "./posts/CollectiveActionDigitalAge.md"
import TheBoxText from "./posts/TheBox.md"
import DiscussingDelphiText from "./posts/DiscussingDelphi.md"
import DiscussingDelphi2Text from "./posts/DiscussingDelphi2.md"
import CanvasOfTomorrowText from "./posts/TheCanvasOfTomorrow.md"



async function fetchText(file) {
  const response = await fetch(file);
  const text = await response.text();
  return text;
}

async function createBlogPost(title, author, date, image, contentFile) {
  const content = await fetchText(contentFile);
  return { title, author, date, image, content };
}

async function getBlogPosts() {
  const leadershipAlaEuthyphro = await createBlogPost(
    "Leadership Ala Euthyphro",
    "Shaedan Hawse & GPT-4",
    "April 8, 2023",
    midJourneyGreekImage,
    leadershipAlaEuthyphroText
  );

  const theCosmicDance = await createBlogPost(
    "The Cosmic Dance",
    "Shaedan Hawse & GPT-4",
    "April 9, 2023",
    thecosmicdanceImage,
    thecosmicdanceText
  );

  const cyclesOfChange = await createBlogPost(
    "Cycles of Change: Navigating the Echoes of History",
    "Shaedan Hawse & GPT-4",
    "April 11, 2023",
    cyclesOfChangeImage,
    cyclesOfChangeText
  );

  const AusterityHiddenImpact = await createBlogPost(
    "Austerity's Hidden Impact: The Working Class & The Path to Change",
    "Shaedan Hawse & GPT-4",
    "April 12, 2023",
    AusterityHiddenImpactImage,
    AusterityHiddenImpactText
  );

  const CollectiveActionDigitalAge = await createBlogPost(
    "Collective Action in the Digital Age: A Guide for Modern Activism",
    "Shaedan Hawse & GPT-4",
    "April 13, 2023",
    CollectiveActionDigitalAgeImage,
    CollectiveActionDigitalAgeText

  );

  const TheBox = await createBlogPost(
    "The Box",
    "Shaedan Hawse & GPT-4",
    "April 17, 2023",
    TheBoxImage,
    TheBoxText
  );

  const DiscussingDelphi = await createBlogPost(
    "Discussing Delphi",
    "Shaedan Hawse & GPT-4",
    "April 19, 2023",
    DiscussingDelphiImage,
    DiscussingDelphiText
  );
    
  const DiscussingDelphi2 = await createBlogPost(
    "Discussing Delphi II",
    "Shaedan Hawse & GPT-4",
    "April 21, 2023",
    DiscussingDelphi2Image,
    DiscussingDelphi2Text
  );

  const CanvasOfTomorrow = await createBlogPost(
    "The Canvas of Tomorrow: The Synergy Between Artists and AI in the 21st Century",
    "Shaedan Hawse & GPT-4",
    "April 26, 2023",
    CanvasOfTomorrowImage,
    CanvasOfTomorrowText
  );

  return [
    leadershipAlaEuthyphro,
    theCosmicDance,
    cyclesOfChange,
    AusterityHiddenImpact,
    CollectiveActionDigitalAge,
    TheBox,
    DiscussingDelphi,
    DiscussingDelphi2,
    CanvasOfTomorrow
  ];
}

export default getBlogPosts;
