export const tr = {
  meta: { title: 'boothcat — tarayıcında fotoğraf şeridi' },
  nav: { home: 'Ana sayfa', features: 'Özellikler', faq: 'SSS', about: 'Hakkında', contact: 'İletişim', privacy: 'Gizlilik' },
  footer: { tagline: '%100 tarayıcında çalışır' },
  common: { back: '← Geri', startOver: 'Baştan başla', tryNow: 'Hemen dene' },

  home: {
    titleA: 'Tarayıcında',
    titleB: 'bir fotoğraf kabini.',
    lead: 'Web kameranla dört kare çek ya da kendi fotoğraflarını yükle, bir filtre ve çerçeve seç, sonra yazdırıp paylaşabileceğin şeridi indir.',
    start: 'Kabini başlat',
    see: 'Neler yapıyor?',
    how: 'Nasıl çalışır',
    steps: [
      ['Kaynağı seç', 'Canlı kamera ya da galerinden dört fotoğraf.'],
      ['Kareleri çek', '3 saniyelik geri sayım dört kez tekrarlanır. Poz verirken filtreni seç.'],
      ['Çerçevele', 'On çerçeveden birini seç, bir başlık ekle.'],
      ['İndir', 'Şeridi JPEG olarak al, istediğin yerde yazdır.'],
    ],
    perks: [
      ['Hiçbir şey cihazından çıkmaz', 'Fotoğraflar canvas API ile işlenir ve tarayıcında kalır. Yükleme yok, hesap yok.'],
      ['Dört kare, on saniye', 'Geri sayım, flaş ve bir şerit. Gerçeğinden tek farkı bozuk para gerektirmemesi.'],
      ['Filtreler ve çerçeveler', 'Filmden ilham alan sekiz filtre ve anında çizilen on çerçeve: sade beyazdan kalplere ve yıldızlara.'],
      ['Baskıya hazır şerit', 'Klasik 2×6 kabin şeridi oranında yüksek çözünürlüklü JPEG indir.'],
    ],
  },

  start: {
    titleA: 'Nasıl',
    titleB: 'çekmek istersin?',
    lead: 'İki seçenek de aynı şeritle biter. Hiçbir durumda yükleme yapılmaz.',
    camera: 'Kameramı kullan',
    cameraSub: 'Geri sayımlı dört kare, gerçek kabin gibi.',
    upload: 'Fotoğraf yükle',
    uploadSub: 'Elindeki dört fotoğrafı seç.',
  },

  upload: {
    titleA: '',
    titleB: 'Dört',
    titleC: 'fotoğraf seç',
    full: 'Dört yuva da dolu',
    reading: 'Okunuyor…',
    tap: 'Görsel seçmek için dokun',
    hint: 'Yatay kareler en iyi sonucu verir.',
    left: 'kaldı.',
    remove: 'Kaldırmak için küçük resme tıkla.',
    error: 'Dosyalardan biri okunamadı. JPEG veya PNG dene.',
    next: 'Çerçeve seç →',
  },

  shoot: {
    titleA: 'Poz',
    titleB: 'ver',
    waking: 'Kamera uyandırılıyor…',
    blocked: 'Kamera erişimi engellendi. Tarayıcından izin ver ya da fotoğraf yükle.',
    start: 'Geri sayımı başlat',
    smile: 'Gülümse…',
    cancel: 'İptal',
    retake: 'Yeniden çek',
    next: 'Çerçeve seç →',
    uploadInstead: 'Yükleme yap',
  },

  filter: {
    title: 'Filtre',
    names: { none: 'Doğal', mono: 'Siyah beyaz', warm: 'Sıcak film', cool: 'Soğuk film', fade: 'Soluk', pop: 'Canlı', noir: 'Noir', vintage: 'Eski' },
  },

  frames: {
    titleA: 'Bir',
    titleB: 'çerçeve',
    next: 'Şeridimi yazdır →',
    names: { classic: 'Klasik beyaz', night: 'Gece', butter: 'Tereyağı', mint: 'Nane', blush: 'Pembe', hearts: 'Kalpler', stars: 'Yıldızlar', doodle: 'Karalama', cat: 'Boothcat', film: 'Film' },
  },

  print: {
    titleA: 'İşte',
    titleB: 'şeridin',
    developing: 'Banyo ediliyor…',
    caption: 'Başlık',
    date: 'Bugünün tarihini yaz',
    frame: 'Çerçeve',
    download: 'JPEG indir',
    share: 'Paylaş',
    toFrames: '← Çerçeveler',
    tip: 'İpucu: klasik kabin boyutu için 2×6 inç (5×15 cm) yazdır.',
    alt: 'Fotoğraf şeridin',
  },

  features: {
    titleA: 'Kabinin',
    titleB: 'yaptığı',
    titleC: 'her şey',
    items: [
      ['Canlı kamera kabini', 'Kareler arasında flaşla birlikte 3 saniyelik geri sayım dört kez tekrarlanır, jetonlu kabin gibi. Önizleme aynalıdır, doğal poz verirsin.'],
      ['Kendi fotoğraflarını getir', 'Web kameran yok mu? Galerinden dört görsel seç. Kaydedilmeden önce tarayıcıda küçültülür.'],
      ['Sekiz filtre, on çerçeve', 'Filtreler hem canlı önizlemeye hem de son canvas çizimine uygulanan CSS filtre ön ayarlarıdır; gördüğün neyse onu alırsın. Çerçeveler kodla çizilir: kalpler, yıldızlar, karalamalar, film delikleri ve bir kedi.'],
      ['Baskıya hazır çıktı', 'Şerit 600×1832 canvas üzerinde, 2×6 inç oranında çizilir ve yüksek kaliteli JPEG olarak dışa aktarılır.'],
      ['Tasarım gereği gizli', 'Sunucu yok, analitik yok, çerez yok. Oturum verisi localStorage\'da tutulur ve baştan başlayınca silinir.'],
      ['Çevrimdışı çalışır', 'Sayfa bir kez yüklendikten sonra ağdan hiçbir şey istemez. Her özellik canvas ve MediaDevices API\'leriyle çalışır.'],
    ],
  },

  faq: {
    titleA: 'Sorular ve',
    titleB: 'cevaplar',
    items: [
      ['Ücretsiz mi?', 'Evet. Satın alınacak bir şey, filigran ya da kayıt yok.'],
      ['Fotoğraflarım nereye gidiyor?', 'Hiçbir yere. Canvas API ile yakalanır ve "Baştan başla" diyene kadar tarayıcının localStorage\'ında kalır. Ağ sekmesinden doğrulayabilirsin: sayfa yüklendikten sonra hiçbir istek atılmaz.'],
      ['Kamera önizlemesi neden aynalı?', 'Çünkü ayna öyle çalışır ve poz vermeyi kolaylaştırır. Çekilen fotoğraflar önizlemeyle eşleşecek şekilde aynalanır.'],
      ['Telefonda kullanabilir miyim?', 'Evet. getUserMedia destekleyen her modern mobil tarayıcıda çalışır. iOS\'ta Safari kullan.'],
      ['Kamera açılmıyor.', 'Tarayıcının kamera izni vermesi gerekir. Adres çubuğundaki kamera simgesine bak, izin ver ve sayfayı yenile. Kamera erişimi ayrıca HTTPS (ya da localhost) gerektirir.'],
      ['Hangi boyutta yazdırmalıyım?', 'Şerit 2:6 oranındadır. 2×6 inç ya da 5×15 cm yazdır; çoğu fotoğraf stüdyosu bunu "fotoğraf şeridi" seçeneği olarak sunar.'],
      ['Çekimden sonra filtreyi değiştirebilir miyim?', 'Çekim sırasında seçilen filtre son çizime işlenir. Farklı bir filtreyle yeniden çekmek için "Yeniden çek"e bas; çerçeve ve başlık her zaman değiştirilebilir.'],
    ],
  },

  about: {
    titleA: 'boothcat',
    titleB: 'hakkında',
    p1: 'boothcat bir hafta sonu deneyi olarak başladı: geri sayımdan basılı şeride kadar bütün fotoğraf kabini deneyimi, hiç backend olmadan bir tarayıcı sekmesinde çalışabilir mi?',
    p2: 'Çalışabiliyormuş. Kamera getUserMedia\'dan gelir, kareler bir <canvas> üzerine dondurulur, filtreler canvas API\'nin de anladığı sıradan CSS filtre fonksiyonlarıdır ve çerçeveler görsel dosyaları yerine birkaç düzine satır path koduyla çizilir. Sonuç: fotoğraflarını ait olduğu yerde, sende tutan küçük ve hızlı bir site.',
    builtWith: 'Kullanılanlar',
    stack: ['React 19 ve React Router 7', 'Vite', 'Canvas 2D ve MediaDevices web API\'leri', 'Defter görünümlü elle yazılmış CSS'],
    openSource: 'Açık kaynak',
    openSourceText: 'Kod GitHub\'da MIT lisansıyla yayınlanmıştır. Hata bildirimleri ve pull request\'ler memnuniyetle karşılanır.',
  },

  contact: {
    titleA: 'Bir',
    titleB: 'merhaba de',
    p1: 'Bir hata mı buldun, çerçeve fikrin mi var, ya da gurur duyduğun bir şerit mi yazdırdın? Bana ulaşmanın en iyi yolu GitHub deposu: bir issue aç, dönüş yaparım.',
    p2: 'Bilerek iletişim formu yok: bu sitenin formu gönderecek bir sunucusu yok.',
  },

  privacy: {
    title: 'Gizlilik',
    lead: 'Kısa versiyon: boothcat hiçbir şey toplamaz.',
    sections: [
      ['Fotoğraflar', 'Çekilen ya da yüklenen fotoğraflar tarayıcında işlenir ve "boothcat:" ile başlayan anahtarlarla localStorage\'da saklanır. Asla iletilmez. "Baştan başla" onları siler; tarayıcının site verilerini temizlemek de siler.'],
      ['Kamera', 'Kamera erişimi yalnızca çekim sayfasında istenir ve sayfadan ayrılır ayrılmaz bırakılır.'],
      ['İzleme', 'Analitik betikleri, reklam etiketleri ya da çerez yok. Yazı tipleri Google Fonts\'tan yüklenir; her web yazı tipi sunucusu gibi isteği kaydedebilir.'],
      ['Dil tercihi', 'Dil seçimin, site bir sonraki sefer aynı şekilde açılsın diye localStorage\'da hatırlanır.'],
    ],
  },

  notFound: { title: '404', text: 'O sayfa kaybolmuş. Kediler böyle yapar.', home: 'Ana sayfaya dön' },
  error: { title: 'Bir şeyler bozuldu', reload: 'Yenile' },
}
