    var input = document.getElementById('savedata');
    var rawData = document.getElementById('decoded');
    var subbtn = document.getElementById('process');
    input.addEventListener('change', listSave);
    subbtn.addEventListener('click', listSave);

    function listSave(event) {
    	event.preventDefault();
    	rawData.value = '';

    	decodeSave();
    	rawData.value = JSON.stringify(JSON.parse(atob(mstring)),null,2);

    }