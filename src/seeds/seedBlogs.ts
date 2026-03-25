import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import Blog from "../models/Blog";

const blogs = [
  {
    title: "Gerçek İndirim Nasıl Anlaşılır? Sahte İndirimleri Tespit Etmenin 7 Yolu",
    slug: "gercek-indirim-nasil-anlasilir",
    excerpt:
      "Fiyat artırıp indirim yapan mağazalardan korunmanın yolları. Ürün indirimlerinde gerçek ile sahteyi ayırt etmenin 7 pratik yöntemi.",
    featuredImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800",
    metaTitle: "Gerçek İndirim Nasıl Anlaşılır? Sahte İndirimleri Tespit Etme Rehberi",
    metaDescription:
      "Ürün indirimlerinde gerçek ile sahteyi ayırt etmenin 7 yolu. Fiyat geçmişi kontrolü, karşılaştırma ve daha fazlası.",
    metaKeywords: ["gerçek indirim", "sahte indirim", "indirim nasıl anlaşılır", "fiyat takibi", "ürün indirimleri"],
    tags: ["indirim", "rehber", "akıllı alışveriş"],
    category: "indirim-rehberi",
    author: "Alertix",
    status: "published",
    publishedAt: new Date("2025-03-20"),
    content: `
<p>Online alışveriş dünyasında <strong>gerçek indirimler</strong> ile sahte indirimleri ayırt etmek giderek zorlaşıyor. Birçok mağaza, ürünlerin fiyatını önce artırıp sonra "indirim" yaparak tüketicileri yanıltıyor. İşte gerçek ürün indirimlerini tespit etmenin 7 etkili yolu:</p>

<h2>1. Fiyat Geçmişini Kontrol Edin</h2>
<p>Bir ürünün gerçekten indirimde olup olmadığını anlamanın en güvenilir yolu, <strong>fiyat geçmişini</strong> incelemektir. Alertix uygulaması, ürünlerin son 60 günlük fiyat değişimini grafikle göstererek sahte indirimleri anında tespit etmenizi sağlar.</p>

<h2>2. Farklı Mağazaları Karşılaştırın</h2>
<p>Aynı ürünü birden fazla mağazada arayın. Eğer "indirimli" fiyat diğer mağazalardaki normal fiyatla aynıysa, gerçek bir indirimden söz etmek mümkün değildir.</p>

<h2>3. İndirim Öncesi Fiyata Dikkat Edin</h2>
<p>Ürünün <strong>üzeri çizili eski fiyatı</strong> gerçekçi mi? Bir elektronik ürünün "5.000 TL" olan fiyatının "2.500 TL"ye düştüğü iddia ediliyorsa, o ürün gerçekten 5.000 TL'den satılmış mı araştırın.</p>

<h2>4. Sezon Dışı Ürünlere Dikkat</h2>
<p>Kış ortasında yazlık ürünlerde %70 indirim normal olabilir. Ama sezon ortasında aynı indirim oranı şüpheli olabilir. Mevsimsel trendleri göz önünde bulundurun.</p>

<h2>5. Stok Baskısına Kanmayın</h2>
<p>"Son 2 ürün!" veya "Bu fiyat sadece bugün!" gibi aciliyet yaratan ifadeler genellikle pazarlama taktiğidir. Gerçek flaş indirimler belirli bir süre için geçerlidir ve Alertix ile takip edilebilir.</p>

<h2>6. Kupon ve Ekstra İndirim Kontrolü</h2>
<p>Bazı mağazalar fiyatı yüksek tutup kupon ile "indirim" sunar. Kupon sonrası fiyatın gerçekten uygun olup olmadığını kontrol edin.</p>

<h2>7. Güvenilir İndirim Takip Araçları Kullanın</h2>
<p>Alertix gibi <strong>fiyat takip uygulamaları</strong>, ürünlerin fiyat geçmişini otomatik olarak kaydeder. Böylece bir indirimin gerçek mi yoksa yapay mı olduğunu kolayca anlayabilirsiniz.</p>

<h2>Sonuç</h2>
<p>Akıllı tüketici olmak, indirimlere körü körüne güvenmemekle başlar. Fiyat geçmişi takibi, karşılaştırma ve doğru araçlar kullanarak <strong>gerçek ürün indirimlerini</strong> yakalayabilir, bütçenizi koruyabilirsiniz.</p>
`,
  },
  {
    title: "2025'te En Çok İndirim Yapan Moda Markaları ve Kampanya Dönemleri",
    slug: "2025-en-cok-indirim-yapan-moda-markalari",
    excerpt:
      "Zara, H&M, Mango, Massimo Dutti ve daha fazla markanın 2025 indirim takvimleri. Moda alışverişinde en uygun zamanları kaçırmayın.",
    featuredImage: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800",
    metaTitle: "2025 Moda İndirimleri - En Çok İndirim Yapan Markalar ve Kampanya Tarihleri",
    metaDescription:
      "2025 yılında Zara, H&M, Mango gibi markaların indirim dönemleri. Moda giyim indirimlerini ne zaman yakalamalı?",
    metaKeywords: ["moda indirimleri", "giyim indirimleri 2025", "zara indirim", "h&m kampanya", "moda fırsatları"],
    tags: ["moda", "indirim takvimi", "2025"],
    category: "moda",
    author: "Alertix",
    status: "published",
    publishedAt: new Date("2025-03-18"),
    content: `
<p>Moda dünyasında <strong>indirim dönemleri</strong> belirli bir takvime sahiptir. Bu takvimi bilmek, en sevdiğiniz markaların ürünlerini uygun fiyata almanın anahtarıdır. İşte 2025'in en önemli moda indirim dönemleri:</p>

<h2>Ocak - Kış Sonu İndirimleri</h2>
<p>Yılın en büyük indirim dönemi Ocak ayıdır. Kış koleksiyonlarının eritilmesi için markalar <strong>%50-70 arası indirimler</strong> sunar. Zara, Mango ve H&M bu dönemde en agresif indirim yapan markalardır.</p>

<h2>Mart - Sezon Geçişi</h2>
<p>Kıştan bahara geçiş döneminde özellikle mont, kaban ve kazak gibi ürünlerde ciddi indirimler bulabilirsiniz. Bu dönem genellikle gözden kaçar.</p>

<h2>Haziran - Yaz Sonu Başlangıcı</h2>
<p>İlkbahar/yaz koleksiyonunun ilk indirim dalgası Haziran sonunda başlar. Erken alışveriş yapanlar en geniş beden ve renk seçeneklerine ulaşır.</p>

<h2>Temmuz-Ağustos - Büyük Yaz İndirimleri</h2>
<p>Yılın ikinci büyük indirim dönemi. Tüm markalar yaz stoklarını eritmek için <strong>%40-70 arası</strong> indirim uygular.</p>

<h2>Kasım - Black Friday & Cyber Monday</h2>
<p>Kasım ayının son haftası global indirim çılgınlığı. Dikkatli olun: bazı markalar fiyatları önceden artırır. Alertix ile fiyat geçmişini kontrol edin.</p>

<h2>Marka Bazlı İndirim Stratejileri</h2>
<ul>
<li><strong>Zara:</strong> Yılda 2 büyük sezon sonu indirimi (Ocak ve Temmuz). Kademeli fiyat düşüşü uygular.</li>
<li><strong>H&M:</strong> Sık mid-season kampanyaları ve üyelere özel indirimler sunar.</li>
<li><strong>Mango:</strong> Newsletter üyelerine erken erişim sağlar, sezon sonu %60'a varan indirimler.</li>
<li><strong>Massimo Dutti:</strong> Daha az ama derin indirimler yapar, premium ürünlerde %40-50 fırsat yakalanabilir.</li>
</ul>

<h2>Alertix ile Moda İndirimlerini Takip Edin</h2>
<p>Alertix uygulamasında "Moda & Giyim" kategorisini seçerek tüm bu markaların <strong>flaş indirimlerini</strong> anında bildirim olarak alabilirsiniz.</p>
`,
  },
  {
    title: "Elektronik Ürünlerde Fiyat Takibi: Doğru Zamanda Doğru Fiyata Almak",
    slug: "elektronik-urunlerde-fiyat-takibi",
    excerpt:
      "Telefon, tablet, kulaklık gibi elektronik ürünlerde en uygun alım zamanını nasıl belirlersiniz? Fiyat takibi stratejileri ve ipuçları.",
    featuredImage: "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=800",
    metaTitle: "Elektronik Ürünlerde Fiyat Takibi - Doğru Fiyata Almanın Yolları",
    metaDescription:
      "Telefon, tablet, kulaklık gibi elektronik ürünlerde fiyat takibi nasıl yapılır? En uygun alım zamanlarını öğrenin.",
    metaKeywords: ["elektronik indirimleri", "telefon indirim", "fiyat takibi", "teknoloji fırsatları", "elektronik fiyat"],
    tags: ["elektronik", "fiyat takibi", "teknoloji"],
    category: "teknoloji",
    author: "Alertix",
    status: "published",
    publishedAt: new Date("2025-03-15"),
    content: `
<p><strong>Elektronik ürünler</strong>, alışveriş bütçesinin en büyük kalemlerinden biridir. Bir telefonun fiyatı birkaç hafta içinde binlerce lira değişebilir. Bu yüzden doğru zamanda doğru fiyata almak büyük tasarruf sağlar.</p>

<h2>Elektronik Fiyatları Neden Dalgalanır?</h2>
<p>Elektronik ürün fiyatları birçok faktöre bağlı olarak değişir: döviz kuru, yeni model çıkışları, stok durumu, kampanya dönemleri ve rekabet. Bu dalgalanmayı takip etmek, en uygun fiyatı yakalamanın anahtarıdır.</p>

<h2>En İyi Alım Zamanları</h2>
<ul>
<li><strong>Yeni Model Çıkışlarından Sonra:</strong> Bir markanın yeni modeli çıktığında, önceki model genellikle %15-30 ucuzlar.</li>
<li><strong>Black Friday (Kasım):</strong> Elektronik kategorisinde yılın en büyük indirimleri bu dönemde yapılır.</li>
<li><strong>11.11 (Kasım):</strong> Özellikle online platformlarda ciddi indirimler sunar.</li>
<li><strong>Bayram Öncesi Dönemler:</strong> Mağazalar bayram alışverişi için özel kampanyalar düzenler.</li>
</ul>

<h2>Fiyat Takibi Nasıl Yapılır?</h2>
<p>Alertix uygulamasının <strong>fiyat geçmişi analizi</strong> özelliği ile elektronik ürünlerin son 60 günlük fiyat grafiğini görebilirsiniz. Dönem içi en düşük ve en yüksek fiyat bilgisiyle gerçek bir indirim mi yoksa yapay bir kampanya mı olduğunu anlayabilirsiniz.</p>

<h2>Dikkat Edilmesi Gerekenler</h2>
<ol>
<li>Ürünün farklı mağazalardaki fiyatlarını karşılaştırın</li>
<li>Garanti ve iade koşullarını kontrol edin</li>
<li>Yenilenmiş (refurbished) ürünler iyi bir alternatif olabilir</li>
<li>Kupon ve cashback fırsatlarını araştırın</li>
</ol>

<h2>Sonuç</h2>
<p>Elektronik alışverişte sabırlı olmak ve <strong>fiyat takibi</strong> yapmak ciddi tasarruf sağlar. Alertix ile "Elektronik & Teknoloji" kategorisindeki tüm flaş indirimleri anında öğrenin.</p>
`,
  },
  {
    title: "Kozmetik ve Güzellik Ürünlerinde İndirim Yakalama Stratejileri",
    slug: "kozmetik-guzellik-indirim-stratejileri",
    excerpt:
      "Sephora, MAC, Estée Lauder gibi markalarda kozmetik indirimleri ne zaman olur? Güzellik ürünlerinde tasarruf etmenin yolları.",
    featuredImage: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800",
    metaTitle: "Kozmetik İndirimleri - Güzellik Ürünlerinde Tasarruf Rehberi 2025",
    metaDescription:
      "Sephora, MAC, Estée Lauder kozmetik indirimleri ne zaman? Güzellik ve kozmetik ürünlerinde en iyi fiyatı yakalama stratejileri.",
    metaKeywords: ["kozmetik indirimleri", "güzellik ürünleri indirim", "sephora indirim", "makyaj fırsatları"],
    tags: ["kozmetik", "güzellik", "indirim"],
    category: "guzellik",
    author: "Alertix",
    status: "published",
    publishedAt: new Date("2025-03-12"),
    content: `
<p><strong>Kozmetik ve güzellik ürünleri</strong>, düzenli olarak kullanılan ve bütçede önemli yer tutan kategorilerden biridir. Doğru zamanda alışveriş yaparak bu kategoride %30-50 arası tasarruf etmek mümkün.</p>

<h2>Kozmetik İndirim Dönemleri</h2>
<h3>Sephora</h3>
<p>Yılda 2-3 büyük kampanya düzenler: Beauty Days (Nisan), Black Friday (Kasım) ve yılbaşı kampanyası. Beauty Insider üyelerine özel %20 indirim dönemleri vardır.</p>

<h3>MAC Cosmetics</h3>
<p>Genellikle doğrudan indirim yapmaz, ancak hediye set kampanyaları ve sınırlı sayıda ürün çıkışları fırsat sunar.</p>

<h3>Estée Lauder / Clinique</h3>
<p>GWP (Gift with Purchase - alışverişe hediye) kampanyaları çok yaygındır. Belirli tutarın üzerinde alışverişe mini set hediye verilir.</p>

<h2>Tasarruf İpuçları</h2>
<ul>
<li><strong>Set alışverişi:</strong> Tek ürün yerine set almak birim fiyatta %30-40 tasarruf sağlar</li>
<li><strong>Travel size:</strong> Deneme boyutu ürünler, tam boyut almadan önce test etmek için idealdir</li>
<li><strong>Dupe ürünler:</strong> Premium markaların uygun fiyatlı alternatifleri araştırılabilir</li>
<li><strong>Sadakat programları:</strong> Sephora Beauty Insider, Boyner Joy Card gibi programlara üye olun</li>
</ul>

<h2>Alertix ile Kozmetik İndirimlerini Takip Edin</h2>
<p>"Güzellik & Kozmetik" kategorisini seçerek favori markalarınızın <strong>flaş indirimlerini</strong> anında öğrenin. Fiyat geçmişi ile gerçek indirimleri tespit edin.</p>
`,
  },
  {
    title: "Akıllı Alışveriş Rehberi: Online Alışverişte Para Tasarrufu İçin 10 Altın Kural",
    slug: "akilli-alisveris-rehberi-10-altin-kural",
    excerpt:
      "Online alışverişte bütçenizi korumanın ve gerçek fırsatları yakalamanın 10 temel kuralı. İndirim takibi, fiyat karşılaştırma ve daha fazlası.",
    featuredImage: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800",
    metaTitle: "Akıllı Alışveriş Rehberi - Online Alışverişte 10 Altın Kural",
    metaDescription:
      "Online alışverişte para tasarrufu yapmanın 10 yolu. İndirim takibi, fiyat karşılaştırma, kupon kullanımı ve daha fazlası.",
    metaKeywords: ["akıllı alışveriş", "online alışveriş", "para tasarrufu", "indirim rehberi", "alışveriş ipuçları"],
    tags: ["rehber", "tasarruf", "alışveriş ipuçları"],
    category: "alisveris-ipuclari",
    author: "Alertix",
    status: "published",
    publishedAt: new Date("2025-03-10"),
    content: `
<p>Online alışveriş her geçen gün büyüyor ve beraberinde hem fırsatlar hem de tuzaklar getiriyor. İşte <strong>akıllı alışveriş</strong> yapmanın ve gerçek tasarruf etmenin 10 altın kuralı:</p>

<h2>1. Alışveriş Listesi Oluşturun</h2>
<p>İmpulsif alışverişlerden kaçınmanın en etkili yolu, ihtiyaçlarınızı önceden listelemektir. "İndirim var" diye ihtiyacınız olmayan şeyleri almak tasarruf değil israftır.</p>

<h2>2. Fiyat Geçmişini Takip Edin</h2>
<p>Bir ürünü almadan önce fiyat geçmişine bakın. Alertix gibi <strong>fiyat takip uygulamaları</strong> ile son aylardaki fiyat değişimlerini görebilirsiniz.</p>

<h2>3. Birden Fazla Mağaza Karşılaştırın</h2>
<p>Aynı ürün farklı mağazalarda farklı fiyatlarla satılabilir. 5 dakikalık bir araştırma bazen yüzlerce lira tasarruf ettirir.</p>

<h2>4. Kupon ve İndirim Kodlarını Araştırın</h2>
<p>Ödeme yapmadan önce mağazanın güncel kupon kodları olup olmadığını kontrol edin. Çoğu zaman ilk alışverişe özel veya belirli tutarın üzerine geçerli kodlar bulunur.</p>

<h2>5. Kargo Ücretine Dikkat Edin</h2>
<p>İndirimli ürünün kargo ücreti hesaba katıldığında hâlâ uygun mu? Ücretsiz kargo limiti varsa birkaç ürünü birleştirmeyi düşünün.</p>

<h2>6. İade Politikasını Kontrol Edin</h2>
<p>Özellikle giyim alışverişinde iade koşullarını önceden bilin. Bazı indirimli ürünler iade edilemeyebilir.</p>

<h2>7. Bildirim Açın Ama Spam'e Düşmeyin</h2>
<p>İlgilendiğiniz kategorilerde bildirim almak fırsatları yakalamanın en hızlı yoludur. Alertix ile sadece seçtiğiniz kategorilerdeki <strong>gerçek indirimleri</strong> takip edebilirsiniz.</p>

<h2>8. Sezon Sonu İndirimlerini Değerlendirin</h2>
<p>Bir sonraki sezon için alışveriş yapmak büyük tasarruf sağlar. Kış ortasında yazlık, yaz sonunda kışlık almak mantıklı bir stratejidir.</p>

<h2>9. Sadakat Programlarından Faydalanın</h2>
<p>Düzenli alışveriş yaptığınız mağazaların sadakat programlarına üye olun. Puan biriktirme, özel indirimler ve erken erişim gibi avantajlar sunarlar.</p>

<h2>10. 24 Saat Kuralını Uygulayın</h2>
<p>100 TL üzerindeki spontan alışveriş kararlarında 24 saat bekleyin. Ertesi gün hâlâ istiyorsanız alın. Bu basit kural impulsif harcamaları önemli ölçüde azaltır.</p>

<h2>Sonuç</h2>
<p>Akıllı alışveriş bir alışkanlıktır ve zamanla gelişir. Bu 10 kuralı uygulayarak hem <strong>ürün indirimlerinden</strong> maksimum fayda sağlayabilir hem de bütçenizi koruyabilirsiniz. Alertix ile fırsat takibinizi otomatikleştirin!</p>
`,
  },
];

const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI!);
    console.log("MongoDB bağlantısı başarılı");

    await Blog.deleteMany({});
    await Blog.insertMany(blogs);
    console.log(`${blogs.length} blog yazısı oluşturuldu`);

    await mongoose.disconnect();
    console.log("Blog seed tamamlandı");
    process.exit(0);
  } catch (error) {
    console.error("Seed hatası:", error);
    process.exit(1);
  }
};

seed();
