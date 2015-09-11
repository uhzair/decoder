    const ANTI_CHEAT_CODE = 'Fe12NAfA3R6z4k0z';
    const SALT = 'af0ik392jrmt0nsfdghy0';
    const CHARACTERS = '1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
    
    function fromAntiCheatFormat(string) {
        var elements = string.split(ANTI_CHEAT_CODE);
        var sdata = unSprinkle(elements[0]);
        var hash = elements[1];
        var dataHash = getHash(sdata);
        if (dataHash = hash) {
            return sdata;
        }else{
        dataList.value = "Hash is bad";
        }
    }

    function unSprinkle(string) {
        var array = string.split("");
        var result = [];
        var counter = 0;
        while (counter < array.length) {
            result[counter / 2] = array[counter];
            counter += 2;
        }
        return result.join("");
    }

    function getHash(string) {
        var charaters = string.split();
        charaters.sort();
        var sortedCharaters = charaters.join();
        return CryptoJS.MD5(sortedCharaters + SALT);
    }
    
    function decodeSave(){
        mstring = input.value;
        var antiCheatCodeIndex = mstring.search(ANTI_CHEAT_CODE);
        var antiCheatCodeExist = (antiCheatCodeIndex != -1);
        if (antiCheatCodeExist) {
            mstring = fromAntiCheatFormat(mstring);
        }
        data = (JSON.parse(atob(mstring)));
        return(data);
    }
