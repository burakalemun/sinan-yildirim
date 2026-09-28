'use client'

import { useState, useEffect } from 'react'
import { 
  MapPin, User, ShieldCheck, Compass, CheckCircle, Car, 
  Star, ChevronLeft, ChevronRight, Calendar, Send, PhoneCall, X, Filter
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { stopLenis, startLenis } from '@/components/SmoothScroll'
import { getCalApi } from "@calcom/embed-react"

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedDate, setSelectedDate] = useState('18 Nisan 2025')
  const [selectedSlot, setSelectedSlot] = useState('12:00 - Öğle Seansı')
  
  const [bookingService, setBookingService] = useState('İmza Düğün Hizmeti')
  const [bookingAddress, setBookingAddress] = useState('')
  const [bookingPhone, setBookingPhone] = useState('')
  
  const [testimonialIndex, setTestimonialIndex] = useState(0)

  const [isGalleryOpen, setIsGalleryOpen] = useState(false)
  const [galleryFilter, setGalleryFilter] = useState('all')
  const [galleryIndex, setGalleryIndex] = useState(0)
  const [galleryViewMode, setGalleryViewMode] = useState<'grid' | 'slider'>('grid')

  useEffect(() => {
    if (isGalleryOpen) {
      document.body.style.overflow = 'hidden'
      stopLenis()
    } else {
      document.body.style.overflow = 'auto'
      startLenis()
    }
    return () => {
      document.body.style.overflow = 'auto'
      startLenis()
    }
  }, [isGalleryOpen])

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "randevu" });
      cal("ui", {
        styles: {
          branding: { brandColor: "#735a32" }
        },
        hideEventTypeDetails: false,
        layout: "month_view"
      });
    })();
  }, [])
  
  // Yorumlar ve ilgili görseller
  const testimonials = [
    { 
      text: "Sessiz, sakin ve son derece kusursuz bir balayaj. Kendi evimde taze demlenmiş kahvemi yudumlarken birinci sınıf bir stilistin saçımla ilgilenmesi harikaydı. Salon trafiğine bir daha asla dönmem.", 
      author: "Zeynep A.", 
      context: "Evde Kişisel Seans — Mart 2025",
      image1: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop", 
      image2: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1200&auto=format&fit=crop", 
      detailTitle: "DOKU & HAREKET",
      detailText: "Sert Spreylerden Uzak, Doğal İpeksi Düşüş."
    },
    { 
      text: "Düğün sabahımda inanılmaz bir sükunet sağladı. Sinan Bey'in evime kurduğu profesyonel set o kadar iyiydi ki, kendimi lüks bir salonda hissettim. Kesinlikle tavsiye ederim.", 
      author: "Elif T.", 
      context: "Düğün Hazırlığı — Şubat 2025",
      image1: "https://images.unsplash.com/photo-1595476108010-b4d1f10d5e42?q=80&w=1200&auto=format&fit=crop", 
      image2: "https://images.unsplash.com/photo-1600948836101-f9ff5f6e2469?q=80&w=1200&auto=format&fit=crop", 
      detailTitle: "STRES YÖNETİMİ",
      detailText: "Kendi Alanınızda Mükemmel Odaklanma."
    },
    { 
      text: "Yıllardır aradığım kusursuz kesimi sonunda evimin salonunda buldum. Çok profesyonel, işlemi bitirdikten sonra geride tek bir saç teli bile bırakmayan inanılmaz bir özen.", 
      author: "Ceyda K.", 
      context: "Evde Kesim & Fön — Ocak 2025",
      image1: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=1200&auto=format&fit=crop", 
      image2: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=1200&auto=format&fit=crop", 
      detailTitle: "GEOMETRİK KESİM",
      detailText: "Yüz Hatlarına Uygun Sıfır Hata Prensibi."
    }
  ]

  const galleryItems = [
    { id: 1, category: 'renk', src: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=1600&auto=format&fit=crop', title: 'Güneş Işıltısı Balayaj', desc: 'Doğal saç tonunun üzerine atılan serbest fırça dokunuşlarıyla elde edilen organik ve yıpranmamış renk geçişleri. Ev ortamında dahi 0 hata ile uygulandı.' },
    { id: 2, category: 'gelin', src: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=1600&auto=format&fit=crop', title: 'İmza Gelin Topuzu', desc: 'Düğün sabahı gelinin konfor alanında hazırlanan, rüzgara ve tere dayanıklı, sert spreylerden uzak ipeksi gelin tasarımı.' },
    { id: 3, category: 'gelin', src: 'https://images.unsplash.com/photo-1595476108010-b4d1f10d5e42?q=80&w=1600&auto=format&fit=crop', title: 'Hazırlık Süreci', desc: 'Gelinin stres seviyesini en aza indiren, yorucu kuaför trafiğinden uzak, tamamen ona odaklanılmış kişisel bir deneyim.' },
    { id: 4, category: 'kesim', src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1600&auto=format&fit=crop', title: 'Dalgalı Fön & Şekillendirme', desc: 'Günün her saatinde kalıcılığını koruyan, saçın doğal volümünü destekleyen ipeksi dalga uygulaması.' },
    { id: 5, category: 'kesim', src: 'https://images.unsplash.com/photo-1600948836101-f9ff5f6e2469?q=80&w=1600&auto=format&fit=crop', title: 'Evde Salon Mimarisi', desc: 'Salonlarda kullanılan profesyonel tüm teçhizatın evinizin bir odasına kurularak, ardında tek bir tel bile bırakmadan icra edilen mimari kesim.' },
    { id: 6, category: 'kesim', src: 'https://images.unsplash.com/photo-1620331317312-74b88bf40907?q=80&w=1600&auto=format&fit=crop', title: 'Küt Kesim & Bob', desc: 'Çene hattını vurgulayan, ense kökünden uca kadar kusursuz bir simetri ile uygulanan keskin ve yapısal bob kesimi.' },
    { id: 7, category: 'renk', src: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=1600&auto=format&fit=crop', title: 'Soğuk Sarılar', desc: 'Saçın iç bağlarına zarar vermeyen yüksek kalite açıcılar kullanılarak yaratılan pürüzsüz buz sarısı yansımalar.' },
    { id: 8, category: 'renk', src: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=1600&auto=format&fit=crop', title: 'Kişiye Özel Tonlama', desc: 'Her cildin alt tonuna özel olarak hazırlanan organik karışımlarla sağlanan derin ve zengin renk doygunluğu.' },
  ]

  const filteredGallery = galleryItems.filter(item => galleryFilter === 'all' || item.category === galleryFilter)

  const nextGalleryImage = () => setGalleryIndex((prev) => (prev + 1) % filteredGallery.length)
  const prevGalleryImage = () => setGalleryIndex((prev) => (prev - 1 + filteredGallery.length) % filteredGallery.length)

  const handleGalleryFilter = (filter: string) => {
    setGalleryFilter(filter)
    setGalleryIndex(0)
  }

  const openGallery = (filter: string = 'all', targetId: number | null = null) => {
    setGalleryFilter(filter)
    setIsGalleryOpen(true)
    if (targetId) {
      const newFiltered = galleryItems.filter(item => filter === 'all' || item.category === filter)
      const newIdx = newFiltered.findIndex(i => i.id === targetId)
      setGalleryIndex(newIdx >= 0 ? newIdx : 0)
      setGalleryViewMode('slider')
    } else {
      setGalleryViewMode('grid')
    }
  }

  const gridClasses = [
    "col-span-2 row-span-2",
    "col-span-1 row-span-1",
    "col-span-1 row-span-2",
    "col-span-1 row-span-1",
    "col-span-2 md:col-span-3 row-span-1",
    "col-span-2 md:col-span-1 row-span-1",
  ]

  const sendWhatsAppBooking = () => {
    const address = bookingAddress || 'Belirtilmedi'
    const phone = bookingPhone || 'Belirtilmedi'
    const message = `Merhaba Sinan Yıldırım. Evimde kişisel saç randevusu talep ediyorum:\n- Tarih: ${selectedDate}\n- Seans: ${selectedSlot}\n- Hizmet: ${bookingService}\n- Adres: ${address}\n- İletişim: ${phone}\nMüsaitlik ve detay teyidini rica ederim.`
    window.open(`https://wa.me/905550000000?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <>
      {/* NAVBAR */}
      <header className="fixed top-0 w-full z-50 bg-surface/95 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.03)]">
        <div className="w-full bg-primary-container text-on-primary py-2 px-margin text-center">
          <p className="font-label-caps text-label-caps uppercase tracking-[0.2em] text-surface-container-high">
            EVİNİZİN KONFORUNDA PROFESYONEL SAÇ TASARIM HİZMETİ • RANDEVU TAKVİMİ AÇILDI
          </p>
        </div>
        <div className="h-24 max-w-7xl mx-auto px-margin md:px-margin-desktop flex items-center justify-between gap-6 md:gap-8">
          
          <nav className="hidden xl:flex items-center gap-10 flex-1">
            <a href="#hizmet-menusu" className="font-label-caps text-[0.625rem] md:text-[0.6875rem] uppercase tracking-[0.2em] text-on-surface-variant hover:text-primary transition-colors">Menü & Tarifeler</a>
            <a href="#galeri" className="font-label-caps text-[0.625rem] md:text-[0.6875rem] uppercase tracking-[0.2em] text-on-surface-variant hover:text-primary transition-colors">Galeri</a>
            <a href="#yorumlar" className="font-label-caps text-[0.625rem] md:text-[0.6875rem] uppercase tracking-[0.2em] text-on-surface-variant hover:text-primary transition-colors">Yorumlar</a>
          </nav>
          
          <div className="text-center flex-shrink-0 flex-1 xl:flex-none">
            <a href="#" className="block">
              <span className="font-headline-sm text-[1.5rem] md:text-[1.75rem] tracking-[0.15em] uppercase text-primary font-normal block whitespace-nowrap">Sinan Yıldırım</span>
              <span className="font-label-caps text-[0.625rem] uppercase text-secondary tracking-[0.3em] block mt-1">Private Hair Atelier</span>
            </a>
          </div>
          
          <div className="hidden sm:flex items-center justify-end gap-6 flex-1">
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="hidden sm:inline-flex items-center gap-2 font-label-caps text-[0.625rem] md:text-[0.6875rem] uppercase tracking-[0.16em] text-on-surface-variant hover:text-secondary transition-colors">
              <span className="w-1.5 h-1.5 rounded-none bg-secondary"></span>
              WhatsApp
            </a>
            <a href="#hizli-randevu" className="hidden xl:inline-flex items-center justify-center border border-primary text-primary hover:bg-primary hover:text-on-primary px-6 py-2.5 transition-colors font-label-caps text-[0.625rem] uppercase tracking-[0.2em] rounded-none">
              Randevu Al
            </a>
          </div>
        </div>
      </header>

      <main className="w-full pt-32 bg-surface min-h-[calc(100vh-200px)]">
        <div className="flex flex-col w-full">
          
          {/* SECTION 1: HERO SECTION */}
          <section className="relative w-full max-w-7xl mx-auto px-margin md:px-margin-desktop pt-6 pb-space-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center">
              <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
                <div className="inline-flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                  <span className="font-label-caps text-label-caps uppercase tracking-[0.22em] text-secondary">EST. 2021 • EVİNİZDE KUSURSUZ SALON DENEYİMİ</span>
                </div>
                <h1 className="font-display-hero text-headline-lg lg:text-[4.25rem] leading-[1.08] text-primary tracking-[-0.025em]">
                  Salon konforu, kendi <span className="italic font-normal font-headline-lg text-secondary">özel alanınızda.</span>
                </h1>
                <p className="font-body-lead text-body-lead text-on-surface-variant font-light max-w-xl">
                  Bölünmemiş birebir ilgi, üst düzey kesim teknikleri, organik renklendirme işlemleri ve ardında sıfır iz bırakan kusursuz ayrılış. Tüm profesyonel ekipmanımızla kapınıza geliyoruz.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <a href="#hizli-randevu" className="inline-flex items-center justify-center bg-primary text-on-primary hover:bg-secondary hover:text-on-secondary px-8 py-4 transition-all duration-300 font-label-caps text-label-caps uppercase tracking-[0.2em] shadow-sm">
                    Tarih Seçin
                  </a>
                  <a href="#hizmet-menusu" className="inline-flex items-center justify-center border border-on-surface/20 text-on-surface hover:border-secondary hover:text-secondary px-7 py-4 transition-all duration-300 font-label-caps text-label-caps uppercase tracking-[0.18em]">
                    Hizmet Menüsü
                  </a>
                </div>
                <div className="pt-6 border-t border-outline-variant/30 flex items-center gap-3 text-on-surface-variant">
                  <ShieldCheck className="w-[18px] h-[18px] text-secondary shrink-0" />
                  <p className="font-body-diminished text-[0.75rem] tracking-wide">
                    İstediğiniz lokasyonda profesyonel hizmet • Tam Mahremiyet Garantisi
                  </p>
                </div>
              </div>
              <div className="lg:col-span-7 relative">
                <div className="relative bg-surface-container-low p-2 md:p-3 shadow-md">
                  <div className="relative aspect-[4/5] sm:aspect-[6/5] lg:aspect-[4/5] overflow-hidden bg-surface-container">
                    <img className="w-full h-full object-cover grayscale-[8%] contrast-[1.02]" src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2874&auto=format&fit=crop" alt="Hero Hair Styling Session" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent pointer-events-none"></div>
                    <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between bg-surface-container-lowest/95 backdrop-blur-sm px-5 py-3 border border-outline-variant/20 shadow-sm">
                      <div className="flex items-center gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-secondary"></span>
                        <span className="font-label-caps text-label-caps uppercase text-on-surface tracking-[0.2em]">Evinizde Özel Seans</span>
                      </div>
                      <span className="hidden sm:inline font-price-tabular text-price-tabular text-on-surface-variant">Rezervasyon: Sinan Yıldırım</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 2: HİKAYEMİZ */}
          <section className="w-full max-w-7xl mx-auto px-margin md:px-margin-desktop py-space-2xl border-y border-outline-variant/25 scroll-mt-[140px]" id="hikayemiz">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
              <div className="order-2 lg:order-1 space-y-8">
                <div className="space-y-4">
                  <span className="font-label-caps text-label-caps uppercase tracking-[0.25em] text-secondary">VİZYON & HİKAYEMİZ</span>
                  <h2 className="font-display-hero text-headline-md md:text-headline-lg text-primary leading-tight">Zamanın ve Mekanın Ötesinde Bir Dokunuş</h2>
                </div>
                <div className="space-y-6 font-body-regular text-body-regular text-on-surface-variant font-light leading-relaxed">
                  <p>
                    Yıllarca en prestijli salonlarda, cemiyet hayatının önde gelen isimlerine hizmet verdikten sonra, gerçek lüksün aslında <strong>"mahremiyet ve kişiselleştirilmiş zaman"</strong> olduğuna karar verdim.
                  </p>
                  <p>
                    Sinan Yıldırım Private Hair Atelier; salonlardaki o yorucu gürültüden, bitmek bilmeyen bekleme sürelerinden ve asistanlara devredilen işlemlerden kaçanlar için doğdu. Amacım, tamamen size ait olan bir alanda (evinizde, villanızda veya otel süitinizde) yalnızca sizin saçınızın karakteristiğine odaklanmak.
                  </p>
                  <p>
                    İsviçre çeliği makaslarımızdan tutun, kullandığımız organik boya pigmentlerine kadar her bir detay, evinizde sıfır iz bırakarak size kusursuz bir deneyim yaşatmak için tasarlandı.
                  </p>
                </div>
                <div className="pt-4 border-t border-outline-variant/30">
                  <span className="font-serif italic text-3xl text-primary block mt-4">Sinan Yıldırım</span>
                  <span className="font-label-caps text-[0.625rem] uppercase tracking-widest text-secondary block mt-2">Kurucu & Baş Tasarımcı</span>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="relative aspect-[3/4] bg-surface-container-low p-3 md:p-4 shadow-sm border border-outline-variant/20">
                  <div className="w-full h-full overflow-hidden bg-surface-container relative">
                    <img src="https://images.unsplash.com/photo-1620331317312-74b88bf40907?q=80&w=1200&auto=format&fit=crop" className="w-full h-full object-cover grayscale-[10%]" alt="Sinan Yıldırım Story" />
                    <div className="absolute top-4 left-4 bg-surface-container-lowest/90 px-3.5 py-1.5 border border-outline-variant/30">
                      <span className="font-label-caps text-[0.65rem] tracking-[0.2em] uppercase text-primary">Kişisel Atelier Vizyonu</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 3: EVDE PROFESYONEL HİZMET FARKI */}
          <section className="w-full max-w-7xl mx-auto px-margin md:px-margin-desktop py-space-2xl">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <span className="font-label-caps text-label-caps uppercase tracking-[0.25em] text-secondary">KUSURSUZ VE ZAHMETSİZ</span>
              <h2 className="font-display-hero text-headline-lg text-primary uppercase tracking-tight">SALON STANDARTLARI, YOLCULUK ZAHMETİ OLMADAN.</h2>
              <div className="w-12 h-[1px] bg-secondary mx-auto mt-4"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center">
              <div className="lg:col-span-6 relative">
                <div className="bg-surface-container-low p-3 md:p-4 shadow-sm border border-outline-variant/20">
                  <div className="aspect-[4/3] sm:aspect-[1/1] overflow-hidden bg-surface-container relative">
                    <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?q=80&w=1200&auto=format&fit=crop" alt="Professional Tools" />
                    <div className="absolute top-4 left-4 bg-surface-container-lowest/90 px-3.5 py-1.5 border border-outline-variant/30">
                      <span className="font-label-caps text-[0.65rem] tracking-[0.2em] uppercase text-primary">Profesyonel Ekipmanlar</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-6 space-y-10 pl-0 lg:pl-6">
                <div className="group border-l-2 border-outline-variant/50 hover:border-secondary pl-6 transition-colors duration-300">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="font-label-caps text-secondary text-label-caps uppercase tracking-[0.25em]">Prensip 01</span>
                    <span className="text-outline-variant text-[11px]">•</span>
                    <h3 className="font-headline-sm text-headline-sm text-primary">Eksiksiz Donanım ve Temizlik</h3>
                  </div>
                  <p className="font-body-regular text-body-regular text-on-surface-variant font-light leading-relaxed">
                    Salon kalitesindeki tüm profesyonel kesim, boya, fön ve şekillendirme ekipmanlarımızla evinizin konforuna geliyoruz. İşlem bittikten sonra alanınızı tek bir saç teli veya leke bırakmadan, ilk anki temizliğiyle teslim ediyoruz.
                  </p>
                </div>
                <div className="group border-l-2 border-outline-variant/50 hover:border-secondary pl-6 transition-colors duration-300">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="font-label-caps text-secondary text-label-caps uppercase tracking-[0.25em]">Prensip 02</span>
                    <span className="text-outline-variant text-[11px]">•</span>
                    <h3 className="font-headline-sm text-headline-sm text-primary">Bölünmemiş Birebir İlgi</h3>
                  </div>
                  <p className="font-body-regular text-body-regular text-on-surface-variant font-light leading-relaxed">
                    Salon gürültüsü yok, bekleme sırası yok, aynı anda ilgilenilen başka bir müşteri yok. Sinan Yıldırım randevu süresince yalnızca sizin saçınızın yapısına, yüz hatlarınıza ve kişisel isteklerinize odaklanır.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 4: ŞEFFAF HİZMET MENÜSÜ & TARİFELER */}
          <section className="w-full bg-surface-container-low py-space-2xl border-t border-outline-variant/25 scroll-mt-[140px]" id="hizmet-menusu">
            <div className="max-w-7xl mx-auto px-margin md:px-margin-desktop">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                <div className="space-y-2">
                  <span className="font-label-caps text-label-caps uppercase tracking-[0.25em] text-secondary">2025/2026 TASARIM REPERTUARI</span>
                  <h2 className="font-display-hero text-headline-lg text-primary">Hizmet Menüsü & Tarifeler</h2>
                  <p className="font-body-diminished text-body-diminished text-on-surface-variant">Tüm profesyonel malzemeler ve işlem sonrası temizlik protokolü tarife kapsamındadır.</p>
                </div>
                <div className="flex flex-wrap gap-6 border-b border-outline-variant/30 w-full md:w-auto">
                  <button 
                    className={`pb-3 font-label-caps text-label-caps uppercase tracking-wider transition-all border-b-2 ${selectedCategory === 'all' ? 'border-primary text-primary' : 'border-transparent text-on-surface-variant hover:text-primary'}`}
                    onClick={() => setSelectedCategory('all')}
                  >Tümü</button>
                  <button 
                    className={`pb-3 font-label-caps text-label-caps uppercase tracking-wider transition-all border-b-2 ${selectedCategory === 'gelin' ? 'border-primary text-primary' : 'border-transparent text-on-surface-variant hover:text-primary'}`}
                    onClick={() => setSelectedCategory('gelin')}
                  >Gelin & Davet</button>
                  <button 
                    className={`pb-3 font-label-caps text-label-caps uppercase tracking-wider transition-all border-b-2 ${selectedCategory === 'renk' ? 'border-primary text-primary' : 'border-transparent text-on-surface-variant hover:text-primary'}`}
                    onClick={() => setSelectedCategory('renk')}
                  >Boya & Renklendirme</button>
                  <button 
                    className={`pb-3 font-label-caps text-label-caps uppercase tracking-wider transition-all border-b-2 ${selectedCategory === 'kesim' ? 'border-primary text-primary' : 'border-transparent text-on-surface-variant hover:text-primary'}`}
                    onClick={() => setSelectedCategory('kesim')}
                  >Kesim & Fön</button>
                </div>
              </div>
              <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                <AnimatePresence mode="popLayout">
                  {(selectedCategory === 'all' || selectedCategory === 'gelin') && (
                    <motion.div 
                      layout
                      key="gelin"
                      initial={{ opacity: 0, scale: 0.95, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: -10 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className="bg-surface-container-lowest p-6 border border-outline-variant/30 flex flex-col justify-between hover:border-secondary transition-colors duration-200"
                    >
                      <div>
                        <div className="flex justify-between items-baseline border-b border-outline-variant/30 pb-3 mb-3">
                          <div>
                            <span className="font-label-caps text-[0.625rem] text-secondary uppercase tracking-[0.2em] block mb-1">İMZA DÜĞÜN HİZMETİ</span>
                            <h3 className="font-headline-sm text-headline-sm text-primary">Gelin Saçı Tasarımı</h3>
                          </div>
                          <div className="text-right">
                            <span className="font-price-tabular text-price-tabular text-primary font-semibold block">3500 ₺</span>
                            <span className="font-body-diminished text-[0.75rem] text-on-surface-variant">Özel Seans</span>
                          </div>
                        </div>
                        <p className="font-body-regular text-body-diminished text-on-surface-variant font-light leading-relaxed">
                          Ön prova seansı, düğün sabahı evinizde özel saç tasarımı, duvak/taç yerleşimi ve hazırlık sürecinde ihtiyacınız olan stres yönetimi.
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {(selectedCategory === 'all' || selectedCategory === 'renk') && (
                    <motion.div 
                      layout
                      key="renk"
                      initial={{ opacity: 0, scale: 0.95, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: -10 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className="bg-surface-container-lowest p-6 border border-outline-variant/30 flex flex-col justify-between hover:border-secondary transition-colors duration-200"
                    >
                      <div>
                        <div className="flex justify-between items-baseline border-b border-outline-variant/30 pb-3 mb-3">
                          <div>
                            <span className="font-label-caps text-[0.625rem] text-secondary uppercase tracking-[0.2em] block mb-1">BOYUTLANDIRICI SANAT</span>
                            <h3 className="font-headline-sm text-headline-sm text-primary">Balayaj & Organik Renklendirme</h3>
                          </div>
                          <div className="text-right">
                            <span className="font-price-tabular text-price-tabular text-primary font-semibold block">2850 ₺<span className="font-normal text-xs text-on-surface-variant">'den</span></span>
                          </div>
                        </div>
                        <p className="font-body-regular text-body-diminished text-on-surface-variant font-light leading-relaxed">
                          Serbest el fırça tekniği, saçı yıpratmayan kaliteli açıcılar, özel bakım destekli boya işlemleri ve kişiye özel tonlama cilası.
                        </p>
                      </div>
                    </motion.div>
                  )}
                  
                  {(selectedCategory === 'all' || selectedCategory === 'kesim') && (
                    <motion.div 
                      layout
                      key="kesim"
                      initial={{ opacity: 0, scale: 0.95, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: -10 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className="bg-surface-container-lowest p-6 border border-outline-variant/30 flex flex-col justify-between hover:border-secondary transition-colors duration-200"
                    >
                      <div>
                        <div className="flex justify-between items-baseline border-b border-outline-variant/30 pb-3 mb-3">
                          <div>
                            <span className="font-label-caps text-[0.625rem] text-secondary uppercase tracking-[0.2em] block mb-1">MİMARİ DOKUNUŞ</span>
                            <h3 className="font-headline-sm text-headline-sm text-primary">Kişiselleştirilmiş Kesim & Fön</h3>
                          </div>
                          <div className="text-right">
                            <span className="font-price-tabular text-price-tabular text-primary font-semibold block">1200 ₺</span>
                          </div>
                        </div>
                        <p className="font-body-regular text-body-diminished text-on-surface-variant font-light leading-relaxed">
                          Yüz hatlarınıza en uygun geometrik kesim, kırıkların temizlenmesi ve saçınızın yapısına uygun ipeksi, kalıcı fön işlemi.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
              <div className="mt-10 p-5 bg-surface-container flex flex-col sm:flex-row items-center justify-between gap-4 border border-outline-variant/30">
                <div className="flex items-center gap-3">
                  <Car className="w-[22px] h-[22px] text-secondary shrink-0" />
                  <span className="font-body-diminished text-body-diminished text-on-surface">Merkezi noktalara ulaşım bedeli fiyata dahildir. Uzak mesafeler için randevu esnasında bilgi verilir.</span>
                </div>
                <span className="font-label-caps text-label-caps uppercase tracking-wider text-secondary">Kusursuz Hizmet Garantisi</span>
              </div>
            </div>
          </section>

          {/* SECTION: GALERİ / PORTFOLYO */}
          <section className="w-full bg-surface py-space-2xl border-t border-outline-variant/25 scroll-mt-[140px]" id="galeri">
            <div className="max-w-7xl mx-auto px-margin md:px-margin-desktop">
              <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                <div className="space-y-3 max-w-xl">
                  <span className="font-label-caps text-label-caps uppercase tracking-[0.25em] text-secondary">PORTFOLYO</span>
                  <h2 className="font-display-hero text-headline-lg text-primary">İmza Görünümler</h2>
                  <p className="font-body-regular text-body-regular text-on-surface-variant font-light">
                    Kişiye özel tasarlanmış renk geçişleri, kusursuz balayaj uygulamaları ve yapısal kesimlerden örnekler.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                  <span className="font-label-caps text-[0.625rem] tracking-[0.2em] uppercase text-on-surface-variant">@sinanyildirim</span>
                </div>
              </div>
              
              {/* Editorial Grid Layout */}
              <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[320px] gap-4">
                {galleryItems.slice(0, 6).map((item, idx) => (
                  <button key={item.id} onClick={() => openGallery('all', item.id)} className={`${gridClasses[idx]} group relative overflow-hidden bg-surface-container text-left w-full h-full`}>
                    <img src={item.src} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt={item.title} />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                       <div className="bg-surface/95 text-primary px-5 py-2 font-label-caps text-[0.6rem] uppercase tracking-[0.2em] backdrop-blur-sm border border-primary/20">İncele</div>
                    </div>
                    <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0 z-10">
                      <span className="font-label-caps text-[0.6875rem] uppercase tracking-widest text-on-primary">{item.title}</span>
                    </div>
                  </button>
                ))}
              </div>
              
              <div className="mt-12 text-center">
                <button onClick={() => openGallery('all', null)} className="inline-flex items-center justify-center border border-primary text-primary hover:bg-primary hover:text-on-primary px-10 py-3.5 transition-colors duration-300 font-label-caps text-[0.6875rem] uppercase tracking-[0.2em]">
                  Tüm Portfolyoyu İncele ({galleryItems.length} Görsel)
                </button>
              </div>
            </div>
          </section>

          {/* YENİ BÖLÜM: DİNAMİK MARQUEE YORUMLAR (Framer Motion) */}
          <section className="w-full bg-primary text-on-primary py-5 overflow-hidden border-y border-outline-variant/20 relative flex items-center">
            {/* Kenar karartmaları (Gradient Mask) */}
            <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-primary to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-primary to-transparent z-10 pointer-events-none"></div>
            
            <motion.div 
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
              className="flex whitespace-nowrap items-center gap-16 w-max"
            >
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex items-center gap-12 md:gap-16 px-6 md:px-8">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center text-secondary gap-0.5">
                      <Star fill="currentColor" className="w-[14px] h-[14px]" /><Star fill="currentColor" className="w-[14px] h-[14px]" /><Star fill="currentColor" className="w-[14px] h-[14px]" /><Star fill="currentColor" className="w-[14px] h-[14px]" /><Star fill="currentColor" className="w-[14px] h-[14px]" />
                    </div>
                    <span className="font-label-caps text-[0.6875rem] uppercase tracking-[0.2em] opacity-90">"Evimde salon kalitesini yaşamak harikaydı." – Zeynep A.</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center text-secondary gap-0.5">
                      <Star fill="currentColor" className="w-[14px] h-[14px]" /><Star fill="currentColor" className="w-[14px] h-[14px]" /><Star fill="currentColor" className="w-[14px] h-[14px]" /><Star fill="currentColor" className="w-[14px] h-[14px]" /><Star fill="currentColor" className="w-[14px] h-[14px]" />
                    </div>
                    <span className="font-label-caps text-[0.6875rem] uppercase tracking-[0.2em] opacity-90">"Gürültü yok, sıra yok. Sadece size odaklanıyor." – Elif T.</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center text-secondary gap-0.5">
                      <Star fill="currentColor" className="w-[14px] h-[14px]" /><Star fill="currentColor" className="w-[14px] h-[14px]" /><Star fill="currentColor" className="w-[14px] h-[14px]" /><Star fill="currentColor" className="w-[14px] h-[14px]" /><Star fill="currentColor" className="w-[14px] h-[14px]" />
                    </div>
                    <span className="font-label-caps text-[0.6875rem] uppercase tracking-[0.2em] opacity-90">"Düğün sabahımın kurtarıcısı oldu." – Ceyda K.</span>
                  </div>
                  <div className="flex items-center gap-3 opacity-60">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                    </svg>
                    <span className="font-label-caps text-[0.6875rem] uppercase tracking-[0.2em]">@SINANYILDIRIM</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </section>

          {/* SECTION 5: FOTOĞRAF GALERİSİ & MÜŞTERİ YORUMU CAROUSEL */}
          <section className="w-full max-w-7xl mx-auto px-margin md:px-margin-desktop py-space-xl scroll-mt-[140px]" id="yorumlar">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
              <span className="font-label-caps text-label-caps uppercase tracking-[0.22em] text-secondary">MUTLU MÜŞTERİLER</span>
              <h2 className="font-display-hero text-headline-lg text-primary">Kendi Alanınızda Mükemmellik</h2>
            </div>
            
            <div className="grid items-stretch">
              {testimonials.map((t, index) => (
                <div 
                  key={index}
                  className={`col-start-1 row-start-1 grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop transition-opacity duration-700 ease-in-out ${testimonialIndex === index ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}
                >
                  <div className="lg:col-span-5 flex flex-col">
                    <div className="bg-surface-container-low p-2 h-full flex flex-col border border-outline-variant/25">
                      <div className="aspect-[3/4] overflow-hidden bg-surface-container relative">
                        <img className="w-full h-full object-cover transition-transform duration-1000 scale-100 hover:scale-105" src={t.image1} alt="Gallery Shot 1" />
                        <div className="absolute bottom-3 left-3 bg-surface-container-lowest/90 px-3 py-1 border border-outline-variant/20">
                          <p className="font-label-caps text-[0.625rem] tracking-[0.16em] uppercase text-primary">{t.context}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-gutter items-center bg-surface-container-low p-4 border border-outline-variant/25">
                      <div className="aspect-square overflow-hidden bg-surface-container relative">
                        <img className="w-full h-full object-cover" src={t.image2} alt="Gallery Shot 2" />
                      </div>
                      <div className="p-4 space-y-3">
                        <span className="font-label-caps text-[0.625rem] uppercase tracking-[0.2em] text-secondary">{t.detailTitle}</span>
                        <h3 className="font-headline-sm text-[1.125rem] text-primary leading-snug">{t.detailText}</h3>
                      </div>
                    </div>
                    
                    <div className="bg-surface-container-lowest p-8 md:p-10 border border-outline-variant/30 flex flex-col justify-center min-h-[300px] relative">
                      <span className="text-secondary/20 font-serif text-7xl absolute top-3 left-4 leading-none select-none">“</span>
                      
                      <div className="relative z-10 flex flex-col h-full justify-between">
                        <div className="min-h-[140px] flex items-center">
                          <p className="font-body-lead text-[1.25rem] text-primary italic font-normal leading-relaxed">
                            «{t.text}»
                          </p>
                        </div>
                        
                        <div className="mt-4">
                          <div className="flex items-center justify-between border-t border-outline-variant/30 pt-4">
                            <div>
                              <p className="font-label-caps text-label-caps text-primary uppercase tracking-[0.16em] font-medium">{t.author}</p>
                            </div>
                            <div className="flex items-center text-secondary gap-0.5">
                              <Star fill="currentColor" className="w-4 h-4" />
                              <Star fill="currentColor" className="w-4 h-4" />
                              <Star fill="currentColor" className="w-4 h-4" />
                              <Star fill="currentColor" className="w-4 h-4" />
                              <Star fill="currentColor" className="w-4 h-4" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 flex items-center justify-center gap-3 relative z-20">
              {testimonials.map((_, idx) => (
                <button 
                  key={idx}
                  onClick={() => setTestimonialIndex(idx)}
                  className={`h-1.5 transition-all duration-300 ${testimonialIndex === idx ? 'w-8 bg-primary' : 'w-2 bg-outline-variant hover:bg-secondary'}`}
                  aria-label={`Yorum ${idx + 1}`}
                />
              ))}
            </div>
          </section>

          {/* SECTION 6: VIP REZERVASYON (MODAL TETİKLEYİCİ) */}
          <section className="w-full bg-surface-container-lowest py-space-2xl border-t border-outline-variant/25 scroll-mt-[140px]" id="hizli-randevu">
            <div className="max-w-4xl mx-auto px-margin md:px-margin-desktop text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/10 border border-secondary/20 mb-8">
                <span className="w-1.5 h-1.5 rounded-none bg-secondary"></span>
                <span className="font-label-caps text-[0.6875rem] uppercase tracking-[0.22em] text-secondary">VİP REZERVASYON</span>
              </div>
              <h2 className="font-display-hero text-[2.5rem] md:text-headline-lg text-primary mb-6">Kendi Zamanınızı Seçin</h2>
              <p className="font-body-regular text-body-regular text-on-surface-variant font-light max-w-xl mx-auto mb-12">
                Sayfadan ayrılmadan size en uygun hizmeti ve saati seçmek için özel takvimimizi kullanın. Seçiminiz anında ajandamıza yansıyacaktır.
              </p>
              
              <button 
                data-cal-link="burak-kaya"
                data-cal-config='{"layout":"month_view","theme":"light"}'
                className="inline-flex items-center justify-center gap-3 bg-primary text-on-primary hover:bg-secondary hover:text-on-secondary px-8 md:px-12 py-5 md:py-6 transition-all duration-300 font-label-caps text-[0.6875rem] md:text-sm uppercase tracking-[0.25em] shadow-sm"
              >
                <Calendar className="w-5 h-5" />
                Takvimi Aç & Randevu Al
              </button>
            </div>
          </section>

          {/* SECTION 7: CONCIERGE DIRECT CONTACT */}
          <section className="w-full max-w-7xl mx-auto px-margin md:px-margin-desktop py-space-xl">
            <div className="bg-primary text-on-primary p-8 md:p-12 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="space-y-3 text-center lg:text-left z-10 max-w-2xl">
                <span className="font-label-caps text-[0.6875rem] uppercase tracking-[0.25em] text-secondary-fixed">KİŞİYE ÖZEL İLETİŞİM</span>
                <h3 className="font-display-hero text-headline-sm md:text-headline-md tracking-tight">Özel Etkinlik veya Gelinlik Provası İçin Doğrudan Arayın</h3>
                <p className="font-body-regular text-body-diminished text-surface-container-high font-light">
                  Büyük davetler, çoklu konuk hazırlıkları veya toplu işlemler için detayları konuşalım.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 z-10">
                <a href="tel:+905550000000" className="inline-flex items-center gap-2 bg-surface-container-lowest text-on-surface hover:bg-surface-container-high px-6 py-4 font-label-caps text-label-caps uppercase tracking-[0.16em] transition-colors">
                  <PhoneCall className="w-[18px] h-[18px] text-secondary" />
                  +90 555 000 00 00
                </a>
              </div>
              <div className="absolute -right-12 -bottom-12 w-64 h-64 rounded-full bg-secondary/10 pointer-events-none blur-2xl"></div>
            </div>
          </section>

        </div>
      </main>

      <footer className="w-full bg-surface-container-low text-on-surface pt-space-xl pb-space-lg shadow-[0_-1px_6px_rgba(0,0,0,0.02)]">
        <div className="max-w-7xl mx-auto px-margin md:px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter-desktop pb-space-xl">
            <div className="md:col-span-1 space-y-4">
              <p className="font-headline-sm text-headline-sm uppercase tracking-wider text-primary">Sinan Yıldırım</p>
              <p className="font-label-caps text-label-caps uppercase text-secondary tracking-[0.2em]">Private Hair Atelier</p>
              <p className="font-body-diminished text-body-diminished text-on-surface-variant mt-2">Evinizin konforunda, tamamen size özel profesyonel saç tasarım ve renklendirme hizmeti.</p>
            </div>
            <div className="space-y-3">
              <p className="font-label-caps text-label-caps uppercase tracking-[0.18em] text-on-surface">Hizmet Alanları</p>
              <ul className="font-body-diminished text-body-diminished text-on-surface-variant space-y-1.5">
                <li>Evde Kesim & Renklendirme</li>
                <li>Düğün & Gelin Saçı Tasarımı</li>
                <li>Özel Gün & Davet Hazırlığı</li>
                <li>Grup/Aile Randevuları</li>
              </ul>
            </div>
            <div className="space-y-3">
              <p className="font-label-caps text-label-caps uppercase tracking-[0.18em] text-on-surface">İletişim & Randevu</p>
              <ul className="font-body-diminished text-body-diminished text-on-surface-variant space-y-1.5">
                <li>Randevu: Salı – Pazar</li>
                <li>WhatsApp: +90 555 000 00 00</li>
                <li>E-posta: iletisim@sinanyildirim.com</li>
              </ul>
            </div>
            <div className="space-y-3">
              <p className="font-label-caps text-label-caps uppercase tracking-[0.18em] text-on-surface">Temizlik & Profesyonellik</p>
              <p className="font-body-diminished text-body-diminished text-on-surface-variant">Tüm ekipmanlar her işlem öncesi sterilize edilir. İşlem sonrası evinizde tek bir iz veya leke bırakılmadan temizlik sağlanır.</p>
            </div>
          </div>
          <div className="pt-space-md flex flex-col md:flex-row items-center justify-between text-on-surface-variant font-label-caps text-label-caps gap-4">
            <p>© 2025 Sinan Yıldırım Hair Atelier. Tüm Hakları Saklıdır.</p>
          </div>
        </div>
      </footer>
      <AnimatePresence>
        {isGalleryOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-surface-container-lowest text-on-surface flex flex-col"
          >
            {/* Sticky Header */}
            <div className="flex-shrink-0 flex items-center justify-between px-5 md:px-8 py-4 md:py-5 border-b border-outline-variant/20 bg-surface shadow-sm z-10">
              <div>
                <p className="font-label-caps text-[0.6rem] uppercase tracking-[0.22em] text-secondary mb-2">Sinan Yıldırım • Atelier Galeri</p>
                <div className="flex items-center gap-5 overflow-x-auto hide-scrollbar">
                  {['all', 'gelin', 'renk', 'kesim'].map(f => (
                    <button key={f} onClick={() => handleGalleryFilter(f)}
                      className={`font-label-caps text-[0.6875rem] uppercase tracking-widest whitespace-nowrap pb-0.5 transition-colors ${galleryFilter === f ? 'text-primary border-b border-primary' : 'text-on-surface-variant hover:text-primary'}`}>
                      {f === 'all' ? 'Tümü' : f === 'gelin' ? 'Gelin' : f === 'renk' ? 'Renk' : 'Kesim'}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-3 ml-4">
                <button
                  onClick={() => setGalleryViewMode(prev => prev === 'grid' ? 'slider' : 'grid')}
                  className="hidden sm:flex items-center justify-center font-label-caps text-[0.6rem] uppercase tracking-widest bg-primary text-on-primary hover:bg-primary/90 transition-colors px-4 h-10 md:h-11"
                >
                  {galleryViewMode === 'grid' ? 'Slider' : 'Grid'}
                </button>
                <button onClick={() => setIsGalleryOpen(false)}
                  className="w-10 h-10 md:w-11 md:h-11 flex items-center justify-center bg-primary text-on-primary hover:bg-primary/90 transition-colors">
                  <X className="w-4 h-4 md:w-5 md:h-5" />
                </button>
              </div>
            </div>

            {/* GRID VIEW — scrollable */}
            {galleryViewMode === 'grid' && (
              <div className="flex-1 overflow-y-auto gallery-scrollbar pr-1" data-lenis-prevent style={{ WebkitOverflowScrolling: 'touch' }}>
                <div className="p-4 md:p-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                  {filteredGallery.map((item, idx) => (
                    <button
                      key={item.id}
                      onClick={() => { setGalleryIndex(idx); setGalleryViewMode('slider'); }}
                      className="group relative aspect-[3/4] overflow-hidden bg-surface-container text-left w-full"
                    >
                      <img src={item.src} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                        <span className="bg-surface/95 text-primary text-[0.6rem] uppercase tracking-[0.2em] font-label-caps px-4 py-1.5 border border-primary/20">İncele</span>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                        <span className="text-[0.6rem] uppercase tracking-widest text-on-primary/70 font-label-caps block mb-0.5">{item.category === 'gelin' ? 'Gelin' : item.category === 'renk' ? 'Renk' : 'Kesim'}</span>
                        <h3 className="text-sm font-medium text-on-primary leading-tight">{item.title}</h3>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* SLIDER VIEW — fixed, no scroll */}
            {galleryViewMode === 'slider' && (
              <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
                {/* Image Area */}
                <div className="flex-1 relative flex items-center justify-center bg-surface-container-lowest p-4 lg:p-10 overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={filteredGallery[galleryIndex]?.id}
                      initial={{ opacity: 0, scale: 0.97 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.97 }}
                      transition={{ duration: 0.35 }}
                      src={filteredGallery[galleryIndex]?.src}
                      alt={filteredGallery[galleryIndex]?.title}
                      className="max-w-full max-h-full object-contain drop-shadow-xl"
                      style={{ maxHeight: 'calc(100vh - 80px)' }}
                    />
                  </AnimatePresence>
                  {filteredGallery.length > 1 && (
                    <>
                      <button onClick={prevGalleryImage} className="absolute left-3 lg:left-8 top-1/2 -translate-y-1/2 w-11 h-11 lg:w-14 lg:h-14 flex items-center justify-center bg-surface/80 backdrop-blur-sm border border-outline-variant/30 hover:bg-surface transition-colors text-primary z-10">
                        <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" />
                      </button>
                      <button onClick={nextGalleryImage} className="absolute right-3 lg:right-8 top-1/2 -translate-y-1/2 w-11 h-11 lg:w-14 lg:h-14 flex items-center justify-center bg-surface/80 backdrop-blur-sm border border-outline-variant/30 hover:bg-surface transition-colors text-primary z-10">
                        <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6" />
                      </button>
                    </>
                  )}
                </div>
                {/* Detail Panel */}
                <div className="w-full lg:w-[420px] xl:w-[480px] flex-shrink-0 bg-surface border-t lg:border-t-0 lg:border-l border-outline-variant/20 overflow-y-auto p-6 md:p-8 lg:p-12 flex flex-col justify-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={filteredGallery[galleryIndex]?.id}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -16 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-outline-variant/30 bg-surface-container-low">
                        <span className="w-1.5 h-1.5 bg-secondary block" />
                        <span className="font-label-caps text-[0.625rem] uppercase tracking-[0.2em] text-secondary">
                          {filteredGallery[galleryIndex]?.category === 'gelin' ? 'GELİN TASARIMI' : filteredGallery[galleryIndex]?.category === 'renk' ? 'ORGANİK RENKLENDİRME' : 'KİŞİSEL KESİM'}
                        </span>
                      </div>
                      <h2 className="font-display-hero text-2xl md:text-3xl text-primary leading-tight">
                        {filteredGallery[galleryIndex]?.title}
                      </h2>
                      <p className="text-[0.9375rem] text-on-surface-variant font-light leading-relaxed">
                        {filteredGallery[galleryIndex]?.desc}
                      </p>
                      <div className="pt-6 border-t border-outline-variant/20 flex items-center gap-4">
                        <span className="font-label-caps text-[0.625rem] uppercase tracking-widest text-on-surface-variant shrink-0">{galleryIndex + 1} / {filteredGallery.length}</span>
                        <div className="flex-1 h-px bg-outline-variant/20 relative">
                          <motion.div
                            className="absolute left-0 top-0 h-full bg-secondary"
                            initial={{ width: 0 }}
                            animate={{ width: `${((galleryIndex + 1) / filteredGallery.length) * 100}%` }}
                            transition={{ duration: 0.35 }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
