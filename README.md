# e-Ticaret Sitesi Demosu

Bu proje, React ve JavaScript kullanılarak geliştirilmiş, veritabanı ihtiyacı duymadan tüm verileri tarayıcı üzerinde yöneten modern bir e-ticaret arayüzü demosudur. Proje, özellikle **Client-Side Persistence** (İstemci Taraflı Kalıcılık) konseptine odaklanılarak geliştirilmiştir.

## Canlı Demo
Uygulamayı buradan inceleyebilirsiniz: [eticaretsitesidemo.netlify.app](https://eticaretsitesidemo.netlify.app/)

## Teknik Yığın (Tech Stack)

- **React.js & JavaScript:** Güçlü tip kontrolü ve modüler bileşen yapısı.
- **LocalStorage API:** Ürün verileri, sepet bilgileri ve kullanıcı tercihlerinin tarayıcı hafızasında saklanması.
- **Context API:** Uygulama içi merkezi veri yönetimi.
- **Netlify:** Continuous Deployment (cd) ile canlıya alma süreci.

## Öne Çıkan Özellikler

- **Offline Veri Yönetimi:** Backend bağlantısına ihtiyaç duymadan ürünleri listeler ve sepet işlemlerini gerçekleştirir.
- **Kalıcı Sepet Deneyimi:** Kullanıcı sayfayı yenilese bile `localStorage` entegrasyonu sayesinde sepetindeki ürünler kaybolmaz.
- **Responsive Tasarım:** Mobil, tablet ve masaüstü cihazlar için tam uyumluluk.

## Kurulum ve Çalıştırma

1. **Repoyu klonlayın:**
   ```bash
   git clone [https://github.com/asmss/eTicaretSitesiDemo.git](https://github.com/asmss/eTicaretSitesiDemo.git)
2. **Proje dizinine gidin:**

   ```Bash
    cd eTicaretSitesiDemo
3. **Bağımlılıkları yükleyin:**

    ```Bash
      npm install
4. **Uygulamayı başlatın:**

   ```Bash
      npm start     
