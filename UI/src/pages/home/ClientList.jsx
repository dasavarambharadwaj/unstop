import OwlCarouselItem from "/src/components/form/owl-carousel/OwlCarouselItem";
import OwlCarousel from "/src/components/form/owl-carousel/OwlCarousel";
function ClientList() {
  const list = [
    "kpmg",
    "ey",
    "airtel",
    "icici",
    "hero",
    "tata_steel",
    "agoda",
    "axis",
    "fedex",
    "tata",
    "amazon",
    "walmart",
    "reliance",
    "flipkart",
    "loreal",
  ];
  return (
    <section className="w-full mb-24 pl-10 py-6 border-y border-gray-400 border-solid">
      <div className="flex gap-8">
        <div className="flex flex-col shrink-0">
          <span className="text-primary text-lg">Industry Veterans</span>
          <span className="text-primary font-bold text-lg">trust us:</span>
        </div>
        <OwlCarousel controls={false} className="shrink-1">
          {list.map((item) => (
            <OwlCarouselItem className="w-40 h-16 mr-5" key={item}>
              <img
                className="h-4/5 m-auto"
                src={`/companies/${item}.png`}
              ></img>
            </OwlCarouselItem>
          ))}
        </OwlCarousel>
      </div>
    </section>
  );
}
export default ClientList;
