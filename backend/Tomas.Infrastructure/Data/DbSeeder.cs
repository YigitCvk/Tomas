using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Tomas.Domain.Entities;

namespace Tomas.Infrastructure.Data;

public static class DbSeeder
{
    public static async Task SeedAsync(AppDbContext db, UserManager<AppUser> userManager)
    {
        await db.Database.MigrateAsync();

        if (!await userManager.Users.AnyAsync())
        {
            var admin = new AppUser
            {
                UserName = "admin@tomas.com.tr",
                Email = "admin@tomas.com.tr",
                FullName = "Tomas Admin",
                EmailConfirmed = true
            };
            await userManager.CreateAsync(admin, "TomasAdmin123!");
        }

        if (!await db.SiteSettings.AnyAsync())
        {
            db.SiteSettings.AddRange(
                new SiteSetting { Key = "SiteName", Value = "Tomas Dış Ticaret", Group = "General" },
                new SiteSetting { Key = "SiteDescription", Value = "Global tedarik ve dış ticaret çözümlerinde güvenilir B2B iş ortağınız.", Group = "General" },
                new SiteSetting { Key = "DefaultLanguage", Value = "tr", Group = "General" },
                new SiteSetting { Key = "Phone", Value = "0 (212) 302 59 35", Group = "Contact" },
                new SiteSetting { Key = "GSM", Value = "+90 (532) 420 12 99", Group = "Contact" },
                new SiteSetting { Key = "Email", Value = "info@tomas.com.tr", Group = "Contact" },
                new SiteSetting { Key = "Address", Value = "Libadiye Cad. No:82E Emaar Heights Blok K:23 D:2307 34700 Üsküdar / İstanbul", Group = "Contact" },
                new SiteSetting { Key = "WhatsApp", Value = "905324201299", Group = "Contact" },
                new SiteSetting { Key = "LinkedIn", Value = "", Group = "Social" },
                new SiteSetting { Key = "Twitter", Value = "", Group = "Social" },
                new SiteSetting { Key = "MetaTitle", Value = "Tomas Dış Ticaret | Global Tedarik ve Dış Ticaret Çözümleri", Group = "SEO" },
                new SiteSetting { Key = "MetaDescription", Value = "Tomas Dış Ticaret; ithalat, ihracat, global tedarik, endüstriyel ürünler ve dijital çözümler alanında B2B süreç desteği sunar.", Group = "SEO" },
                new SiteSetting { Key = "GoogleAnalyticsId", Value = "", Group = "Analytics" }
            );
        }

        if (!await db.Services.AnyAsync())
        {
            var services = new[]
            {
                new {
                    Title = "Uluslararası Ticaret / İhracat & İthalat",
                    Slug = "uluslararasi-ticaret-ihracat-ithalat",
                    Desc = "İhracat ve ithalat operasyonlarının planlanmasından teslimatına kadar süreç koordinasyonu ve çözüm ortaklığı.",
                    Content = "<p>Uluslararası ticaret; ihracat ve ithalat süreçlerinin planlanmasından operasyon yönetimine, belgelendirmeden müşteri ve tedarikçi ilişkilerine kadar çok boyutlu ve birbiriyle bağlantılı süreçleri kapsar. Yanlış bir adım — eksik evrak, hatalı gümrük beyanı veya güvenilmez tedarikçi — tüm işlemi riske atabilir. Tomas Dış Ticaret, bu süreçlerin tamamında işletmeler adına koordinasyon ve çözüm ortaklığı sağlar.</p><h2>Hizmet Kapsamı</h2><p>Tomas'ın uluslararası ticaret hizmetleri; hedef pazar araştırmasından nihai teslimat teyidine kadar tüm süreci kapsar:</p><ul><li><strong>İhracat yönetimi:</strong> Alıcı araştırması, fiyat teklifleri, ihracat evrakı (fatura, konşimento, menşe şahadetnamesi, çeki listesi), gümrük beyannamesi koordinasyonu, nakliye planlaması ve tahsilat takibi</li><li><strong>İthalat yönetimi:</strong> Tedarikçi araştırması ve değerlendirmesi, numune süreci, sipariş yönetimi, ithalat evrakı kontrolü, gümrük prosedürleri koordinasyonu ve depolama/dağıtım planlaması</li><li><strong>Ödeme güvencesi:</strong> Akreditif (L/C), vesaik mukabili (CAD), peşin ödeme ve vadeli ödeme seçeneklerinde danışmanlık ve koordinasyon</li><li><strong>Risk yönetimi:</strong> Tedarikçi güvenilirlik değerlendirmesi, kur riski farkındalığı, ülke bazlı düzenleme takibi</li></ul><h2>Bu Hizmet Kimler İçin Uygundur?</h2><p>Yurt dışına ürün satmak veya yurt dışından ürün temin etmek isteyen; ancak süreç karmaşıklığı, mevzuat gereklilikleri ya da operasyonel kapasite nedeniyle destek arayan işletmeler için uygundur.</p><ul><li>İlk kez uluslararası ticarete adım atan ve süreçleri öğrenmek isteyen KOBİ'ler</li><li>Mevcut ihracat veya ithalat operasyonlarını iyileştirmek ya da yeni pazarlara açılmak isteyen firmalar</li><li>Belirli bir ürün veya pazar için proje bazlı ticaret desteği arayan işletmeler</li><li>İç kaynakların yetmediği dönemlerde dış operasyon kapasitesi ihtiyacı duyan şirketler</li></ul><h2>Tomas Bu Süreçte Nasıl Destek Olur?</h2><ul><li>Hedef pazar araştırması ve potansiyel alıcı/tedarikçi tespiti</li><li>İhracat ve ithalat evrak yönetimi ile belgelendirme desteği</li><li>Gümrük süreçleri ve tarife danışmanlığı koordinasyonu</li><li>Ödeme yöntemi seçimi ve güvence mekanizmaları konusunda yönlendirme</li><li>Nakliye türü seçimi (deniz, hava, kara, kombine) ve lojistik koordinasyonu</li><li>Sigorta kapsamı planlaması</li><li>Süreç izleme, raporlama ve müşteri bilgilendirmesi</li></ul><h2>Çalışma Süreci</h2><ol><li><strong>İhtiyaç Analizi:</strong> Hedef ülke, ürün grubu, ticaret yönü ve öncelikler belirlenir. Mevcut altyapı ve kısıtlar değerlendirilir.</li><li><strong>Pazar ve Taraf Araştırması:</strong> Potansiyel alıcı veya tedarikçi alternatifleri araştırılır, ön iletişim kurulur ve değerlendirme kriterleri çerçevesinde kıyaslanır.</li><li><strong>Operasyon Planlaması:</strong> Evrak listesi, lojistik planı, ödeme süreci ve zaman çizelgesi oluşturulur. Her aşamada sorumluluklar netleştirilir.</li><li><strong>Uygulama ve Takip:</strong> İşlem başlatılır; sevkiyat, gümrük ve teslimat aşamalarında süreç yakından izlenir ve tamamlanana kadar düzenli raporlama yapılır.</li></ol>",
                    Icon = "🌍", Sort = 1
                },
                new {
                    Title = "Ambalaj Ürünleri ve Endüstriyel Malzemeler",
                    Slug = "ambalaj-urunleri-ve-endustriyel-malzemeler",
                    Desc = "Endüstriyel ambalaj ve sarf malzemeleri tedarikinde geniş ürün portföyü, tedarikçi araştırması ve teslimat takibi.",
                    Content = "<p>Ambalaj ürünleri ve endüstriyel malzeme tedariki, üretim süreçlerinin kesintisiz işlemesi için kritik bir halka oluşturmaktadır. Doğru ambalaj; hem ürünü korumanın hem de marka imajını sahada yansıtmanın temel aracıdır. Endüstriyel sarf malzemeleri ise üretim hattının verimliliğini belirleyen vazgeçilmez girdilerdir. Tomas Dış Ticaret, farklı sektörlere yönelik geniş ürün portföyü ve tedarik ağı ile kapsamlı B2B çözümler sunar.</p><h2>Tedarik Edilen Ürün Grupları</h2><ul><li><strong>Birincil ambalaj:</strong> Plastik şişe, cam ambalaj, kap ve kavanoz, tüp, blister, karton kutu ve kutular</li><li><strong>İkincil ve taşıma ambalajı:</strong> Oluklu mukavva, stretch film, bant, köpük tampon, shrink, taşıma peletleri, kasalar</li><li><strong>Esnek ambalaj:</strong> BOPP, PE, PP, metalik folyo bazlı poşet ve filmler; stant-up pouch, ziplock torba</li><li><strong>Etiket ve baskı malzemeleri:</strong> Yapışkanlı etiket, termal transfer malzeme, barkod şeridi</li><li><strong>Endüstriyel sarf malzemeleri:</strong> İş güvenliği ekipmanı (eldiven, gözlük, maske), temizlik sarf malzemeleri, bağlantı elemanları, palet ve kayış</li><li><strong>Özel ambalaj çözümleri:</strong> İhracat ambalajı, GMP uyumlu farmasötik ambalaj, gıda temasına uygun malzeme</li></ul><h2>Bu Hizmet Kimler İçin Uygundur?</h2><ul><li>Toplu ambalaj ve sarf malzemesi alımı yapan üretim tesisleri</li><li>Ürün ihracatı için uygun ambalaj çözümü arayan ihracatçılar</li><li>Tedarik kaynaklarını çeşitlendirmek veya maliyetlerini düşürmek isteyen satın alma departmanları</li><li>Özel baskı, boyut veya malzeme gereksinimleri olan firmalar</li></ul><h2>Tomas Bu Süreçte Nasıl Destek Olur?</h2><ul><li>Ürün ihtiyaç analizi ve teknik şartname hazırlığı</li><li>Yurt içi ve uluslararası tedarikçi araştırması ve değerlendirme</li><li>Fiyat karşılaştırma, müzakere desteği ve toplam maliyet analizi</li><li>Numune temini, baskı provasının takibi ve kalite onay süreci</li><li>Düzenli veya proje bazlı sipariş koordinasyonu</li><li>Lojistik koordinasyonu, ithalat/ihracat evrak takibi ve teslimat izleme</li></ul><h2>Çalışma Süreci</h2><ol><li><strong>İhtiyaç Analizi:</strong> Ürün özellikleri (malzeme, boyut, baskı gereksinimleri), miktarlar, teslimat süresi ve bütçe beklentileri belirlenir.</li><li><strong>Tedarik Araştırması:</strong> Teknik şartnameye uygun üretici ve tedarikçilerden teklif alınır; fiyat ve koşullar karşılaştırılır.</li><li><strong>Numune ve Onay:</strong> Numune temin edilir, kalite uygunluğu değerlendirilir; gerekiyorsa revizyon turu yönetilir.</li><li><strong>Sipariş, Üretim ve Teslimat:</strong> Onaylanan ürün için sipariş verilir, üretim/sevkiyat süreci takip edilir ve teslimat teyit edilir.</li></ol>",
                    Icon = "📦", Sort = 2
                },
                new {
                    Title = "Polimer ve Plastik Hammadde Ticareti",
                    Slug = "polimer-ve-plastik-hammadde-ticareti",
                    Desc = "Plastik hammadde ve polimer ürün gruplarında tedarik araştırması, fiyat analizi ve ithalat koordinasyonu.",
                    Content = "<p>Polimer ve plastik hammaddeler; ambalaj, inşaat, otomotiv, tarım ve pek çok endüstriyel sektörün temel girdileri arasındadır. Bu hammaddelerin doğru polimer tipinde, istenen kalite sınıfında ve rekabetçi fiyatta temin edilmesi, üretim verimliliğini ve ürün kalitesini doğrudan belirler. Tomas Dış Ticaret, bu alanda yurt içi distribütörler ve uluslararası üreticilerle kurduğu iletişim ağı sayesinde güvenilir bir B2B tedarik ortağı olarak hizmet vermektedir.</p><h2>Tedarik Edilen Polimer ve Plastik Ürün Grupları</h2><ul><li><strong>Poliolefinler:</strong> Polietilen (HDPE, LDPE, LLDPE, mLLDPE), Polipropilen (homo, random, impact kopolimer), Polibüten-1</li><li><strong>Mühendislik plastikleri:</strong> ABS, PA (Naylon 6, Naylon 6.6), PC (Polikarbonat), POM (Asetal), PBT, PMMA</li><li><strong>Ambalaj polimerleri:</strong> PET (şişe sınıfı, film sınıfı), PS (genel amaçlı, HIPS, EPS), PVC (sert, esnek)</li><li><strong>Teknik ve yüksek performanslı polimerler:</strong> PPS, PEEK, PEI, LCP, PTFE</li><li><strong>Elastomerler ve TPE:</strong> TPE, TPU, TPV, SBS, SEBS</li><li><strong>Katkı maddeleri ve masterbatch:</strong> Renk masterbatch, dolgu masterbatch, UV stabilizatör, antistatik, alev geciktirici</li><li><strong>Geri dönüştürülmüş granüller:</strong> Belgelenmiş rPET, rHDPE, rPP kaynakları</li></ul><h2>Bu Hizmet Kimler İçin Uygundur?</h2><ul><li>Enjeksiyon kalıplama, ekstrüzyon, şişirme ve termoform işleme tesisleri</li><li>Ambalaj filmi, torba ve çuval üreticileri</li><li>Boru, profil ve yapı malzemeleri üreticileri</li><li>Otomotiv, elektrik-elektronik ve beyaz eşya bileşen üreticileri</li><li>Mevcut tedarik kaynaklarını çeşitlendirmek veya fiyat avantajı elde etmek isteyen satın alma birimleri</li></ul><h2>Tomas Bu Süreçte Nasıl Destek Olur?</h2><ul><li>Polimer tipi, sınıfı ve teknik spesifikasyon (MFI, yoğunluk, çekme mukavemeti vb.) belirleme desteği</li><li>Uygun üretici, distribütör ve ihracatçıların araştırılması</li><li>Rekabetçi fiyat analizi ve ticari müzakere koordinasyonu</li><li>Teknik veri sayfası (TDS) ve güvenlik bilgi formu (SDS) temini</li><li>Numune temini ve üretim testleri sürecinde takip desteği</li><li>İthalat prosedürleri, gümrük kodu tespiti ve lojistik koordinasyonu</li><li>Lot takibi ve kalite belgesi (CoA) kontrolü</li></ul><h2>Çalışma Süreci</h2><ol><li><strong>İhtiyaç Analizi:</strong> Polimer tipi, teknik parametreler, kullanım alanı, yıllık tüketim hacmi ve kalite gereksinimleri belirlenir.</li><li><strong>Tedarik Araştırması:</strong> Uygun üretici ve distribütörlerden teklif alınır; fiyat, MOQ ve teslim süresi karşılaştırılır.</li><li><strong>Numune ve Teknik Onay:</strong> Numune malzeme temin edilir; üretim testleri yapılır ve teknik uygunluk onaylanır.</li><li><strong>Sipariş ve İthalat Koordinasyonu:</strong> Ticari koşullar mutabakata varılır; sipariş, ödeme, gümrük prosedürleri ve nakliye takip edilerek teslimat gerçekleştirilir.</li></ol>",
                    Icon = "🧪", Sort = 3
                },
                new {
                    Title = "Tarım, Narenciye ve Gıda Ürünleri",
                    Slug = "tarim-narenciye-ve-gida-urunleri",
                    Desc = "Tarımsal ürün ve gıda tedarikinde belgelendirme, kalite takibi ve lojistik koordinasyonu.",
                    Content = "<p>Tarım, narenciye ve gıda ürünleri ticareti; ürün kalitesi, sezonluk dinamikler, zorunlu belgelendirme ve hassas lojistik koordinasyonu açısından özel deneyim gerektiren bir alandır. Tek bir eksik belge, bir partinin ithalat noktasında reddedilmesine neden olabilir; yanlış lojistik seçimi ise taze ürünün değerini yitirmesine yol açabilir. Tomas Dış Ticaret, bu alanda ihracat ve ithalat süreçlerinde işletmelere süreç odaklı, belge uyumlu destek sağlar.</p><h2>Hizmet Kapsamı</h2><ul><li><strong>Taze meyve ve sebze:</strong> Narenciye (portakal, mandalina, limon, greyfurt), elma, nar, domates, biber, patlıcan ve diğer sebzeler</li><li><strong>Kuru meyve ve kuruyemiş:</strong> Kuru kayısı, üzüm, incir, dut; ceviz, fındık, badem, antep fıstığı</li><li><strong>Tahıl ve baklagiller:</strong> Buğday, arpa, mısır, mercimek, nohut, fasulye, hububat ürünleri</li><li><strong>İşlenmiş gıda:</strong> Konserve, reçel, salça, zeytinyağı, zeytin, baharat, şeker, un, makarna</li><li><strong>Organik sertifikalı ürünler:</strong> AB organik, USDA Organic veya eşdeğer sertifikalı ürün tedariki</li><li><strong>Tarımsal girdi:</strong> Gübre, tarım ilacı, tohum ve sulama ekipmanlarında tedarik koordinasyonu</li></ul><h2>Bu Hizmet Kimler İçin Uygundur?</h2><ul><li>Ürünlerini yeni ihracat pazarlarına açmak isteyen üreticiler ve kooperatifler</li><li>Belirli hedef pazarlarda düzenli alıcı bağlantısı arayan ihracatçılar</li><li>Yurt dışından tarım ürünü temin eden gıda işleme ve distribütör firmalar</li><li>Sezonluk ürünlerde planlı tedarik veya fırsat temini desteği arayan işletmeler</li></ul><h2>Tomas Bu Süreçte Nasıl Destek Olur?</h2><ul><li>Ürün kalite kriterleri ve hedef pazara özgü sertifika gereksinimlerinin belirlenmesi</li><li>Alıcı veya tedarikçi araştırması, ön iletişim ve yönlendirme</li><li>Zorunlu belgelendirme süreci: sağlık sertifikası, bitki sağlığı sertifikası (phytosanitary), menşe şahadetnamesi, analiz raporu, helal/organik sertifika</li><li>Gıda güvenliği standartları (HACCP, ISO 22000, BRC, IFS) uyumluluğu konusunda yönlendirme</li><li>Sezon planlaması: hasat takvimi, stok yönetimi ve erken rezervasyon koordinasyonu</li><li>Soğuk zincir gerektiren ürünlerde soğutmalı araç/konteyner lojistiği koordinasyonu</li><li>Gümrük prosedürleri, kota ve tarife bilgilendirmesi</li></ul><h2>Çalışma Süreci</h2><ol><li><strong>İhtiyaç Analizi:</strong> Ürün grubu, kalite standartları, sertifika gereksinimleri, hedef pazar ve miktar/sezon bilgisi belirlenir.</li><li><strong>Tedarik/Pazar Araştırması:</strong> Uygun alıcı veya tedarikçi seçenekleri araştırılır; ön görüşmeler yapılır ve teklifler karşılaştırılır.</li><li><strong>Operasyon Planlaması:</strong> Hasat/üretim takvimi, paketleme standartları, belgelendirme süreci, nakliye türü ve sigorta planı oluşturulur.</li><li><strong>Teslimat ve Takip:</strong> Ürünler yüklendiği andan hedef noktaya ulaşana kadar lojistik ve belge süreci yakından izlenir; teslimat teyit edilir.</li></ol>",
                    Icon = "🍊", Sort = 4
                },
                new {
                    Title = "Makine ve Endüstriyel Ürünler",
                    Slug = "makine-ve-endustriyel-urunler",
                    Desc = "Endüstriyel makine ve ekipman tedarikinde teknik ihtiyaç analizi, tedarikçi araştırması ve operasyon takibi.",
                    Content = "<p>Makine ve endüstriyel ürün tedariki; teknik spesifikasyonların eksiksiz anlaşılmasını, güvenilir tedarikçi tespitini ve dikkatli bir operasyon yönetimini gerektiren karmaşık bir süreçtir. Yanlış bir teknik seçim veya güvenilmez bir tedarikçi, fabrika kurulumunu geciktirebilir, üretim hattını durdurabilir ve beklenmedik maliyet artışlarına neden olabilir. Tomas Dış Ticaret, bu süreçte işletmelerin teknik ve ticari ihtiyaçlarını bir arada değerlendirerek çözüm üretir.</p><h2>Hizmet Kapsamı</h2><ul><li><strong>Üretim ve işleme makineleri:</strong> Enjeksiyon kalıp, ekstrüzyon, CNC tezgah, pres, paketleme makinesi, dolum ve kapama ekipmanları</li><li><strong>Tarım ve gıda makineleri:</strong> Hasat makinesi, soğutma tüneli, konveyör, ayıklama ve gradeleme hattı, dolum makinesi</li><li><strong>Endüstriyel elektrik ve elektronik ekipman:</strong> Motor, redüktör, frekans inverteri, panel ve kontrol panoları, sensör ve otomasyon bileşenleri</li><li><strong>Taşıma ve depolama ekipmanları:</strong> Forklift, istif makinesi, bant konveyör, raf sistemi, palet sarma makinesi</li><li><strong>Yedek parça ve sarf ekipmanları:</strong> Filtre, rulman, kayış-kasnak, conta, hidrolik ve pnömatik bileşenler</li><li><strong>İnşaat ve altyapı makineleri:</strong> Kompresör, jeneratör, vinç, pompa, kazan sistemleri</li></ul><h2>Bu Hizmet Kimler İçin Uygundur?</h2><ul><li>Yeni tesis kuran veya mevcut hattını genişleten üreticiler</li><li>Belirli bir ürün veya üretim sürecine özgü ekipman arayan proje bazlı alıcılar</li><li>Yurt dışı kaynaklı alternatif tedarikçi araştıran satın alma departmanları</li><li>Yedek parça temini veya bakım ekipmanı ihtiyacı olan işletmeler</li></ul><h2>Tomas Bu Süreçte Nasıl Destek Olur?</h2><ul><li>Teknik şartname ve ihtiyaç belirleme sürecinde danışmanlık desteği</li><li>Üretici, yetkili distribütör ve ihracatçı araştırması</li><li>Teknik teklif toplama, karşılaştırma ve müzakere koordinasyonu</li><li>CE, ISO ve ilgili standart sertifikalarının doğrulanması</li><li>İthalat mevzuatı, HS kodu ve gümrük prosedürleri konusunda yönlendirme</li><li>Nakliye: proje kargo, ağır taşıma veya parsiyel yük koordinasyonu</li><li>Teslimat sonrası kurulum koordinasyonu (gerektiğinde servis mühendisi temini)</li></ul><h2>Çalışma Süreci</h2><ol><li><strong>İhtiyaç Analizi:</strong> Ekipman tipi, teknik özellikler (kapasite, voltaj, sertifika, boyut), kurulum gereksinimleri ve bütçe çerçevesi belirlenir.</li><li><strong>Tedarik Araştırması:</strong> Teknik şartnameye uygun üretici ve tedarikçilerden teklifler alınır; fiyat, garanti koşulları, teslimat süresi ve referanslar karşılaştırılır.</li><li><strong>Operasyon Planlaması:</strong> Sipariş koşulları, ödeme planı, nakliye yöntemi ve gümrük prosedürleri planlanır.</li><li><strong>Teslimat ve Takip:</strong> Ekipman sevk edildiği andan teslim alınana kadar tüm süreç izlenir; gerektiğinde kurulum ve devreye alma desteği koordine edilir.</li></ol>",
                    Icon = "⚙️", Sort = 5
                },
                new {
                    Title = "Mühendislik ve Araştırma Hizmetleri",
                    Slug = "muhendislik-ve-arastirma-hizmetleri",
                    Desc = "Teknik araştırma, ürün değerlendirme ve fizibilite süreçlerinde B2B odaklı analiz ve danışmanlık desteği.",
                    Content = "<p>Mühendislik ve araştırma hizmetleri; yeni bir ürün tedariki, pazar girişi, teknik fizibilite veya süreç iyileştirme konularında işletmelerin ihtiyaç duyduğu sistematik analiz ve planlama desteğini kapsar. Kararların verilere dayalı olması, yanlış yatırımları ve operasyonel hataları önlemenin en etkili yoludur. Tomas Dış Ticaret, bu alanda B2B odaklı teknik araştırma, değerlendirme ve koordinasyon hizmetleri sunmaktadır.</p><h2>Hizmet Kapsamı</h2><ul><li><strong>Teknik ürün araştırması:</strong> Yeni ürün kategorisi veya hammadde için pazar, üretici ve teknik alternatiflerin sistematik araştırması</li><li><strong>Tedarikçi değerlendirmesi:</strong> Potansiyel tedarikçilerin teknik yeterlilik, sertifika altyapısı ve referans geçmişi açısından karşılaştırmalı analizi</li><li><strong>Fizibilite ön çalışması:</strong> Yeni bir ürün grubu, pazar veya sürecin teknik ve ticari açıdan gerçekleştirilebilirliğinin değerlendirilmesi</li><li><strong>Süreç analizi ve iyileştirme önerileri:</strong> Mevcut tedarik veya üretim süreçlerinin haritalanması, darboğazların tespiti ve iyileştirme senaryolarının geliştirilmesi</li><li><strong>Pazar ve rakip analizi:</strong> Belirli bir ürün veya sektörde pazar dinamikleri, fiyat trendleri ve rekabetçi pozisyonun araştırılması</li><li><strong>Teknik danışmanlık koordinasyonu:</strong> Özel mühendislik uzmanlığı gerektiren durumlarda uzman paydaşların sürece dahil edilmesi</li></ul><h2>Bu Hizmet Kimler İçin Uygundur?</h2><ul><li>Yeni bir ürün veya malzeme grubuna girerken teknik değerlendirme desteği arayan firmalar</li><li>Mevcut tedarikçilerini değiştirmeyi veya alternatiflere geçmeyi düşünen satın alma ekipleri</li><li>Üretim sürecini optimize etmek veya atık oranlarını düşürmek isteyen mühendislik ekipleri</li><li>Yatırım kararı vermeden önce teknik ve ticari fizibilite verileri isteyen yönetim kademeleri</li></ul><h2>Tomas Bu Süreçte Nasıl Destek Olur?</h2><ul><li>İhtiyacın kapsamının tanımlanması ve araştırma parametrelerinin belirlenmesi</li><li>Birincil ve ikincil kaynaklardan sistematik veri toplama</li><li>Teknik doküman analizi (TDS, test raporları, sertifikalar)</li><li>Tedarikçi/ürün karşılaştırmalı matris hazırlama</li><li>Bulguların raporlanması ve alternatif senaryoların sunulması</li><li>Seçilen çözümün hayata geçirilmesinde koordinasyon ve takip desteği</li></ul><h2>Çalışma Süreci</h2><ol><li><strong>İhtiyaç Analizi:</strong> Araştırma veya mühendislik ihtiyacının kapsamı, çıktı beklentileri ve zaman kısıtları tanımlanır.</li><li><strong>Araştırma ve Veri Toplama:</strong> İlgili teknik kaynaklar, tedarikçiler, pazar verileri ve uzman görüşleri derlenir.</li><li><strong>Değerlendirme ve Raporlama:</strong> Toplanan veriler analiz edilir; karşılaştırmalı değerlendirme ve öneri raporu hazırlanır.</li><li><strong>Uygulama ve Takip:</strong> Seçilen çözüm veya tedarikçi ile ilerleme sürecinde koordinasyon ve takip desteği sağlanır.</li></ol>",
                    Icon = "🔬", Sort = 6
                },
                new {
                    Title = "Yazılım ve Dijital Çözümler",
                    Slug = "yazilim-ve-dijital-cozumler",
                    Desc = "Web çözümleri, e-ticaret altyapısı ve kurumsal yazılım ihtiyaçlarında dijital dönüşüm ortaklığı.",
                    Content = "<p>Dijital dönüşüm ve yazılım çözümleri, işletmelerin operasyonel verimliliklerini artırmaları, yeni satış kanalları oluşturmaları ve süreçlerini izlenebilir kılmaları için kritik bir ihtiyaç haline gelmiştir. Doğru yazılım altyapısı olmadan büyüme hedefleri ve operasyonel disiplin bir arada sürdürülemez. Tomas Dış Ticaret, bu alanda işletmelerin dijital ihtiyaçlarına yönelik B2B odaklı çözüm ortaklığı sunmaktadır.</p><h2>Hizmet Kapsamı</h2><ul><li><strong>Kurumsal web sitesi:</strong> Çok dilli, SEO uyumlu kurumsal web sitesi tasarımı ve geliştirme koordinasyonu</li><li><strong>E-ticaret altyapısı:</strong> B2B ve B2C e-ticaret sitesi kurulumu; platform seçimi (Shopify, WooCommerce, Magento, özel geliştirme), ödeme entegrasyonu ve lojistik bağlantısı</li><li><strong>ERP ve iş süreçleri yönetimi:</strong> Stok yönetimi, sipariş takibi ve satın alma süreçlerini dijitalleştiren sistem seçimi ve uygulama koordinasyonu</li><li><strong>CRM sistemleri:</strong> Müşteri ilişkileri yönetimi, satış hunisi takibi ve raporlama çözümleri</li><li><strong>Süreç otomasyonu:</strong> Tekrarlayan operasyonel süreçlerin dijitalleştirilmesi ve iş akışı otomasyonu</li><li><strong>Entegrasyon projeleri:</strong> Mevcut sistemlerin (muhasebe, depo, e-ticaret, pazar yeri) birbiriyle entegrasyonu</li><li><strong>Dijital pazarlama altyapısı:</strong> SEO, içerik yönetimi, e-posta pazarlama ve analitik araçların kurulumu</li></ul><h2>Bu Hizmet Kimler İçin Uygundur?</h2><ul><li>Dijital varlığını sıfırdan oluşturmak isteyen geleneksel ticaret firmaları</li><li>E-ticaret kanalı açmak veya pazar yeri satışlarını başlatmak isteyen üreticiler ve distribütörler</li><li>Operasyonel süreçlerini dijitalleştirerek verimliliğini artırmak isteyen KOBİ'ler</li><li>Teknik kapasite eksikliği nedeniyle yazılım proje yönetimini dışarıdan almak isteyen firmalar</li></ul><h2>Tomas Bu Süreçte Nasıl Destek Olur?</h2><ul><li>Dijital ihtiyaç analizi: mevcut altyapı değerlendirmesi ve hedef durum belirleme</li><li>Çözüm alternatifleri araştırması ve platform/teknoloji önerisi</li><li>Yazılım geliştirme veya entegrasyon proje koordinasyonu</li><li>Tedarikçi (geliştirici, ajans) seçimi ve sözleşme yönetimi</li><li>Proje yönetimi: kapsam, takvim ve bütçe takibi</li><li>Test, teslimat ve devreye alma sürecinde denetim ve koordinasyon</li><li>Kullanıcı kabul testi ve eğitim sürecinde destek</li></ul><h2>Çalışma Süreci</h2><ol><li><strong>İhtiyaç Analizi:</strong> Dijital hedefler, mevcut altyapı, teknik kısıtlar, kullanıcı beklentileri ve bütçe çerçevesi belirlenir.</li><li><strong>Çözüm Araştırması:</strong> Uygun teknoloji yığını, platform ve hizmet alternatifleri değerlendirilir; öneri sunulur.</li><li><strong>Proje Planlaması:</strong> Kapsam, aşamalar, takvim, kaynaklar ve başarı kriterleri netleştirilir.</li><li><strong>Uygulama ve Teslimat:</strong> Geliştirme süreci koordine edilir; test, revizyon ve devreye alma aşamalarında denetim sağlanır.</li></ol>",
                    Icon = "💻", Sort = 7
                },
                new {
                    Title = "Reklam ve Kurumsal Kimlik Tasarımı",
                    Slug = "reklam-ve-kurumsal-kimlik-tasarimi",
                    Desc = "Marka kimliği, kurumsal iletişim materyalleri ve pazara giriş iletişim altyapısı için tasarım çözümleri.",
                    Content = "<p>Güçlü bir kurumsal kimlik ve etkili iletişim materyalleri, işletmelerin pazar konumlandırmasını, iş geliştirme kapasitesini ve alıcı güvenini doğrudan etkiler. Özellikle uluslararası pazarlarda sahaya çıkan firmalarda profesyonel görünüm ve tutarlı marka dili, ilk izlenimi ve ortaklık kararını şekillendirir. Tomas Dış Ticaret, bu alanda marka kimliği oluşturma ve kurumsal iletişim çözümleri için koordinasyon ve süreç yönetimi sunmaktadır.</p><h2>Hizmet Kapsamı</h2><ul><li><strong>Marka kimliği:</strong> Logo tasarımı ve revizyonu, kurumsal renk paleti, tipografi seçimi, marka kılavuzu (brand guidelines) hazırlama</li><li><strong>Basılı materyaller:</strong> Kartvizit, antetli kağıt, zarf, klasör; ürün katalog ve broşür; fiyat listesi ve teklif şablonu; etiket ve ambalaj tasarımı</li><li><strong>Dijital varlıklar:</strong> E-posta imzası, sosyal medya şablonları, dijital katalog (interaktif PDF/web), banner ve afiş tasarımı</li><li><strong>Sunum materyalleri:</strong> Uluslararası fuarlar ve B2B görüşmeler için şirket tanıtım sunumu, ürün tanıtım dosyası ve pitch deck</li><li><strong>Görsel içerik:</strong> Ürün fotoğrafçılığı koordinasyonu, ürün görseli düzenleme, tanıtım videosu yönetimi</li><li><strong>Pazara giriş iletişimi:</strong> Yeni pazar veya ürün lansmanı için iletişim stratejisi ve materyal planlaması</li></ul><h2>Bu Hizmet Kimler İçin Uygundur?</h2><ul><li>Kuruluş veya yeniden yapılanma sürecinde kurumsal kimlik oluşturmak isteyen firmalar</li><li>Yurt dışı pazar veya fuar öncesinde profesyonel sunum materyali hazırlamak isteyen ihracatçılar</li><li>Mevcut materyalleri güncellemek veya tüm kanallar için tutarlı bir görsel dil oluşturmak isteyen işletmeler</li><li>Kendi bünyesinde tasarım kapasitesi bulunmayan KOBİ'ler</li></ul><h2>Tomas Bu Süreçte Nasıl Destek Olur?</h2><ul><li>Marka konumu, hedef kitle ve iletişim hedeflerini belirleme görüşmesi</li><li>Materyal kapsamının ve öncelik sıralamasının tanımlanması</li><li>Sektörel referans araştırması ve konsept önerileri</li><li>Tasarımcı veya ajans seçimi ve briefleme koordinasyonu</li><li>Tasarım revizyonları ve onay sürecinin yönetimi</li><li>Baskı koordinasyonu ve kalite denetimi</li><li>Dijital varlıkların dosya formatlarıyla teslimi ve kullanım kılavuzu</li></ul><h2>Çalışma Süreci</h2><ol><li><strong>İhtiyaç Analizi:</strong> Marka konumu, hedef kitle, iletişim hedefleri ve materyal kapsamı belirlenir; mevcut kimlik varsa incelenir.</li><li><strong>Konsept ve Araştırma:</strong> Sektörel örnekler araştırılır, alternatif konsept yönleri değerlendirilir ve tercih netleştirilir.</li><li><strong>Tasarım ve Revizyon:</strong> Seçilen yönde materyaller hazırlanır; revizyon turları koordine edilir ve nihai onay alınır.</li><li><strong>Üretim ve Teslimat:</strong> Basılı materyaller için baskı koordinasyonu sağlanır; dijital materyaller uygun formatlarda teslim edilir.</li></ol>",
                    Icon = "🎨", Sort = 8
                },
                new {
                    Title = "E-Ticaret",
                    Slug = "e-ticaret",
                    Desc = "E-ticaret altyapısı kurulumu, pazar yeri entegrasyonu ve dijital satış kanalı geliştirme desteği.",
                    Content = "<p>E-ticaret, işletmelerin ürünlerini dijital kanallar üzerinden müşterilere veya diğer işletmelere ulaştırmasının en ölçeklenebilir yollarından biridir. Ancak doğru platform seçimi, pazar yeri entegrasyonu, ödeme altyapısı ve lojistik bağlantısı olmadan e-ticaret yatırımları beklenen sonucu vermez. Tomas Dış Ticaret, e-ticaret altyapısı kurulumundan operasyonel süreçlerin planlanmasına kadar kapsamlı B2B destek sunmaktadır.</p><h2>Hizmet Kapsamı</h2><ul><li><strong>Platform seçimi ve kurulum:</strong> Shopify, WooCommerce, Magento, Ticimax, IdeaSoft gibi platformlar arasında ihtiyaca uygun seçim; tema, ürün yönetimi ve ödeme entegrasyonu kurulumu</li><li><strong>Pazar yeri entegrasyonu:</strong> Trendyol, Hepsiburada, Amazon, Etsy, eBay gibi pazar yerlerinde mağaza açılışı, ürün listeleme ve yönetim koordinasyonu</li><li><strong>B2B e-ticaret:</strong> Fiyat gizleme, toplu sipariş, müşteri segmentasyonu ve onay akışı gibi B2B özellikli e-ticaret altyapısı kurulum desteği</li><li><strong>Uluslararası e-ticaret:</strong> Cross-border satış, çok para birimi, çok dil desteği ve uluslararası ödeme/lojistik entegrasyonu</li><li><strong>Ürün içeriği ve listeleme:</strong> Dönüşüm odaklı ürün başlığı, açıklama ve görsel standartları; SEO uyumlu içerik yapısı</li><li><strong>Sipariş ve fulfillment yönetimi:</strong> Sipariş akışı, stok senkronizasyonu, kargo entegrasyonu ve iade süreçleri planlaması</li><li><strong>Analitik ve optimizasyon:</strong> Dönüşüm izleme, sepet terk analizi ve performans raporlaması</li></ul><h2>Bu Hizmet Kimler İçin Uygundur?</h2><ul><li>İlk kez e-ticaret kanalı açmak isteyen üreticiler ve distribütörler</li><li>Tek bir pazar yerinden bağımsız çok kanallı yapıya geçmek isteyen firmalar</li><li>Yurt dışı e-ticaret kanalları kurmak veya mevcut kanalları geliştirmek isteyen ihracatçılar</li><li>E-ticaret altyapısını kurmuş ancak operasyonel süreçleri optimize etmek isteyen işletmeler</li></ul><h2>Tomas Bu Süreçte Nasıl Destek Olur?</h2><ul><li>Satış hedefleri, ürün grubu ve hedef kitleye göre kanal ve platform analizi</li><li>Platform karşılaştırması ve seçim desteği (maliyet, özellik, entegrasyon kapasitesi)</li><li>Pazar yeri mağaza açılış ve onay süreçlerinin koordinasyonu</li><li>Ödeme altyapısı (sanal POS, dijital cüzdan, uluslararası ödeme) entegrasyon desteği</li><li>Kargo ve fulfillment entegrasyonu planlaması</li><li>Ürün içeriği standartlaştırma ve toplu listeleme koordinasyonu</li><li>Canlıya alma sonrası performans izleme ve optimizasyon önerileri</li></ul><h2>Çalışma Süreci</h2><ol><li><strong>İhtiyaç Analizi:</strong> Satış hedefleri, ürün portföyü, hedef müşteri kitlesi, bütçe ve teknik kısıtlar belirlenir; mevcut e-ticaret yapısı varsa incelenir.</li><li><strong>Platform ve Kanal Araştırması:</strong> Uygun platform ve pazar yeri alternatifleri değerlendirilir; maliyet-fayda analizi yapılır ve öneri sunulur.</li><li><strong>Operasyon Planlaması:</strong> Altyapı kurulum planı, ödeme ve lojistik entegrasyon takvimi, içerik hazırlık süreci ve canlıya alma planı oluşturulur.</li><li><strong>Kurulum, Canlıya Alma ve Takip:</strong> Platform kurulur, ürünler yüklenir, entegrasyonlar test edilir; canlıya alındıktan sonra ilk operasyonlar izlenerek optimizasyon önerileri sunulur.</li></ol>",
                    Icon = "🛒", Sort = 9
                },
            };

            foreach (var s in services)
            {
                db.Services.Add(new Service
                {
                    Title = s.Title,
                    Slug = s.Slug,
                    ShortDescription = s.Desc,
                    Content = s.Content,
                    Icon = s.Icon,
                    SortOrder = s.Sort,
                    LanguageCode = "tr",
                    IsActive = true,
                    MetaTitle = s.Title + " | Tomas Dış Ticaret",
                    MetaDescription = s.Desc
                });
            }
        }

        if (!await db.BlogPosts.AnyAsync())
        {
            db.BlogPosts.AddRange(
                new BlogPost
                {
                    Title = "Dış Ticarette Güvenilir Tedarik Süreci Nasıl Kurulur?",
                    Slug = "dis-ticarette-guvenilir-tedarik-sureci-nasil-kurulur",
                    Summary = "Global ticaret ortamında güvenilir bir tedarik süreci kurmak, operasyonel sürekliliğin ve ticari başarının temelini oluşturur.",
                    Content = "<p>Dış ticarette tedarik süreci; yalnızca ürün bulmak ya da fiyat müzakere etmekten ibaret değildir. Güvenilir bir tedarik yapısı, tedarikçi seçiminden ödeme yöntemine, lojistik planlamasından risk yönetimine kadar çok katmanlı bir çerçevede değerlendirilmelidir.</p><h2>1. Tedarikçi Araştırması ve Değerlendirme</h2><p>Güvenilir bir tedarik sürecinin ilk adımı, potansiyel tedarikçilerin sistematik biçimde araştırılması ve değerlendirilmesidir. Dikkat edilmesi gereken başlıca kriterler şunlardır:</p><ul><li>Tedarikçinin üretim kapasitesi ve referansları</li><li>Ürün kalite standartları ve mevcut sertifikalar</li><li>Önceki ihracat geçmişi ve müşteri yorumları</li><li>Finansal istikrar ve ticaret geçmişi</li></ul><h2>2. Numune Süreci ve Kalite Onayı</h2><p>Herhangi bir taahhütte bulunmadan önce numune talep etmek ve ürünleri test ettirmek, ilerleyen süreçte yaşanabilecek kalite sorunlarını minimize eder.</p><h2>3. Sözleşme ve Ödeme Koşulları</h2><p>Tedarik ilişkisinin hukuki çerçevesini belirleyen sözleşme, tarafların hak ve yükümlülüklerini açıkça tanımlamalıdır. Ödeme yöntemleri taraflar arasındaki güven düzeyine göre şekillendirilmelidir.</p><h2>4. Lojistik ve Belgelendirme Planlaması</h2><p>Ürünlerin hedef noktaya sorunsuz ulaşması için nakliye yöntemi, gümrük prosedürleri ve gerekli belgeler önceden planlanmalıdır.</p><h2>5. Sürekli İzleme ve İlişki Yönetimi</h2><p>Güvenilir bir tedarik süreci, tek seferlik bir işlemden ibaret değildir. Tedarikçilerle uzun vadeli ilişkiler geliştirmek, kalite tutarlılığını artırır.</p>",
                    Author = "Tomas Dış Ticaret",
                    LanguageCode = "tr",
                    PublishedAt = new DateTime(2024, 11, 15, 8, 0, 0, DateTimeKind.Utc),
                    IsActive = true,
                    MetaTitle = "Dış Ticarette Güvenilir Tedarik Süreci | Tomas Dış Ticaret",
                    MetaDescription = "Dış ticarette güvenilir bir tedarik yapısı nasıl kurulur? Tedarikçi değerlendirme, numune süreci ve lojistik planlama rehberi."
                },
                new BlogPost
                {
                    Title = "İthalat ve İhracat Süreçlerinde Operasyonel Planlamanın Önemi",
                    Slug = "ithalat-ve-ihracat-sureclerinde-operasyonel-planlamanin-onemi",
                    Summary = "Uluslararası ticaretin en kritik boyutlarından biri olan operasyonel planlama, süreçlerin zamanında ve sorunsuz tamamlanması için vazgeçilmezdir.",
                    Content = "<p>Uluslararası ticaret işlemleri, tek bir eylemin değil birbiriyle bağlantılı birçok sürecin koordineli biçimde yürütülmesini gerektirir. Bu koordinasyonun merkezinde operasyonel planlama yer almaktadır.</p><h2>Operasyonel Planlamanın Temel Bileşenleri</h2><h3>1. Zaman Yönetimi</h3><p>İhracat veya ithalat sürecinde her aşamanın tamamlanma süresinin önceden belirlenmesi, gecikmelerden kaynaklanacak mali ve operasyonel kayıpları önler.</p><h3>2. Evrak ve Belgelendirme</h3><p>Uluslararası ticarette eksik ya da hatalı belge, gümrük gecikmeleri veya ürünlerin serbest bırakılmamasına yol açabilir. Fatura, konşimento, menşe şahadetnamesi gibi belgeler süreç başında liste halinde hazırlanmalıdır.</p><h3>3. Lojistik Koordinasyonu</h3><p>Nakliye türü, konteynır planlaması, yükleme zamanlaması ve sigorta kapsamı; süreç başında değerlendirilerek planlanmalıdır.</p><h3>4. Risk Değerlendirmesi</h3><p>Kur riski, tedarikçi güvenilirliği, ülke bazlı düzenlemeler önceden analiz edilerek gerekli önlemler alınmalıdır.</p><h2>İyi Planlama Neden Rekabet Avantajı Yaratır?</h2><p>Operasyonel planlamasını güçlü tutan işletmeler; daha az hata maliyeti, daha öngörülebilir teslimat süreleri ve daha yüksek müşteri güveni elde eder.</p>",
                    Author = "Tomas Dış Ticaret",
                    LanguageCode = "tr",
                    PublishedAt = new DateTime(2024, 12, 5, 8, 0, 0, DateTimeKind.Utc),
                    IsActive = true,
                    MetaTitle = "İthalat ve İhracat Süreçlerinde Operasyonel Planlama | Tomas Dış Ticaret",
                    MetaDescription = "İthalat ve ihracat süreçlerinde operasyonel planlama neden önemlidir? Zaman yönetimi, belgelendirme ve lojistik koordinasyonunda başarı için kritik adımlar."
                },
                new BlogPost
                {
                    Title = "B2B Tedarikte Kalite, Fiyat ve Teslimat Dengesi",
                    Slug = "b2b-tedarikte-kalite-fiyat-ve-teslimat-dengesi",
                    Summary = "B2B tedarik ilişkilerinde yalnızca en düşük fiyatı aramak yerine kalite, teslimat güvencesi ve tedarikçi istikrarını birlikte değerlendirmek sürdürülebilir başarı için zorunludur.",
                    Content = "<p>Birçok işletme, tedarik kararlarını verirken öncelikle fiyatı esas alır. Ancak B2B ticarette sadece fiyat odaklı bir yaklaşım, uzun vadede operasyonel sorunlara ve maliyet artışlarına yol açabilir.</p><h2>Kalite: Sürecin Temel Girdisi</h2><p>Tedarik edilen ürünün kalitesi; üretim verimliliğini, müşteri memnuniyetini ve marka güvenilirliğini doğrudan etkiler.</p><h2>Fiyat: Gerçekçi Karşılaştırmanın Önemi</h2><p>Tedarik maliyeti hesaplanırken yalnızca birim fiyat değil, nakliye, gümrük, sigorta ve olası ret/iade maliyetleri de dahil edilerek toplam tedarik maliyeti dikkate alınmalıdır.</p><h2>Teslimat: Operasyonel Süreklilik İçin Kritik</h2><p>Zamanında teslimat, üretim planlaması ve müşteri taahhütleri açısından vazgeçilmezdir.</p><h2>Dengeyi Kurmak: Tedarikçi Değerlendirme Kriterleri</h2><ul><li>Ürün kalite standartları ve belgelendirme durumu</li><li>Referanslar ve önceki müşteri deneyimleri</li><li>Teslimat geçmişi ve stok kapasitesi</li><li>Toplam maliyet analizi</li><li>İletişim hızı ve problem çözme kapasitesi</li></ul>",
                    Author = "Tomas Dış Ticaret",
                    LanguageCode = "tr",
                    PublishedAt = new DateTime(2025, 1, 10, 8, 0, 0, DateTimeKind.Utc),
                    IsActive = true,
                    MetaTitle = "B2B Tedarikte Kalite, Fiyat ve Teslimat Dengesi | Tomas Dış Ticaret",
                    MetaDescription = "B2B tedarik kararlarında kalite, fiyat ve teslimat dengesini nasıl kurarsınız? Tedarikçi değerlendirme kriterleri ve toplam maliyet analizi rehberi."
                },
                new BlogPost
                {
                    Title = "Endüstriyel Ürün Tedarikinde Doğru İş Ortağı Seçimi",
                    Slug = "endustriyel-urun-tedarikinde-dogru-is-ortagi-secimi",
                    Summary = "Endüstriyel ürün tedarikinde doğru iş ortağını seçmek; teknik bilgi, sektör deneyimi ve operasyonel güvenilirlik kriterlerinin birlikte değerlendirilmesini gerektirmektedir.",
                    Content = "<p>Endüstriyel ürün tedariki; standart tüketici ürünlerinden farklı olarak teknik bilgi, özel lojistik gereksinimleri ve uzun vadeli tedarikçi ilişkileri gerektirmektedir.</p><h2>Teknik Yetkinlik Neden Önemlidir?</h2><p>Endüstriyel ürünlerde teknik parametreler son derece belirleyicidir. Bu teknik detayları anlayan ve aktarabilen bir iş ortağı, hatalı ürün temininden kaynaklanan maliyetleri önemli ölçüde azaltır.</p><h2>Sektörel Deneyim ve Referans Önemi</h2><p>Belirli bir endüstri segmentinde deneyim sahibi iş ortakları; doğru tedarikçi havuzuna erişim ve pazar fiyatlarına hakimiyet açısından belirgin avantaj sağlar.</p><h2>Operasyonel Güvenilirlik Kriterleri</h2><ul><li>Tedarik süreci şeffaf ve izlenebilir mi?</li><li>Beklenmedik gelişmelerde nasıl bir yanıt kapasitesi var?</li><li>İletişim ve raporlama standartları ne ölçüde sistematik?</li><li>Sözleşme ve garanti konularında açık ve net mi?</li></ul><h2>Uzun Vadeli İlişki Perspektifi</h2><p>Endüstriyel tedarik ilişkileri, tek seferlik işlemler değil uzun soluklu iş birlikleridir. İş ortağı seçiminde kısa vadeli maliyet avantajının ötesinde uzun vadeli ortaklık potansiyeli değerlendirilmelidir.</p>",
                    Author = "Tomas Dış Ticaret",
                    LanguageCode = "tr",
                    PublishedAt = new DateTime(2025, 2, 20, 8, 0, 0, DateTimeKind.Utc),
                    IsActive = true,
                    MetaTitle = "Endüstriyel Ürün Tedarikinde Doğru İş Ortağı Seçimi | Tomas Dış Ticaret",
                    MetaDescription = "Endüstriyel ürün tedarikinde iş ortağı seçim kriterleri: teknik yetkinlik, sektörel deneyim ve operasyonel güvenilirlik nasıl değerlendirilir?"
                }
            );
        }

        if (!await db.HeroSlides.AnyAsync())
        {
            db.HeroSlides.Add(new HeroSlide
            {
                Title = "Global Ticarete Açılan Güvenilir Çözüm Ortağınız",
                Subtitle = "Tomas Dış Ticaret",
                Description = "İthalat, ihracat, global tedarik, endüstriyel ürünler ve dijital çözümler alanında B2B süreç desteği.",
                PrimaryButtonText = "Teklif Al",
                PrimaryButtonUrl = "/iletisim",
                SecondaryButtonText = "Hizmetlerimizi İncele",
                SecondaryButtonUrl = "/hizmetler",
                LanguageCode = "tr",
                IsActive = true,
                SortOrder = 1
            });
        }

        if (!await db.Faqs.AnyAsync())
        {
            db.Faqs.AddRange(
                new Faq { Question = "Tomas Dış Ticaret hangi alanlarda hizmet verir?", Answer = "Uluslararası ticaret (ihracat & ithalat), ambalaj ve endüstriyel malzeme tedariki, polimer ve plastik hammadde ticareti, tarım ve gıda ürünleri, makine ve endüstriyel ürünler, mühendislik ve araştırma hizmetleri, yazılım ve dijital çözümler, reklam ve kurumsal kimlik tasarımı ile e-ticaret alanlarında B2B çözümler sunmaktayız.", LanguageCode = "tr", SortOrder = 1 },
                new Faq { Question = "İthalat ve ihracat süreçlerinde nasıl destek sağlıyorsunuz?", Answer = "Tedarikçi veya alıcı araştırmasından evrak yönetimine, lojistik koordinasyonundan gümrük süreçlerine kadar operasyonun tüm aşamalarında süreç ortaklığı sağlıyoruz.", LanguageCode = "tr", SortOrder = 2 },
                new Faq { Question = "Tedarikçi araştırması yapıyor musunuz?", Answer = "Evet. Ürün kategorisi ve gereksinimlere göre uygun tedarikçi veya üreticileri araştırıyor, değerlendiriyor ve kıyaslamalı teklif alma sürecini koordine ediyoruz. Numune temini ve kalite ön değerlendirme sürecinde de destek sunuyoruz.", LanguageCode = "tr", SortOrder = 3 },
                new Faq { Question = "Hangi sektörlerde çözüm sunuyorsunuz?", Answer = "Ambalaj ve endüstriyel malzeme, polimer ve plastik, tarım ve gıda, makine ve ekipman, yazılım ve dijital çözümler başta olmak üzere birden fazla sektörde faaliyet gösteriyoruz.", LanguageCode = "tr", SortOrder = 4 },
                new Faq { Question = "Ambalaj ve endüstriyel malzeme tedariki yapıyor musunuz?", Answer = "Evet. Çeşitli ambalaj türleri ve endüstriyel sarf malzemeleri tedarikinde ürün araştırması, fiyat analizi, numune temini ve teslimat koordinasyonu hizmetleri sunuyoruz.", LanguageCode = "tr", SortOrder = 5 },
                new Faq { Question = "Polimer ve plastik hammadde tedarikinde nasıl ilerliyorsunuz?", Answer = "Ürün tipi ve teknik spesifikasyonlar belirlendikten sonra uygun üretici ve tedarikçilerle iletişime geçiyor, teklif karşılaştırması yapıyoruz. Numune onay süreci ve ithalat koordinasyonunu da kapsayan uçtan uca bir tedarik süreci yönetiyoruz.", LanguageCode = "tr", SortOrder = 6 },
                new Faq { Question = "Tarım ve gıda ürünleri tarafında hangi süreçleri yönetiyorsunuz?", Answer = "Tarımsal ürün ve gıda tedarikinde; alıcı/tedarikçi araştırması, ürün kalite kriterleri belirleme, sertifika ve belge yönetimi, lojistik koordinasyon ve teslimat takibini yönetiyoruz.", LanguageCode = "tr", SortOrder = 7 },
                new Faq { Question = "Makine ve endüstriyel ürünlerde teknik değerlendirme yapılıyor mu?", Answer = "Makine ve endüstriyel ürün taleplerinde teknik şartname belirleme sürecinde destek sağlıyor, tedarikçilerden gelen tekliflerin teknik uygunluğunu değerlendiriyoruz.", LanguageCode = "tr", SortOrder = 8 },
                new Faq { Question = "Teklif almak için hangi bilgileri paylaşmalıyım?", Answer = "Teklif sürecini başlatmak için ürün veya hizmet kategorisi, tahmini miktar/hacim, teslimat ülkesi veya hedef pazar ve varsa teknik spesifikasyonları paylaşmanız yeterlidir.", LanguageCode = "tr", SortOrder = 9 },
                new Faq { Question = "İş birliği süreci nasıl başlar?", Answer = "İletişim formumuzu doldurarak, e-posta göndererek veya telefonla arayarak bizimle iletişime geçebilirsiniz. İlk görüşmede ihtiyaçlarınızı dinliyor, uygun çözüm yaklaşımını belirliyoruz. Değerlendirme sonrası teklif ve süreç planı sunuyoruz.", LanguageCode = "tr", SortOrder = 10 }
            );
        }

        if (!await db.Testimonials.AnyAsync())
        {
            db.Testimonials.AddRange(
                new Testimonial { AuthorName = "Ahmet Yılmaz", AuthorTitle = "Satın Alma Direktörü", Company = "Tekno Plastik A.Ş.", Content = "Tomas ile çalışmak gerçek bir profesyonellik deneyimi. Polimer tedarikinde hem fiyat hem kalite açısından mükemmel hizmet alıyoruz.", Rating = 5, LanguageCode = "tr", SortOrder = 1 },
                new Testimonial { AuthorName = "Fatma Kaya", AuthorTitle = "İhracat Müdürü", Company = "Anadolu Gıda", Content = "Narenciye ihracatında Tomas'ın desteği çok değerli. Lojistik ve belgelendirme konularında hiçbir sorun yaşamadık.", Rating = 5, LanguageCode = "tr", SortOrder = 2 },
                new Testimonial { AuthorName = "Marco Rossi", AuthorTitle = "CEO", Company = "Rossi Industries", Content = "Tomas has been an exceptional partner for our packaging material imports. Reliable, efficient and professional.", Rating = 5, LanguageCode = "en", SortOrder = 1 }
            );
        }

        if (!await db.Pages.AnyAsync())
        {
            db.Pages.AddRange(
                new Page
                {
                    Title = "Hakkımızda",
                    Slug = "hakkimizda",
                    LanguageCode = "tr",
                    IsActive = true,
                    Content = "<p>Tomas Dış Ticaret; farklı sektörlerdeki ürün ve çözüm ihtiyaçlarını dış ticaret, tedarik ve operasyon süreçleriyle bir araya getiren bir B2B çözüm ortağıdır. İşletmelerin ithalat, ihracat, ürün araştırması, tedarikçi değerlendirme ve teslimat süreçlerinde daha planlı, izlenebilir ve güvenilir bir yapı kurmasına destek olur.</p><p>İstanbul merkezli olarak faaliyet gösteren Tomas Dış Ticaret; ambalaj, polimer, tarım ve gıda, makine, mühendislik, yazılım ve e-ticaret gibi geniş bir yelpazede hizmet sunmaktadır.</p><h2>Misyonumuz</h2><p>İşletmelerin uluslararası ticaret ve tedarik süreçlerinde güvenilir, planlı ve izlenebilir bir yapı kurmasına köprü olmak.</p><h2>Vizyonumuz</h2><p>Çok sektörlü dış ticaret ve tedarik çözümlerinde önde gelen, müşterileri tarafından güvenilir iş ortağı olarak tercih edilen bir B2B hizmet şirketi olmak.</p>",
                    MetaTitle = "Hakkımızda | Tomas Dış Ticaret",
                    MetaDescription = "Tomas Dış Ticaret; B2B dış ticaret ve tedarik çözümlerinde güvenilir iş ortağınız. Misyon, vizyon ve değerlerimiz."
                },
                new Page
                {
                    Title = "KVKK Aydınlatma Metni",
                    Slug = "kvkk",
                    LanguageCode = "tr",
                    IsActive = true,
                    Content = "<p>6698 sayılı KVKK kapsamında genel bilgilendirme amaçlı hazırlanmıştır.</p>",
                    MetaTitle = "KVKK | Tomas Dış Ticaret"
                },
                new Page
                {
                    Title = "Gizlilik Politikası",
                    Slug = "gizlilik-politikasi",
                    LanguageCode = "tr",
                    IsActive = true,
                    Content = "<p>Kişisel verilerinizin korunmasına verdiğimiz önemi bu politikada açıklıyoruz.</p>",
                    MetaTitle = "Gizlilik Politikası | Tomas Dış Ticaret"
                }
            );
        }

        await db.SaveChangesAsync();
    }
}
