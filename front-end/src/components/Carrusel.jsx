import { Carousel, IconButton } from "@material-tailwind/react";
 
export default function Carrusel() {
  return (
    <Carousel
      className="rounded-xl"
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handlePrev}
          className="!absolute top-2/4 left-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/4 !right-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </IconButton>
      )}
    >
      <img
          src="https://b01aa32c.rocketcdn.me/wp-content/uploads/2022/12/SanRoqueEncarnacion.jpg"
          alt="image 1"
          className="h-full w-full object-cover rounded-xl"
      />
      <img
          src="https://masencarnacion.s3.us-west-2.amazonaws.com/uploads/public/635/80f/41a/63580f41a51ad859699708.png"
          alt="image 2"
          className="h-full w-full object-cover rounded-xl"
      />
      <img
          src="https://grupovierci.brightspotcdn.com/dims4/default/1f5405e/2147483647/strip/true/crop/720x405+0+37/resize/1000x563!/quality/90/?url=https%3A%2F%2Fk2-prod-grupo-vierci.s3.us-east-1.amazonaws.com%2Fbrightspot%2Fe9%2F39%2Fe96ecb6f4eceadf6234ac56f6785%2Fencarnacion-whatsapp-image-2024-01-01-at-11-24-37-49052298.jpeg"
          alt="image 3"
          className="h-full w-full object-cover rounded-xl"
      />
    </Carousel>
  );
}