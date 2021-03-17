import Chance from "chance";

const NUM_SECTIONS = 10;

const chance = new Chance();

export const getRandomSections = () => {
  const sections = [];
  for (let i = 0; i < NUM_SECTIONS; i++) {
    const title = chance.sentence({
      words: chance.integer({ min: 1, max: 3 }),
    });

    let paragraphs = [];

    const numberOfParagraphs = chance.integer({ min: 1, max: 2 }); // Le baje el max a 2 para poder hacer la prueba del navbar activo con scroll
    // const numberOfParagraphs = chance.integer({ min: 1, max: 20 });

    for (let index = 0; index < numberOfParagraphs; index++) {
      paragraphs.push(chance.paragraph());
    }

    sections.push({
      title,
      paragraphs,
      id: title.replace(/\s/g, "-"),
    });
  }

  return sections;
};
