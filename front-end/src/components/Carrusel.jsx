import { Carousel } from "@material-tailwind/react";

function Carrusel() {
    return (
        <div className="flex justify-center py-8">
            <div className="w-400 h-400">
                <Carousel transition={{ duration: 2 }} className="rounded-xl h-full w-full">
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
            </div>
        </div>
    );
}

export default Carrusel;
