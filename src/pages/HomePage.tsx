import landingImage from "../assets/landing.png";
import appDownloadImage from "../assets/app-download.png";
export default function HomePage() {
  return (
    <div className="flex flex-col gap-12">
      <div className="bg-white ronded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="font-bold tracking-tight text-sky-600 text-5xl">
          Feeling Hungry? Order some YUM
        </h1>
        <span className="text-xl">Just Click & Order</span>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <img src={landingImage} />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter">
            Order takeway even faster !
          </span>
          <span>Download OrderYUM app</span>
          <img src={appDownloadImage} />
        </div>
      </div>
    </div>
  );
}
