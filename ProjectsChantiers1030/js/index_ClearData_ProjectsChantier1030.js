function ClearData() {
    if (layerGroup) {
        layerGroup.clearLayers();
    }
    if (markerReal) {
        carte.removeLayer(markerReal);
    }

    document.getElementById("Chantier1030").value = ""
    document.getElementById("ChantierOsiris").value = ""
    document.getElementById("DateDebutChantier").value = ""
    document.getElementById("DateFinChantier").value = ""
    document.getElementById("Impetrant").value = ""
    document.getElementById("NatureChantier").value = ""
    document.getElementById("DescriptionChantier").value = ""
    document.getElementById("Rues1030").value = ""
    document.getElementById("CommentairesOsiris").value = ""
    document.getElementById("DateDebutChantier_0").value = ""
    document.getElementById("DateFinChantier_0").value = ""

}

function ClearData01() {
    document.getElementById("Chantier1030").value = ""
    document.getElementById("ChantierOsiris").value = ""
    document.getElementById("DateDebutChantier").value = ""
    document.getElementById("DateFinChantier").value = ""
    document.getElementById("Impetrant").value = ""
    document.getElementById("NatureChantier").value = ""
    document.getElementById("DescriptionChantier").value = ""
    document.getElementById("Rues1030").value = ""
    document.getElementById("CommentairesOsiris").value = ""
    document.getElementById("DateDebutChantier_0").value = ""
    document.getElementById("DateFinChantier_0").value = ""
};

function ClearData01B() {
    document.getElementById("Chantier1030").value = ""
    document.getElementById("ChantierOsiris").value = ""
    document.getElementById("DateDebutChantier").value = ""
    document.getElementById("DateFinChantier").value = ""
    document.getElementById("Impetrant").value = ""
    document.getElementById("NatureChantier").value = ""
    document.getElementById("DescriptionChantier").value = ""
    document.getElementById("Rues1030").value = ""
    document.getElementById("TronconDebut1030").value = ""
    document.getElementById("TronconFin1030").value = ""
}

function ClearData02() {
    document.getElementById("Code_Roadway1030").value = ""
    document.getElementById("Code_Street1030").value = ""
    document.getElementById("RoadwayName_FR").value = ""
    document.getElementById("RoadwayName_NL").value = ""
    document.getElementById("TypeStreet").value = ""
    document.getElementById("SegmentLength").value = ""

    document.getElementById("Code_Node1030").value = ""
    document.getElementById("Code_SharedStreet1030").value = ""
    document.getElementById("Name_SharedStreet1030").value = ""
    document.getElementById("Number_SharedStreet1030").value = ""
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

    document.getElementById("Chantier1030").value = ""
    document.getElementById("ChantierOsiris").value = ""
    document.getElementById("DateDebutChantier").value = ""
    document.getElementById("DateFinChantier").value = ""
    document.getElementById("Impetrant").value = ""
    document.getElementById("NatureChantier").value = ""
    document.getElementById("RemarqueChantier").value = ""
    document.getElementById("Rues1030").value = ""
    document.getElementById("TronconDebut1030").value = ""
    document.getElementById("TronconFin1030").value = ""
    document.getElementById("FermetureRue").value = ""
    document.getElementById("CommentairesOsiris").value = ""

    document.getElementById("DateDebutChantier_0").value = ""
    //document.getElementById("DateFinChantier_0").value = ""

    LoadALLData();
}

function ClearDataSearchTable() {
    document.getElementById("Chantier1030").value = ""
    document.getElementById("ChantierOsiris").value = ""
    document.getElementById("DateDebutChantier").value = ""
    document.getElementById("DateFinChantier").value = ""
    document.getElementById("Impetrant").value = ""
    document.getElementById("NatureChantier").value = ""
    document.getElementById("RemarqueChantier").value = ""
    document.getElementById("Rues1030").value = ""
    document.getElementById("TronconDebut1030").value = ""
    document.getElementById("TronconFin1030").value = ""
    document.getElementById("FermetureRue").value = ""
    document.getElementById("CommentairesOsiris").value = ""

    document.getElementById("DateDebutChantier_0").value = ""
    document.getElementById("DateFinChantier_0").value = ""

    //LoadALLData();
    window.open("Carte_ProjectsChantiers1030_04.html");
    window.close();
}

function clearElements(ids) {
    ids.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = "";
    });
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
