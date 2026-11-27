# Önersene

### Sana uygun yeri keşfet.

YerBulGo, kullanıcıların konumlarına, bütçelerine ve tercihlerine uygun işletmeleri keşfetmelerini amaçlayan harita tabanlı bir web uygulamasıdır. Mekân keşfini, işletme bilgilerini ve kampanyaları tek bir platformda bir araya getirir.

Projenin odağında iki kullanıcı grubu bulunur: yeni yerler keşfetmek isteyen kullanıcılar ve dijital görünürlüğünü artırarak müşterilerine ulaşmak isteyen işletmeler.

> **Proje durumu:** Geliştirme aşamasındadır. Bu README, paylaşılan proje bilgilerine göre hazırlanmıştır; kurulum komutları ve yapılandırma ayrıntıları kullanılan kaynak kod sürümüyle kontrol edilmelidir.

## Projenin Amacı

Bir yer seçerken konum, fiyat, kategori ve kişisel tercihler birlikte değerlendirilir. YerBulGo, bu bilgileri aynı deneyimde buluşturarak kullanıcıların kendilerine uygun seçeneklere ulaşmasını kolaylaştırmayı hedefler.

İşletmeler için ise profil, konum, menü ve kampanya bilgilerinin yönetilebildiği bir yapı sunmayı amaçlar.

## Temel Özellikler

### Kullanıcı Deneyimi

- **Harita üzerinden keşif:** İşletmeleri konumlarıyla birlikte görüntüleme.
- **Kategoriler:** Farklı ihtiyaçlara göre işletme kategorilerini inceleme.
- **Kişisel tercihler:** Kullanıcı tercihlerini kaydetme ve profil üzerinden güncelleme.
- **Favoriler:** İlgi duyulan işletmelere tekrar ulaşmayı kolaylaştıran favori yapısı.
- **Kampanyalar:** İşletmelerin sunduğu fırsatları keşfetme.

### İşletme Deneyimi

- **İşletme paneli:** İşletme rolüne uygun kontrol paneli ve gezinme yapısı.
- **Profil yönetimi:** İşletme bilgilerini düzenleme ve profil tamamlanma durumunu takip etme.
- **Logo yönetimi:** İşletme logosunu yükleme ve görüntüleme.
- **Konum seçimi:** Harita üzerinde sürüklenebilir işaretçiyle işletmenin konumunu belirleme.
- **Adres arama:** Adres bilgilerine göre konumu bulma ve gerektiğinde yeniden arama.
- **Menü ve kampanya modülleri:** İşletme içeriklerinin yönetimine yönelik yapı.

### Yapay Zekâ Vizyonu

YerBulGo'nun geliştirme hedeflerinden biri, **Yeri** adlı asistan üzerinden doğal dille mekân keşfi sağlamaktır. Kullanıcının ihtiyacını sohbet ederek anlatması ve önerileri harita üzerinde incelemesi hedeflenir.

Örnek kullanım senaryosu:

> “Yakınımda, bütçeme uygun ve ders çalışabileceğim sakin bir kafe bul.”

Sohbet ile haritanın birlikte kullanılması, önerilen işletmenin haritada vurgulanması ve menü içeriklerinin yapay zekâ desteğiyle içe aktarılması geliştirme kapsamındaki çalışmalardır. Bu bölümdeki hedefler, tüm akışların mevcut sürümde tamamlandığı anlamına gelmez.

## Teknolojiler

| Katman | Teknoloji |
| --- | --- |
| Backend | ASP.NET Core / .NET 8, C# |
| Veri tabanı | Microsoft SQL Server |
| Veri erişimi | Dapper |
| Frontend | HTML, CSS, JavaScript |
| Harita | MapLibre GL JS |
| Kimlik doğrulama | JWT |
| Yapay zekâ entegrasyonu | Google Gemini entegrasyon çalışmaları |

## Uygulama Yapısı

Uygulama; web arayüzü, API denetleyicileri, iş kurallarını yürüten servisler ve veri erişimi bileşenleri etrafında düzenlenir.

