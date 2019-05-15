const loadData = (text) => {
    let s = text.search('\n');
    let arraySplitN, searchString, arraySplitSemiColon, searchCharacter, arraySplitCharacter, seachStringIfNotCharacter, arraySplitEnd;
    let object1 = {};
    let object2 = {};
    let result = [];
    if (s > -1) {
        arraySplitN = text.split('\n');
        arraySplitN.map(i => {
            searchString = i.search(';');
            if (searchString > -1) {
                arraySplitSemiColon = i.split(';');
                arraySplitSemiColon.map(s => {
                    searchCharacter = s.search('=');
                    if (searchCharacter > -1) {
                        arraySplitCharacter = s.split('=');
                        object1[arraySplitCharacter[0]] = arraySplitCharacter[1];
                    }
                });
                result.push(object1);
            } else {
                seachStringIfNotCharacter = i.search('=');
                if (seachStringIfNotCharacter > -1) {
                    arraySplitEnd = i.split('=');
                    object2[arraySplitEnd[0]] = arraySplitEnd[1];
                    result.push(object2);
                }
            }
        });
    }
    return result;
}
export default loadData