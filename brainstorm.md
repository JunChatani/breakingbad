## Base requirements

input: list of character names :
    Input can be either of type string (single characters) or list (multiple characters)

output: episode list in which characters appeared together. In format:
    S{season}{episode} - {episodeName}

## Adapter design pattern in Breaking Bad.
-- 
interface to api which requires:
    - get (all)
    - get by ID
    - get by name

episode: {
    characters: character[]
}
character: string

init() 
getCharacters() keyvalue id/name



## Plan of action 


-- Create Mock in to use in tests instead of actual REST calls.
    Feature of mock BreakingBadClient ? 
        --- ShowService.test
                fake breaking bad client
                getEpisodes should return predefined list instead of REST call
        --- BreakingBadClient.test
                Axios get should be mocked to not actually perform a REST call

-- Add field to episodes type were missing one !
-- Debug issue in ShowSevice test (multiple names).

-- implement Handler
-- implement adapters/api