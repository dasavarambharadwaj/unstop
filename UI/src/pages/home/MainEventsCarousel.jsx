import OwlCarouselItem from "/src/components/form/owl-carousel/OwlCarouselItem";
import OwlCarousel from "/src/components/form/owl-carousel/OwlCarousel";
function MainEventsCarousel() {
  const list = [
    "unstopBanner",
    "amazonBanner",
    "facebookBanner",
    "tezasiaBanner",
    "abinbevBanner",
  ];
  return (
    <div>
      <OwlCarousel className="h-64 max-w-[1072px] m-auto items-center">
        {list.map((item) => (
          <OwlCarouselItem className="h-full mr-3" key={item}>
            <img
              className="h-4/5 m-auto rounded-2xl"
              src={`/public/home/${item}.jpg`}
            ></img>
          </OwlCarouselItem>
        ))}
      </OwlCarousel>
    </div>
  );
}
export default MainEventsCarousel;
