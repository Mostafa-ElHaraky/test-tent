import { ChevronDownIcon } from "lucide-react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

// Product data for mapping
const products = [
  {
    id: 1,
    title: "Арочный шатер 8х8м (36м2)",
    image: "/15-9bf6ff67-------1-2.png",
    specs: {
      size: "200*80 м",
      area: "300 м2",
      capacity: "400 человек",
      availability: "да/под заказ",
    },
    price: {
      original: "230 000 ₽",
      discount: "-30%",
      current: "от 150 000 ₽",
    },
  },
  {
    id: 2,
    title: "Арочный шатер 8х8м (36м2)",
    image: "/15-9bf6ff67-------1-2.png",
    specs: {
      size: "200*80 м",
      area: "300 м2",
      capacity: "400 человек",
      availability: "да/под заказ",
    },
    price: {
      original: "230 000 ₽",
      discount: "-30%",
      current: "от 150 000 ₽",
    },
  },
  {
    id: 3,
    title: "Арочный шатер 8х8м (36м2)",
    image: "/15-9bf6ff67-------1-2.png",
    specs: {
      size: "200*80 м",
      area: "300 м2",
      capacity: "400 человек",
      availability: "да/под заказ",
    },
    price: {
      original: "230 000 ₽",
      discount: "-30%",
      current: "от 150 000 ₽",
    },
  },
];

// Category filter options
const categories = [
  { id: 1, name: "Шатры", active: false },
  { id: 2, name: "Ангары", active: true },
];

export const FrameByAnima = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start gap-9 w-full py-8">
      <h2 className="font-semibold text-4xl [font-family:'Raleway',Helvetica]">
        <span className="text-[#527dc5]">Хиты</span>
        <span className="text-[#232c42]"> продаж</span>
      </h2>

      <div className="flex w-full items-center justify-between">
        <div className="flex items-start gap-6">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={category.active ? "default" : "outline"}
              className={`h-[46px] px-4 py-[13px] rounded-[50px] font-semibold text-lg [font-family:'Raleway',Helvetica] ${
                category.active
                  ? "[background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]"
                  : "bg-white"
              }`}
            >
              {category.name}
              <ChevronDownIcon className="ml-2 h-[7.5px] w-[13.86px]" />
            </Button>
          ))}
        </div>

        <div className="flex items-start gap-6 relative left-[-96px]">
  <Button
    variant="outline"
    className="w-14 h-14 p-0 rounded-[50px] flex items-center justify-center"
    style={{
      background: "linear-gradient(180deg, #73A8FF 100%, #3C6CEC 100%, #3C6CEC 100%)",
      border: "6px solid",
      borderImageSource: "linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.03) 100%)",
      boxShadow: "0px 15px 44px 0px #207CFE66",
    }}
  >
    <div className="w-6 h-6 rotate-180">
      <img
        className="w-3.5 h-6 -rotate-180 relative left-[6px]"
        alt="Previous"
        src="/grouppp.png"
      />
    </div>
  </Button>

  <Button
    variant="outline"
    className="w-14 h-14 rounded-full shadow-[0px_15px_44px_#1f7cfe66] p-0 border-none bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC]"
    style={{
      background: "linear-gradient(180deg, #73A8FF 100%, #3C6CEC 100%, #3C6CEC 100%)",
      border: "6px solid",
      borderImageSource: "linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.03) 100%)",
      boxShadow: "0px 15px 44px 0px #207CFE66",
    }}
  >
    <div className="w-6 h-6">
      <img className="w-3.5 h-6 relative left-[6px]" 
      alt="Next" src="/grouppp-1.png" />
    </div>
  </Button>
</div>

      </div>

      <div className="flex items-start gap-6">
        {products.map((product) => (
          <Card
            key={product.id}
            className="w-[432px] h-[574px] bg-white rounded-[20px] border border-solid border-[#dddddd] shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)]"
          >
            <CardContent className="p-0">
              <div className="flex flex-col items-start gap-[22px] p-[33px]">
                <div
                  className="relative w-[350px] h-[197px] bg-cover bg-[50%_50%]"
                  style={{ backgroundImage: `url(${product.image})` }}
                >
                  <div className="flex items-start gap-1 absolute bottom-[9px] left-1/2 transform -translate-x-1/2">
                    <div className="w-[7px] h-[7px] rounded-[3.5px] [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]" />
                    <div className="w-[7px] h-[7px] bg-[#d9d9d9] rounded-[3.5px]" />
                    <div className="w-[7px] h-[7px] bg-[#d9d9d9] rounded-[3.5px]" />
                  </div>
                </div>

                <div className="flex flex-col items-start gap-9 w-full">
                  <div className="flex flex-col items-start gap-6 w-full">
                    <h3 className="font-bold text-[#394355] text-xl leading-6 [font-family:'Raleway',Helvetica]">
                      {product.title}
                    </h3>

                    <div className="flex flex-col items-start gap-[9px]">
                      {Object.entries(product.specs).map(
                        ([key, value], index) => (
                          <div key={index} className="flex items-start gap-2">
                            <span className="font-normal text-[#394355] text-base leading-6 [font-family:'Raleway',Helvetica]">
                              {key === "size" && "Размер:"}
                              {key === "area" && "Площадь:"}
                              {key === "capacity" && "Вместимость:"}
                              {key === "availability" && "В наличии:"}
                            </span>
                            <span className="font-medium text-[#394355] text-base leading-6 [font-family:'Raleway',Helvetica]">
                              {value}
                            </span>
                          </div>
                        ),
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col items-start gap-3">
                    <span className="font-normal text-[#394355] text-base leading-6 [font-family:'Raleway',Helvetica]">
                      Цена:
                    </span>

                    <div className="flex items-start gap-9">
                      <div className="flex items-center gap-1.5">
                        <span className="font-medium text-[#4f5d80d9] text-base leading-6 line-through [font-family:'Raleway',Helvetica]">
                          {product.price.original}
                        </span>

                        <Badge className="px-2 py-1 rounded-lg [background:linear-gradient(180deg,rgba(255,115,115,1)_0%,rgba(255,111,111,1)_37%,rgba(236,60,60,1)_100%)]">
                          <span className="font-bold text-white text-sm [font-family:'Raleway',Helvetica]">
                            {product.price.discount}
                          </span>
                        </Badge>
                      </div>

                      <div className="flex flex-col items-start gap-2">
                        <div className="flex flex-col items-start gap-3">
                          <span className="font-bold text-[#394355] text-2xl leading-6 [font-family:'Raleway',Helvetica]">
                            {product.price.current}
                          </span>
                        </div>

                        <div className="w-[190px] text-[10px] leading-[10px] [font-family:'Raleway',Helvetica]">
                          <span className="italic text-[#eb3c3c]">*</span>
                          <span className="italic text-[#394355] leading-[0.1px]">
                            В зависимости от включенных опций
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
