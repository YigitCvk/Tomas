import type { ServiceDto, BlogPostDto, FaqDto } from "./api";

// ─── Services ─────────────────────────────────────────────────────────────────

const serviceContent = {
  ticaret: `
<p>Uluslararası ticaret; ihracat ve ithalat süreçlerinin planlanmasından operasyon yönetimine, belgelendirmeden müşteri ve tedarikçi ilişkilerine kadar çok boyutlu ve birbiriyle bağlantılı süreçleri kapsar. Yanlış bir adım — eksik evrak, hatalı gümrük beyanı veya güvenilmez tedarikçi — tüm işlemi riske atabilir. Tomas Dış Ticaret, bu süreçlerin tamamında işletmeler adına koordinasyon ve çözüm ortaklığı sağlar.</p>

<h2>Hizmet Kapsamı</h2>
<p>Tomas'ın uluslararası ticaret hizmetleri; hedef pazar araştırmasından nihai teslimat teyidine kadar tüm süreci kapsar:</p>
<ul>
<li><strong>İhracat yönetimi:</strong> Alıcı araştırması, fiyat teklifleri, ihracat evrakı (fatura, konşimento, menşe şahadetnamesi, çeki listesi), gümrük beyannamesi koordinasyonu, nakliye planlaması ve tahsilat takibi</li>
<li><strong>İthalat yönetimi:</strong> Tedarikçi araştırması ve değerlendirmesi, numune süreci, sipariş yönetimi, ithalat evrakı kontrolü, gümrük prosedürleri koordinasyonu ve depolama/dağıtım planlaması</li>
<li><strong>Ödeme güvencesi:</strong> Akreditif (L/C), vesaik mukabili (CAD), peşin ödeme ve vadeli ödeme seçeneklerinde danışmanlık ve koordinasyon</li>
<li><strong>Risk yönetimi:</strong> Tedarikçi güvenilirlik değerlendirmesi, kur riski farkındalığı, ülke bazlı düzenleme takibi</li>
</ul>

<h2>Bu Hizmet Kimler İçin Uygundur?</h2>
<p>Yurt dışına ürün satmak veya yurt dışından ürün temin etmek isteyen; ancak süreç karmaşıklığı, mevzuat gereklilikleri ya da operasyonel kapasite nedeniyle destek arayan işletmeler için uygundur. Özellikle şu profildeki firmalar bu hizmetten yararlanmaktadır:</p>
<ul>
<li>İlk kez uluslararası ticarete adım atan ve süreçleri öğrenmek isteyen KOBİ'ler</li>
<li>Mevcut ihracat veya ithalat operasyonlarını iyileştirmek ya da yeni pazarlara açılmak isteyen firmalar</li>
<li>Belirli bir ürün veya pazar için proje bazlı ticaret desteği arayan işletmeler</li>
<li>İç kaynakların yetmediği dönemlerde dış operasyon kapasitesi ihtiyacı duyan şirketler</li>
</ul>

<h2>Tomas Bu Süreçte Nasıl Destek Olur?</h2>
<ul>
<li>Hedef pazar araştırması ve potansiyel alıcı/tedarikçi tespiti</li>
<li>İhracat ve ithalat evrak yönetimi ile belgelendirme desteği</li>
<li>Gümrük süreçleri ve tarife danışmanlığı koordinasyonu</li>
<li>Ödeme yöntemi seçimi ve güvence mekanizmaları konusunda yönlendirme</li>
<li>Nakliye türü seçimi (deniz, hava, kara, kombine) ve lojistik koordinasyonu</li>
<li>Sigorta kapsamı planlaması</li>
<li>Süreç izleme, raporlama ve müşteri bilgilendirmesi</li>
</ul>

<h2>Çalışma Süreci</h2>
<ol>
<li><strong>İhtiyaç Analizi:</strong> Hedef ülke, ürün grubu, ticaret yönü (ihracat/ithalat) ve öncelikler belirlenir. Mevcut altyapı ve kısıtlar değerlendirilir.</li>
<li><strong>Pazar ve Taraf Araştırması:</strong> Potansiyel alıcı veya tedarikçi alternatifleri araştırılır, ön iletişim kurulur ve değerlendirme kriterleri çerçevesinde kıyaslanır.</li>
<li><strong>Operasyon Planlaması:</strong> Evrak listesi, lojistik planı, ödeme süreci ve zaman çizelgesi oluşturulur. Her aşamada sorumluluklar netleştirilir.</li>
<li><strong>Uygulama ve Takip:</strong> İşlem başlatılır; sevkiyat, gümrük ve teslimat aşamalarında süreç yakından izlenir ve tamamlanana kadar düzenli raporlama yapılır.</li>
</ol>`,

  ambalaj: `
<p>Ambalaj ürünleri ve endüstriyel malzeme tedariki, üretim süreçlerinin kesintisiz işlemesi için kritik bir halka oluşturmaktadır. Doğru ambalaj; hem ürünü korumanın hem de marka imajını sahada yansıtmanın temel aracıdır. Endüstriyel sarf malzemeleri ise üretim hattının verimliliğini belirleyen gizli ama vazgeçilmez girdilerdir. Tomas Dış Ticaret, bu alanda farklı sektörlere yönelik geniş ürün portföyü ve tedarik ağı ile kapsamlı B2B çözümler sunar.</p>

<h2>Tedarik Edilen Ürün Grupları</h2>
<p>Tomas, aşağıdaki kategorilerde yurt içi ve uluslararası tedarik koordinasyonu gerçekleştirmektedir:</p>
<ul>
<li><strong>Birincil ambalaj:</strong> Plastik şişe, cam ambalaj, kap ve kavanoz, tüp, blister, karton kutu ve kutular</li>
<li><strong>İkincil ve taşıma ambalajı:</strong> Oluklu mukavva, stretch film, bant, köpük tampon, shrink, taşıma peletleri, kasalar</li>
<li><strong>Esnek ambalaj:</strong> BOPP, PE, PP, metalik folyo bazlı poşet ve filmler; stant-up pouch, ziplock torba</li>
<li><strong>Etiket ve baskı malzemeleri:</strong> Yapışkanlı etiket, termal transfer malzeme, barkod şeridi</li>
<li><strong>Endüstriyel sarf malzemeleri:</strong> İş güvenliği ekipmanı (eldiven, gözlük, maske), temizlik sarf malzemeleri, bağlantı elemanları, palet ve kayış</li>
<li><strong>Özel ambalaj çözümleri:</strong> İhracat ambalajı, GMP uyumlu farmasötik ambalaj, gıda temasına uygun malzeme</li>
</ul>

<h2>Bu Hizmet Kimler İçin Uygundur?</h2>
<p>Üretim, depolama, gıda işleme veya ihracat operasyonları yürüten; ambalaj maliyetlerini optimize etmek ve tedarik sürecini güvence altına almak isteyen işletmeler için idealdir. Özellikle:</p>
<ul>
<li>Toplu ambalaj ve sarf malzemesi alımı yapan üretim tesisleri</li>
<li>Ürün ihracatı için uygun ambalaj çözümü arayan ihracatçılar</li>
<li>Tedarik kaynaklarını çeşitlendirmek veya maliyetlerini düşürmek isteyen satın alma departmanları</li>
<li>Özel baskı, boyut veya malzeme gereksinimleri olan firmalar</li>
</ul>

<h2>Tomas Bu Süreçte Nasıl Destek Olur?</h2>
<ul>
<li>Ürün ihtiyaç analizi ve teknik şartname hazırlığı</li>
<li>Yurt içi ve uluslararası uygun tedarikçilerin araştırılması ve değerlendirilmesi</li>
<li>Fiyat karşılaştırma, müzakere desteği ve toplam maliyet analizi</li>
<li>Numune temini, baskı provasının takibi ve kalite onay süreci yönetimi</li>
<li>Düzenli (periyodik) veya proje bazlı sipariş koordinasyonu</li>
<li>Lojistik koordinasyonu, ithalat/ihracat evrak takibi ve teslimat izleme</li>
</ul>

<h2>Çalışma Süreci</h2>
<ol>
<li><strong>İhtiyaç Analizi:</strong> Ürün özellikleri (malzeme, boyut, baskı gereksinimleri), miktarlar, teslimat süresi ve bütçe beklentileri belirlenir.</li>
<li><strong>Tedarik Araştırması:</strong> Teknik şartnameye uygun üretici ve tedarikçilerden teklif alınır; fiyat ve koşullar karşılaştırılır.</li>
<li><strong>Numune ve Onay:</strong> Numune temin edilir, kalite uygunluğu değerlendirilir; gerekiyorsa revizyon turu yönetilir.</li>
<li><strong>Sipariş, Üretim ve Teslimat:</strong> Onaylanan ürün için sipariş verilir, üretim/sevkiyat süreci takip edilir ve teslimat teyit edilir.</li>
</ol>`,

  polimer: `
<p>Polimer ve plastik hammaddeler; ambalaj, inşaat, otomotiv, tarım ve pek çok endüstriyel sektörün temel girdileri arasındadır. Bu hammaddelerin doğru polimer tipinde, istenen kalite sınıfında ve rekabetçi fiyatta temin edilmesi, üretim verimliliğini ve ürün kalitesini doğrudan belirler. Tomas Dış Ticaret, bu alanda yurt içi distribütörler ve uluslararası üreticilerle kurduğu iletişim ağı sayesinde güvenilir bir B2B tedarik ortağı olarak hizmet vermektedir.</p>

<h2>Tedarik Edilen Polimer ve Plastik Ürün Grupları</h2>
<p>Tomas, aşağıdaki polimer ve plastik hammadde kategorilerinde tedarik araştırması ve koordinasyonu gerçekleştirmektedir:</p>
<ul>
<li><strong>Poliolefinler:</strong> Polietilen (HDPE, LDPE, LLDPE, mLLDPE), Polipropilen (homo, random, impact kopolimer), Polibüten-1</li>
<li><strong>Mühendislik plastikleri:</strong> ABS, PA (Naylon 6, Naylon 6.6), PC (Polikarbonat), POM (Asetal), PBT, PMMA</li>
<li><strong>Ambalaj polimerleri:</strong> PET (şişe sınıfı, film sınıfı), PS (genel amaçlı, HIPS, EPS), PVC (sert, esnek)</li>
<li><strong>Teknik ve yüksek performanslı polimerler:</strong> PPS, PEEK, PEI, LCP, PTFE</li>
<li><strong>Elastomerler ve TPE:</strong> TPE, TPU, TPV, SBS, SEBS</li>
<li><strong>Katkı maddeleri ve masterbatch:</strong> Renk masterbatch, dolgu masterbatch, UV stabilizatör, antistatik, alev geciktirici</li>
<li><strong>Geri dönüştürülmüş granüller:</strong> Belgelenmiş rPET, rHDPE, rPP kaynakları</li>
</ul>

<h2>Bu Hizmet Kimler İçin Uygundur?</h2>
<p>Polimer hammadde tedariki gerektiren üretim tesisleri ve distribütörler için uygundur. Özellikle:</p>
<ul>
<li>Enjeksiyon kalıplama, ekstrüzyon, şişirme ve termoform işleme tesisleri</li>
<li>Ambalaj filmi, torba ve çuval üreticileri</li>
<li>Boru, profil ve yapı malzemeleri üreticileri</li>
<li>Otomotiv, elektrik-elektronik ve beyaz eşya bileşen üreticileri</li>
<li>Mevcut tedarik kaynaklarını çeşitlendirmek veya fiyat avantajı elde etmek isteyen satın alma birimleri</li>
</ul>

<h2>Tomas Bu Süreçte Nasıl Destek Olur?</h2>
<ul>
<li>Polimer tipi, sınıfı ve teknik spesifikasyon (MFI, yoğunluk, çekme mukavemeti vb.) belirleme desteği</li>
<li>Uygun üretici, distribütör ve ihracatçıların araştırılması</li>
<li>Rekabetçi fiyat analizi ve ticari müzakere koordinasyonu</li>
<li>Teknik veri sayfası (TDS) ve güvenlik bilgi formu (SDS) temini</li>
<li>Numune temini ve üretim testleri sürecinde takip desteği</li>
<li>İthalat prosedürleri, gümrük kodu tespiti ve lojistik koordinasyonu</li>
<li>Lot takibi ve kalite belgesi (CoA) kontrolü</li>
</ul>

<h2>Çalışma Süreci</h2>
<ol>
<li><strong>İhtiyaç Analizi:</strong> Polimer tipi, teknik parametreler, kullanım alanı, yıllık tüketim hacmi ve kalite gereksinimleri belirlenir.</li>
<li><strong>Tedarik Araştırması:</strong> Uygun üretici ve distribütörlerden teklif alınır; fiyat, minimum sipariş miktarı (MOQ) ve teslim süresi karşılaştırılır.</li>
<li><strong>Numune ve Teknik Onay:</strong> Numune malzeme temin edilir; üretim testleri yapılır ve teknik uygunluk onaylanır.</li>
<li><strong>Sipariş ve İthalat Koordinasyonu:</strong> Ticari koşullar mutabakata varılır; sipariş, ödeme, gümrük prosedürleri ve nakliye takip edilerek teslimat gerçekleştirilir.</li>
</ol>`,

  tarim: `
<p>Tarım, narenciye ve gıda ürünleri ticareti; ürün kalitesi, sezonluk dinamikler, zorunlu belgelendirme ve hassas lojistik koordinasyonu açısından özel deneyim gerektiren bir alandır. Tek bir eksik belge, bir partinin ithalat noktasında reddedilmesine neden olabilir; yanlış lojistik seçimi ise taze ürünün değerini yitirmesine yol açabilir. Tomas Dış Ticaret, bu alanda ihracat ve ithalat süreçlerinde işletmelere süreç odaklı, belge uyumlu destek sağlar.</p>

<h2>Hizmet Kapsamı</h2>
<p>Tomas, aşağıdaki tarım ve gıda ürünleri kategorilerinde ticaret süreçlerini yönetmektedir:</p>
<ul>
<li><strong>Taze meyve ve sebze:</strong> Narenciye (portakal, mandalina, limon, greyfurt), elma, nar, domates, biber, patlıcan, kabak ve diğer sebzeler</li>
<li><strong>Kuru meyve ve kuruyemiş:</strong> Kuru kayısı, üzüm, incir, dut; ceviz, fındık, badem, antep fıstığı</li>
<li><strong>Tahıl ve baklagiller:</strong> Buğday, arpa, mısır, mercimek, nohut, fasulye, çeşitli hububat ürünleri</li>
<li><strong>İşlenmiş gıda:</strong> Konserve, reçel, salça, zeytinyağı, zeytin, baharat, şeker, un, makarna</li>
<li><strong>Organik sertifikalı ürünler:</strong> AB organik (EC 834/2007), USDA Organic veya eşdeğer sertifikalı ürün tedariki</li>
<li><strong>Tarımsal girdi:</strong> Gübre, tarım ilacı, tohum ve sulama ekipmanlarında tedarik koordinasyonu</li>
</ul>

<h2>Bu Hizmet Kimler İçin Uygundur?</h2>
<p>Tarımsal ürün, narenciye veya işlenmiş gıda ihracatı yapan üretici ve ihracatçılar ile yurt dışı kaynaklı tarım ve gıda ürünü temin etmek isteyen distribütörler için uygundur. Özellikle:</p>
<ul>
<li>Ürünlerini yeni ihracat pazarlarına açmak isteyen üreticiler ve kooperatifler</li>
<li>Belirli hedef pazarlarda düzenli alıcı bağlantısı arayan ihracatçılar</li>
<li>Yurt dışından tarım ürünü temin eden gıda işleme ve distribütör firmalar</li>
<li>Sezonluk ürünlerde planlı tedarik veya fırsat temini desteği arayan işletmeler</li>
</ul>

<h2>Tomas Bu Süreçte Nasıl Destek Olur?</h2>
<ul>
<li>Ürün kalite kriterleri ve hedef pazara özgü sertifika gereksinimlerinin belirlenmesi</li>
<li>Alıcı veya tedarikçi araştırması, ön iletişim ve yönlendirme</li>
<li>Zorunlu belgelendirme sürecinin yönetimi: sağlık sertifikası (health certificate), bitki sağlığı sertifikası (phytosanitary certificate), menşe şahadetnamesi, analiz raporu, helal/organik sertifika</li>
<li>Gıda güvenliği standartları (HACCP, ISO 22000, BRC, IFS) uyumluluğu konusunda yönlendirme</li>
<li>Sezon planlaması: hasat takvimi, stok yönetimi ve erken rezervasyon koordinasyonu</li>
<li>Soğuk zincir gerektiren ürünlerde soğutmalı araç/konteyner lojistiği koordinasyonu</li>
<li>Gümrük prosedürleri, kota ve tarife bilgilendirmesi</li>
</ul>

<h2>Çalışma Süreci</h2>
<ol>
<li><strong>İhtiyaç Analizi:</strong> Ürün grubu, kalite standartları, sertifika gereksinimleri, hedef pazar ve miktar/sezon bilgisi belirlenir.</li>
<li><strong>Tedarik/Pazar Araştırması:</strong> Uygun alıcı veya tedarikçi seçenekleri araştırılır; ön görüşmeler yapılır ve teklifler karşılaştırılır.</li>
<li><strong>Operasyon Planlaması:</strong> Hasat/üretim takvimi, paketleme standartları, belgelendirme süreci, nakliye türü ve sigorta planı oluşturulur.</li>
<li><strong>Teslimat ve Takip:</strong> Ürünler yüklendiği andan hedef noktaya ulaşana kadar lojistik ve belge süreci yakından izlenir; teslimat teyit edilir.</li>
</ol>`,

  makine: `
<p>Makine ve endüstriyel ürün tedariki; teknik spesifikasyonların eksiksiz anlaşılmasını, güvenilir tedarikçi tespitini ve dikkatli bir operasyon yönetimini gerektiren karmaşık bir süreçtir. Yanlış bir teknik seçim veya güvenilmez bir tedarikçi, fabrika kurulumunu geciktirebilir, üretim hattını durdurabilir ve beklenmedik maliyet artışlarına neden olabilir. Tomas Dış Ticaret, bu süreçte işletmelerin teknik ve ticari ihtiyaçlarını bir arada değerlendirerek çözüm üretir.</p>

<h2>Hizmet Kapsamı</h2>
<p>Tomas, aşağıdaki makine ve endüstriyel ürün kategorilerinde tedarik koordinasyonu gerçekleştirmektedir:</p>
<ul>
<li><strong>Üretim ve işleme makineleri:</strong> Enjeksiyon kalıp, ekstrüzyon, CNC tezgah, pres, paketleme makinesi, dolum ve kapama ekipmanları</li>
<li><strong>Tarım ve gıda makineleri:</strong> Hasat makinesi, soğutma tüneli, konveyör, ayıklama ve gradeleme hattı, dolum makinesi</li>
<li><strong>Endüstriyel elektrik ve elektronik ekipman:</strong> Motor, redüktör, frekans inverteri, panel ve kontrol panoları, sensör ve otomasyon bileşenleri</li>
<li><strong>Taşıma ve depolama ekipmanları:</strong> Forklift, istif makinesi, bant konveyör, raf sistemi, palet sarma makinesi</li>
<li><strong>Yedek parça ve sarf ekipmanları:</strong> Filtre, rulman, kayış-kasnak, conta, hidrolik ve pnömatik bileşenler</li>
<li><strong>İnşaat ve altyapı makineleri:</strong> Kompresör, jeneratör, vinç, pompa, kazan sistemleri</li>
</ul>

<h2>Bu Hizmet Kimler İçin Uygundur?</h2>
<p>Fabrika kurulumu, kapasite artırımı veya ekipman yenileme için makine ve endüstriyel ürün temin etmek isteyen üretim işletmeleri için uygundur. Özellikle:</p>
<ul>
<li>Yeni tesis kuran veya mevcut hattını genişleten üreticiler</li>
<li>Belirli bir ürün veya üretim sürecine özgü ekipman arayan proje bazlı alıcılar</li>
<li>Yurt dışı kaynaklı alternatif tedarikçi araştıran satın alma departmanları</li>
<li>Yedek parça temini veya bakım ekipmanı ihtiyacı olan işletmeler</li>
</ul>

<h2>Tomas Bu Süreçte Nasıl Destek Olur?</h2>
<ul>
<li>Teknik şartname ve ihtiyaç belirleme sürecinde danışmanlık desteği</li>
<li>Üretici, yetkili distribütör ve ihracatçı araştırması</li>
<li>Teknik teklif toplama, karşılaştırma ve müzakere koordinasyonu</li>
<li>CE, ISO ve ilgili standart sertifikalarının doğrulanması</li>
<li>İthalat mevzuatı, HS kodu ve gümrük prosedürleri konusunda yönlendirme</li>
<li>Nakliye: proje kargo, ağır taşıma veya parsiyel yük koordinasyonu</li>
<li>Teslimat sonrası kurulum koordinasyonu (gerektiğinde servis mühendisi temini)</li>
</ul>

<h2>Çalışma Süreci</h2>
<ol>
<li><strong>İhtiyaç Analizi:</strong> Ekipman tipi, teknik özellikler (kapasite, voltaj, sertifika, boyut), kurulum gereksinimleri ve bütçe çerçevesi belirlenir.</li>
<li><strong>Tedarik Araştırması:</strong> Teknik şartnameye uygun üretici ve tedarikçilerden teklifler alınır; fiyat, garanti koşulları, teslimat süresi ve referanslar karşılaştırılır.</li>
<li><strong>Operasyon Planlaması:</strong> Sipariş koşulları, ödeme planı (akreditif, peşin, taksit), nakliye yöntemi ve gümrük prosedürleri planlanır.</li>
<li><strong>Teslimat ve Takip:</strong> Ekipman sevk edildiği andan teslim alınana kadar tüm süreç izlenir; gerektiğinde kurulum ve devreye alma desteği koordine edilir.</li>
</ol>`,

  muhendislik: `
<p>Mühendislik ve araştırma hizmetleri; yeni bir ürün tedariki, pazar girişi, teknik fizibilite veya süreç iyileştirme konularında işletmelerin ihtiyaç duyduğu sistematik analiz ve planlama desteğini kapsar. Kararların verilere dayalı olması, yanlış yatırımları ve operasyonel hataları önlemenin en etkili yoludur. Tomas Dış Ticaret, bu alanda B2B odaklı teknik araştırma, değerlendirme ve koordinasyon hizmetleri sunmaktadır.</p>

<h2>Hizmet Kapsamı</h2>
<p>Tomas'ın mühendislik ve araştırma hizmetleri; sürecin niteliğine göre aşağıdaki bileşenlerden oluşmaktadır:</p>
<ul>
<li><strong>Teknik ürün araştırması:</strong> Yeni ürün kategorisi veya hammadde için pazar, üretici ve teknik alternatiflerin sistematik araştırması</li>
<li><strong>Tedarikçi değerlendirmesi:</strong> Potansiyel tedarikçilerin teknik yeterlilik, sertifika altyapısı ve referans geçmişi açısından karşılaştırmalı analizi</li>
<li><strong>Fizibilite ön çalışması:</strong> Yeni bir ürün grubu, pazar veya sürecin teknik ve ticari açıdan gerçekleştirilebilirliğinin değerlendirilmesi</li>
<li><strong>Süreç analizi ve iyileştirme önerileri:</strong> Mevcut tedarik veya üretim süreçlerinin haritalanması, darboğazların tespiti ve iyileştirme senaryolarının geliştirilmesi</li>
<li><strong>Pazar ve rakip analizi:</strong> Belirli bir ürün veya sektörde pazar dinamikleri, fiyat trendleri ve rekabetçi pozisyonun araştırılması</li>
<li><strong>Teknik danışmanlık koordinasyonu:</strong> Özel mühendislik uzmanlığı gerektiren durumlarda uzman paydaşların sürece dahil edilmesi ve koordinasyonu</li>
</ul>

<h2>Bu Hizmet Kimler İçin Uygundur?</h2>
<p>Yeni bir tedarik kaynağı veya ürün grubu araştıran, teknik fizibilite çalışması yaptırmak isteyen ya da iş süreçlerini iyileştirme hedefi olan üretim ve ticaret işletmeleri için uygundur. Özellikle:</p>
<ul>
<li>Yeni bir ürün veya malzeme grubuna girerken teknik değerlendirme desteği arayan firmalar</li>
<li>Mevcut tedarikçilerini değiştirmeyi veya alternatiflere geçmeyi düşünen satın alma ekipleri</li>
<li>Üretim sürecini optimize etmek veya atık oranlarını düşürmek isteyen üretim mühendisliği ekipleri</li>
<li>Yatırım kararı vermeden önce teknik ve ticari fizibilite verileri isteyen yönetim kademeleri</li>
</ul>

<h2>Tomas Bu Süreçte Nasıl Destek Olur?</h2>
<ul>
<li>İhtiyacın kapsamının tanımlanması ve araştırma parametrelerinin belirlenmesi</li>
<li>Birincil ve ikincil kaynaklardan sistematik veri toplama</li>
<li>Teknik doküman analizi (TDS, test raporları, sertifikalar)</li>
<li>Tedarikçi/ürün karşılaştırmalı matris hazırlama</li>
<li>Bulguların raporlanması ve alternatif senaryoların sunulması</li>
<li>Seçilen çözümün hayata geçirilmesinde süreç ve koordinasyon desteği</li>
</ul>

<h2>Çalışma Süreci</h2>
<ol>
<li><strong>İhtiyaç Analizi:</strong> Araştırma veya mühendislik ihtiyacının kapsamı, çıktı beklentileri ve zaman kısıtları tanımlanır.</li>
<li><strong>Araştırma ve Veri Toplama:</strong> İlgili teknik kaynaklar, tedarikçiler, pazar verileri ve uzman görüşleri derlenir.</li>
<li><strong>Değerlendirme ve Raporlama:</strong> Toplanan veriler analiz edilir; karşılaştırmalı değerlendirme ve öneri raporu hazırlanır.</li>
<li><strong>Uygulama ve Takip:</strong> Seçilen çözüm veya tedarikçi ile ilerleme sürecinde koordinasyon ve takip desteği sağlanır.</li>
</ol>`,

  yazilim: `
<p>Dijital dönüşüm ve yazılım çözümleri, işletmelerin operasyonel verimliliklerini artırmaları, yeni satış kanalları oluşturmaları ve süreçlerini izlenebilir kılmaları için kritik bir ihtiyaç haline gelmiştir. Doğru yazılım altyapısı olmadan büyüme hedefleri ve operasyonel disiplin bir arada sürdürülemez. Tomas Dış Ticaret, bu alanda işletmelerin dijital ihtiyaçlarına yönelik B2B odaklı çözüm ortaklığı sunmaktadır.</p>

<h2>Hizmet Kapsamı</h2>
<p>Tomas'ın yazılım ve dijital çözüm hizmetleri; ihtiyaca göre aşağıdaki kapsamları içermektedir:</p>
<ul>
<li><strong>Kurumsal web sitesi:</strong> Çok dilli, SEO uyumlu, hızlı ve güvenilir kurumsal web sitesi tasarımı ve geliştirme koordinasyonu</li>
<li><strong>E-ticaret altyapısı:</strong> B2B ve B2C e-ticaret sitesi kurulumu; platform seçimi (Shopify, WooCommerce, Magento, özel geliştirme), ödeme entegrasyonu ve lojistik bağlantısı</li>
<li><strong>ERP ve iş süreçleri yönetimi:</strong> Stok yönetimi, sipariş takibi, satın alma ve tedarik süreçlerini dijitalleştiren sistem seçimi ve uygulama koordinasyonu</li>
<li><strong>CRM sistemleri:</strong> Müşteri ilişkileri yönetimi, satış hunisi takibi ve raporlama çözümleri</li>
<li><strong>Süreç otomasyonu:</strong> Tekrarlayan operasyonel süreçlerin dijitalleştirilmesi ve iş akışı otomasyonu</li>
<li><strong>Entegrasyon projeleri:</strong> Mevcut sistemlerin (muhasebe, depo, e-ticaret, pazar yeri) birbiriyle entegrasyonu</li>
<li><strong>Dijital pazarlama altyapısı:</strong> SEO, içerik yönetimi, e-posta pazarlama ve analitik araçların kurulumu ve koordinasyonu</li>
</ul>

<h2>Bu Hizmet Kimler İçin Uygundur?</h2>
<p>Web sitesi veya e-ticaret altyapısı kurmak, mevcut dijital altyapısını geliştirmek ya da kurumsal yazılım ihtiyaçlarına yönelik çözüm arayan işletmeler için uygundur. Özellikle:</p>
<ul>
<li>Dijital varlığını sıfırdan oluşturmak isteyen geleneksel ticaret firmaları</li>
<li>E-ticaret kanalı açmak veya pazar yeri satışlarını başlatmak isteyen üreticiler ve distribütörler</li>
<li>Operasyonel süreçlerini dijitalleştirerek verimliliğini artırmak isteyen KOBİ'ler</li>
<li>Teknik kapasite eksikliği nedeniyle yazılım proje yönetimini dışarıdan almak isteyen firmalar</li>
</ul>

<h2>Tomas Bu Süreçte Nasıl Destek Olur?</h2>
<ul>
<li>Dijital ihtiyaç analizi: mevcut altyapı değerlendirmesi ve hedef durum belirleme</li>
<li>Çözüm alternatifleri araştırması ve platform/teknoloji önerisi</li>
<li>Yazılım geliştirme veya entegrasyon proje koordinasyonu</li>
<li>Tedarikçi (geliştirici, ajans) seçimi ve sözleşme yönetimi</li>
<li>Proje yönetimi: kapsam, takvim ve bütçe takibi</li>
<li>Test, teslimat ve devreye alma sürecinde denetim ve koordinasyon</li>
<li>Kullanıcı kabul testi ve eğitim sürecinde destek</li>
</ul>

<h2>Çalışma Süreci</h2>
<ol>
<li><strong>İhtiyaç Analizi:</strong> Dijital hedefler, mevcut altyapı, teknik kısıtlar, kullanıcı beklentileri ve bütçe çerçevesi belirlenir.</li>
<li><strong>Çözüm Araştırması:</strong> Uygun teknoloji yığını, platform ve hizmet alternatifleri değerlendirilir; öneri sunulur.</li>
<li><strong>Proje Planlaması:</strong> Kapsam, aşamalar, takvim, kaynaklar ve başarı kriterleri netleştirilir.</li>
<li><strong>Uygulama ve Teslimat:</strong> Geliştirme süreci koordine edilir; test, revizyon ve devreye alma aşamalarında denetim sağlanır.</li>
</ol>`,

  reklam: `
<p>Güçlü bir kurumsal kimlik ve etkili iletişim materyalleri, işletmelerin pazar konumlandırmasını, iş geliştirme kapasitesini ve alıcı güvenini doğrudan etkiler. Özellikle uluslararası pazarlarda sahaya çıkan firmalarda profesyonel görünüm ve tutarlı marka dili, ilk izlenimi ve ortaklık kararını şekillendirir. Tomas Dış Ticaret, bu alanda marka kimliği oluşturma ve kurumsal iletişim çözümleri için koordinasyon ve süreç yönetimi sunmaktadır.</p>

<h2>Hizmet Kapsamı</h2>
<p>Tomas, aşağıdaki reklam ve kurumsal kimlik kategorilerinde koordinasyon ve üretim desteği sağlamaktadır:</p>
<ul>
<li><strong>Marka kimliği:</strong> Logo tasarımı ve revizyonu, kurumsal renk paleti, tipografi seçimi, marka kılavuzu (brand guidelines) hazırlama</li>
<li><strong>Basılı materyaller:</strong> Kartvizit, antetli kağıt, zarf, klasör; ürün katalog ve broşür; fiyat listesi ve teklif şablonu; etiket ve ambalaj tasarımı</li>
<li><strong>Dijital varlıklar:</strong> E-posta imzası, sosyal medya şablonları, dijital katalog (interaktif PDF/web), banner ve afiş tasarımı</li>
<li><strong>Sunum materyalleri:</strong> Uluslararası fuarlar ve B2B görüşmeler için şirket tanıtım sunumu, ürün tanıtım dosyası ve pitch deck</li>
<li><strong>Görsel içerik:</strong> Ürün fotoğrafçılığı koordinasyonu, ürün görseli düzenleme ve retouching, tanıtım videosu yönetimi</li>
<li><strong>Pazara giriş iletişimi:</strong> Yeni pazar veya ürün lansmanı için iletişim stratejisi ve materyal planlaması</li>
</ul>

<h2>Bu Hizmet Kimler İçin Uygundur?</h2>
<p>Kurumsal kimliğini oluşturmak veya yeniden yapılandırmak, tanıtım materyali hazırlamak ya da uluslararası pazara yönelik profesyonel iletişim altyapısı kurmak isteyen B2B işletmeler için uygundur. Özellikle:</p>
<ul>
<li>Kuruluş veya yeniden yapılanma sürecinde kurumsal kimlik oluşturmak isteyen firmalar</li>
<li>Yurt dışı pazar veya fuar öncesinde profesyonel sunum materyali hazırlamak isteyen ihracatçılar</li>
<li>Mevcut materyalleri güncellemek veya tüm kanallar için tutarlı bir görsel dil oluşturmak isteyen işletmeler</li>
<li>Kendi bünyesinde tasarım kapasitesi bulunmayan KOBİ'ler</li>
</ul>

<h2>Tomas Bu Süreçte Nasıl Destek Olur?</h2>
<ul>
<li>Marka konumu, hedef kitle ve iletişim hedeflerini belirleme görüşmesi</li>
<li>Materyal kapsamının ve öncelik sıralamasının tanımlanması</li>
<li>Sektörel referans araştırması ve konsept önerileri</li>
<li>Tasarımcı veya ajans seçimi ve briefleme koordinasyonu</li>
<li>Tasarım revizyonları ve onay sürecinin yönetimi</li>
<li>Baskı koordinasyonu (ofset, dijital, promosyon baskı) ve kalite denetimi</li>
<li>Dijital varlıkların dosya formatlarıyla teslimi ve kullanım kılavuzu</li>
</ul>

<h2>Çalışma Süreci</h2>
<ol>
<li><strong>İhtiyaç Analizi:</strong> Marka konumu, hedef kitle, iletişim hedefleri ve materyal kapsamı belirlenir; mevcut kimlik varsa incelenir.</li>
<li><strong>Konsept ve Araştırma:</strong> Sektörel örnekler araştırılır, alternatif konsept yönleri değerlendirilir ve tercih netleştirilir.</li>
<li><strong>Tasarım ve Revizyon:</strong> Seçilen yönde materyaller hazırlanır; revizyon turları koordine edilir ve nihai onay alınır.</li>
<li><strong>Üretim ve Teslimat:</strong> Basılı materyaller için baskı koordinasyonu sağlanır; dijital materyaller uygun formatlarda teslim edilir.</li>
</ol>`,

  eticaret: `
<p>E-ticaret, işletmelerin ürünlerini dijital kanallar üzerinden müşterilere veya diğer işletmelere ulaştırmasının en ölçeklenebilir yollarından biridir. Ancak doğru platform seçimi, pazar yeri entegrasyonu, ödeme altyapısı ve lojistik bağlantısı olmadan e-ticaret yatırımları beklenen sonucu vermez. Tomas Dış Ticaret, e-ticaret altyapısı kurulumundan operasyonel süreçlerin planlanmasına kadar kapsamlı B2B destek sunmaktadır.</p>

<h2>Hizmet Kapsamı</h2>
<p>Tomas'ın e-ticaret hizmetleri; kanal seçiminden operasyonel kuruluma kadar tüm süreci kapsamaktadır:</p>
<ul>
<li><strong>Platform seçimi ve kurulum:</strong> Shopify, WooCommerce, Magento, Ticimax, IdeaSoft gibi platformlar arasında ihtiyaca uygun seçim; tema, ürün yönetimi ve ödeme entegrasyonu kurulumu</li>
<li><strong>Pazar yeri entegrasyonu:</strong> Trendyol, Hepsiburada, Amazon, Etsy, eBay gibi pazar yerlerinde mağaza açılışı, ürün listeleme ve yönetim koordinasyonu</li>
<li><strong>B2B e-ticaret:</strong> Fiyat gizleme, toplu sipariş, müşteri segmentasyonu ve onay akışı gibi B2B özellikli e-ticaret altyapısı kurulum desteği</li>
<li><strong>Uluslararası e-ticaret:</strong> Cross-border satış, çok para birimi, çok dil desteği ve uluslararası ödeme/lojistik entegrasyonu</li>
<li><strong>Ürün içeriği ve listeleme:</strong> Dönüşüm odaklı ürün başlığı, açıklama ve görsel standartları; SEO uyumlu içerik yapısı</li>
<li><strong>Sipariş ve fulfillment yönetimi:</strong> Sipariş akışı, stok senkronizasyonu, kargo entegrasyonu ve iade süreçleri planlaması</li>
<li><strong>Analitik ve optimizasyon:</strong> Dönüşüm izleme, sepet terk analizi, A/B test koordinasyonu ve performans raporlaması</li>
</ul>

<h2>Bu Hizmet Kimler İçin Uygundur?</h2>
<p>Ürünlerini çevrimiçi satmaya başlamak isteyen veya mevcut e-ticaret kanallarını genişletmek hedefleyen B2B ve B2C işletmeler için uygundur. Özellikle:</p>
<ul>
<li>İlk kez e-ticaret kanalı açmak isteyen üreticiler ve distribütörler</li>
<li>Tek bir pazar yerinden bağımsız çok kanallı (omnichannel) yapıya geçmek isteyen firmalar</li>
<li>Yurt dışı e-ticaret kanalları kurmak veya mevcut kanalları geliştirmek isteyen ihracatçılar</li>
<li>E-ticaret altyapısını kurmuş ancak operasyonel süreçleri optimize etmek isteyen işletmeler</li>
</ul>

<h2>Tomas Bu Süreçte Nasıl Destek Olur?</h2>
<ul>
<li>Satış hedefleri, ürün grubu ve hedef kitleye göre kanal ve platform analizi</li>
<li>Platform karşılaştırması ve seçim desteği (maliyet, özellik, entegrasyon kapasitesi)</li>
<li>Pazar yeri mağaza açılış ve onay süreçlerinin koordinasyonu</li>
<li>Ödeme altyapısı (sanal POS, dijital cüzdan, uluslararası ödeme) entegrasyon desteği</li>
<li>Kargo ve fulfillment entegrasyonu planlaması</li>
<li>Ürün içeriği standartlaştırma ve toplu listeleme koordinasyonu</li>
<li>Canlıya alma sonrası performans izleme ve optimizasyon önerileri</li>
</ul>

<h2>Çalışma Süreci</h2>
<ol>
<li><strong>İhtiyaç Analizi:</strong> Satış hedefleri, ürün portföyü, hedef müşteri kitlesi, bütçe ve teknik kısıtlar belirlenir; mevcut e-ticaret yapısı varsa incelenir.</li>
<li><strong>Platform ve Kanal Araştırması:</strong> Uygun platform ve pazar yeri alternatifleri değerlendirilir; maliyet-fayda analizi yapılır ve öneri sunulur.</li>
<li><strong>Operasyon Planlaması:</strong> Altyapı kurulum planı, ödeme ve lojistik entegrasyon takvimi, içerik hazırlık süreci ve canlıya alma planı oluşturulur.</li>
<li><strong>Kurulum, Canlıya Alma ve Takip:</strong> Platform kurulur, ürünler yüklenir, entegrasyonlar test edilir; canlıya alındıktan sonra ilk operasyonlar izlenerek optimizasyon önerileri sunulur.</li>
</ol>`,
};

