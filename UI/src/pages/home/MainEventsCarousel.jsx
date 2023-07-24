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
      <OwlCarousel className="max-w-[1072px] m-auto items-center">
        {list.map((item) => (
          <OwlCarouselItem className="mr-3 w-[524px] h-[204px]" key={item}>
            <img
              className="h-full m-auto rounded-2xl"
              src={`/home/${item}.jpg`}
            ></img>
          </OwlCarouselItem>
        ))}
      </OwlCarousel>
    </div>
  );
}
export default MainEventsCarousel;
