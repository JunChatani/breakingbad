import {episode, formatEpisode} from "./episode";

describe('returns correct format when string() is called with certain episode. ', () => {
    it('with episode number and season less than 10', () => {
        // Given
        const episode: episode = {
            title: "Kafkaesque",
            season: 3,
            characters: [],
            episodeNumber: 9
        };

        // When
        const formattedEpisode = formatEpisode(episode);

        // Then
        expect(formattedEpisode).toEqual("S0309 - Kafkaesque");
    });
    it('with episode number greater than 9 and season less than 10', () => {
        // Given
        const episode: episode = {
            title: "Kafkaesque",
            season: 7,
            characters: [],
            episodeNumber: 12
        }

        // When
        const formattedEpisode = formatEpisode(episode);

        // Then
        expect(formattedEpisode).toEqual("S0712 - Kafkaesque");
    });
    it('with episode number and season greater than 9', () => {
        // Given
        const ep: episode = {
            title: "Kafkaesque",
            season: 17,
            characters: [],
            episodeNumber: 12
        }

        // When
        const formattedEpisode = formatEpisode(ep);

        // Then
        expect(formattedEpisode).toEqual("S1712 - Kafkaesque");
    });
})