export const FALLBACK_SERVICES: ServiceDto[] = [
  {
    id: 1,
    title: "Uluslararası Ticaret / İhracat & İthalat",
    slug: "uluslararasi-ticaret-ihracat-ithalat",
    shortDescription: "İhracat ve ithalat operasyonlarının planlanmasından teslimatına kadar uçtan uca süreç koordinasyonu.",
    content: serviceContent.ticaret,
    icon: "🌍",
    languageCode: "tr",
    metaTitle: "Uluslararası Ticaret / İhracat & İthalat | Tomas Dış Ticaret",
    metaDescription: "İhracat ve ithalat süreçlerinde tedarikçi araştırması, evrak yönetimi ve operasyon koordinasyonu. Tomas Dış Ticaret ile global ticarette süreç güvencesi.",
    isActive: true,
    sortOrder: 1,
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  {
    id: 2,
    title: "Ambalaj Ürünleri ve Endüstriyel Malzemeler",
    slug: "ambalaj-urunleri-ve-endustriyel-malzemeler",
    shortDescription: "Endüstriyel ambalaj ve sarf malzemeleri tedarikinde geniş ürün portföyü ve güvenilir tedarik süreci.",
    content: serviceContent.ambalaj,
    icon: "📦",
    languageCode: "tr",
    metaTitle: "Ambalaj Ürünleri ve Endüstriyel Malzemeler | Tomas Dış Ticaret",
    metaDescription: "Endüstriyel ambalaj ürünleri ve sarf malzemeleri tedariki. Ürün araştırması, numune temini ve teslimat takibi ile uçtan uca B2B tedarik çözümü.",
    isActive: true,
    sortOrder: 2,
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  {
    id: 3,
    title: "Polimer ve Plastik Hammadde Ticareti",
    slug: "polimer-ve-plastik-hammadde-ticareti",
    shortDescription: "Plastik hammadde ve polimer ürün gruplarında tedarik araştırması, fiyat analizi ve ithalat koordinasyonu.",
    content: serviceContent.polimer,
    icon: "🧪",
    languageCode: "tr",
    metaTitle: "Polimer ve Plastik Hammadde Ticareti | Tomas Dış Ticaret",
    metaDescription: "Polimer ve plastik hammadde tedarikinde güvenilir B2B çözüm ortağı. Tedarikçi araştırması, numune temini ve ithalat koordinasyonu.",
    isActive: true,
    sortOrder: 3,
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  {
    id: 4,
    title: "Tarım, Narenciye ve Gıda Ürünleri",
    slug: "tarim-narenciye-ve-gida-urunleri",
    shortDescription: "Tarımsal ürünler, narenciye ve gıda tedarikinde belgelendirme, kalite takibi ve lojistik koordinasyonu.",
    content: serviceContent.tarim,
    icon: "🍊",
    languageCode: "tr",
    metaTitle: "Tarım, Narenciye ve Gıda Ürünleri | Tomas Dış Ticaret",
    metaDescription: "Tarım ve gıda ürünleri ihracat ve ithalatında süreç yönetimi. Sertifika, kalite ve lojistik koordinasyonuyla güvenilir tedarik.",
    isActive: true,
    sortOrder: 4,
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  {
    id: 5,
    title: "Makine ve Endüstriyel Ürünler",
    slug: "makine-ve-endustriyel-urunler",
    shortDescription: "Endüstriyel makine ve ekipman tedarikinde teknik ihtiyaç analizi, tedarikçi araştırması ve operasyon takibi.",
    content: serviceContent.makine,
    icon: "⚙️",
    languageCode: "tr",
    metaTitle: "Makine ve Endüstriyel Ürünler | Tomas Dış Ticaret",
    metaDescription: "Makine ve endüstriyel ekipman tedarikinde teknik uyum, ithalat koordinasyonu ve süreç takibi. Proje bazlı B2B çözümler.",
    isActive: true,
    sortOrder: 5,
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  {
    id: 6,
    title: "Mühendislik ve Araştırma Hizmetleri",
    slug: "muhendislik-ve-arastirma-hizmetleri",
    shortDescription: "Teknik araştırma, ürün değerlendirme ve fizibilite süreçlerinde B2B odaklı analiz ve danışmanlık desteği.",
    content: serviceContent.muhendislik,
    icon: "🔬",
    languageCode: "tr",
    metaTitle: "Mühendislik ve Araştırma Hizmetleri | Tomas Dış Ticaret",
    metaDescription: "Teknik ürün araştırması, fizibilite desteği ve süreç analizi. B2B mühendislik ve araştırma hizmetlerinde çözüm ortaklığı.",
    isActive: true,
    sortOrder: 6,
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  {
    id: 7,
    title: "Yazılım ve Dijital Çözümler",
    slug: "yazilim-ve-dijital-cozumler",
    shortDescription: "Web çözümleri, e-ticaret altyapısı ve kurumsal yazılım ihtiyaçlarında dijital dönüşüm ortaklığı.",
    content: serviceContent.yazilim,
    icon: "💻",
    languageCode: "tr",
    metaTitle: "Yazılım ve Dijital Çözümler | Tomas Dış Ticaret",
    metaDescription: "Kurumsal yazılım, e-ticaret altyapısı ve dijital dönüşüm projelerinde B2B çözüm ortaklığı. İhtiyaç analizinden uygulamaya kadar süreç desteği.",
    isActive: true,
    sortOrder: 7,
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  {
    id: 8,
    title: "Reklam ve Kurumsal Kimlik Tasarımı",
    slug: "reklam-ve-kurumsal-kimlik-tasarimi",
    shortDescription: "Marka kimliği, kurumsal iletişim materyalleri ve pazara giriş iletişim altyapısı için tasarım çözümleri.",
    content: serviceContent.reklam,
    icon: "🎨",
    languageCode: "tr",
    metaTitle: "Reklam ve Kurumsal Kimlik Tasarımı | Tomas Dış Ticaret",
    metaDescription: "Kurumsal kimlik, logo, katalog ve reklam materyali tasarım koordinasyonu. B2B işletmeler için marka ve iletişim çözümleri.",
    isActive: true,
    sortOrder: 8,
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  {
    id: 9,
    title: "E-Ticaret",
    slug: "e-ticaret",
    shortDescription: "E-ticaret altyapısı kurulumu, pazar yeri entegrasyonu ve dijital satış kanalı geliştirme desteği.",
    content: serviceContent.eticaret,
    icon: "🛒",
    languageCode: "tr",
    metaTitle: "E-Ticaret Çözümleri | Tomas Dış Ticaret",
    metaDescription: "E-ticaret platform seçimi, pazar yeri entegrasyonu ve dijital satış kanalı kurulumunda B2B çözüm ortaklığı.",
    isActive: true,
    sortOrder: 9,
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
];

// ─── Blog Posts ───────────────────────────────────────────────────────────────

export const FALLBACK_BLOG_POSTS: BlogPostDto[] = [
  {
    id: 1,
    title: "Dış Ticarette Güvenilir Tedarik Süreci Nasıl Kurulur?",
    slug: "dis-ticarette-guvenilir-tedarik-sureci-nasil-kurulur",
    summary: "Global ticaret ortamında güvenilir bir tedarik süreci kurmak, operasyonel sürekliliğin ve ticari başarının temelini oluşturur. Peki bu süreç nasıl yapılandırılmalıdır?",
    content: `<p>Dış ticarette tedarik süreci; yalnızca ürün bulmak ya da fiyat müzakere etmekten ibaret değildir. Güvenilir bir tedarik yapısı, tedarikçi seçiminden ödeme yöntemine, lojistik planlamasından risk yönetimine kadar çok katmanlı bir çerçevede değerlendirilmelidir.</p>

<h2>1. Tedarikçi Araştırması ve Değerlendirme</h2>
<p>Güvenilir bir tedarik sürecinin ilk adımı, potansiyel tedarikçilerin sistematik biçimde araştırılması ve değerlendirilmesidir. Bu aşamada dikkat edilmesi gereken başlıca kriterler şunlardır:</p>
<ul>
<li>Tedarikçinin üretim kapasitesi ve referansları</li>
<li>Ürün kalite standartları ve mevcut sertifikalar</li>
<li>Önceki ihracat geçmişi ve müşteri yorumları</li>
<li>Finansal istikrar ve ticaret geçmişi</li>
</ul>

<h2>2. Numune Süreci ve Kalite Onayı</h2>
<p>Herhangi bir taahhütte bulunmadan önce numune talep etmek ve ürünleri bağımsız test ettirmek, ilerleyen süreçte yaşanabilecek kalite sorunlarını minimize eder. Numune sürecinin yazılı olarak kayıt altına alınması ve onay kriterlerinin önceden belirlenmesi kritik önemdedir.</p>

<h2>3. Sözleşme ve Ödeme Koşulları</h2>
<p>Tedarik ilişkisinin hukuki çerçevesini belirleyen sözleşme, tarafların hak ve yükümlülüklerini açıkça tanımlamalıdır. Ödeme yöntemleri (akreditif, avans ödeme, CAD vb.) taraflar arasındaki güven düzeyine ve ticaretin hacmine göre şekillendirilmelidir.</p>

<h2>4. Lojistik ve Belgelendirme Planlaması</h2>
<p>Ürünlerin hedef noktaya sorunsuz ulaşması için nakliye yöntemi, gümrük prosedürleri ve gerekli belgeler (menşe şahadetnamesi, fatura, konşimento vb.) önceden planlanmalıdır.</p>

<h2>5. Sürekli İzleme ve İlişki Yönetimi</h2>
<p>Güvenilir bir tedarik süreci, tek seferlik bir işlemden ibaret değildir. Tedarikçilerle uzun vadeli ilişkiler geliştirmek, kalite tutarlılığını artırır ve beklenmedik durumlarda çözüm üretmeyi kolaylaştırır.</p>

<p>Sonuç olarak, dış ticarette güvenilir tedarik; sistematik araştırma, net süreç tanımı ve aktif ilişki yönetiminin bir bütünüdür. Bu süreçte deneyimli bir iş ortağıyla çalışmak, hem zaman hem de operasyonel risk açısından önemli avantajlar sağlar.</p>`,
    author: "Tomas Dış Ticaret",
    languageCode: "tr",
    publishedAt: "2024-11-15T08:00:00Z",
    metaTitle: "Dış Ticarette Güvenilir Tedarik Süreci | Tomas Dış Ticaret",
    metaDescription: "Dış ticarette güvenilir bir tedarik yapısı nasıl kurulur? Tedarikçi değerlendirme, numune süreci, sözleşme koşulları ve lojistik planlama rehberi.",
    isActive: true,
    createdAt: "2024-11-15T08:00:00Z",
  },
  {
    id: 2,
    title: "İthalat ve İhracat Süreçlerinde Operasyonel Planlamanın Önemi",
    slug: "ithalat-ve-ihracat-sureclerinde-operasyonel-planlamanin-onemi",
    summary: "Uluslararası ticaretin en kritik boyutlarından biri olan operasyonel planlama, süreçlerin zamanında ve sorunsuz tamamlanması için vazgeçilmezdir.",
    content: `<p>Uluslararası ticaret işlemleri, tek bir eylemin değil birbiriyle bağlantılı birçok sürecin koordineli biçimde yürütülmesini gerektirir. Bu koordinasyonun merkezinde operasyonel planlama yer almaktadır.</p>

<h2>Operasyonel Planlamanın Temel Bileşenleri</h2>
<p>Etkin bir operasyonel plan; zaman çizelgesi, kaynak tahsisi ve risk değerlendirmesini bir arada ele alır. Başlıca bileşenler şöyle sıralanabilir:</p>

<h3>1. Zaman Yönetimi</h3>
<p>İhracat veya ithalat sürecinde her aşamanın tamamlanma süresinin önceden belirlenmesi, gecikmelerden kaynaklanacak mali ve operasyonel kayıpları önler. Sipariş üretimi, gümrük prosedürleri, nakliye süresi ve teslim tarihi arasındaki tampon sürelerin doğru hesaplanması kritiktir.</p>

<h3>2. Evrak ve Belgelendirme</h3>
<p>Uluslararası ticarette eksik ya da hatalı belge, gümrük gecikmeleri veya ürünlerin serbest bırakılmamasına yol açabilir. Fatura, konşimento, menşe şahadetnamesi, sağlık sertifikaları gibi belgeler süreç başında liste halinde hazırlanmalı ve sorumluluğu belirlenerek takip edilmelidir.</p>

<h3>3. Lojistik Koordinasyonu</h3>
<p>Nakliye türü (deniz, hava, kara), konteynır planlaması, yükleme zamanlaması ve sigorta kapsamı; süreç başında değerlendirilerek planlanmalıdır. Lojistik gecikmeler, müşteri memnuniyetini olumsuz etkileyen en yaygın sorunların başında gelir.</p>

<h3>4. Risk Değerlendirmesi</h3>
<p>Kur riski, tedarikçi güvenilirliği, ülke bazlı düzenlemeler ve ürün bazlı kısıtlamalar önceden analiz edilerek gerekli önlemler alınmalıdır.</p>

<h2>İyi Planlama Neden Rekabet Avantajı Yaratır?</h2>
<p>Operasyonel planlamasını güçlü tutan işletmeler; daha az hata maliyeti, daha öngörülebilir teslimat süreleri ve daha yüksek müşteri güveni elde eder. Süreç disiplini, uzun vadede sürdürülebilir ticaret ilişkilerinin temelini oluşturur.</p>

<p>Sonuç olarak, ithalat ve ihracat süreçlerinde operasyonel planlama; maliyetleri düşüren, riski azaltan ve iş ortaklıklarını güçlendiren stratejik bir araçtır.</p>`,
    author: "Tomas Dış Ticaret",
    languageCode: "tr",
    publishedAt: "2024-12-05T08:00:00Z",
    metaTitle: "İthalat ve İhracat Süreçlerinde Operasyonel Planlama | Tomas Dış Ticaret",
    metaDescription: "İthalat ve ihracat süreçlerinde operasyonel planlama neden önemlidir? Zaman yönetimi, belgelendirme ve lojistik koordinasyonunda başarı için kritik adımlar.",
    isActive: true,
    createdAt: "2024-12-05T08:00:00Z",
  },
  {
    id: 3,
    title: "B2B Tedarikte Kalite, Fiyat ve Teslimat Dengesi",
    slug: "b2b-tedarikte-kalite-fiyat-ve-teslimat-dengesi",
    summary: "B2B tedarik ilişkilerinde yalnızca en düşük fiyatı aramak yerine kalite, teslimat güvencesi ve tedarikçi istikrarını birlikte değerlendirmek sürdürülebilir başarı için zorunludur.",
    content: `<p>Birçok işletme, tedarik kararlarını verirken öncelikle fiyatı esas alır. Ancak B2B ticarette sadece fiyat odaklı bir yaklaşım, uzun vadede operasyonel sorunlara ve maliyet artışlarına yol açabilir.</p>

<h2>Kalite: Sürecin Temel Girdisi</h2>
<p>Tedarik edilen ürünün kalitesi; üretim verimliliğini, müşteri memnuniyetini ve marka güvenilirliğini doğrudan etkiler. Kalite değerlendirmesi salt ürün özelliklerinden ibaret değildir; tedarikçinin kalite yönetim sistemi, sertifika altyapısı ve tutarlılık geçmişi de bu değerlendirmenin parçasıdır.</p>

<h2>Fiyat: Gerçekçi Karşılaştırmanın Önemi</h2>
<p>Tedarik maliyeti hesaplanırken yalnızca birim fiyat değil, nakliye, gümrük, sigorta ve olası ret/iade maliyetleri de dahil edilerek toplam tedarik maliyeti (Total Cost of Ownership) dikkate alınmalıdır. Bu çerçevede görünürde ucuz olan bir tedarikçi, gizli maliyetlerle birlikte dezavantajlı bir seçenek haline gelebilir.</p>

<h2>Teslimat: Operasyonel Süreklilik İçin Kritik</h2>
<p>Zamanında teslimat, üretim planlaması ve müşteri taahhütleri açısından vazgeçilmezdir. Tedarikçinin lojistik kapasitesi, stok yönetimi ve beklenmedik durumlarda yanıt hızı, teslimat güvencesinin belirleyicileridir.</p>

<h2>Dengeyi Kurmak: Tedarikçi Değerlendirme Kriterleri</h2>
<p>B2B tedarik sürecinde başarılı sonuçlar için aşağıdaki kriterlerin birlikte değerlendirilmesi önerilir:</p>
<ul>
<li>Ürün kalite standartları ve belgelendirme durumu</li>
<li>Referanslar ve önceki müşteri deneyimleri</li>
<li>Teslimat geçmişi ve stok kapasitesi</li>
<li>Toplam maliyet analizi</li>
<li>İletişim hızı ve problem çözme kapasitesi</li>
</ul>

<p>Kısa vadeli maliyet avantajını uzun vadeli güvenilirlik ve kalite ile dengelemek, B2B tedarik yönetiminin özünü oluşturur. Bu dengeyi kuran işletmeler, tedarik kaynaklı operasyonel kesintileri minimize ederek rekabet avantajı elde eder.</p>`,
    author: "Tomas Dış Ticaret",
    languageCode: "tr",
    publishedAt: "2025-01-10T08:00:00Z",
    metaTitle: "B2B Tedarikte Kalite, Fiyat ve Teslimat Dengesi | Tomas Dış Ticaret",
    metaDescription: "B2B tedarik kararlarında kalite, fiyat ve teslimat dengesini nasıl kurarsınız? Tedarikçi değerlendirme kriterleri ve toplam maliyet analizi rehberi.",
    isActive: true,
    createdAt: "2025-01-10T08:00:00Z",
  },
  {
    id: 4,
    title: "Endüstriyel Ürün Tedarikinde Doğru İş Ortağı Seçimi",
    slug: "endustriyel-urun-tedarikinde-dogru-is-ortagi-secimi",
    summary: "Endüstriyel ürün tedarikinde doğru iş ortağını seçmek; teknik bilgi, sektör deneyimi ve operasyonel güvenilirlik kriterlerinin birlikte değerlendirilmesini gerektirmektedir.",
    content: `<p>Endüstriyel ürün tedariki; standart tüketici ürünlerinden farklı olarak teknik spesifik bilgi, özel lojistik gereksinimleri ve uzun vadeli tedarikçi ilişkileri gerektirmektedir. Bu nedenle doğru iş ortağının seçimi, sürecin başarısını belirleyen kritik bir adımdır.</p>

<h2>Teknik Yetkinlik Neden Önemlidir?</h2>
<p>Endüstriyel ürünlerde teknik parametreler (ölçüler, malzeme sınıfları, tolerans aralıkları, sertifikasyon gereksinimleri vb.) son derece belirleyicidir. Bu teknik detayları anlayan ve aktarabilen bir iş ortağı, hatalı ürün temininden kaynaklanan maliyetleri önemli ölçüde azaltır.</p>

<h2>Sektörel Deneyim ve Referans Önemi</h2>
<p>Belirli bir endüstri segmentinde deneyim sahibi iş ortakları; doğru tedarikçi havuzuna erişim, pazar fiyatlarına hakimiyet ve olası sorunları öngörme kapasitesi açısından belirgin avantaj sağlar. Bu nedenle potansiyel iş ortaklarından ilgili sektörde tamamlanmış referans işler talep etmek yerinde bir yaklaşımdır.</p>

<h2>Operasyonel Güvenilirlik Kriterleri</h2>
<p>Doğru iş ortağının seçiminde operasyonel güvenilirliği değerlendirmek için şu sorular sorulabilir:</p>
<ul>
<li>Tedarik süreci şeffaf ve izlenebilir mi?</li>
<li>Beklenmedik gelişmelerde nasıl bir yanıt kapasitesi var?</li>
<li>İletişim ve raporlama standartları ne ölçüde sistematik?</li>
<li>Sözleşme ve garanti konularında açık ve net mi?</li>
</ul>

<h2>Uzun Vadeli İlişki Perspektifi</h2>
<p>Endüstriyel tedarik ilişkileri, tek seferlik işlemler değil uzun soluklu iş birlikleridir. İlk alımda ortaya çıkan güven ve kalite tutarlılığı, gelecekteki işlemlerin verimliliğini doğrudan belirler. Bu nedenle iş ortağı seçiminde kısa vadeli maliyet avantajının ötesinde uzun vadeli ortaklık potansiyeli değerlendirilmelidir.</p>

<p>Endüstriyel ürün tedarikinde doğru iş ortağı; teknik bilgiye sahip, referansla kanıtlanmış, süreci şeffaf yöneten ve uzun vadeli ilişkiye odaklanmış bir yapıdadır. Bu kriterleri karşılayan bir ortakla kurulan tedarik ilişkisi, operasyonel verimliliğin ve rekabet gücünün sürdürülebilir bir kaynağı haline gelir.</p>`,
    author: "Tomas Dış Ticaret",
    languageCode: "tr",
    publishedAt: "2025-02-20T08:00:00Z",
    metaTitle: "Endüstriyel Ürün Tedarikinde Doğru İş Ortağı Seçimi | Tomas Dış Ticaret",
    metaDescription: "Endüstriyel ürün tedarikinde iş ortağı seçim kriterleri: teknik yetkinlik, sektörel deneyim ve operasyonel güvenilirlik nasıl değerlendirilir?",
    isActive: true,
    createdAt: "2025-02-20T08:00:00Z",
  },
];

// ─── FAQs ─────────────────────────────────────────────────────────────────────

export const FALLBACK_FAQS: FaqDto[] = [
  {
    id: 1,
    question: "Tomas Dış Ticaret hangi alanlarda hizmet verir?",
    answer: "Uluslararası ticaret (ihracat & ithalat), ambalaj ve endüstriyel malzeme tedariki, polimer ve plastik hammadde ticareti, tarım ve gıda ürünleri, makine ve endüstriyel ürünler, mühendislik ve araştırma hizmetleri, yazılım ve dijital çözümler, reklam ve kurumsal kimlik tasarımı ile e-ticaret alanlarında B2B çözümler sunmaktayız.",
    languageCode: "tr",
    sortOrder: 1,
  },
  {
    id: 2,
    question: "İthalat ve ihracat süreçlerinde nasıl destek sağlıyorsunuz?",
    answer: "Tedarikçi veya alıcı araştırmasından evrak yönetimine, lojistik koordinasyonundan gümrük süreçlerine kadar operasyonun tüm aşamalarında süreç ortaklığı sağlıyoruz. Müşterilerimizin mevcut kaynaklarıyla başa çıkamayacakları operasyonel yükleri üstleniyor, süreci şeffaf biçimde yönetiyoruz.",
    languageCode: "tr",
    sortOrder: 2,
  },
  {
    id: 3,
    question: "Tedarikçi araştırması yapıyor musunuz?",
    answer: "Evet. Ürün kategorisi ve gereksinimlere göre uygun tedarikçi veya üreticileri araştırıyor, değerlendiriyor ve kıyaslamalı teklif alma sürecini koordine ediyoruz. Numune temini ve kalite ön değerlendirme sürecinde de destek sunuyoruz.",
    languageCode: "tr",
    sortOrder: 3,
  },
  {
    id: 4,
    question: "Hangi sektörlerde çözüm sunuyorsunuz?",
    answer: "Ambalaj ve endüstriyel malzeme, polimer ve plastik, tarım ve gıda, makine ve ekipman, yazılım ve dijital çözümler başta olmak üzere birden fazla sektörde faaliyet gösteriyoruz. Çok sektörlü deneyimimiz, birden fazla ürün grubunda işlem yapan işletmelere entegre çözümler sunmamıza olanak tanımaktadır.",
    languageCode: "tr",
    sortOrder: 4,
  },
  {
    id: 5,
    question: "Ambalaj ve endüstriyel malzeme tedariki yapıyor musunuz?",
    answer: "Evet. Çeşitli ambalaj türleri ve endüstriyel sarf malzemeleri tedarikinde ürün araştırması, fiyat analizi, numune temini ve teslimat koordinasyonu hizmetleri sunuyoruz. Hem tek seferlik hem de düzenli periyodik tedarik süreçleri için çözüm üretmekteyiz.",
    languageCode: "tr",
    sortOrder: 5,
  },
  {
    id: 6,
    question: "Polimer ve plastik hammadde tedarikinde nasıl ilerliyorsunuz?",
    answer: "Ürün tipi ve teknik spesifikasyonlar belirlendikten sonra uygun üretici ve tedarikçilerle iletişime geçiyor, teklif karşılaştırması yapıyoruz. Numune onay süreci ve ithalat koordinasyonunu da kapsayan uçtan uca bir tedarik süreci yönetiyoruz.",
    languageCode: "tr",
    sortOrder: 6,
  },
  {
    id: 7,
    question: "Tarım ve gıda ürünleri tarafında hangi süreçleri yönetiyorsunuz?",
    answer: "Tarımsal ürün ve gıda tedarikinde; alıcı/tedarikçi araştırması, ürün kalite kriterleri belirleme, sertifika ve belge yönetimi (menşe, sağlık sertifikası vb.), lojistik koordinasyon ve teslimat takibini yönetiyoruz. Sezon dinamiklerine göre planlı tedarik desteği de sunulmaktadır.",
    languageCode: "tr",
    sortOrder: 7,
  },
  {
    id: 8,
    question: "Makine ve endüstriyel ürünlerde teknik değerlendirme yapılıyor mu?",
    answer: "Makine ve endüstriyel ürün taleplerinde teknik şartname belirleme sürecinde destek sağlıyor, tedarikçilerden gelen tekliflerin teknik uygunluğunu değerlendiriyoruz. Gerektiğinde teknik danışmanlık koordinasyonu da sağlanmaktadır.",
    languageCode: "tr",
    sortOrder: 8,
  },
  {
    id: 9,
    question: "Teklif almak için hangi bilgileri paylaşmalıyım?",
    answer: "Teklif sürecini başlatmak için ürün veya hizmet kategorisi, tahmini miktar/hacim, teslimat ülkesi veya hedef pazar ve varsa teknik spesifikasyonları paylaşmanız yeterlidir. İletişim formundan veya doğrudan e-posta/telefon aracılığıyla bize ulaşabilirsiniz.",
    languageCode: "tr",
    sortOrder: 9,
  },
  {
    id: 10,
    question: "İş birliği süreci nasıl başlar?",
    answer: "İletişim formumuzu doldurarak, e-posta göndererek veya telefonla arayarak bizimle iletişime geçebilirsiniz. İlk görüşmede ihtiyaçlarınızı dinliyor, uygun çözüm yaklaşımını belirliyoruz. Değerlendirme sonrası teklif ve süreç planı sunuyoruz.",
    languageCode: "tr",
    sortOrder: 10,
  },
];
