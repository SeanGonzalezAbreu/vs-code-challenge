import Chance from 'chance'

const NUM_SECTIONS = 10

const chance = new Chance()

export const getRandomSections = () => {
    const sections = []
    for(let i=0; i<NUM_SECTIONS; i++){
        const title = chance.sentence({ words: chance.integer({ min: 1, max: 3 }) })
        sections.push({
            title,
            paragraphs: chance.paragraph(),
            id: title.replace(/\s/g, '-'),
        })
    }
    return sections
}