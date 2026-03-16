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

## Uygulama Görüntüleri

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; padding: 10px;">

  <img src="https://private-user-images.githubusercontent.com/139372952/564181912-687c8737-b309-45ea-8a4e-cb11610b0a0c.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzM2NzA3NzYsIm5iZiI6MTc3MzY3MDQ3NiwicGF0aCI6Ii8xMzkzNzI5NTIvNTY0MTgxOTEyLTY4N2M4NzM3LWIzMDktNDVlYS04YTRlLWNiMTE2MTBiMGEwYy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwMzE2JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDMxNlQxNDE0MzZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT04M2Y5MGNlZWVjNWI2YjE0MWVkMjE2YzczYzhiZDljOTg5MGI4MjcwYzZmMjlmOGVhYjNlYzQ1ZWIzOWY2NDE5JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.ezk0cDtqaCLdA-EAn4eu6tPfDSobGmlCyFATH5BHAvQ" alt="Ana Sayfa" style="width: 200px; height: auto; object-fit: cover; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">

  <img src="https://private-user-images.githubusercontent.com/139372952/564181533-102a1cf9-c6f7-4a60-b302-12b63e05f69e.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzM2NzA4NDIsIm5iZiI6MTc3MzY3MDU0MiwicGF0aCI6Ii8xMzkzNzI5NTIvNTY0MTgxNTMzLTEwMmExY2Y5LWM2ZjctNGE2MC1iMzAyLTEyYjYzZTA1ZjY5ZS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwMzE2JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDMxNlQxNDE1NDJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0xZTMyYjQ3YjNmNzNlODE1ZmZiNGQwNDExOGE1OTdlOTRlZGYzMzcwMGMzNjZhZjg2ZTgzYjFkOTdhYjY0NmEzJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.OlJ5BXwj4xP5w1Fl87dmyx6zjz4AuqbzhvKDVAT425c" alt="Ürünler" style="width: 200px; height: auto; object-fit: cover; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">

  <img src="https://private-user-images.githubusercontent.com/139372952/564180512-1da9a086-ddbe-4b57-a36d-bc04545469fc.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzM2NzA4NjEsIm5iZiI6MTc3MzY3MDU2MSwicGF0aCI6Ii8xMzkzNzI5NTIvNTY0MTgwNTEyLTFkYTlhMDg2LWRkYmUtNGI1Ny1hMzZkLWJjMDQ1NDU0NjlmYy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwMzE2JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDMxNlQxNDE2MDFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT04NzUyNGQ3MmYwZWNkYzgzYmNmMjNiMDk2ZGRmYzE5MDQyYzZkYWEwMGFkZmQxYjY2YTQ0NzAxYTI1OGNiM2I2JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.geRUZwLshoSB2TaMR9GA1BPNu-fDhAVWyaAnNUI6iM4" alt="Sepet" style="width:  200px; height: auto; object-fit: cover; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">

  <img src="https://private-user-images.githubusercontent.com/139372952/564180844-6e277e2f-bba6-4d3b-84bd-37564f4875db.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzM2NzA4OTIsIm5iZiI6MTc3MzY3MDU5MiwicGF0aCI6Ii8xMzkzNzI5NTIvNTY0MTgwODQ0LTZlMjc3ZTJmLWJiYTYtNGQzYi04NGJkLTM3NTY0ZjQ4NzVkYi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwMzE2JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDMxNlQxNDE2MzJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT05YzBkZWE5ZDY5OTZlMTYwNGNkZjRjNTk0OTA0MjE2ZjlmNGVhZTFhZWUwZjQ4ODgzODE3MTAzYzAyOWU4MWEwJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.04gEKqZbtR97QfIE5z3CxtyuWsV-cpMYHnYPkFDXOLk" alt="iletişim" style="width:  200px; height: auto; object-fit: cover; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">

</div> 