| Konum | Sorumluluk |
| --- | --- |
| `Yerbul.Web/` | Web uygulaması ve uygulama başlangıç yapılandırması |
| `Yerbul.Web/Controllers/Api/` | API isteklerinin karşılanması |
| `Yerbul.Web/Services/` | İş mantığı ve dış servis entegrasyonları |
| `Yerbul.Web/wwwroot/` | Statik arayüz dosyaları |
| `Yerbul.Web/wwwroot/js/app.js` | Arayüz davranışları ve API etkileşimleri |
| `database/` | SQL betikleri ve veri tabanı değişikliklerine ilişkin belgeler |

Bu tablo temel bileşenleri gösterir; eksiksiz bir dosya envanteri değildir.

## Yerel Kurulum

### 1. Gereksinimleri Hazırlayın

- Projenin hedeflediği .NET SDK sürümü; paylaşılan temel sürüm .NET 8'dir.
- Erişilebilir bir Microsoft SQL Server kurulumu.
- Kaynak kod ve ilgili veri tabanı betikleri.
- Yapay zekâ özelliklerini kullanmak için ilgili sağlayıcının API erişimi.

SDK sürümünü kaynak koddaki `.csproj` ve varsa `global.json` dosyasıyla eşleştirin.

### 2. Veri Tabanını Yapılandırın

Geliştirme için ayrı bir veri tabanı oluşturun. `database/` klasöründeki betikleri ve eşlik eden açıklamaları inceleyerek gerekli şema değişikliklerini uygulayın. Mevcut bir veri tabanında işlem yapmadan önce yedek alın; daha önce uygulanmış betikleri kontrol etmeden tekrar çalıştırmayın.

Uygulamanın bağlantı dizesini kendi SQL Server kurulumunuza göre ayarlayın. Yapılandırma anahtarlarını mevcut `appsettings` dosyaları ve `Program.cs` içindeki kullanım üzerinden belirleyin.

### 3. Servis Ayarlarını Tamamlayın

Kullanılacak özelliklere göre JWT, harita servisleri ve Gemini ayarlarını yapılandırın. API anahtarlarını, parolaları ve imzalama anahtarlarını kaynak koda eklemeyin; geliştirme ortamında User Secrets veya ortam değişkenlerini tercih edin.

### 4. Uygulamayı Çalıştırın

Aşağıdaki örnek komutlar, terminalin `Yerbul.Web` klasörünü içeren proje kökünde olduğu varsayımıyla verilmiştir:

```bash
dotnet restore Yerbul.Web
dotnet build Yerbul.Web
dotnet run --project Yerbul.Web
```

Başlatma tamamlandıktan sonra terminalde gösterilen yerel adresi tarayıcıda açın. Port ve HTTPS ayarları kullanılan başlatma profiline bağlıdır.

> Bu komutlar bu README hazırlanırken güncel kaynak kod üzerinde çalıştırılmamıştır. Veri tabanı kurulumu, uygulamayı başlatma komutundan ayrı olarak tamamlanmalıdır.

## Geliştirme Hedefleri

- Kullanıcı tercihleri ve bütçeyi birlikte değerlendiren öneriler.
- Yeri asistanı ile doğal dil üzerinden mekân keşfi.
- Sohbet önerileri ile harita işaretçileri arasında etkileşim.
- Yapay zekâ destekli menü içe aktarma ve sonuçları onaylama akışı.
- İşletmeler için Plus abonelik süreçlerinin geliştirilmesi.
- Mobil kullanım deneyiminin ve hata geri bildirimlerinin iyileştirilmesi.

## Katkı ve Geliştirme

Değişiklikleri ayrı bir dalda geliştirin. Arayüz veya API değişikliklerinde kullanıcı ve işletme akışlarını birlikte kontrol edin. Veri tabanı değişiklikleri için gerekli SQL betiklerini ve uygulama sırasını belgeleyin.

Hata bildirimlerinde sorunun oluştuğu ekranı, tekrar üretme adımlarını, beklenen davranışı ve gözlenen sonucu belirtin. Ekran görüntülerinden ve günlüklerden kişisel bilgileri ve erişim anahtarlarını çıkarın.

## Lisans

Lisans koşulları, proje deposunda bir `LICENSE` dosyası bulunuyorsa o dosyada belirtilir. Bu README tek başına herhangi bir kullanım veya dağıtım lisansı tanımlamaz.
