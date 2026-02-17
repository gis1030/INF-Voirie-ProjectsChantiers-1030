function clearElements(ids) {
    if (!Array.isArray(ids)) return;
    ids.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = "";
    });
}

function ClearData() {
    if (typeof layerGroup !== 'undefined' && layerGroup) {
        layerGroup.clearLayers();
    }
    if (typeof markerReal !== 'undefined' && markerReal) {
        carte.removeLayer(markerReal);
    }

    const ids = [
        "Chantier1030", "ChantierOsiris", "DateDebutChantier", "DateFinChantier",
        "Impetrant", "NatureChantier", "DescriptionChantier", "Rues1030",
        "CommentairesOsiris", "DateDebutChantier_0", "DateFinChantier_0"
    ];
    clearElements(ids);
}

function ClearData01() {
    const ids = [
        "Chantier1030", "ChantierOsiris", "DateDebutChantier", "DateFinChantier",
        "Impetrant", "NatureChantier", "DescriptionChantier", "Rues1030",
        "CommentairesOsiris", "DateDebutChantier_0", "DateFinChantier_0"
    ];
    clearElements(ids);
};

function ClearData01B() {
    const ids = [
        "Chantier1030", "ChantierOsiris", "DateDebutChantier", "DateFinChantier",
        "Impetrant", "NatureChantier", "DescriptionChantier", "Rues1030",
        "TronconDebut1030", "TronconFin1030"
    ];
    clearElements(ids);
}

function ClearData02() {
    const ids = [
        "Code_Roadway1030", "Code_Street1030", "RoadwayName_FR", "RoadwayName_NL",
        "TypeStreet", "SegmentLength", "Code_Node1030", "Code_SharedStreet1030",
        "Name_SharedStreet1030", "Number_SharedStreet1030"
    ];
    clearElements(ids);
}

function Return() {
    window.open("Carte_ProjectsChantiers1030_02.html");
    window.close("Carte_ProjectsChantiers1030_03.html");
}

function ReloadData() {
    window.close("Carte_ProjectsChantiers1030_03.html");
    window.open("Carte_ProjectsChantiers1030_03.html");
}


function ClearDataSearch() {
    // if (layerGroup) {
    //     layerGroup.clearLayers();
    // }
    // if (markerReal) {
    //     carte.removeLayer(markerReal);
    // }

    const ids = [
        "Chantier1030", "ChantierOsiris", "DateDebutChantier", "DateFinChantier",
        "Impetrant", "NatureChantier", "RemarqueChantier", "Rues1030",
        "TronconDebut1030", "TronconFin1030", "FermetureRue", "CommentairesOsiris",
        "DateDebutChantier_0"
        //"DateFinChantier_0"
    ];
    clearElements(ids);

    if (typeof LoadALLData !== 'undefined') LoadALLData();
    RestoreDatalists();
}

function RestoreDatalists() {
    if (typeof populateDatalist === 'function') {
        if (typeof streetNames1030_0 !== 'undefined') populateDatalist('datalist_StreetFR', streetNames1030_0);
        if (typeof impetrantsNames1030_0 !== 'undefined') populateDatalist('datalist_Impetrants', impetrantsNames1030_0);
        if (typeof fermetureRue1030_0 !== 'undefined') populateDatalist('datalist_FermetureRue', fermetureRue1030_0);
    }
}

function ClearDataSearchTable() {
    const ids = [
        "Chantier1030", "ChantierOsiris", "DateDebutChantier", "DateFinChantier",
        "Impetrant", "NatureChantier", "RemarqueChantier", "Rues1030",
        "TronconDebut1030", "TronconFin1030", "FermetureRue", "CommentairesOsiris",
        "DateDebutChantier_0", "DateFinChantier_0"
    ];
    clearElements(ids);

    //LoadALLData();
    window.open("Carte_ProjectsChantiers1030_04.html");
    window.close();
}

function ClearDataSearch_URBIS() {
    const ids = [
        "Code_Roadway1030", "Code_Street1030", "RoadwayName_FR",
        "RoadwayName_NL", "TypeStreet", "SegmentLength",
        "Code_Node1030", "Code_SharedStreet1030",
        "Name_SharedStreet1030", "Number_SharedStreet1030",
        "RoadwayName_FR_F", "RoadwayName_FR_D",
    ];
    clearElements(ids);
    if (typeof LoadALLData === 'function') LoadALLData();
}


function ClearDataSearchTable_URBIS() {
    ClearData02();
    window.open("Carte_ProjectsChantiers1030_04C.html");
    window.close();
}
