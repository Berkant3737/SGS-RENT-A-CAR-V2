import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import AboutUs from "./pages/AboutUs/AboutUs";
import ContactUs from "./pages/ContactUs/ContactUs";
import OurWehicle from "./pages/OurWehicle/OurWehicle";
import ServicesDetails from "./pages/Services/ServicesDetails/ServicesDetails";
import WehicleDetails from "./pages/OurWehicle/WehicleDetails/WehicleDetails";
import WehicleDetails3 from "./pages/OurWehicle/WehicleDetails3/Details3";
import WehicleDetails4 from "./pages/OurWehicle/WehicleDetails4/Details4";
import WehicleDetails5 from "./pages/OurWehicle/WehicleDetails5/Details5";

function App() {
  const DetailsText = "SGS RENT A CAR olarak sizlere sunduğumuz mercedes vito, vip minibüs ve diğer marka seçenekleri ile kiralama işlemlerinizde yanınızdayız. Daima kalite ve uygun fiyatları ile hizmetinizde olan firmamız için en önemli ilke memnuniyetinizi sağlamak, hem doğru hem güvenilir kiralama hizmeti almanızdır.Firmamız her zaman ihityacınıza göre sizi yönlendirmeyi ve istediğiniz araçtan tam verim almanızı hedefler. Firmamızda her bütçeye uygun özel dizayna sahip kiralık mercedes vito, kiralık mercedes minibüs ve bir çok vip dizayna sahip araçlarımızla 7/24 sizlerin tüm ihtiyaçlarını karşılayacak profesyonel ekibimizle araç kiralama konusunda hizmetinizdeyiz.Kiralık mercedes vito fiyatları, diğer araç fiyatlarımız yada ayrıntılı bilgi için bize 0555 865 66 19 numaralı telefondan ulaşabilirsiniz."
  const DetailsText2 = "SGS RENT A CAR olarak sizlere sunduğumuz mercedes vito, vip minibüs ve diğer marka seçenekleri ile kiralama işlemlerinizde yanınızdayız. Daima kalite ve uygun fiyatları ile hizmetinizde olan firmamız için en önemli ilke memnuniyetinizi sağlamak, hem doğru hem güvenilir kiralama hizmeti almanızdır.Firmamız her zaman ihityacınıza göre sizi yönlendirmeyi ve istediğiniz araçtan tam verim almanızı hedefler. Firmamızda her bütçeye uygun özel dizayna sahip kiralık mercedes vito, kiralık mercedes minibüs ve bir çok vip dizayna sahip araçlarımızla 7/24 sizlerin tüm ihtiyaçlarını karşılayacak profesyonel ekibimizle araç kiralama konusunda hizmetinizdeyiz.Kiralık mercedes vito fiyatları, diğer araç fiyatlarımız yada ayrıntılı bilgi için bize 0555 865 66 19 numaralı telefondan ulaşabilirsiniz."
  return <div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hizmetlerimiz" element={<Services />} />
      <Route path="/hakkimizda" element={<AboutUs />} />
      <Route path="/bizeulasin" element={<ContactUs />} />
      <Route path="/aracfilomuz" element={<OurWehicle />} title="title"/>
      //WehicleDetailsPages
      <Route path="/mercedes-vito" element={<WehicleDetails />} />
      <Route path="/mercedes-ultra-vip-vito" element={<WehicleDetails />} />
      <Route path="/mercedes-sprinter" element={<WehicleDetails3/>} />
      <Route path="/mercedes-e-class" element={<WehicleDetails4/>} />
      <Route path="/mercedes-s-class" element={<WehicleDetails5/>} />
      //Services Routes
      <Route title="sadsda" path="/alısveris-turlari" element={<ServicesDetails BannerText="ALIŞVERİ TURLARI" title="ALIŞVERİŞ TURLARI BİLGİLENDİRME" text={DetailsText} />}/>
      <Route path="/rehberlik-servisleri" element={<ServicesDetails BannerText="REHBERLİK SERVİSLERİ" title="REHBERLİK SERVİSLERİ BİLGİLENDİRME" text={DetailsText} />}/>
      <Route path="/sehir-turlari" element={<ServicesDetails BannerText="ŞEHİR TURLARI" title="ŞEHİR TURLARI BİLGİLENDİRME" text={DetailsText} />}/>
      <Route path="/tekne-turlari" element={<ServicesDetails BannerText="TEKNE TURLARI" title="TEKNE TURLARI BİLGİLENDİRME" text={DetailsText} />}/>
      <Route path="/bogaz-turlari" element={<ServicesDetails BannerText="BOĞAZ TURLARI" title="BOĞAZ TURLARI BİLGİLENDİRME" text={DetailsText} />}/>
      <Route path="/dugun-organizasyonlari" element={<ServicesDetails BannerText="DÜĞÜN ORGANİZASYONU" title="DÜĞÜN ORGANİZASYONU BİLGİLENDİRME" text={DetailsText} />}/>
    </Routes>
  </div>;
}

export default App;
