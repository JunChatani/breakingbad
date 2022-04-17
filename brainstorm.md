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

