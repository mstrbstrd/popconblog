import midJourneyGreekImage from "./imgs/midjourneygreek2.png";
import thecosmicdanceImage from "./imgs/thecosmicdance2.png";
import cyclesOfChangeImage from "./imgs/cyclicalhistory.png";
import AusterityHiddenImpactImage from "./imgs/austerityhiddenimpact.png"
import CollectiveActionDigitalAgeImage from "./imgs/collectiveactiondigitalage.png"
import TheBoxImage from "./imgs/thebox.png"
import DiscussingDelphiImage from "./imgs/discussingdelphi.png"
import DiscussingDelphi2Image from "./imgs/discussingdelphi2.png"
import CanvasOfTomorrowImage from "./imgs/canvasoftomorrow.png"
import TrumanCreativeImage from "./imgs/truman2.png"
import CosmicCarouselImage from "./imgs/cosmiccarousel.png"
import PopConImage from "./imgs/popconorb2.png"
import ArtistAdviceImage from "./imgs/artistadvice.png"
import DPU1Image from "./imgs/dpu.png"
import DPU2Image from "./imgs/dpu2.png"
import MindYourBodyImage from "./imgs/mindyourbody.png"
import EnigmaticConfluenceImage from "./imgs/enigmaticconfluence.png"


import leadershipAlaEuthyphroText from "./posts/LeadershipAlaEuthyphro.md";
import thecosmicdanceText from "./posts/TheCosmicDance.md";
import cyclesOfChangeText from "./posts/CyclesOfChange.md";
import AusterityHiddenImpactText from "./posts/AusterityHiddenImpact.md"
import CollectiveActionDigitalAgeText from "./posts/CollectiveActionDigitalAge.md"
import TheBoxText from "./posts/TheBox.md"
import DiscussingDelphiText from "./posts/DiscussingDelphi.md"
import DiscussingDelphi2Text from "./posts/DiscussingDelphi2.md"
import CanvasOfTomorrowText from "./posts/TheCanvasOfTomorrow.md"
import TrumanCreativeText from "./posts/TrumanCreative.md"
import CosmicCarouselText from "./posts/CosmicCarousel.md"
import PopConText from "./posts/PopCon.md"
import ArtistAdviceText from "./posts/ArtistAdvice.md"
import DAOText from "./posts/DPU1.md"
import DPUText from "./posts/DPU2.md"
import MindYourBodyText from "./posts/MindYourBody.md"
import EnigmaticConfluenceText from "./posts/EnigmaticConfluence.md"



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

  const TrumanCreative = await createBlogPost(
    "The Dream: The Paradox of Artistic Authenticity",
    "Shaedan Hawse & GPT-4",
    "May 14, 2023",
    TrumanCreativeImage,
    TrumanCreativeText
  );

  const CosmicCarousel = await createBlogPost(
    "Cosmic Carousel and the Universal Teapot",
    "Shaedan Hawse & GPT-4",
    "May 15, 2023",
    CosmicCarouselImage,
    CosmicCarouselText
  );

  const PopularConsensus = await createBlogPost(
    "Popular Consensus: Seeking the Wisdom of the Crowd",
    "Shaedan Hawse & GPT-4",
    "May 18, 2023",
    PopConImage,
    PopConText
  );

  const ArtistAdvice = await createBlogPost(
    "Navigating the Darkness of the Living Artist",
    "Shaedan Hawse & GPT-4",
    "May 25, 2023",
    ArtistAdviceImage,
    ArtistAdviceText
  );

  const DPU1 = await createBlogPost(
    "The Dawn of DAOs: How Blockchain is Revolutionizing Work and Organization",
    "Shaedan Hawse & GPT-4",
    "July 2, 2023",
    DPU1Image,
    DAOText
  );

  const DPU2 = await createBlogPost(
    "Towards a New Digital Order: Decentralized Public Utilities",
    "Shaedan Hawse & GPT-4",
    "July 3, 2023",
    DPU2Image,
    DPUText
  );

  const MindYourBody = await createBlogPost(
    "Mind Your Body",
    "Shaedan Hawse & GPT-4 Codex",
    "July 9, 2023",
    MindYourBodyImage,
    MindYourBodyText
  );

  const EnigmaticConfluence = await createBlogPost(
    "Enigmatic Confluence",
    "Shaedan Hawse & GPT-4",
    "October 17, 2023",
    EnigmaticConfluenceImage,
    EnigmaticConfluenceText
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
    CanvasOfTomorrow,
    TrumanCreative,
    CosmicCarousel,
    ArtistAdvice,
    DPU1,
    DPU2,
    PopularConsensus,
    MindYourBody,
    EnigmaticConfluence
  ];
}

export default getBlogPosts;
