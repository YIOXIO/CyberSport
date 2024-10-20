// export async function initMap() {
//     await ymaps3.ready;
//     const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer } = ymaps3;
//     const { YMapDefaultMarker } = await ymaps3.import('@yandex/ymaps3-markers@0.0.1');

//     window.map = new YMap(
//         document.getElementById('map'),
//         {
//             location: {
//                 center: [37.626825, 55.728099],
//                 zoom: 18
//             },
//             mode: 'vector',
//             showScaleInCopyrights: true
//         }
//     );

//     map.addChild(new YMapDefaultSchemeLayer());
//     map.addChild(new YMapDefaultFeaturesLayer());

//     const marker = new YMapDefaultMarker({
//         coordinates: [37.626825, 55.728099],
//         color: 'grey',
//         title: 'РЭУ им.Г.В Плеханова',
//         size: 'normal',
//         iconName: 'fallback'
//     });

//     map.addChild(marker);
// }