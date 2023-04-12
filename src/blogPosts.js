import midJourneyGreekImage from "./imgs/midjourneygreek2.png";
import thecosmicdanceImage from "./imgs/thecosmicdance2.png";
import cyclesOfChangeImage from "./imgs/cyclicalhistory.png";
import leadershipAlaEuthyphroText from "./posts/LeadershipAlaEuthyphro.md";
import thecosmicdanceText from "./posts/TheCosmicDance.md";
import cyclesOfChangeText from "./posts/CyclesOfChange.md";

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
    

  return [leadershipAlaEuthyphro, theCosmicDance, cyclesOfChange];
}

export default getBlogPosts;
