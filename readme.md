##### Membuat Aplikasi Todo (Jadwal Acara Kominfo) #####
aplikasi ini saya rancang dibuat untuk memudahkan proses penjadwalan acara di kominfo

<!-- digunakan untuk responsive layout -->
pakage yang di butuhkan :
yarn add or npm install --save 
1. "react-native-responsive-screen"

<!-- cara memnggunakanya -->
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

<!-- ======================================================== -->

<!-- digunakan agar bisa membaca file svg -->
package yang dibutuhkan :

use yarn add or npm install --save to install  
1. "react-native-svg"
2. "react-native-svg-transformer"

sebelum install package ini, pastikan tidak menjalankan react-native dan android emulator
<!-- Copas dan replace code metro.config.js-->
const { getDefaultConfig } = require("metro-config");

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts }
  } = await getDefaultConfig();
  return {
    transformer: {
      babelTransformerPath: require.resolve("react-native-svg-transformer")
    },
    resolver: {
      assetExts: assetExts.filter(ext => ext !== "svg"),
      sourceExts: [...sourceExts, "svg"]
    }
  };
})();

<!-- penggunaanya bisa membuat component button icon terlebih dahulu -->