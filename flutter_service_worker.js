'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "fb060f0d1bf91f4f45c77910f4ebaa62",
"assets/AssetManifest.bin.json": "63a6465ff949c1ba1724d83f75ea6257",
"assets/AssetManifest.json": "c9c39e9d0b9a5d7130c5527a26621a4b",
"assets/assets/fonts/manrope/Manrope-Bold.ttf": "69258532ce99ef9abf8220e0276fff04",
"assets/assets/fonts/manrope/Manrope-ExtraBold.ttf": "8541582abce817ab8857c51ae0a35ca9",
"assets/assets/fonts/manrope/Manrope-ExtraLight.ttf": "100308b8ce2da4b67f4850e9b9252b26",
"assets/assets/fonts/manrope/Manrope-Light.ttf": "9e353f65739cc41a37bed272850cf92e",
"assets/assets/fonts/manrope/Manrope-Medium.ttf": "aa9897f9fa37c84d7b9d3d05a8a6bc07",
"assets/assets/fonts/manrope/Manrope-Regular.ttf": "f8105661cf5923464f0db8290746d2f9",
"assets/assets/fonts/manrope/Manrope-SemiBold.ttf": "4410f0d144bea752f9bfb5f33909e0c5",
"assets/assets/images/icons/apple.svg": "bad0bc645e16ed061d67a3a254454f6b",
"assets/assets/images/icons/blood_pressure_icon.svg": "619105a6d3b560b2403c85e98c88dc6b",
"assets/assets/images/icons/calender.svg": "744111bf22c84bf096f51a2f1cf14653",
"assets/assets/images/icons/calender2.svg": "c28e9a5cedb0fad096afc9f1f405988a",
"assets/assets/images/icons/call.svg": "7473a29e4bdbac37cb5a279c0eff8593",
"assets/assets/images/icons/chat.svg": "ac4883604f1d5e6283427ce1213e4baa",
"assets/assets/images/icons/clock.svg": "354b8a38cd6972a869538f84daf6f97d",
"assets/assets/images/icons/email.svg": "cef7bf56c980f083510e128aa9d9b833",
"assets/assets/images/icons/failure_icon.svg": "e2e71249dfd0325934bb9a4578efd63a",
"assets/assets/images/icons/file.svg": "71d6cca041b5bce7f709ef9439bb0b01",
"assets/assets/images/icons/footprint.svg": "cab9a57096e3a7d509b77d29ab5ad911",
"assets/assets/images/icons/google.svg": "eb2092b1a76321f58b11e0937e190aa6",
"assets/assets/images/icons/half_moon.svg": "575b593bb69ba477a7b37f6f46228458",
"assets/assets/images/icons/heart.svg": "e86d0462aebcc409510eea57a739f322",
"assets/assets/images/icons/heart_green.svg": "0f654bb33f53474b433e07bf49f32e1e",
"assets/assets/images/icons/heart_rate_icon.svg": "facbe3c305b11a9ed022ede8f98b9d1c",
"assets/assets/images/icons/history.svg": "ca00aead0c8a746ca8f158aacc3b0448",
"assets/assets/images/icons/home.svg": "13a20161f1cd33563d2bcb36b24d948f",
"assets/assets/images/icons/location.svg": "2bc52b042aa5dabeda81a4977b9840de",
"assets/assets/images/icons/pencil.svg": "37df80eeedae1686d49e5e134ddcc846",
"assets/assets/images/icons/plus.svg": "34954ad33d8707e444b0bf0dbb79ac88",
"assets/assets/images/icons/right_rounded.svg": "6a62bd4fc50735a2d15ed34a6bc69f31",
"assets/assets/images/icons/search_rounded.svg": "2869887feaf694b87c0e3604f12b1177",
"assets/assets/images/icons/sethoscope.svg": "d4249279c9bbc893e6d511abf3b187c5",
"assets/assets/images/icons/settings.svg": "1f2c9e4203004c3299034685ce37bfbb",
"assets/assets/images/icons/sleep_icon.svg": "c39d3e5e8514966f6276d198f67c57f8",
"assets/assets/images/icons/steps_taken_icon.svg": "d51f76055d37cbc5d048df5bd4152209",
"assets/assets/images/icons/success_icon.svg": "582a72d04192fe588048a63c370ea422",
"assets/assets/images/icons/test_tube.svg": "b90e8846bf33076cc52b6b82e7792c05",
"assets/assets/images/icons/three_dot.svg": "b7c1ab0da19b30d3303444f0761b928e",
"assets/assets/images/icons/warning.svg": "b8712c14c7fd5e4eb0a3494d775107b8",
"assets/assets/images/main/lab_img.png": "5727cd79797e263d2218aed91ebb0a57",
"assets/assets/images/main/man_profile.png": "4004ca9c34971461e008ddc43bb3dfac",
"assets/assets/images/main/man_profile2.png": "14733314768ab0790ab176b545c57854",
"assets/assets/images/main/map.png": "57749fc8e74b942292351122f3867a03",
"assets/assets/images/onboarding/1.png": "688de5641a5e839db69ed29cf2eb95d1",
"assets/assets/images/onboarding/2.png": "c5be45947a530c707416ee86bdb5d628",
"assets/assets/images/onboarding/3.png": "b126a9edebcba823bc4f9c62ba5636f4",
"assets/FontManifest.json": "918f9ff1ec8fc31ba4cebdbe58d58c91",
"assets/fonts/MaterialIcons-Regular.otf": "632bd60aa0fdd5365a69f16be7bacdfe",
"assets/NOTICES": "3e15445ad6c422b1d0c53ba137b294b5",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "ae8ba56c798694d4a68fe1df3ff9c503",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "acfffd1a083ede0eda1ab3d5f3f26ff8",
"/": "acfffd1a083ede0eda1ab3d5f3f26ff8",
"main.dart.js": "5900fc86103383655863057fc054c948",
"manifest.json": "bf24c84c3bf99672a631c4f84464e793",
"version.json": "91f323efe6c6e5074d8c87067a80a355"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
