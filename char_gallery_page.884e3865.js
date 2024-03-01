// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"KCC-Char-Gallery.Characters.json":[function(require,module,exports) {
module.exports = [{
  "_id": {
    "$oid": "65819bd6936474fecbd25710"
  },
  "name": "Komi Shouko",
  "pfp": "https://i.pinimg.com/564x/dc/a1/7c/dca17cb8f7cb3a4a761fdd1e8df488a2.jpg",
  "trivia-facts": ["Shouko likes cats.", "She suddenly grows cat ears when she's excited or enthusiastic"],
  "gallery-pics": ["https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs1.zerochan.net%2FKomi.Shouko.600.3501458.jpg&f=1&nofb=1&ipt=59705ec614955a69ce4440766ba893e30be00290547878b2f03631bb5d31cf7c&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F49%2F75%2Fab%2F4975abb0e51dd82cb738c0157c64ec00.jpg&f=1&nofb=1&ipt=1c3feca989c6f47ae22f4938145f8ea9a8923dca3ec32b4c1b7a2cb3add58811&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperforu.com%2Fwp-content%2Fuploads%2F2022%2F07%2FKomi-Shouko-Komi-San-Wa-Comyushou-Desu-Anime10.jpg&f=1&nofb=1&ipt=668ee3e50b2368c218c9001c9b20fa86d1d2f5f3f92bf5cb71a210f2532536a7&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F47%2Fb7%2F2b%2F47b72b856dc6ddb91ac4521a70ef5907.jpg&f=1&nofb=1&ipt=12e5a1dd3307fd438f05bc6546486b3b00c183184f5b10836fa2a7040376a4ee&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F00%2F01%2Faf%2F0001af9de4cfa49f817db4b358fb879f.jpg&f=1&nofb=1&ipt=4f8d086b2c23bb1a24644c7b006ca5f5226b87b53aab49420fee10b954d9ccea&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F3d%2Fa5%2F0a%2F3da50ae4854b82960b674555279cddb1.jpg&f=1&nofb=1&ipt=a343cf8fd5976a0f9120defced832f019ccc59585f3d68b0daa093ea58f947e6&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F236x%2Fa0%2F70%2F8b%2Fa0708b12282fcff253fbdf0cf2fea0ec.jpg%3Fnii%3Dt&f=1&nofb=1&ipt=aa19160d0fd139eb6121ddba175a2bf1b6c1bb293d46083499131604ba700e7b&ipo=images", "https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/11/komi-with-a-note.jpg", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsun9-54.userapi.com%2Fimpg%2FWzYx4Lf7JzDn5WINLLVOTMOnoAwRftS-zAN-yg%2F5lNFWyhhEmk.jpg%3Fsize%3D752x1080%26quality%3D95%26sign%3D31e1b5c6bb309fbf43ce71a7c51854b3%26type%3Dalbum&f=1&nofb=1&ipt=922c50a1e0309bfdc77589a8603c026ae51eadbe6948915b1b32b190b597cb38&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsomoskudasai.com%2Fwp-content%2Fuploads%2F2023%2F07%2Fimage-80.png&f=1&nofb=1&ipt=a5d3a27b24d77e8a2b535c308800877afa3cceabc7ede7cd0b7c064943ce5676&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F236x%2F47%2F98%2F84%2F4798849485134b45c191b816bc567527.jpg&f=1&nofb=1&ipt=fe5e418f39ea35b522225ffe5545edd9cfbe2bafc7ce68c6f908d4ef10842c61&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.readkakegurui.com%2Ffile%2Fmangaifenzi22%2Fkomi-can-t-communicate-vol-6-chapter-79-studying-at-nakanaka-san-s-place-9.jpg&f=1&nofb=1&ipt=8bf4544ab24615d406d85ab4da080a5d45cb32fdfb4ef1c7b3ec680833daeb23&ipo=images", "https://i.pinimg.com/564x/18/d4/27/18d42791c0bac3e59823a8c8f90e9538.jpg", "https://i.pinimg.com/564x/91/f6/f7/91f6f7f9648a9b34eb9c985e3f9df2dc.jpg", "https://i.pinimg.com/564x/3d/fb/16/3dfb164805a57d6665ab9e8d8dc45546.jpg"]
}, {
  "_id": {
    "$oid": "65819bd6936474fecbd25711"
  },
  "name": "Manbagi Rumiko",
  "pfp": "https://i.pinimg.com/564x/5b/be/9d/5bbe9d1049a0227ed2a6a582172ad9cc.jpg",
  "trivia-facts": ["She likes horror movies.", "According to Komi, both her and Manbagi share the same style of underwear, but with different colors"],
  "gallery-pics": ["https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthicc.mywaifulist.moe%2Fwaifus%2F19196%2F6ab397e0e6eaedc1ac350f5d7f228f33f29e4ecfa743b9edaeb7e10a2396c88d_thumb.jpeg&f=1&nofb=1&ipt=c3ed581189802265f150089d4183640a9d28b45c1c5f6e5747f0946dfc3a09d8&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F3f%2F45%2F4d%2F3f454defc5ddfeb3d8c3424a3fbddc60.jpg&f=1&nofb=1&ipt=b1ff5f0c8c4c5a13ed0de8944f96eb3a6c387c5b6fa74a8f2ef113e9a2159d37&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F64.media.tumblr.com%2Fb2d615b8de41cecea1aa0eab07e62eae%2Fed463b606edd1683-b5%2Fs640x960%2Ff95267dbfeff0c9702585d4250563600bb4fd641.png&f=1&nofb=1&ipt=0f1e3fda239e3d4650bc17eb97ad81c6ed9d5407d6f871c881d9ec2b7347dc6e&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpreview.redd.it%2Fhipl165l53k41.jpg%3Fauto%3Dwebp%26s%3D4ac84354927fc1222ca9657a47240f46dddc5b1d&f=1&nofb=1&ipt=f870f6d37f001abcc9442e62c4355fd95276fa922082ef9fc8ab12e3ae0e3322&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F64.media.tumblr.com%2F9464e2061fa0f666f9e8db9881940814%2Fad02c2b554be9720-86%2Fs500x750%2F761ff496b347fcd8674d139f370448292a1c864a.jpg&f=1&nofb=1&ipt=07a600a1af4ddfbdf56de5d82e596d8408af8791e8df6a6801f59084fbc1c184&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpreview.redd.it%2Fif-manbagi-had-actually-won-how-do-you-guys-think-the-story-v0-yujr9tf99t1a1.png%3Fwidth%3D640%26crop%3Dsmart%26auto%3Dwebp%26s%3Dce237f1e6816a8bf892db74e25023c3dff27d2ef&f=1&nofb=1&ipt=ae0275466a61d51605485de52bc86f5e0f43b26ed67c9a839465959be790e96e&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2F8AFbydQcc3M%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=a02bebb2f17cb93bdd473555990669a10478416d701dac52b06254846992ffa1&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.ifunny.co%2Fimages%2F742da2512825c0c5a058465705ab7149c12f9366a1130b8812831637ca1599dd_1.jpg&f=1&nofb=1&ipt=5e943320119ceb9baec7fb2f80b19c3fed694d2c83e43eb7308d7d89fc195366&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F236x%2Fad%2Faf%2F02%2Fadaf02aed59319c4362cf5f061ba26fb.jpg%3Fnii%3Dt&f=1&nofb=1&ipt=f3626ac3da32c49d5af70f7773d5608221f89c6f5e34f17e815b1dc814a85098&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F66.media.tumblr.com%2F40480a5494fb3778078f6bf78cd87a6a%2Fceef63df06e7de66-69%2Fs540x810%2F8156f638fa833211474db53c51056bcd378f6b9a.png&f=1&nofb=1&ipt=749d9fe8a1c3769356b146c8f5147f8cd72ed654259e8b616561e384b1fdb8d6&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F64.media.tumblr.com%2Fbdb0e448960ec490043918b454eec24e%2Fd0b676db4daeb3d3-13%2Fs640x960%2Fe54a22eef61fbe4ce1b6f053441ede9b637cd842.jpg&f=1&nofb=1&ipt=47455f5175e5302dab2e04f4db0b2d1a47966f22ed0594afdca45287020a8a5c&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.readkakegurui.com%2Ffile%2Fmangaifenzi22%2Fkomi-can-t-communicate-vol-10-chapter-136-make-up-6.jpg&f=1&nofb=1&ipt=8fcf9e89763637ea49c071e13e6ffd93c458b642b68f207595bc04dd72bb0a20&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-cdn.9gag.com%2Fphoto%2FarMWLxp_700b.jpg&f=1&nofb=1&ipt=c67a277bc1bb739dea1ab0d1c93f7d7c0bb3e0fa5d3d9b8c8f17f2a7204f043b&ipo=images", "https://i.pinimg.com/736x/2d/18/bc/2d18bcfd3bb6a82fb2919eb4831bb666.jpg"]
}, {
  "_id": {
    "$oid": "65a5347f65c9d0a01347df13"
  },
  "name": "Najime Osana",
  "pfp": "https://i.pinimg.com/564x/bb/f4/74/bbf474546a3c4cb155fd9b272fc9df9b.jpg",
  "trivia-facts": ["Najimi can listen to up to 8 people at the same time.", "Najimi is allergic to cats, but finds them adorable regardless", "Najimi hates studying and anything related to school work, but receives substantially high grades despite not studying, most likely due to their natural intelligence"],
  "gallery-pics": ["https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F16%2F28%2F5f%2F16285f36c096b72c8775dcbb40695f7b.jpg&f=1&nofb=1&ipt=8363f5f5a14a0b3847979806b14af914c2385d92bfd3190c1f5b35ed17d185ec&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp11524514.jpg&f=1&nofb=1&ipt=3e7c8c5c5897be8c88b2fd43178c604d44afa6a203753d56e6b46947ac3cc3a5&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F88%2F6b%2F3a%2F886b3adbc0f9b8759bf9c04e92eac55c.jpg&f=1&nofb=1&ipt=092c3bcae303e1a22f53de6b9102eb6ba923e12d2e14f5557348dc892165d512&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic3.cbrimages.com%2Fwordpress%2Fwp-content%2Fuploads%2F2022%2F01%2Fkomi-najimi-tadano-pool.jpg&f=1&nofb=1&ipt=d4bf4d78bf0fa84ac5d7d783d17e57b0885f3f6add870b6696c9905959a9b7b8&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FT-1qVDg6CAM%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=d38e8fd3c853ec5ecc4b0b5d45d1c6750299c148d6f63294765fa8b16b6272fc&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F2e%2F2e%2Fbf%2F2e2ebfcf527c49ee355e7cd20f2cba4a.jpg&f=1&nofb=1&ipt=4db837ecbf45cee35571b8f776786ddee41dfe1ee0f8242396ab4a589079ba76&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F236x%2F51%2Fff%2F08%2F51ff08ec8bfbab4c71ae18716876ff65.jpg%3Fnii%3Dt&f=1&nofb=1&ipt=f8383ae62db8b532b93bf02c8840496292a7f8c2d88eb9fae58d7fe222f8bf94&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.wikia.nocookie.net%2F9b69c418-5110-46d2-a75f-a5c59603d500%2Fscale-to-width%2F755&f=1&nofb=1&ipt=cc526a593d6dc4ff26ccc0ab52fea097d80e42d9baa367184905dc5a708cd9b9&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F06%2Fb9%2F1c%2F06b91ccfcc1db402388438c4c8ab19a5.jpg&f=1&nofb=1&ipt=db037b12fa26c33dce36fcd298031e5a5de83f545067cbebbe2db9730ae29388&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fanimecorner.me%2Fwp-content%2Fuploads%2F2021%2F10%2Fkomi-cant-communicate-episode-2-2.png&f=1&nofb=1&ipt=29561b05aa5b4a1228e5aaf55795b8fc1831c34a7a6bbaa42981da1f8eaddc20&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fe9%2F0a%2Fb7%2Fe90ab78292503bcb56deab3b4256113a.jpg&f=1&nofb=1&ipt=d6b279f5e93d34446fbec0858d2310dd8f217e7d955784508c85920adbd0cfe3&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fe8%2Fa8%2Fe7%2Fe8a8e76770379a740752e5d2840b4c38.jpg&f=1&nofb=1&ipt=b44e22adeb49a79009aa13afd8ebb6c074d38e901e17c3045ced40abc06cf7da&ipo=images"]
}, {
  "_id": {
    "$oid": "65a537d265c9d0a01347df14"
  },
  "name": "Himiko Agari",
  "pfp": "https://i.pinimg.com/564x/da/4c/85/da4c859b65903160121a308ec2857bd8.jpg",
  "trivia-facts": ["Her idea for the Cultural Festival was to have a Whack-A-Mole booth. Her ulterior motive, however, was the desire for Shouko to hit her.", "She has a large appetite", "She's a masochist"],
  "gallery-pics": ["https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fe3%2Fae%2Fae%2Fe3aeae82bf5fba9b609352aa611ba2fc.jpg&f=1&nofb=1&ipt=e6fa04fc7cf35cffb2df56644c832a4e18b625c1d4dd060da4b663b0cbb70a42&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F4f%2F3d%2F1d%2F4f3d1d66cb483efc0c44651f985e1770.jpg&f=1&nofb=1&ipt=75f4b3483681066d276f4d3276cf59a92ae46e9fafe20f68e53da744772bee38&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2Fee%2Fa1%2F9f%2Feea19f3b49cb5b4d923bd030995eb566.jpg&f=1&nofb=1&ipt=010f69ca9da0bb778a2d1b481b53d99762f3cda9c9c910689f8fd434baa605ab&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FFS0Ig51WIAAme-j%3Fformat%3Djpg%26name%3Dlarge&f=1&nofb=1&ipt=06833d1fd7bb7c9ed5c26e9f0755df83a6beec8b4e81f99c238acd2f7cced763&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FFS0IcGXWAAAsBoO.jpg%3Alarge&f=1&nofb=1&ipt=3a70044caa171c92801c3be9acc692e4962be6515cf2ceccea445eac6e72c963&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstaticg.sportskeeda.com%2Feditor%2F2022%2F05%2Fec12a-16517174233946-1920.jpg&f=1&nofb=1&ipt=877d9585fb360971e6eb564f271bfd7d603d8072dde0af12877813a92de5ce9b&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F84%2F53%2Ff4%2F8453f42d789075eeaa767279c7eb926b.jpg&f=1&nofb=1&ipt=8ff8aeaee5fd805ef2d06ca2b680c4355553cee5ec2db332816033a9b6b0c092&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fab%2Fba%2F89%2Fabba89c63619c55ec94734ffa41cb606.jpg&f=1&nofb=1&ipt=c975aaa814746a7335b720c812947c54eb53ce3d987c000b81afc40bea82600f&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2Fb8%2Fce%2F88%2Fb8ce881e987a542d4a3a5573f38c5043.jpg&f=1&nofb=1&ipt=a1f12443f184b81a34712f53cd0b7fa6aa4253f72658f256b75b816661fff071&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fab%2F91%2Fd3%2Fab91d321ecaef62cf7ecf5493230a818.jpg&f=1&nofb=1&ipt=e7058670558f814a1583ba82cc40d07e1c01b0ac423f7577162befbfe571475e&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F96%2F97%2F44%2F9697444e5a6eae24fc22406f4d67c6bb.jpg&f=1&nofb=1&ipt=8b3dacd1bf400f577c768d443d9cbf4ebe7f94599461393943f65fc757a75c00&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F236x%2Fb3%2Fa4%2F51%2Fb3a4514569398fac851b9f156ed8d811.jpg&f=1&nofb=1&ipt=c80a8a514326fffaea98d995f35618467fd1d6941d88f2b322ebca35ac92241c&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fabload.de%2Fimg%2Fhimikoagarid3j77.png&f=1&nofb=1&ipt=1d79281c0aec7c65d04dfdd17498f93fc9b29cfd9f7aad8137882906bd578805&ipo=images"]
}, {
  "_id": {
    "$oid": "65a5da5afc27f4bc502413a2"
  },
  "name": "Yamai Ren",
  "pfp": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdere.shikimori.one%2Fsystem%2Fuser_images%2Foriginal%2F615738%2F1549569.jpg&f=1&nofb=1&ipt=ed9c34a5f0fac677e2e326b194e893f60cc2a6c73186e3820d6d53ec370692b6&ipo=images",
  "trivia-facts": ["Yamai can play violin and piano", "Yamai is a rather materialistic person; she spends her breaks on luxurious vacations and likes designer clothes and accessories. This suggests that (like the archetypal popular girl) she comes from a wealthy background.", "Her idea for the Cultural Festival was the Haunted House, her ulterior motive being getting away with touching Komi's butt under the cover of a dark classroom"],
  "gallery-pics": ["https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic1.cbrimages.com%2Fwordpress%2Fwp-content%2Fuploads%2F2021%2F12%2FKomi-Cant-Communicate-19.jpg&f=1&nofb=1&ipt=ba4cbcc3d0cfd2c6da7b2554c6c42b7bfad3756ced2244626740cf6386b8f772&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp11568486.jpg&f=1&nofb=1&ipt=e9d0b0b42c170559a59ce3da904cf07e33b325995758d172a4b77a51e7ad90f5&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic1.cbrimages.com%2Fwordpress%2Fwp-content%2Fuploads%2F2022%2F05%2FRen-Yamai-with-Komi.jpg&f=1&nofb=1&ipt=f46dec7e4592e98f9a3e3c04c386403858ca0565175c72239a5bd7e6ce655bed&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F7c%2F47%2F4b%2F7c474b5bf5414b4d769930ab26938a7c.jpg&f=1&nofb=1&ipt=f1062805504fe33381b995ba8364a586ab5f1b8ca2de8798ca709783278627f3&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpreview.redd.it%2Fbzn1rmsam2081.jpg%3Fauto%3Dwebp%26s%3Dd883b067c2e78e285f18f1336bf54fd0a0d922c3&f=1&nofb=1&ipt=1364a4f966eb86d731d13ce59fce4403a0066d6ef7fc94a9969b2c7a64dc9233&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpreview.redd.it%2Fk941rcfotbj81.jpg%3Fwidth%3D568%26format%3Dpjpg%26auto%3Dwebp%26s%3D437c68d2be14b90fe0c0c8c2e86a9053195062ae&f=1&nofb=1&ipt=a276dd32cfaef2b173c8ddd8b678ed206d3a1fd9e156d79c08edd04732d699ea&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.kym-cdn.com%2Fphotos%2Fimages%2Foriginal%2F001%2F838%2F861%2Fd7b.png&f=1&nofb=1&ipt=af4730ef0a00eafd9963980ab0baa1e15cea8ecb9a9480f64880ce847d5bc917&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F39%2Fe5%2Ff3%2F39e5f356960e0da8393eb2707182a551.jpg&f=1&nofb=1&ipt=4d4b1f51317c0d2d6381227acc2bc6097192cc5865064c47fb4e89be3a427cd0&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F7a%2Fb8%2F7c%2F7ab87c306d38829016737022a9043551.jpg&f=1&nofb=1&ipt=c8fc30718adee596714ec5b4b53e25e09cd156984940a1708a92f633d8b8b419&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fda%2Fe5%2Fef%2Fdae5ef04babc9fc1b712937efdf23c20.jpg&f=1&nofb=1&ipt=81ea134038d82c70a9d905fbac74f73f1d5cec0dd39484d57a4093fa3ac69977&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fa8%2F2b%2Fbd%2Fa82bbd0c6e32f1a117c05832629a28ac.jpg&f=1&nofb=1&ipt=2564bfd09b704d112c9b5a14497d9852c1b0722fea900c79252554baee6cb8ca&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp11568476.jpg&f=1&nofb=1&ipt=606c86fe5eb05e9537ab2792e046f5cdfa104c257687acbd06dbbd011ed707d1&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstaticg.sportskeeda.com%2Feditor%2F2022%2F05%2F331c2-16524768457253-1920.jpg&f=1&nofb=1&ipt=f9cf0527da2665dd76ea70a6aacbae81a6bc0cbe0d12ca0ecfb83aaaafbe170f&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frabujoi.files.wordpress.com%2F2021%2F11%2Fkcc42.jpg%3Fw%3D594&f=1&nofb=1&ipt=4079c6171acf69456e8a0e7b83140f4617a2bfefdf1be62cbdd7dcfcd4b3309d&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2Ffe%2F78%2F66%2Ffe78667fe9cfc9821ba8d63a3dad0624.jpg&f=1&nofb=1&ipt=2cda9290aa6cb65b8598dad10a135a677a166f7101019f58e7d7ec48a22ccf8f&ipo=images"]
}, {
  "_id": {
    "$oid": "65a5db42fc27f4bc502413a3"
  },
  "name": "Onemine Nene",
  "pfp": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fkomisan-wa-komyushou-desu%2Fimages%2Fa%2Fa7%2FOnemine_manga.png%2Frevision%2Flatest%3Fcb%3D20180124052910&f=1&nofb=1&ipt=b40f191fc78b93152cfb13a54b9120cadaf07885d77cdeecf340c62c73ff7816&ipo=images",
  "trivia-facts": ["Onemine has on multiple occasions been seen holding hands with Otori. In Chapter 292, it was revealed that Onemine holds her hand to prevent instances of her sudden vanishing.", "Onemine has four siblings: Takeru, the twins Kazuya and Nono, and Nana."],
  "gallery-pics": ["https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwaifus.wiki%2Fwp-content%2Fuploads%2Fnene-onemine-1.jpg&f=1&nofb=1&ipt=8b0208d7a0cdd454f1eb56c130ce9a99a331a2837106901b31d41c28a6991756&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F74%2Ff0%2F29%2F74f0292532e5888777f653489d796652.jpg&f=1&nofb=1&ipt=899c8e64a1f14a296e3643bf2f3a638898c2a8e8af126f6126bc24ba6682af2b&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fkomisan-wa-komyushou-desu%2Fimages%2Fb%2Fba%2FOnemine_and_Otori_by_Lecca_aisu.jpeg%2Frevision%2Flatest%2Fscale-to-width-down%2F1200%3Fcb%3D20221110101620&f=1&nofb=1&ipt=92767d3dc50bd47feb6474e45f4cbf917ad9b37d9f76fd6913c75f608005816a&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F236x%2F7d%2F36%2Ff7%2F7d36f7b7297f59268aa33bafc6dd6117.jpg%3Fnii%3Dt&f=1&nofb=1&ipt=b01989df5826db41e588db16299535c400dc408726cecf13ad7386580eff6375&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F51%2Ff6%2Fdc%2F51f6dcd0233e3b0b060533245a9c4778.jpg&f=1&nofb=1&ipt=8c7809271f4a5939f8227d9fd71d477ef96d1f795255b81d9945f651b6978b9f&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpreview.redd.it%2Fwdvcul08ajq81.jpg%3Fauto%3Dwebp%26s%3D38c3492492b5901f4f56f82d023887a349cede48&f=1&nofb=1&ipt=75f1a27a07304c3fbe685165c496b07cde7b6e9264d339135cbed0e4a6c11780&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Ffe%2Fb5%2F04%2Ffeb5044b4114879c5d215f6e310b6f03.jpg&f=1&nofb=1&ipt=5c4ab436f070cc4ce66c90386f310087adaae21ed51889df21bb911d8b2ccee7&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F64.media.tumblr.com%2F3a99b6431f86979471f0a613ca4ac1cb%2Ftumblr_pviywemrdG1w2bd7xo1_1280.png&f=1&nofb=1&ipt=95957705b951719133769743cbd7da89ecac3882fc6abfc0efb3beffc8f404ab&ipo=images", "https://i.pinimg.com/736x/4c/59/c6/4c59c61e0e6c099a314205042ce6b512.jpg", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FLoJ5LJIOmns%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=6c1aa814b86d3addd1a9041dbf74bd91b013b4598b209f95f0902c2a3e3556ac&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2Fd7%2F20%2F72%2Fd720722472666078cfbbdcda125395d8.jpg&f=1&nofb=1&ipt=dcc45f306300d64b18bb5934a3cffbe3e841f979b171b7ad23622fded0a861f4&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Faniyuki.com%2Fwp-content%2Fuploads%2F2021%2F12%2Faniyuki-komi-cant-communicate-image-51.jpg&f=1&nofb=1&ipt=f874cf5d8395c3018afd91fa85878e9e3a5ee8e11fa8dd6cc1d92564e861a4e9&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic1.cbrimages.com%2Fwordpress%2Fwp-content%2Fuploads%2F2022%2F07%2FKomi-Cant-Communicate-170.jpg&f=1&nofb=1&ipt=65bc9976dcaf1560eef9a071a8aa84c925053262d2ed3ea1e4dac34e76b97017&ipo=images"]
}, {
  "_id": {
    "$oid": "65a5dc90fc27f4bc502413a6"
  },
  "name": "Katai Makoto",
  "pfp": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2Fe7%2Fc6%2F17%2Fe7c6174e7eb49998640b5ef1217ef610.jpg&f=1&nofb=1&ipt=4d35fc2352a61fb69d630fec6ada9889ab5745a1752535539d533f33e971fc47&ipo=images",
  "trivia-facts": ["His entire family (with the exception of his sister, Ai) is revealed to be stiff-lipped and have trouble having conversations, and instead talk within their minds. Even the men in his extended family, despite their tough looks, are timid like Makoto.", "In the anime, Katai's internal monologue is far softer and noticeably higher than when he speaks aloud, highlighting the disconnect between Katai's outward appearance and how he sees himself", "He gave chocolate to Tadano Hitohito on Valentine's day despite men usually giving their gifts on White Day."],
  "gallery-pics": ["https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2F2TcTRMlyyKw%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=73a7d01134112178c76fc35d8b9981ea1c48756b60c74733bb9af1a98ff3676b&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-wixmp-ed30a86b8c4ca887773594c2.wixmp.com%2Ff%2Fc5db6d8e-568b-4aa7-8d20-d8d3f7fcd3e6%2Fdf69fma-cf934fd8-62ad-4c3c-8837-6b99702d8658.png%3Ftoken%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M1ZGI2ZDhlLTU2OGItNGFhNy04ZDIwLWQ4ZDNmN2ZjZDNlNlwvZGY2OWZtYS1jZjkzNGZkOC02MmFkLTRjM2MtODgzNy02Yjk5NzAyZDg2NTgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.WnhwjSTuf87zrGzy7tmry1dkZKmPnaQ3s7HehveMhXs&f=1&nofb=1&ipt=a34f604c60e1d096cdbd92c7cd54d35bd7f99c9410dc874e522a47ab597054b1&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F38%2Ff7%2F63%2F38f76345399c3c175271aed50c6a3db8.jpg&f=1&nofb=1&ipt=983be7317fb46d203eb2eb4881458515b90185e28dd561f7c8d3abc3b0e6dbfc&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F6f%2Fd0%2F22%2F6fd022ec6f3f2003654ad4f3127bafd4.jpg&f=1&nofb=1&ipt=7fa2f4e365b561e95b0fd1f52fbb0fbd9cba507e72fe09a02d559bdb45fa456f&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.wp.com%2Fquotetheanime.com%2Fwp-content%2Fuploads%2F2021%2F10%2FKatai-Makoto.jpg&f=1&nofb=1&ipt=3e91b9747979fc06c92afbe7689704c2aa1a109050b47c368aa683fcb34bdd0f&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F64.media.tumblr.com%2F5f40b6d5acc7336bbfb6b44ee031a4ab%2F2ccae419b895ad6e-c7%2Fs540x810%2Fb7dc776a1499edf881be13f47fb214619ffa6ff5.jpg&f=1&nofb=1&ipt=9de37402e4d5f69e55df54f6b299175496b15d7eab5ed53afa25dbb719742ea6&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F19%2Fa8%2F6b%2F19a86bd1594b06be6a350ca1bdf76702.jpg&f=1&nofb=1&ipt=17c242000df1b7d56ed16d882f4c6126e92de86da96059327dd62aac73561d01&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.kym-cdn.com%2Fphotos%2Fimages%2Foriginal%2F001%2F613%2F543%2F85e.png&f=1&nofb=1&ipt=e5ed6232a0f728c285821f4f8c7cfc098ec1a89763327d5e18a898487204515f&ipo=images"]
}, {
  "_id": {
    "$oid": "65a5dde1fc27f4bc502413a7"
  },
  "name": "Komi Shousuke",
  "pfp": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F4f%2F8c%2F84%2F4f8c8455a0ca6bc96b18f198981ed86d.jpg&f=1&nofb=1&ipt=654ca4a57a963bdda471ab6d2a36fcf044b5b672379ce09759877fb499ea1e3f&ipo=images",
  "trivia-facts": ["Shousuke likes mackerel.", "Shousuke likes the color black."],
  "gallery-pics": ["https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F236x%2F12%2F0f%2Fa2%2F120fa2218bb623319cfd75404831079c.jpg&f=1&nofb=1&ipt=a79b5827e33dcda2ad63f32fc3a8a450a4c4ce10479e8134bcf28d0b04523384&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F13%2Fda%2F05%2F13da05f476a4e2de37cf34b84c9f4a7c.jpg&f=1&nofb=1&ipt=94770598f742835ba1233b09ffb9a5e8c10438b8438d50483296360fa4c77bd4&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic1.cbrimages.com%2Fwordpress%2Fwp-content%2Fuploads%2F2022%2F05%2FKomi-Cant-Communicate-110.jpg&f=1&nofb=1&ipt=8cc9db333a7f901c7ceb541cd5f6269d368ce652e2acba0abac9efead2664020&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic1.cbrimages.com%2Fwordpress%2Fwp-content%2Fuploads%2F2022%2F05%2FKomi-Cant-Communicate-111.jpg&f=1&nofb=1&ipt=e3e81edae072aa69f55e050e0a2431bcb3fdc05bb72553e3f6df238d414cf9a3&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic1.cbrimages.com%2Fwordpress%2Fwp-content%2Fuploads%2F2022%2F04%2FShosuke-on-throne.jpg&f=1&nofb=1&ipt=7cc9ac5a47f58b81dab12afa55b76e4e1e63ec9d21f6204d851b00275cf7695e&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F64.media.tumblr.com%2F630e9fc28f5eb303817477e7bce1fce3%2F8f07b90a1d229195-9b%2Fs400x600%2F7f20c35001f09dc0c7dc8b97babbcddb269e0915.jpg&f=1&nofb=1&ipt=a0a4cd8d054377c837881d9e614c2db4933d5dd79559dac11611a4935ecafb2c&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F2b%2F64%2F21%2F2b6421a9b4f832c6b78e03e07e7c4d0c.jpg&f=1&nofb=1&ipt=9d33cc218dd7bd95c857ecf4f5439b34991170e0911f8ea988ef69877eaad250&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F64.media.tumblr.com%2F5be26bdb144d9300e238d25b8604ebef%2F18083a6f54ca456c-51%2Fs500x750%2F2103aed5b8a03542011db07db3c1bc287736e303.jpg&f=1&nofb=1&ipt=8e146e2da9240cffdb21f13f7e0abae01b9aa63b4ba127a14b243cfcb8717a78&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg-9gag-fun.9cache.com%2Fphoto%2Fa1Rx6P6_700b.jpg&f=1&nofb=1&ipt=2eee17348d36b7942b8b58fbce840b9d9114273481a0f0d1bd5f772355a5969b&ipo=images"]
}, {
  "_id": {
    "$oid": "65a67cf2dc50dcfdb20b7c9e"
  },
  "name": "Isagi Kiyoko",
  "pfp": "https://i.pinimg.com/564x/ae/11/96/ae1196e464bb0dd0ea0fdb3803f83297.jpg",
  "trivia-facts": ["Isagi very clearly sees Ase Shibuki and Shisuto Naruse getting closer, and she does not approve of Naruse. As such, she intercedes whenever and wherever she can, whacking him with a mallet.", "Isagi's a clean freak"],
  "gallery-pics": ["https://i.pinimg.com/564x/e8/80/c6/e880c607803e21f10926765cb78b8268.jpg", "https://i.pinimg.com/564x/03/fd/a2/03fda29dcb662479b1b1b1e2e2b5f09a.jpg", "https://i.pinimg.com/736x/85/5b/6c/855b6c765dbc74c4b796cb2eaaf07b9d.jpg", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.kym-cdn.com%2Fphotos%2Fimages%2Foriginal%2F001%2F652%2F614%2F5d3.png&f=1&nofb=1&ipt=e3f73ea68c1561375f8df90472f39d61c97c8410dd55edfbea78ce4cc67686b4&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.kym-cdn.com%2Fphotos%2Fimages%2Foriginal%2F001%2F490%2F617%2F20d.png&f=1&nofb=1&ipt=dc781459e913ac96334d1ab68eb39298f521b747b20d9c22241ede7b05de86f5&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.anime-planet.com%2Fcharacters%2Fprimary%2Fkiyoko-isagi-1.jpg%3Ft%3D1625938813&f=1&nofb=1&ipt=1d9a5662cdb2a5d611360bc0c5372c8ae262dfee0e1195d2ff91a8bbb2f90c63&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fkomisan-wa-komyushou-desu%2Fimages%2Fb%2Fbd%2FLive_action_isagi.jpg%2Frevision%2Flatest%2Fscale-to-width-down%2F270%3Fcb%3D20220918141928&f=1&nofb=1&ipt=20869089271e142ea920779d912bba8b5c33859558f4e80b7c0b29f4010f4521&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F64.media.tumblr.com%2F6915ed6ad90743cd1603664feac10ba9%2F036dc2b3a3cca93d-0d%2Fs400x600%2F09bb845b0341d428232aee3f59f502c1ef21c92b.jpg&f=1&nofb=1&ipt=c1027fabe3614f9c62fc414eb2a7e26443743b6e4773d967e3b15e60f7e04158&ipo=images", "https://i.pinimg.com/564x/4c/72/57/4c72571a130069e5549d4037a9a1aad6.jpg"]
}, {
  "_id": {
    "$oid": "65a680c8dc50dcfdb20b7ca0"
  },
  "name": "Ase Shibuki",
  "pfp": "https://i.pinimg.com/564x/d8/0a/8a/d80a8aa25767c6aad2cb2f6ab166d98b.jpg",
  "trivia-facts": ["The disorder associated with excessive sweating is called hyperhidrosis. It is possible, though hasn't been directly stated, that Ase suffers with this condition.", "She has a crush on Narse "],
  "gallery-pics": ["https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.redd.it%2Fdaily-ase-shibuki-panel-scared-ase-v0-i0iztha2wnq81.png%3Fs%3Da9ecd0adf17bc465865f3368aa0c27fb55aec209&f=1&nofb=1&ipt=410bd703b1ef8082c0df30430009b6da1b5d2155057343eceb393f66e4db8227&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.redd.it%2F0p6x548pt9q81.png&f=1&nofb=1&ipt=b2222f4240f42c9df2b32c62165246318970bbabcf9456f04557ce010698599a&ipo=images", "https://i.pinimg.com/564x/6b/17/1d/6b171d1a2a0caeed802ae788e20a0205.jpg", "https://i.pinimg.com/564x/9b/a0/92/9ba092ce44c47a9cf5195bd1bc854b3e.jpg", "https://i.pinimg.com/564x/72/a5/1a/72a51a09c6138a84dbaa17098901081a.jpg", "https://i.pinimg.com/564x/43/19/f9/4319f9a3578a65060160864d3569b893.jpg", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.readkakegurui.com%2Ffile%2Fmangaifenzi22%2Fkomi-cant-communicate%2Fchapter-290-naruse-kun-and-ase-san-2%2F12.jpg&f=1&nofb=1&ipt=2e9c52b4cec2ee06914c7f12589991f4a875d541f0a2a934bb99c80f941de185&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.kym-cdn.com%2Fphotos%2Fimages%2Ffacebook%2F001%2F879%2F764%2Fd2a.png&f=1&nofb=1&ipt=97ee29d7132f0626342b99109d68207e4637932bd869f00406af6effa5d6c7b4&ipo=images", "https://i.pinimg.com/564x/16/b0/a1/16b0a1938238b386168db33cb952302c.jpg", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fkomisan-wa-komyushou-desu%2Fimages%2F2%2F22%2FShibuki_manga.jpg%2Frevision%2Flatest%3Fcb%3D20190814003810&f=1&nofb=1&ipt=bf31efd02fea8dd07b6991b35a8d8d9934e9b20249f810992115b0c7c002ffe4&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F236x%2F35%2Fc5%2Fdb%2F35c5db3792d4c2c733800838aa929151.jpg%3Fnii%3Dt&f=1&nofb=1&ipt=949c77ab18c29eac8f4fbeed8e30039a2552075dba2fe76559e9693b691e52ad&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F64.media.tumblr.com%2Ff75e24fe625ef9dbed65cd7b69b74acb%2F77690ad898599899-1c%2Fs540x810%2F91fbc447a2e4bb58c1a5004e8a1fc272f906facf.pnj&f=1&nofb=1&ipt=502ab83c472291f97269ebd52c4de092c730cf9ab27766e5aa20a34b55e87dd9&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F64.media.tumblr.com%2Fea8c0b97b3c89452af5d9d3e70e37131%2Faacaa0b0e8d7447c-89%2Fs540x810%2Ffbfdd5d3d5cc8659ee4197a395fe8cdd65b5e521.jpg&f=1&nofb=1&ipt=7d2c2177a52cac882b6a0567c9d60cd4ce44b69cd81fa105d1adea45fa3e2971&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcm.blazefast.co%2Fd2%2F20%2Fd220e92227eb85c30a87edb401b07dc5.jpg&f=1&nofb=1&ipt=11620061a95837562352d6a5cd0063bf77297355fbe13a9719eeda16084ca0ae&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fp__%2Fimages%2F3%2F30%2FAse11.jpg%2Frevision%2Flatest%2Fscale-to-width-down%2F129%3Fcb%3D20221030092353%26path-prefix%3Dprotagonist&f=1&nofb=1&ipt=2846ca3dcfe46a24ecc079456d9f9eee040c5170ac7be11c116e3f11fc78d9be&ipo=images"]
}, {
  "_id": {
    "$oid": "65a6863bdc50dcfdb20b7ca1"
  },
  "name": "Naruse Shisuto",
  "pfp": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fkomisan-wa-komyushou-desu%2Fimages%2F0%2F0e%2FNaruseshisuto.png%2Frevision%2Flatest%2Fscale-to-width-down%2F270%3Fcb%3D20181221154901&f=1&nofb=1&ipt=38a4409bd12799c0e2d9d35eb0af837af5012987c2b657695d6bb0078dbf196b&ipo=images",
  "trivia-facts": ["Naruse relaxes by standing in front of mirrors.", "Naruse enjoys western music and is shown listening to 'Justice Bieber' in his intro chapter.", "He bears some resemblance to Narukami Yu from the Persona 4 games."],
  "gallery-pics": ["https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fa6%2F2e%2F78%2Fa62e78726fe22ab8f1a4579b792e1762.jpg&f=1&nofb=1&ipt=cf66f47014dc4628e60aac48fd2be816225e9234ce92f6c2d080100bf45f2e87&ipo=images", "https://i.pinimg.com/564x/94/da/69/94da69cec4e0316f0029724931615032.jpg", "https://i.pinimg.com/736x/9b/91/3e/9b913ece32db8b5e949036a2b365b7f2.jpg", "https://i.pinimg.com/564x/ac/56/36/ac5636834c41f7e344ba5234a171eb62.jpg", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fe6%2Fa2%2F62%2Fe6a2626a16e1fdc92096b04d1fca500f.jpg&f=1&nofb=1&ipt=e1ce2fb41d92b74262ce87cb317e044d509a59ea26d01f8a3ce3ca536174bc4a&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fo02-dDvJOOw%2Fhqdefault.jpg%3Fsqp%3D-oaymwEmCOADEOgC8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGHIgXyhEMA8%3D%26rs%3DAOn4CLBs-0nJ1EVxRltaWfBTejujbeAURw&f=1&nofb=1&ipt=87b7951c628db51bde1e98f7d8c33605f3d8ece759fcc8035c16f2a9f586172f&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FRJ__AF0WlnA%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=44ebed21ba77b4699e0153dcfd09df63915decc9eadd97a1895a194f5a5f41f9&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstaticg.sportskeeda.com%2Feditor%2F2022%2F05%2F8d0e0-16529904678355-1920.jpg&f=1&nofb=1&ipt=6162dea182d62f09f7a20dd1aed32ccb80ae90118d7e4dd90c9136e0a8d60e63&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstaticg.sportskeeda.com%2Feditor%2F2022%2F05%2F800f5-16529904678003-1920.jpg&f=1&nofb=1&ipt=7fd364eb272f53d108ffe596cce0f432bb0f0d17e9111e04da476956ca0989c3&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.readkakegurui.com%2Ffile%2Fmangaifenzi22%2Fkomi-can-t-communicate-vol-13-chapter-180-test-of-courage-8.jpg&f=1&nofb=1&ipt=1e3c7d3fecb72a1240631e8527ba64ec684da47cacfd55f2d445029262b7d767&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.imgur.com%2F6xRRvb6.jpg&f=1&nofb=1&ipt=084902802d1c6477c6e52b9cd00b9a53f811057a376756a77f85a09c58bd2d1c&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F64.media.tumblr.com%2F393d0a21ea37e4c5f37e2477d08f8130%2Fa7ac893330c98687-22%2Fs1280x1920%2F9c05c5c5095968d66e04b8c142285e1e411cf057.jpg&f=1&nofb=1&ipt=1b01c36dda2df36e1c0875b56c6cc1507cab2e8e68dbaf27a219879432ec972c&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FgUyBciPE1MA%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=565c0728d5db96157b5756f0586fc4342bef2631dd0ad0cdba689d91e6b0f549&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.redd.it%2Fncrb518fdea41.jpg&f=1&nofb=1&ipt=00fcf52ed8328859e0c4dc376eac9a20f2cab3d3404c3eac9d8dcf637af97218&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F64.media.tumblr.com%2Fe4759678459b3500b0faeda0d3430a9b%2F5e367e64c3d3a242-31%2Fs540x810%2F5a5be6fc33d5ea1df557759068e105f63fca01b5.pnj&f=1&nofb=1&ipt=3aeee341bedaa0aff4298c77fdf814cfe0ba583bfbdc45073bb1af92b071f9aa&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.redd.it%2F9zvmal5mpnf61.jpg&f=1&nofb=1&ipt=5558ff77e53842a87c279a28f465bcde1fa3beb48e445ffc73c01ad5c8b606b6&ipo=images"]
}, {
  "_id": {
    "$oid": "65a71927920bbec54e55a2ef"
  },
  "name": "Komi Masayoshi",
  "pfp": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fkomisan-wa-komyushou-desu%2Fimages%2F7%2F7f%2FMasayoshi_manga.png%2Frevision%2Flatest%2Fscale-to-width-down%2F270%3Fcb%3D20180124033257&f=1&nofb=1&ipt=7f5921b54e0484cd201d0cb3f26cf1a2cfc3535199919136b453b7d3b5e602bc&ipo=images",
  "trivia-facts": ["Although Masayoshi's glasses often cover his eyes, they were practically shown in Episode 7 where it reveals that he has dark-colored eyes, much like his wife and children.", "Despite his silent demeanor, Masayoshi did get along well with Tadano, as well as Tadano's father"],
  "gallery-pics": ["https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fkomisan-wa-komyushou-desu%2Fimages%2Fe%2Fe0%2FKomi_Masayoshi_young.PNG%2Frevision%2Flatest%2Fscale-to-width-down%2F270%3Fcb%3D20230107091050&f=1&nofb=1&ipt=1bd4a82a234c0b18fb5bdc4985ca31efa44dc06c874bb66a59508d502c30c1af&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fanime.atsit.in%2Fwp-content%2Fuploads%2F2022%2F06%2Fkomi-san-wa-komyushou-desu-episodio-24-3.jpg&f=1&nofb=1&ipt=ad9c24e04b03090c0e9e91a92595f0cb4db61b711d35d7289d9a5b385d989b23&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcm.blazefast.co%2F5e%2Fe6%2F5ee6bc37cd2da970810391afcf52218f.jpg&f=1&nofb=1&ipt=da2a03fe23060983b5375766e2e7174e87a99f04474162ec39bb326595953b19&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmoe.shikimori.one%2Fsystem%2Fuser_images%2Foriginal%2F702352%2F1823662.jpg&f=1&nofb=1&ipt=8779a2e3f5c1d029b77d8286f783258f2fb2bc3bbad7f5f7da7e4abde36c1023&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpreview.redd.it%2Fhuaa1d75if981.jpg%3Fwidth%3D827%26format%3Dpjpg%26auto%3Dwebp%26s%3D30810ae9254ed10501281f431d8d6983ab885b52&f=1&nofb=1&ipt=9b79a515ee6c75f68d99c9b17c393330f2144525fb3fe6776ab0c0ee33946786&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.redd.it%2Fjfgffzbrnim81.jpg&f=1&nofb=1&ipt=2bf20b6b0cf2d1cc6914282c0d6b84ec09731e998c6ae9d5deddaa70eb2ff3d3&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fdf%2F6d%2F91%2Fdf6d911434841fc94c551b27953915d9.jpg&f=1&nofb=1&ipt=7cc153ed7e30f4486a4897795419ebd822e03eeb0a518823d26bddc3c4bfa79d&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fkomisan-wa-komyushou-desu%2Fimages%2Fc%2Fcf%2FMasayoshi_confes%25C3%25A1ndose_a_Shuuko.png%2Frevision%2Flatest%2Fscale-to-width-down%2F185%3Fcb%3D20190416044506%26path-prefix%3Des&f=1&nofb=1&ipt=90ff661af72ae7b259e8c9c39c72bf9abf39909e68899f7013d7aa5cee0d8c00&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fkomisan-wa-komyushou-desu%2Fimages%2Fb%2Fb2%2FMasayoshi_en_motocicleta_con_18_a%25C3%25B1os.png%2Frevision%2Flatest%3Fcb%3D20190416044542%26path-prefix%3Des&f=1&nofb=1&ipt=7237fc83c895e9985c48fbb5c376dac4669550a8acafdc30c026c7141b31097d&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.redd.it%2Fjuld6sw3dcb21.jpg&f=1&nofb=1&ipt=7b30f9ebb727ffadcc7d2c5c0054d8ae696bb7011ccf5a801ffc47e8e61c9611&ipo=images", "https://i.pinimg.com/564x/f2/13/a2/f213a2ece24141351e35f9c123ecddef.jpg"]
}, {
  "_id": {
    "$oid": "65a71bf0920bbec54e55a2f1"
  },
  "name": "Tadano Hitomi",
  "pfp": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.postavy.cz%2Ffoto%2Fhitomi-tadano-foto.jpg&f=1&nofb=1&ipt=3bc438e907213e805112ff5e8723f6df0e7828419535ab67e340367c91a9897b&ipo=images",
  "trivia-facts": ["She is good at ventriloquism.", "She is good enough at Judo that she was able to enter the prefectural tournament in middle school.", "Hitomi, Chusaku Kometani, Najimi Osana and lately Emoyama's family are the only characters who have broken the fourth wall."],
  "gallery-pics": ["https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpic1.mangapicgallery.com%2Fr%2Falbum%2F87%2Fmd_%2F250813_5040246.jpg&f=1&nofb=1&ipt=4425571ef2623dc87f5f1f1e25cd5972bda39c7dd3c8449c4fb647fdc044e6c7&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpic1.mangapicgallery.com%2Fr%2Falbum%2F87%2Fmd_%2F250813_5040186.jpg&f=1&nofb=1&ipt=02fa64a5eb62b04b82587304458bbee7ee2cdadef1fca04eab993caf96680fe6&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.wp.com%2Fquotetheanime.com%2Fwp-content%2Fuploads%2F2021%2F10%2FTadano-Hitomi.jpg&f=1&nofb=1&ipt=1535d42cbad8198785a26ee7a871b27ba255031ac094c1644ad3e5d92f8ee482&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fkomi-cant-communicate%2Fimages%2Ff%2Fff%2FHitomi.jpg%2Frevision%2Flatest%3Fcb%3D20211218195045%26path-prefix%3Dit&f=1&nofb=1&ipt=0ab601830d4cf282b73c9c08f4d5da2cbdb5146b8f52fccc62207877fea7ccc9&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2F2_HO8Cfvu_0%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=a28f471f60679ff5568fb7fd6ddc4390c74003bc9f6e6c593619e4d05a1a47c6&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fc5%2F43%2Fa0%2Fc543a0198086bcd97a5a6df700866619.jpg&f=1&nofb=1&ipt=d2b6b4d53c1a3681d5e7a7292c8d69914ca8c86d6149518dc7e1f4efe2124545&ipo=images", "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpm1.narvii.com%2F7167%2F3ac4e30c9ca9984f430b4e69bc6381fcdd944401r1-735-619v2_uhq.jpg&f=1&nofb=1&ipt=a35fca583353a0ec46de600ea0953360951b3cca8b4717851bc6892b62571f0b&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg10.reactor.cc%2Fpics%2Fcomment%2Ffull%2Fkomi-shousuke-tadano-hitomi-Komi-san-wa-Comyushou-desu-Anime-3470612.jpeg&f=1&nofb=1&ipt=81a4fbb7671ebd61fbe70c3d8bd872a3dd4ebc924f19c62e14ba831456a2b283&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fp__%2Fimages%2F8%2F89%2FHitomi1.jpg%2Frevision%2Flatest%2Fscale-to-width-down%2F1200%3Fcb%3D20220830203602%26path-prefix%3Dprotagonist&f=1&nofb=1&ipt=0092afe291461afb386aac1433fbe052d43709f0a316f462975b1abe9ce03a2c&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmoe.shikimori.one%2Fsystem%2Fuser_images%2Foriginal%2F702352%2F1842587.jpg&f=1&nofb=1&ipt=f78166305e0adb50688205fe8cf2c4c8f92c64632ee7942390dd6867896f9983&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F64.media.tumblr.com%2F5b0c71eb9f319ff09a639ddaeade4526%2F13454287d36c1db9-41%2Fs1280x1920%2F46d579a8ae8aa4325229df23f19dc2677e124231.jpg&f=1&nofb=1&ipt=d755bed8a14567a835c85d4ba36816f0c33afe537dd310f9940223b93e0635df&ipo=images"]
}, {
  "_id": {
    "$oid": "65a71e32920bbec54e55a2f3"
  },
  "name": "Wakai Taketoshi",
  "pfp": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F236x%2Fa5%2F01%2F2f%2Fa5012f02e1534953058659e8ef29e373.jpg%3Fnii%3Dt&f=1&nofb=1&ipt=976a21615774ea912638b018f86aaa4c31b314bc189d459f3b5bfc0a09598d51&ipo=images",
  "trivia-facts": ["Wakai suffers from Gynophobia, a phobia of relating to women.", "Wakai is the soccer captain"],
  "gallery-pics": ["https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fkomisan-wa-komyushou-desu%2Fimages%2F8%2F8c%2FCH370.png%2Frevision%2Flatest%3Fcb%3D20220910165610&f=1&nofb=1&ipt=6897437f707ee22651048c3bc05c02e1bfe62437dc5c24305b3706b283a55a9a&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fba%2Fd9%2F3e%2Fbad93ed1a73e90ffc24261fc4d10d274.jpg&f=1&nofb=1&ipt=6f0a619eb0b65d3a505ca2ad7718284ccfb4d07041cdb34588821a5c53e5c204&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpreview.redd.it%2F7wwy0729k6m81.jpg%3Fauto%3Dwebp%26s%3Da2709f3dffb6dd7fa37dda544101f2e5dbb8483f&f=1&nofb=1&ipt=9082c354779b8db42ae871e9b47fb15e235b9b815564a707fc949587fe3e0b26&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F236x%2F4d%2Fef%2Fb7%2F4defb701afb6fe5d73ef493281ec56ab.jpg%3Fnii%3Dt&f=1&nofb=1&ipt=cac849213c14d7dc2973861389c696cb473a84414e9eac083e0f619c2e96aaa2&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpreview.redd.it%2Fwhat-manbagi-and-wakai-v0-h6et5ayah7ua1.jpg%3Fwidth%3D1254%26format%3Dpjpg%26auto%3Dwebp%26s%3D37703fd3fb3edcc473138f172811cc91bf16bc5f&f=1&nofb=1&ipt=bf44b6e1dad6928813a3d0cfce8099f30e0c2c9640c57e0fee359fbe87510b8e&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.13P8qQUy4-9EV1o49z08JgHaKo%26pid%3DApi&f=1&ipt=310f95c7f100a733788442ab507de275754d8636260f20b029a9cfa2cbda43e3&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2Fcd%2F1c%2F27%2Fcd1c27fe6044012e29722ea7ae90c83a.jpg&f=1&nofb=1&ipt=fb6d2787f65747ea6253c8527305b7c7d749e6304070f07be7493186fc8c06b2&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fkomisan-wa-komyushou-desu%2Fimages%2Fa%2Fa6%2F328.png%2Frevision%2Flatest%3Fcb%3D20211030042927&f=1&nofb=1&ipt=33055057d0ed5fd42cceea7853b12bd12d978cca07fbc596a3adb429fa9a5274&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpreview.redd.it%2Ftadano-was-hinting-at-wakai-with-manbagi-since-chapter-369-v0-z3asi6r9mmza1.jpg%3Fwidth%3D1055%26format%3Dpjpg%26auto%3Dwebp%26s%3D24d5a44bd37d5c969106a87aeb6c0dc20d1cd283&f=1&nofb=1&ipt=367721671a6489773226243c1f5f0b66d128969645e10991f9f095632d7ce88f&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpreview.redd.it%2Fhow-do-you-feel-about-wakais-hair-and-rumiko-feel-worried-v0-06hf1wq6tyxa1.jpg%3Fwidth%3D1111%26format%3Dpjpg%26auto%3Dwebp%26s%3Df7b6001c47f93f7c1fa544d09030589fe33a0420&f=1&nofb=1&ipt=abe1c7015a35403eb9dd9241e885a23c02aa654e253613dd152683591a3f0d1a&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F64.media.tumblr.com%2F6c9d8f9893d33a905f04944c15b4b852%2Fc40a1079ab261e08-74%2Fs1280x1920%2F8bdbb88e466c21cdeb1d78d87854c87d20819709.jpg&f=1&nofb=1&ipt=901e4c07276ba65e1326ed643329a0c0032b775dc2150fb6ffb5362b92b55257&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpreview.redd.it%2F7wwy0729k6m81.jpg%3Fauto%3Dwebp%26s%3Da2709f3dffb6dd7fa37dda544101f2e5dbb8483f&f=1&nofb=1&ipt=41834970e4d3e2278abdd38135b73dc3e2ab176452a418c9c6f08cf43c1f5080&ipo=images"]
}, {
  "_id": {
    "$oid": "65a71fd7920bbec54e55a2f4"
  },
  "name": "Kawai Rami",
  "pfp": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic1.personality-database.com%2Fprofile_images%2F0f8ff5a3a2af4695a73896e0b2c41cc7.png&f=1&nofb=1&ipt=ff2d374bece864dab03f5c66b6652d2cb77cd470d6663bf243ac29400fb28337&ipo=images",
  "trivia-facts": ["Her family name, Kawai, is a pun on the word kawaii (可愛い), meaning 'cute, adorable', which reflects on her appearance.", "She had a huge crush on Tadano during middle school"],
  "gallery-pics": ["https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FkUh74vEI_O4%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=58e0eb460bd14b148611c293d948796c55ee22a0c4c348295a1030337219b8d6&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fkomisan-wa-komyushou-desu%2Fimages%2Fd%2Fd4%2FKawai_Ch381.jpg%2Frevision%2Flatest%2Fscale-to-width-down%2F270%3Fcb%3D20221116125106&f=1&nofb=1&ipt=5ece4e0d6c2561af23fccdfcbd1efbb17d18b6691f15ade9698260381531ad93&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fkomisan-wa-komyushou-desu%2Fimages%2Fe%2Fee%2FKawai_Ch377.png%2Frevision%2Flatest%3Fcb%3D20221109153240&f=1&nofb=1&ipt=3f28955f97d9195ddc8ef63771ea3c3cb441e39a2e7c8571f51cb2bfec52f7c6&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.donmai.us%2Fsample%2Fa7%2Fb2%2F__tadano_hitohito_and_rami_kawai_komi_san_wa_komyushou_desu_and_1_more_drawn_by_j_humbo__sample-a7b237eb399b2d6844b1b86375da5fc9.jpg&f=1&nofb=1&ipt=8390c36878f5353a2c6d728ae279d090fb880b62bdada41ba062d025f9f61348&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fkomisan-wa-komyushou-desu%2Fimages%2F5%2F5b%2FCH382.png%2Frevision%2Flatest%3Fcb%3D20221129183940&f=1&nofb=1&ipt=96c549929a85620a266764a1275ae4ab9fbd1d85a39d55f0538d8c0fb19b9fea&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.theanimedaily.com%2Fwp-content%2Fuploads%2F2022%2F12%2FKomi-Cant-Communicate-Chapter-384-1024x768.jpg&f=1&nofb=1&ipt=af79f6d3efd9c400a7915675413de7abda448965fd1b4d0cbffec471d3c095a1&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpreview.redd.it%2Fwhy-and-what-do-you-guys-think-she-failed-komi-in-v0-3wsrdhtk6ru91.jpg%3Fauto%3Dwebp%26s%3D8caa089efee303917ea61c9f1262bd8864b6f571&f=1&nofb=1&ipt=c8a44addb3d65921beff730b44eec24acb0c701ff74858f8f3f53a97922b6c1c&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.kym-cdn.com%2Fphotos%2Fimages%2Foriginal%2F002%2F474%2F678%2Fd70.png&f=1&nofb=1&ipt=0894b0d3f4e1f3ffcef727f9687548960b32735b843ab5daa2833f0c44669888&ipo=images", "https://i.pinimg.com/736x/f3/8b/e3/f38be327cc329fcb684063b3b1ee286f.jpg", "https://i.pinimg.com/736x/69/ac/70/69ac70f92fe0aaee8629d064b46063d2.jpg", "https://i.pinimg.com/564x/ee/f8/b8/eef8b8cae2b8c3e6145d86dd66b6fab8.jpg", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.anmosugoi.com%2Fwp-content%2Fuploads%2F2023%2F07%2FKomi-san-wa-Komyushou-Desu-manga-vol-30.jpg&f=1&nofb=1&ipt=95b034c2923564b7623a30a0088d05b2158c2a30c52cbaf663428aaa2df64550&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsomoskudasai.com%2Fwp-content%2Fuploads%2F2022%2F11%2Fimage-69.png&f=1&nofb=1&ipt=44046c9c5f669a11f21cc41d7084688b573e7903ae3c23b0eb04a8f41bce910e&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.wp.com%2Fwww.theanimedaily.com%2Fwp-content%2Fuploads%2F2022%2F11%2FKomi-Cant-Communicate-Chapter-382-release-date.jpg%3Fresize%3D1024%252C730%26ssl%3D1&f=1&nofb=1&ipt=0ed1354d4eb6c912736c1a423ab11fc5e367a1c2b6f9dc4a14f506e0b59724ff&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.readkakegurui.com%2Ffile%2Fcdnpog%2Fkomi-san-wa%2Fchapter-381%2F03.jpg&f=1&nofb=1&ipt=387d73ac63a5f4d4f1cd9f776ee7ca3d98c1349bb6c519bc4c2295d6e90e6ea2&ipo=images"]
}];
},{}],"char_gallery_page.js":[function(require,module,exports) {
"use strict";

var _KCCCharGalleryCharacters = _interopRequireDefault(require("./KCC-Char-Gallery.Characters.json"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// fetch('https://jsonplaceholder.typicode.com/todos')
//     .then(res => console.log(res))
//     .then(data => console.log())
//     .catch(error => {console.error('Error:', error);});

// https://jsonplaceholder.typicode.com/todos

// async function getCharData(){
//     const Response = await fetch('./file-coderstool.json');
//     const response_obj = await Response.json();
//     // const response_obj_data = response_obj.data;
//     console.log(response_obj);
// }

// getCharData();

// Load JSON file without fetch API 
// https://www.youtube.com/watch?v=Z92PqSyUBSI

var card_gallery_cntnr = document.querySelector(".pfp-card-gallery");
_KCCCharGalleryCharacters.default.forEach(function (character) {
  var trivia_facts_literal = array_to_li_literal(character['trivia-facts']);
  var gallery_pics_literal = array_to_li_img_literal(character['gallery-pics']);
  var temp_element = strLiteral_to_html("\n    <div class=\"pfp-card-container ff-accent\">\n                    \n        <div class=\"pfp-card\">\n            <div class=\"pfp-card__pic\">\n                <img src=\"".concat(character.pfp, "\" alt=\"").concat(character.name, "\">\n            </div>\n            <h1 class=\"pfp-card__name ff-accent fw-bold\">").concat(character.name, "</h1>\n        </div>\n        \n        <div class=\"pfp-card__info-card\" data-visible=\"hide\">\n            <div class=\"pfp-card__info-card__wrapper\">\n                <button class=\"info-card__close-btn\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1em\" height=\"1em\" viewBox=\"0 0 12 12\"><path fill=\"currentColor\" d=\"M2.22 2.22a.749.749 0 0 1 1.06 0L6 4.939L8.72 2.22a.749.749 0 1 1 1.06 1.06L7.061 6L9.78 8.72a.749.749 0 1 1-1.06 1.06L6 7.061L3.28 9.78a.749.749 0 1 1-1.06-1.06L4.939 6L2.22 3.28a.749.749 0 0 1 0-1.06Z\"/></svg>\n                </button>\n                \n                <div class=\"info-card__header\">\n                    <div class=\"info-card__header_pfp\">\n                        <img src=\"").concat(character.pfp, "\" alt=\"").concat(character.name, "\">\n                    </div>\n                    <div class=\"info-card__header_content\">\n                        <h1 class=\"ff-accent fw-bold\">").concat(character.name, "</h1>\n                        <div class=\"info-card__header_list-viewbox\">\n                            <ul class=\"info-card__header_list fw-regular ff-body\">\n                                ").concat(trivia_facts_literal, "\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n    \n                <ul class=\"info-card__pictures\">\n                    ").concat(gallery_pics_literal, "\n                </ul>\n            </div>\n    \n            <div class=\"info-card__picture-slider\" data-visible=\"hide\">\n                <button class=\"picture-slider__close-btn\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1em\" height=\"1em\" viewBox=\"0 0 12 12\"><path fill=\"currentColor\" d=\"M2.22 2.22a.749.749 0 0 1 1.06 0L6 4.939L8.72 2.22a.749.749 0 1 1 1.06 1.06L7.061 6L9.78 8.72a.749.749 0 1 1-1.06 1.06L6 7.061L3.28 9.78a.749.749 0 1 1-1.06-1.06L4.939 6L2.22 3.28a.749.749 0 0 1 0-1.06Z\"/></svg>\n                </button>\n                <div class=\"picture-slider__container\">\n                    <div class=\"picture-slider__view-box\">\n                        <img src=\"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fanimenewsandfacts.com%2Fwp-content%2Fuploads%2F2021%2F10%2F20211011_195131_compress59.jpg&f=1&nofb=1&ipt=4684c80106e392cd3339c6831864f9fa6ddb888e314db3e1c7f3c47d74027f9d&ipo=images\" alt=\"\">\n                    </div>\n                    <div class=\"picture-slider__nav\">\n                        <div class=\"picture-slider__nav-track-container\">\n                            <div class=\"picture-slider__nav-track\">\n                                <!-- Do not populate this div. This div will be automatically populate from the info-card__pictures ul into this div via javascript -->\n                            </div>\n                        </div>\n                        <button class=\"picture-slider__nav-left-btn\">\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1em\" height=\"1em\" viewBox=\"0 0 24 24\"><g fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M0 0h24v24H0z\"/><path fill=\"currentColor\" d=\"M12 2a10 10 0 0 1 .324 19.995L12 22l-.324-.005A10 10 0 0 1 12 2zm.707 5.293a1 1 0 0 0-1.414 0l-4 4a1.048 1.048 0 0 0-.083.094l-.064.092l-.052.098l-.044.11l-.03.112l-.017.126L7 12l.004.09l.007.058l.025.118l.035.105l.054.113l.043.07l.071.095l.054.058l4 4l.094.083a1 1 0 0 0 1.32-1.497L10.415 13H16l.117-.007A1 1 0 0 0 16 11h-5.586l2.293-2.293l.083-.094a1 1 0 0 0-.083-1.32z\"/></g></svg>\n                        </button>\n                        <button class=\"picture-slider__nav-right-btn\">\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1em\" height=\"1em\" viewBox=\"0 0 24 24\"><g fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M0 0h24v24H0z\"/><path fill=\"currentColor\" d=\"m12 2l.324.005a10 10 0 1 1-.648 0L12 2zm.613 5.21a1 1 0 0 0-1.32 1.497L13.584 11H8l-.117.007A1 1 0 0 0 8 13h5.584l-2.291 2.293l-.083.094a1 1 0 0 0 1.497 1.32l4-4l.073-.082l.064-.089l.062-.113l.044-.11l.03-.112l.017-.126L17 12l-.007-.118l-.029-.148l-.035-.105l-.054-.113l-.071-.111a1.008 1.008 0 0 0-.097-.112l-4-4z\"/></g></svg>\n                        </button>\n                    </div>\n                </div>\n            </div>\n    \n        </div> \n    </div>\n    "));
  card_gallery_cntnr.appendChild(temp_element);
});
function strLiteral_to_html(html) {
  var template = document.createElement("template");
  template.innerHTML = html.trim();
  return template.content.firstElementChild;
}
function array_to_li_literal(char_data_array) {
  var temp_header_content = "";
  for (var i = 0; i < char_data_array.length; i++) {
    var fact = char_data_array.at(i);
    if (i == 0) {
      temp_header_content = temp_header_content.concat("<li>".concat(fact, "</li>"));
    } else {
      temp_header_content = temp_header_content.concat("\n<li>".concat(fact, "</li>"));
    }
  }
  return temp_header_content;
}
function array_to_li_img_literal(char_data_array) {
  var temp_li_img_content = "";
  for (var i = 0; i < char_data_array.length; i++) {
    var img_src = char_data_array.at(i);
    if (i == 0) {
      temp_li_img_content = temp_li_img_content.concat("<li><img src=\"".concat(img_src, "\"></li>"));
    } else {
      temp_li_img_content = temp_li_img_content.concat("\n<li><img src=\"".concat(img_src, "\"></li>"));
    }
  }
  return temp_li_img_content;
}
},{"./KCC-Char-Gallery.Characters.json":"KCC-Char-Gallery.Characters.json"}],"../../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57946" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","char_gallery_page.js"], null)
//# sourceMappingURL=/char_gallery_page.884e3865.js.map