import React from 'react';
import { ArrowLeft, AlertCircle, Droplet, Circle, Wind, Sprout, Save } from 'lucide-react';

export default function DiagnosticResult({ navigate }) {
  return (
    <div className="pb-32">
      <header className="absolute top-0 w-full z-20 flex justify-between items-center p-6">
        <button onClick={() => navigate('dashboard')} className="w-12 h-12 flex items-center justify-center bg-white/80 backdrop-blur-md rounded-full shadow-md text-slate-900 transition-transform hover:scale-105">
          <ArrowLeft size={24} />
        </button>
        <div className="px-4 py-2 bg-white/80 backdrop-blur-md rounded-full shadow-md flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
          <span className="text-xs font-bold tracking-widest uppercase text-slate-900">Pemindaian Langsung</span>
        </div>
      </header>
      
      <section className="relative w-full h-[442px] md:h-[530px] bg-slate-200 rounded-br-[4rem] md:rounded-br-[6rem] overflow-hidden">
        <img alt="Strawberry leaf with anthracnose lesions" className="w-full h-full object-cover object-center" src="https://cs-assets.bayer.com/is/image/bayer/TP-2024012705"/>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60"></div>
      </section>
      
      <main className="relative z-10 -mt-20 md:-mt-32 px-6 md:px-12 max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl p-8 shadow-xl mb-12 border border-slate-100">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-none mb-2">Antraknosa</h1>
              <p className="text-slate-500 font-medium text-lg italic">Colletotrichum acutatum</p>
            </div>
            <div className="flex flex-col items-end bg-red-50 text-red-800 px-4 py-3 rounded-2xl">
              <span className="text-[10px] uppercase tracking-widest font-bold mb-1 opacity-80">Tingkat Keyakinan</span>
              <span className="text-2xl font-bold leading-none">94%</span>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-red-100 text-red-700 rounded-lg text-sm font-semibold">
              <AlertCircle size={18} /> Tingkat Kritis
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 text-slate-600 rounded-lg text-sm font-medium">
              <Droplet size={18} /> Micu: Kelembaban Tinggi
            </span>
          </div>
        </div>

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Gejala Teridentifikasi</h2>
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-4 p-5 bg-slate-50 rounded-2xl">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center shrink-0 text-red-600 mt-1"><Circle size={20} /></div>
              <div>
                <h3 className="font-semibold text-slate-900 text-lg mb-1">Bercak Hitam Membulat</h3>
                <p className="text-slate-600 leading-relaxed">Terdapat lesi atau bercak cekung berwarna coklat gelap hingga hitam pada permukaan buah dan batang.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-5 bg-white rounded-2xl shadow-sm border border-slate-100">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center shrink-0 text-red-600 mt-1"><Wind size={20} /></div>
              <div>
                <h3 className="font-semibold text-slate-900 text-lg mb-1">Jaringan Buah Mengkerut</h3>
                <p className="text-slate-600 leading-relaxed">Bagian buah yang terinfeksi menjadi keras, kering, dan mengerut seiring waktu, merusak struktur panen.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-5 bg-slate-50 rounded-2xl">
              <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center shrink-0 text-amber-700 mt-1"><Sprout size={20} /></div>
              <div>
                <h3 className="font-semibold text-slate-900 text-lg mb-1">Massa Spora Jingga</h3>
                <p className="text-slate-600 leading-relaxed">Pada kondisi kelembaban tinggi, bagian tengah bercak akan menghasilkan massa spora berlendir berwarna jingga hingga merah muda.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Rencana Penanganan</h2>
          <div className="relative pl-6 md:pl-8 border-l-[3px] border-slate-200 space-y-10">
            <div className="relative">
              <div className="absolute -left-[2.1rem] md:-left-[2.65rem] top-0 w-10 h-10 rounded-full bg-teal-700 text-white flex items-center justify-center font-bold text-lg shadow">1</div>
              <div className="pl-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Isolasi Segera</h3>
                <p className="text-slate-600 leading-relaxed">Segera potong dan musnahkan bagian tanaman atau buah yang terinfeksi. Jangan membuang sisa potongan di area perkebunan.</p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-[2.1rem] md:-left-[2.65rem] top-0 w-10 h-10 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center font-bold text-lg">2</div>
              <div className="pl-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Aplikasi Fungisida</h3>
                <p className="text-slate-600 leading-relaxed">Gunakan fungisida kontak berbahan aktif tembaga atau sistemik sesuai dengan dosis anjuran. Semprotkan secara merata.</p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-[2.1rem] md:-left-[2.65rem] top-0 w-10 h-10 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center font-bold text-lg">3</div>
              <div className="pl-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Modifikasi Mikroklimat</h3>
                <p className="text-slate-600 leading-relaxed">Perbaiki sirkulasi udara di sekitar bedengan dengan melakukan pemangkasan. Kurangi pupuk Nitrogen berlebih.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <div className="fixed bottom-0 left-0 w-full z-40 bg-white/80 backdrop-blur-2xl border-t border-slate-100 pt-4 pb-6 px-6 md:px-12 flex justify-center">
        <div className="w-full max-w-4xl">
          <button onClick={() => navigate('history')} className="w-full relative group overflow-hidden rounded-2xl bg-gradient-to-r from-red-700 to-red-600 text-white py-5 px-8 shadow-lg transition-all hover:-translate-y-1 flex items-center justify-center gap-3">
            <Save size={24} />
            <span className="font-bold tracking-wide text-lg">Simpan ke Riwayat</span>
          </button>
        </div>
      </div>
    </div>
  );
}
