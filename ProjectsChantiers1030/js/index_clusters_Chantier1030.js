// Cluster Factory
function createClusterGroup(classNameInfo, optionsOverride = {}) {
    const defaultOptions = {
        spiderfyOnMaxZoom: true,
        showCoverageOnHover: true,
        zoomToBoundsOnClick: true,
        removeOutsideVisibleBounds: true,
        disableClusteringAtZoom: 17,
        maxClusterRadius: 45,
        singleMarkerMode: false,
        polygonOptions: { color: 'red' },
        iconCreateFunction: function (cluster) {
            const count = cluster.getChildCount();
            const digits = (count + '').length;
            return L.divIcon({
                html: count,
                className: `${classNameInfo} digits-${digits}`,
                iconSize: null
            });
        }
    };

    return L.markerClusterGroup({ ...defaultOptions, ...optionsOverride });
}

// Base Groups
var GroupMarkersMap1030 = createClusterGroup('cluster05');
var GroupMarkersMap1030_ALL = createClusterGroup('cluster05');
var GroupPolygonsMap1030 = createClusterGroup('cluster05');
var GroupPolygonsMap1030_ALL = createClusterGroup('cluster05');

// Special Groups with different settings
const zoom18Options = { disableClusteringAtZoom: 18, maxClusterRadius: 50 };
var GroupMarkersMap1030_99 = createClusterGroup('cluster45', zoom18Options);
var GroupMarkersMap1030_00 = createClusterGroup('cluster45', zoom18Options);

// Quarterly Groups (Year/Quarter logic seems implied by names Q01, Q02...)
// Default radius 100 for these
const largeRadiusOptions = { maxClusterRadius: 100 };

// Generating groups dynamically would be cleaner but to maintain compatibility with existing variable names
// we must declare them explicitly or attach them to window.
// However, 'var' puts them on window if top-level.

var GroupMarkersMap1030_Q99 = createClusterGroup('cluster02_01', largeRadiusOptions);
var GroupMarkersMap1030_Q01 = createClusterGroup('cluster02_01', largeRadiusOptions);
var GroupMarkersMap1030_Q02 = createClusterGroup('cluster02_02', largeRadiusOptions);
var GroupMarkersMap1030_Q03 = createClusterGroup('cluster02_03', largeRadiusOptions);
var GroupMarkersMap1030_Q04 = createClusterGroup('cluster02_04', largeRadiusOptions);
var GroupMarkersMap1030_Q05 = createClusterGroup('cluster02_05', largeRadiusOptions);
var GroupMarkersMap1030_Q06 = createClusterGroup('cluster02_06', largeRadiusOptions);
var GroupMarkersMap1030_Q07 = createClusterGroup('cluster02_07', largeRadiusOptions);
var GroupMarkersMap1030_Q08 = createClusterGroup('cluster02_08', largeRadiusOptions);

// Q09 to Q22 seem to repeat classes cyclically or specific logic?
// Original: Q09 uses cluster02_01 ...
var GroupMarkersMap1030_Q09 = createClusterGroup('cluster02_01', largeRadiusOptions);
var GroupMarkersMap1030_Q10 = createClusterGroup('cluster02_02', largeRadiusOptions);
var GroupMarkersMap1030_Q11 = createClusterGroup('cluster02_03', largeRadiusOptions);
var GroupMarkersMap1030_Q12 = createClusterGroup('cluster02_04', largeRadiusOptions);
var GroupMarkersMap1030_Q13 = createClusterGroup('cluster02_05', largeRadiusOptions);
var GroupMarkersMap1030_Q14 = createClusterGroup('cluster02_06', largeRadiusOptions);
var GroupMarkersMap1030_Q15 = createClusterGroup('cluster02_07', largeRadiusOptions);
var GroupMarkersMap1030_Q16 = createClusterGroup('cluster02_08', largeRadiusOptions);
var GroupMarkersMap1030_Q17 = createClusterGroup('cluster02_01', largeRadiusOptions);
var GroupMarkersMap1030_Q18 = createClusterGroup('cluster02_02', largeRadiusOptions);
var GroupMarkersMap1030_Q19 = createClusterGroup('cluster02_03', largeRadiusOptions);
var GroupMarkersMap1030_Q20 = createClusterGroup('cluster02_04', largeRadiusOptions);
var GroupMarkersMap1030_Q21 = createClusterGroup('cluster02_05', largeRadiusOptions);
var GroupMarkersMap1030_Q22 = createClusterGroup('cluster02_06', largeRadiusOptions);

// B Variants
var GroupMarkersMap1030_Q99B = createClusterGroup('cluster02_01', largeRadiusOptions);
var GroupMarkersMap1030_Q01B = createClusterGroup('cluster02_01', largeRadiusOptions);
var GroupMarkersMap1030_Q02B = createClusterGroup('cluster02_02', largeRadiusOptions);
var GroupMarkersMap1030_Q03B = createClusterGroup('cluster02_03', largeRadiusOptions);
var GroupMarkersMap1030_Q04B = createClusterGroup('cluster02_04', largeRadiusOptions);
var GroupMarkersMap1030_Q05B = createClusterGroup('cluster02_05', largeRadiusOptions);
var GroupMarkersMap1030_Q06B = createClusterGroup('cluster02_06', largeRadiusOptions);
var GroupMarkersMap1030_Q07B = createClusterGroup('cluster02_07', largeRadiusOptions);
var GroupMarkersMap1030_Q08B = createClusterGroup('cluster02_08', largeRadiusOptions);
var GroupMarkersMap1030_Q09B = createClusterGroup('cluster02_01', largeRadiusOptions);
var GroupMarkersMap1030_Q10B = createClusterGroup('cluster02_02', largeRadiusOptions);
var GroupMarkersMap1030_Q11B = createClusterGroup('cluster02_03', largeRadiusOptions);
var GroupMarkersMap1030_Q12B = createClusterGroup('cluster02_04', largeRadiusOptions);
var GroupMarkersMap1030_Q13B = createClusterGroup('cluster02_05', largeRadiusOptions);
