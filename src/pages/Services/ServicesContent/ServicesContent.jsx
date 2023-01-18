import React from "react";
import img1 from "../../../images/Services/hizmetler-1.jpg";
import img2 from "../../../images/Services/hizmetler-2.webp";
import img3 from "../../../images/Services/hizmetler-3.webp";
import img4 from "../../../images/Services/hizmetler-4.webp";
import img5 from "../../../images/Services/hizmetler-5.webp";
import img6 from "../../../images/Services/hizmetler-6.webp";

function ServicesContent() {
  return (
    <div>
      <section id="services">
        <div className="row justify-content-center">
          <h2 className="text-center p-2">Hizmetlerimiz</h2>
          <div className="col-12 col-md-6">
            <div className="card">
              <img src={img1} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Alışveriş Turları</h5>
                <p className="card-text">
                  İstanbul’u gezmenin en keyifli ve konforlu yolu özel araç ve
                  sürücünüz ile Hotel veya adresinizden alınıp istediğiniz
                  noktaya ulaştırılmanızdır. İstanbul’un güzel ve kaliteli
                  alışveriş merkezlerini bizlerle gezmenin keyfini çıkartın.
                </p>
                <a href="/alısveris-turlari" className="btn btn-primary">
                  Detaylar
                </a>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="card">
              <img src={img2} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">REHBERLİK SERVİSLERİ</h5>
                <p className="card-text">
                  Tüm dünyanın hayranlık duyduğu bazılarının kıskandığı
                  kimilerinin onun için şiirler , şarkılar yazdığı İstanbul’u
                  misafirlerimize SGS RENT A CAR tanıtıyor. Misafirlerimize
                  yaşamış olduğumuz şehrin tarihi güzelliklerini
                </p>
                <a href="/rehberlik-servisleri" className="btn btn-primary">
                  Detaylar
                </a>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="card">
              <img src={img3} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">ŞEHİR TURLARI</h5>
                <p className="card-text">
                  İstanbul’u gezmenin en keyifli ve konforlu yolu özel araç ve
                  sürücünüz ile Hotel veya adresinizden alınıp istediğiniz
                  noktaya ulaştırılmanızdır. İstanbul’un güzel ve kaliteli
                  alışveriş merkezlerini bizlerle gezmenin keyfini çıkartın.
                </p>
                <a href="/sehir-turlari" className="btn btn-primary">
                  Detaylar
                </a>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="card">
              <img src={img4} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">TEKNE TURLARI</h5>
                <p className="card-text">
                  İstanbul Boğazının eşsiz kıyılarının güzelliğini yaşamak için
                  ve deniz üzerinde parlayan ay ışığıyla siz değerli
                  misafirlerimizi özel tekne ve yatlarımız ile gezdirerek bu
                  muhteşem güzelliğin tadına varmanızı sağlıyoruz.
                </p>
                <a href="/tekne-turlari" className="btn btn-primary">
                  Detaylar
                </a>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="card">
              <img src={img5} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">BOĞAZ TURLARI</h5>
                <p className="card-text">
                  Bu turumuz görsel bir şölenden oluşmaktadır. Size özel
                  aracınız ile İstanbul Boğazının eşsiz manzarasıyla dinlenmeye
                  , stres atmaya hazır mısınız ? Siz değerli misafirlerimizi
                  otel veya adresinizden alıp , İstanbul Boğazı ve tarihi
                  yarımadayı SGS RENT A CAR konforuyla gezdiriyoruz.
                </p>
                <a href="/bogaz-turlari" className="btn btn-primary">
                  Detaylar
                </a>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="card">
              <img src={img6} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">DÜĞÜN ORGANİZASYONLARI</h5>
                <p className="card-text">
                  SGS Turizm ailesi olarak sizleri bu en mutlu gününüzde'de
                  yalnız bırakmıyoruz. Tecrübeli özel şoförlerimiz sayesinde
                  düğün telaşı esnasında hiçbir yere gecikmeyecek
                </p>
                <a href="/dugun-organizasyonlari" className="btn btn-primary">
                  Detaylar
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServicesContent;
