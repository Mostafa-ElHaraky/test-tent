import { Badge } from "../../../../../../../components/ui/badge";
import { Button } from "../../../../../../../components/ui/button";
import { Card, CardContent } from "../../../../../../../components/ui/card";
import { Checkbox } from "../../../../../../../components/ui/checkbox";
import { Input } from "../../../../../../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../../../../components/ui/select";
import { Slider } from "../../../../../../../components/ui/slider";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../../../../../components/ui/carousel";
import { Link } from 'react-router-dom';



export const FrameWrapperShatry3 = (): JSX.Element => {
  // Data for filter categories
  const baseShapes = ["Круглая", "Круглая", "Круглая", "Круглая"];
  const capacities = ["до 2 чел.", "до 2 чел.", "до 2 чел.", "до 2 чел."];
  const areas = ["до 50 м2", "до 50 м2", "до 50 м2", "до 50 м2"];
  const popularSizes = ["5х5", "5х5", "5х5", "5х5"];

  // Product data
  const products = Array(9).fill({
    title: "Арочный шатер 8х8м (36м2)",
    image: "/Shatry3-15-9bf6ff67-------1-7.png",
    size: "200*80 м",
    area: "300 м2",
    capacity: "400 человек",
    availability: "да/под заказ",
    oldPrice: "230 000 ₽",
    discount: "-30%",
    price: "от 150 000 ₽",
  });





    // Data for tent categories to enable mapping
    const tentCategories = [
      {
        id: 1,
        image: "/event-tent-i02-1.png",
        title: "Арочные шатры",
        count: 273,
      },
      {
        id: 2,
        image: "/event-tent-i02-1.png",
        title: "Арочные шатры",
        count: 273,
      },
      {
        id: 3,
        image: "/event-tent-i02-1.png",
        title: "Арочные шатры",
        count: 273,
      },
      {
        id: 4,
        image: "/event-tent-i02-1.png",
        title: "Арочные шатры",
        count: 273,
      },
      {
        id: 5,
        image: "/event-tent-i02-1.png",
        title: "Арочные шатры",
        count: 273,
      },
      {
        id: 6,
        image: "/event-tent-i02-1.png",
        title: "Арочные шатры",
        count: 273,
      },
    ];




  return (
    <section className="flex flex-col gap-[45px] w-full  mx-auto px-12">
        <section className="w-full max-w-[1440px] h-[398px]">
      <div className="w-full h-full bg-[#eef1f8] rounded-[20px] p-12 pt-[60px]">
        <div className="flex flex-col gap-9">
          <header className="flex w-full items-center justify-between">
            <h2 className="font-semibold text-[#232c42] text-4xl [font-family:'Raleway',Helvetica]">
              Выбирайте категорию шатров
            </h2>
            <Button
              variant="link"
              className="font-bold text-[#527dc5] text-2xl leading-6 underline [font-family:'Raleway',Helvetica] p-0 h-auto"
            >
              Показать все
            </Button>
          </header>

          <Card className="bg-white rounded-[20px] shadow-[0px_24px_38px_0px_rgba(22,29,36,0.08)] backdrop-blur-[79px]">
  <CardContent className="p-6">
    <Carousel className="w-full">
      <CarouselContent className="-ml-6">
        {tentCategories.map((category) => (
          <CarouselItem
            key={category.id}
            className="pl-6 md:basis-1/3 lg:basis-1/4 xl:basis-1/6"
          >
            <div className="w-40 h-[160px]">
              <div
                className="w-40 h-[84px] bg-cover bg-center"
                style={{ backgroundImage: `url(${category.image})` }}
              />
              <div className="flex flex-col items-start gap-2 mt-6">
                {/* This is the changed part - wrapped title in Link */}
                <Link 
                  to="/shatry-i-navesy/arochnye"  // or href="/arochnye" if using Next.js
                  className="font-bold text-[#527dc5] text-xl leading-6 [font-family:'Raleway',Helvetica] hover:underline"
                >
                  {category.title}
                </Link>
                <div className="flex items-start">
                  <p className="[font-family:'Raleway',Helvetica] font-normal text-[#394355] text-base leading-6 underline">
                    {category.count} позиций
                  </p>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="w-14 h-14 rounded-[50px] shadow-[0px_15px_44px_#1f7cfe66] left-3" />
      <CarouselNext className="w-14 h-14 rounded-[50px] shadow-[0px_15px_44px_#1f7cfe66] right-3" />
    </Carousel>
  </CardContent>
</Card>
        </div>
      </div>
    </section>






      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-10">
          {/* Header with sorting controls */}
          <div className="flex w-full items-center justify-between">
            <h1 className="font-semibold text-[#232c42] text-4xl [font-family:'Raleway',Helvetica]">
              Каталог
            </h1>

            <div className="flex items-center gap-3">
              <div className="flex flex-col gap-2.5">
                <Select defaultValue="cheaper">
                  <SelectTrigger className="w-[294px] h-12 border-2 border-[#dddddd] rounded-lg">
                    <SelectValue placeholder="Сначала подешевле" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cheaper">Сначала подешевле</SelectItem>
                    <SelectItem value="expensive">Сначала подороже</SelectItem>
                    <SelectItem value="popular">По популярности</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col gap-2.5">
                <Select defaultValue="9">
                  <SelectTrigger className="w-[82px] h-12 border-2 border-[#dddddd] rounded-lg">
                    <SelectValue placeholder="9" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="9">9</SelectItem>
                    <SelectItem value="12">12</SelectItem>
                    <SelectItem value="24">24</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Filter section */}
          <div className="flex flex-col gap-6">
            <h2 className="font-bold text-[#527dc5] text-xl leading-6 [font-family:'Raleway',Helvetica]">
              Подберите для себя необходимое
            </h2>

            <div className="flex flex-wrap gap-[41px]">
              {/* Price filter */}
              <div className="flex flex-col gap-4">
                <h3 className="font-semibold text-[#232c42] text-lg [font-family:'Raleway',Helvetica]">
                  Цена
                </h3>

                <div className="w-[294px] h-[97px] relative">
                  <div className="flex gap-2.5">
                    <div className="flex flex-col gap-1 p-3 rounded-lg border-2 border-[#dddddd]">
                      <label className="font-medium text-[#394355] text-xs [font-family:'Raleway',Helvetica]">
                        от
                      </label>
                      <Input
                        className="font-medium text-[#394355] text-base [font-family:'Raleway',Helvetica] border-none p-0 h-6"
                        defaultValue="20 000 ₽"
                      />
                    </div>

                    <div className="flex flex-col gap-1 p-3 rounded-lg border-2 border-[#dddddd]">
                      <label className="font-medium text-[#394355] text-xs [font-family:'Raleway',Helvetica]">
                        до
                      </label>
                      <Input
                        className="font-medium text-[#394355] text-base [font-family:'Raleway',Helvetica] border-none p-0 h-6"
                        defaultValue="20 000 000 ₽"
                      />
                    </div>
                  </div>

                  <div className="mt-6 px-1.5">
                    <Slider
                      defaultValue={[0, 60]}
                      max={100}
                      step={1}
                      className="[&_.slider-track]:bg-[#e8e8e8] [&_.slider-range]:bg-gradient-to-b from-[rgba(115,168,255,1)] via-[rgba(111,167,255,1)] to-[rgba(60,108,236,1)]"
                    />
                  </div>
                </div>
              </div>

              {/* Base shape filter */}
              <div className="flex flex-col gap-4">
                <h3 className="font-semibold text-[#232c42] text-lg [font-family:'Raleway',Helvetica]">
                  Форма в основании
                </h3>

                <div className="flex flex-col gap-[26px]">
                  <div className="flex flex-col gap-4">
                    {baseShapes.map((shape, index) => (
                      <div
                        key={`shape-${index}`}
                        className="flex items-center gap-2.5"
                      >
                        <Checkbox
                          id={`shape-${index}`}
                          className="w-[33px] h-[33px] rounded-lg border-2 border-[#dddddd]"
                        />
                        <label
                          htmlFor={`shape-${index}`}
                          className="font-medium text-[#394355] text-base leading-6 [font-family:'Raleway',Helvetica]"
                        >
                          {shape}
                        </label>
                      </div>
                    ))}
                  </div>

                  <Button
                    variant="link"
                    className="font-bold text-[#527dc5] text-base leading-6 underline [font-family:'Raleway',Helvetica] p-0 h-auto"
                  >
                    Показать еще
                  </Button>
                </div>
              </div>

              {/* Capacity filter */}
              <div className="flex flex-col gap-4">
                <h3 className="font-semibold text-[#232c42] text-lg [font-family:'Raleway',Helvetica]">
                  Вместимость
                </h3>

                <div className="flex flex-col gap-[26px]">
                  <div className="flex flex-col gap-4">
                    {capacities.map((capacity, index) => (
                      <div
                        key={`capacity-${index}`}
                        className="flex items-center gap-2.5"
                      >
                        {index < 3 ? (
                          <Checkbox
                            id={`capacity-${index}`}
                            className="w-[33px] h-[33px] rounded-lg border-2 border-[#dddddd]"
                          />
                        ) : (
                          <div className="flex items-center justify-center w-[33px] h-[33px] rounded-lg">
                            <img
                              className="w-[17px] h-[13px]"
                              alt="Checked"
                              src="/Shatry3-group-2.png"
                            />
                          </div>
                        )}
                        <label
                          htmlFor={`capacity-${index}`}
                          className="font-medium text-[#394355] text-base leading-6 [font-family:'Raleway',Helvetica]"
                        >
                          {capacity}
                        </label>
                      </div>
                    ))}
                  </div>

                  <Button
                    variant="link"
                    className="font-bold text-[#527dc5] text-base leading-6 underline [font-family:'Raleway',Helvetica] p-0 h-auto"
                  >
                    Показать еще
                  </Button>
                </div>
              </div>

              {/* Area filter */}
              <div className="flex flex-col gap-4">
                <h3 className="font-semibold text-[#232c42] text-lg [font-family:'Raleway',Helvetica]">
                  Площадь
                </h3>

                <div className="flex flex-col gap-[26px]">
                  <div className="flex flex-col gap-4">
                    {areas.map((area, index) => (
                      <div
                        key={`area-${index}`}
                        className="flex items-center gap-2.5"
                      >
                        {index < 3 ? (
                          <Checkbox
                            id={`area-${index}`}
                            className="w-[33px] h-[33px] rounded-lg border-2 border-[#dddddd]"
                          />
                        ) : (
                          <div className="flex items-center justify-center w-[33px] h-[33px] rounded-lg">
                            <img
                              className="w-[17px] h-[13px]"
                              alt="Checked"
                              src="/Shatry3-group-3.png"
                            />
                          </div>
                        )}
                        <label
                          htmlFor={`area-${index}`}
                          className="font-medium text-[#394355] text-base leading-6 [font-family:'Raleway',Helvetica]"
                        >
                          {area}
                        </label>
                      </div>
                    ))}
                  </div>

                  <Button
                    variant="link"
                    className="font-bold text-[#527dc5] text-base leading-6 underline [font-family:'Raleway',Helvetica] p-0 h-auto"
                  >
                    Показать еще
                  </Button>
                </div>
              </div>

              {/* Length and Width filters */}
              <div className="flex flex-col gap-[18px]">
                {/* Length filter */}
                <div className="flex flex-col gap-4">
                  <h3 className="font-semibold text-[#232c42] text-lg [font-family:'Raleway',Helvetica]">
                    Длина
                  </h3>

                  <div className="w-60 h-[97px] relative">
                    <div className="flex gap-2.5">
                      <div className="flex flex-col gap-1 p-3 rounded-lg border-2 border-[#dddddd]">
                        <label className="font-medium text-[#394355] text-xs [font-family:'Raleway',Helvetica]">
                          от
                        </label>
                        <Input
                          className="font-medium text-[#394355] text-base [font-family:'Raleway',Helvetica] border-none p-0 h-6"
                          defaultValue="2 м"
                        />
                      </div>

                      <div className="flex flex-col gap-1 p-3 rounded-lg border-2 border-[#dddddd]">
                        <label className="font-medium text-[#394355] text-xs [font-family:'Raleway',Helvetica]">
                          до
                        </label>
                        <Input
                          className="font-medium text-[#394355] text-base [font-family:'Raleway',Helvetica] border-none p-0 h-6"
                          defaultValue="10 м"
                        />
                      </div>
                    </div>

                    <div className="mt-6 px-1.5">
                      <Slider
                        defaultValue={[0, 60]}
                        max={100}
                        step={1}
                        className="[&_.slider-track]:bg-[#e8e8e8] [&_.slider-range]:bg-gradient-to-b from-[rgba(115,168,255,1)] via-[rgba(111,167,255,1)] to-[rgba(60,108,236,1)]"
                      />
                    </div>
                  </div>
                </div>

                {/* Width filter */}
                <div className="flex flex-col gap-4">
                  <h3 className="font-semibold text-[#232c42] text-lg [font-family:'Raleway',Helvetica]">
                    Ширина
                  </h3>

                  <div className="w-60 h-[97px] relative">
                    <div className="flex gap-2.5">
                      <div className="flex flex-col gap-1 p-3 rounded-lg border-2 border-[#dddddd]">
                        <label className="font-medium text-[#394355] text-xs [font-family:'Raleway',Helvetica]">
                          от
                        </label>
                        <Input
                          className="font-medium text-[#394355] text-base [font-family:'Raleway',Helvetica] border-none p-0 h-6"
                          defaultValue="2 м"
                        />
                      </div>

                      <div className="flex flex-col gap-1 p-3 rounded-lg border-2 border-[#dddddd]">
                        <label className="font-medium text-[#394355] text-xs [font-family:'Raleway',Helvetica]">
                          до
                        </label>
                        <Input
                          className="font-medium text-[#394355] text-base [font-family:'Raleway',Helvetica] border-none p-0 h-6"
                          defaultValue="10 м"
                        />
                      </div>
                    </div>

                    <div className="mt-6 px-1.5">
                      <Slider
                        defaultValue={[0, 60]}
                        max={100}
                        step={1}
                        className="[&_.slider-track]:bg-[#e8e8e8] [&_.slider-range]:bg-gradient-to-b from-[rgba(115,168,255,1)] via-[rgba(111,167,255,1)] to-[rgba(60,108,236,1)]"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Popular sizes filter */}
              <div className="flex flex-col gap-4">
                <h3 className="font-semibold text-[#232c42] text-lg [font-family:'Raleway',Helvetica]">
                  Популярные размеры
                </h3>

                <div className="flex flex-col gap-[26px]">
                  <div className="flex flex-col gap-4">
                    {popularSizes.map((size, index) => (
                      <div
                        key={`size-${index}`}
                        className="flex items-center gap-2.5"
                      >
                        {index < 3 ? (
                          <Checkbox
                            id={`size-${index}`}
                            className="w-[33px] h-[33px] rounded-lg border-2 border-[#dddddd]"
                          />
                        ) : (
                          <div className="flex items-center justify-center w-[33px] h-[33px] rounded-lg">
                            <img
                              className="w-[17px] h-[13px]"
                              alt="Checked"
                              src="/Shatry3-group-4.png"
                            />
                          </div>
                        )}
                        <label
                          htmlFor={`size-${index}`}
                          className="font-medium text-[#394355] text-base leading-6 [font-family:'Raleway',Helvetica]"
                        >
                          {size}
                        </label>
                      </div>
                    ))}
                  </div>

                  <Button
                    variant="link"
                    className="font-bold text-[#527dc5] text-base leading-6 underline [font-family:'Raleway',Helvetica] p-0 h-auto"
                  >
                    Показать еще
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Selected filters bar */}
        <div className="flex items-center justify-between p-3 bg-[#f5f6ff] rounded-[50px]">
          <div className="flex items-center gap-6">
            <Badge className="flex items-center gap-2.5 px-4 py-[13px] h-[46px] bg-white text-[#232c42] rounded-[50px] border-none">
              <span className="font-semibold text-lg [font-family:'Raleway',Helvetica]">
                Круглая
              </span>
              <div className="w-[15px] h-[14.99px] bg-[url(/Shatry3-group-5.png)] bg-[100%_100%]" />
            </Badge>

            <Badge className="flex items-center gap-2.5 px-4 py-[13px] h-[46px] bg-white text-[#232c42] rounded-[50px] border-none">
              <span className="font-semibold text-lg [font-family:'Raleway',Helvetica]">
                До 2х человек
              </span>
              <div className="w-[15px] h-[14.99px] bg-[url(/Shatry3-group-6.png)] bg-[100%_100%]" />
            </Badge>

            <Button className="flex items-center gap-2.5 px-4 py-[13px] h-[46px] font-semibold text-white text-lg rounded-[50px] [font-family:'Raleway',Helvetica] shadow-2 [background:linear-gradient(159deg,rgba(36,48,87,1)_0%,rgba(55,66,85,1)_100%)]">
              Сбросить все
            </Button>
          </div>

          <div className="flex items-center gap-[18px] pl-3 pr-1.5 py-1.5 bg-white rounded-[50px] border-2 border-[#dddddd]">
            <span className="font-semibold text-[#232c42] text-lg [font-family:'Raleway',Helvetica]">
              Выбрано: 23
            </span>

            <Button className="flex items-center gap-2.5 px-4 py-[13px] h-[46px] font-semibold text-white text-lg rounded-[50px] [font-family:'Raleway',Helvetica] shadow-[0px_22px_20px_#1f7cfe33] [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]">
              Показать
            </Button>
          </div>
        </div>
      </div>

      {/* Product grid */}
      <div className="flex flex-col items-center gap-[45px]">
        <div className="flex flex-col items-center gap-6">
          {/* First row of products */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.slice(0, 3).map((product, index) => (
              <Card
                key={`product-${index}`}
                className="w-full max-w-[432px] h-[574px] rounded-[20px] border border-[#dddddd] shadow-[var(--)] backdrop-blur-[79px]"
              >
                <CardContent className="p-0">
                  <div className="flex flex-col gap-[22px] p-[33px]">
                    <div
                      className="relative w-full h-[197px] bg-cover bg-center"
                      style={{ backgroundImage: `url(${product.image})` }}
                    >
                      <div className="flex gap-1 absolute bottom-1 left-1/2 -translate-x-1/2">
                        <div className="w-[7px] h-[7px] rounded-[3.5px] [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]" />
                        <div className="w-[7px] h-[7px] bg-[#d9d9d9] rounded-[3.5px]" />
                        <div className="w-[7px] h-[7px] bg-[#d9d9d9] rounded-[3.5px]" />
                      </div>
                    </div>

                    <div className="flex flex-col gap-9">
                      <div className="flex flex-col gap-6">
                        <h3 className="font-bold text-[#394355] text-xl leading-6 [font-family:'Raleway',Helvetica]">
                          {product.title}
                        </h3>

                        <div className="flex flex-col gap-[9px]">
                          <div className="flex items-start gap-2">
                            <span className="font-normal text-[#394355] text-base leading-6 [font-family:'Raleway',Helvetica]">
                              Размер:
                            </span>
                            <span className="font-medium text-[#394355] text-base leading-6 [font-family:'Raleway',Helvetica]">
                              {product.size}
                            </span>
                          </div>

                          <div className="flex items-start gap-2">
                            <span className="font-normal text-[#394355] text-base leading-6 [font-family:'Raleway',Helvetica]">
                              Площадь:
                            </span>
                            <span className="font-medium text-[#394355] text-base leading-6 [font-family:'Raleway',Helvetica]">
                              {product.area}
                            </span>
                          </div>

                          <div className="flex items-start gap-2">
                            <span className="font-normal text-[#394355] text-base leading-6 [font-family:'Raleway',Helvetica]">
                              Вместимость:
                            </span>
                            <span className="font-medium text-[#394355] text-base leading-6 [font-family:'Raleway',Helvetica]">
                              {product.capacity}
                            </span>
                          </div>

                          <div className="flex items-start gap-2">
                            <span className="font-normal text-[#394355] text-base leading-6 [font-family:'Raleway',Helvetica]">
                              В наличии:
                            </span>
                            <span className="font-medium text-[#394355] text-base leading-6 [font-family:'Raleway',Helvetica]">
                              {product.availability}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col gap-3">
                        <span className="font-normal text-[#394355] text-base leading-6 [font-family:'Raleway',Helvetica]">
                          Цена:
                        </span>

                        <div className="flex items-start gap-9">
                          <div className="flex items-center gap-1.5">
                            <span className="text-[#4f5d80d9] line-through font-medium text-base leading-6 [font-family:'Raleway',Helvetica]">
                              {product.oldPrice}
                            </span>

                            <Badge className="px-2 py-1 font-bold text-white text-sm [font-family:'Raleway',Helvetica] rounded-lg [background:linear-gradient(180deg,rgba(255,115,115,1)_0%,rgba(255,111,111,1)_37%,rgba(236,60,60,1)_100%)]">
                              {product.discount}
                            </Badge>
                          </div>

                          <div className="flex flex-col gap-2">
                            <span className="font-bold text-[#394355] text-2xl leading-6 [font-family:'Raleway',Helvetica]">
                              {product.price}
                            </span>

                            <div className="w-[190px] font-normal text-[10px] leading-[10px] [font-family:'Raleway',Helvetica]">
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

          {/* Second row of products with consultation card */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.slice(3, 4).map((product, index) => (
              <Card
                key={`product-row2-${index}`}
                className="w-full max-w-[432px] h-[574px] rounded-[20px] border border-[#dddddd] shadow-[var(--)] backdrop-blur-[79px]"
              >
                <CardContent className="p-0">
                  <div className="flex flex-col gap-[22px] p-[33px]">
                    <div
                      className="relative w-full h-[197px] bg-cover bg-center"
                      style={{ backgroundImage: `url(${product.image})` }}
                    >
                      <div className="flex gap-1 absolute bottom-1 left-1/2 -translate-x-1/2">
                        <div className="w-[7px] h-[7px] rounded-[3.5px] [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]" />
                        <div className="w-[7px] h-[7px] bg-[#d9d9d9] rounded-[3.5px]" />
                        <div className="w-[7px] h-[7px] bg-[#d9d9d9] rounded-[3.5px]" />
                      </div>
                    </div>

                    <div className="flex flex-col gap-9">
                      <div className="flex flex-col gap-6">
                        <h3 className="font-bold text-[#394355] text-xl leading-6 [font-family:'Raleway',Helvetica]">
                          {product.title}
                        </h3>

                        <div className="flex flex-col gap-[9px]">
                          <div className="flex items-start gap-2">
                            <span className="font-normal text-[#394355] text-base leading-6 [font-family:'Raleway',Helvetica]">
                              Размер:
                            </span>
                            <span className="font-medium text-[#394355] text-base leading-6 [font-family:'Raleway',Helvetica]">
                              {product.size}
                            </span>
                          </div>

                          <div className="flex items-start gap-2">
                            <span className="font-normal text-[#394355] text-base leading-6 [font-family:'Raleway',Helvetica]">
                              Площадь:
                            </span>
                            <span className="font-medium text-[#394355] text-base leading-6 [font-family:'Raleway',Helvetica]">
                              {product.area}
                            </span>
                          </div>

                          <div className="flex items-start gap-2">
                            <span className="font-normal text-[#394355] text-base leading-6 [font-family:'Raleway',Helvetica]">
                              Вместимость:
                            </span>
                            <span className="font-medium text-[#394355] text-base leading-6 [font-family:'Raleway',Helvetica]">
                              {product.capacity}
                            </span>
                          </div>

                          <div className="flex items-start gap-2">
                            <span className="font-normal text-[#394355] text-base leading-6 [font-family:'Raleway',Helvetica]">
                              В наличии:
                            </span>
                            <span className="font-medium text-[#394355] text-base leading-6 [font-family:'Raleway',Helvetica]">
                              {product.availability}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col gap-3">
                        <span
                          className="font-normal text-[#394355] text-base leading
-6 [font-family:'Raleway',Helvetica]"
                        >
                          Цена:
                        </span>

                        <div className="flex items-start gap-9">
                          <div className="flex items-center gap-1.5">
                            <span className="text-[#4f5d80d9] line-through font-medium text-base leading-6 [font-family:'Raleway',Helvetica]">
                              {product.oldPrice}
                            </span>

                            <Badge className="px-2 py-1 font-bold text-white text-sm [font-family:'Raleway',Helvetica] rounded-lg [background:linear-gradient(180deg,rgba(255,115,115,1)_0%,rgba(255,111,111,1)_37%,rgba(236,60,60,1)_100%)]">
                              {product.discount}
                            </Badge>
                          </div>

                          <div className="flex flex-col gap-2">
                            <span className="font-bold text-[#394355] text-2xl leading-6 [font-family:'Raleway',Helvetica]">
                              {product.price}
                            </span>

                            <div className="w-[190px] font-normal text-[10px] leading-[10px] [font-family:'Raleway',Helvetica]">
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

            {/* Consultation card */}
            <Card className="w-full max-w-[432px] h-[574px] rounded-[20px] border border-[#dddddd] shadow-[var(--)] backdrop-blur-[79px] relative overflow-hidden bg-gradient-to-b from-[#243057] to-[#374255]">
              <CardContent className="p-0 h-full">
                <img
                  className="absolute w-[198px] h-[308px] top-[-10px] right-1"
                  alt="Portrait smiling"
                  src="/Shatry3-portrait-smiling-handsome-man-using-mobile-phone-chat-app-lookin.png"
                />

                <div className="p-[33px] flex flex-col justify-between h-full">
                  <div className="flex flex-col gap-9">
                    <div className="flex flex-col gap-[30px]">
                      <h3 className="text-white text-2xl font-bold leading-normal w-[253px] [font-family:'Raleway',Helvetica]">
                        Поможем подобрать под ваши размеры и требования
                      </h3>

                      <div className="flex flex-col gap-[9px]">
                        <div className="w-[190px]"></div>
                        <div className="bg-[#4f5d807a] rounded-lg px-3 py-2">
                          <span className="text-white text-base font-semibold leading-normal w-[158px] [font-family:'Raleway',Helvetica]">
                            Проконсультируем
                            <br></br> и подберем
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-center gap-9">
                    <div className="flex flex-col gap-4 w-full">
                      <Input
                        className="h-[67px] bg-white rounded-2xl px-3 py-2 font-normal text-[17px] text-label-colorslc-l-secondary [font-family:'Raleway',Helvetica] tracking-[-0.41px] leading-[22px]"
                        placeholder="Ваш телефон"
                      />

                      <Button className="h-[68px] rounded-2xl shadow-2 [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)] text-white text-base font-semibold [font-family:'Raleway',Helvetica]">
                        Получить помощь в подборе
                      </Button>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <div className="flex items-center justify-center w-[33px] h-[33px] rounded-lg [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]">
                        <img
                          className="w-[17px] h-[13px]"
                          alt="Group"
                          src="/Shatry3-group-7.png"
                        />
                      </div>
                      <p className="text-[#ffffffb2] text-xs font-medium leading-normal w-[296px] [font-family:'Raleway',Helvetica]">
                        Нажимая на кнопку, вы даете согласие на обработку
                        персональных данных и соглашаетесь с Пользовательским
                        соглашение
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {products.slice(4, 5).map((product, index) => (
              <Card
                key={`product-row2-extra-${index}`}
                className="w-full max-w-[432px] h-[574px] rounded-[20px] border border-[#dddddd] shadow-[var(--)] backdrop-blur-[79px]"
              >
                <CardContent className="p-0">
                  <div className="flex flex-col gap-[22px] p-[33px]">
                    <div
                      className="relative w-full h-[197px] bg-cover bg-center"
                      style={{ backgroundImage: `url(${product.image})` }}
                    >
                      <div className="flex gap-1 absolute bottom-1 left-1/2 -translate-x-1/2">
                        <div className="w-[7px] h-[7px] rounded-[3.5px] [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]" />
                        <div className="w-[7px] h-[7px] bg-[#d9d9d9] rounded-[3.5px]" />
                        <div className="w-[7px] h-[7px] bg-[#d9d9d9] rounded-[3.5px]" />
                      </div>
                    </div>

                    <div className="flex flex-col gap-9">
                      <div className="flex flex-col gap-6">
                        <h3 className="font-bold text-[#394355] text-xl leading-6 [font-family:'Raleway',Helvetica]">
                          {product.title}
                        </h3>

                        <div className="flex flex-col gap-[9px]">
                          <div className="flex items-start gap-2">
                            <span className="font-normal text-[#394355] text-base leading-6 [font-family:'Raleway',Helvetica]">
                              Размер:
                            </span>
                            <span className="font-medium text-[#394355] text-base leading-6 [font-family:'Raleway',Helvetica]">
                              {product.size}
                            </span>
                          </div>

                          <div className="flex items-start gap-2">
                            <span className="font-normal text-[#394355] text-base leading-6 [font-family:'Raleway',Helvetica]">
                              Площадь:
                            </span>
                            <span className="font-medium text-[#394355] text-base leading-6 [font-family:'Raleway',Helvetica]">
                              {product.area}
                            </span>
                          </div>

                          <div className="flex items-start gap-2">
                            <span className="font-normal text-[#394355] text-base leading-6 [font-family:'Raleway',Helvetica]">
                              Вместимость:
                            </span>
                            <span className="font-medium text-[#394355] text-base leading-6 [font-family:'Raleway',Helvetica]">
                              {product.capacity}
                            </span>
                          </div>

                          <div className="flex items-start gap-2">
                            <span className="font-normal text-[#394355] text-base leading-6 [font-family:'Raleway',Helvetica]">
                              В наличии:
                            </span>
                            <span className="font-medium text-[#394355] text-base leading-6 [font-family:'Raleway',Helvetica]">
                              {product.availability}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col gap-3">
                        <span className="font-normal text-[#394355] text-base leading-6 [font-family:'Raleway',Helvetica]">
                          Цена:
                        </span>

                        <div className="flex items-start gap-9">
                          <div className="flex items-center gap-1.5">
                            <span className="text-[#4f5d80d9] line-through font-medium text-base leading-6 [font-family:'Raleway',Helvetica]">
                              {product.oldPrice}
                            </span>

                            <Badge className="px-2 py-1 font-bold text-white text-sm [font-family:'Raleway',Helvetica] rounded-lg [background:linear-gradient(180deg,rgba(255,115,115,1)_0%,rgba(255,111,111,1)_37%,rgba(236,60,60,1)_100%)]">
                              {product.discount}
                            </Badge>
                          </div>

                          <div className="flex flex-col gap-2">
                            <span className="font-bold text-[#394355] text-2xl leading-6 [font-family:'Raleway',Helvetica]">
                              {product.price}
                            </span>

                            <div className="w-[190px] font-normal text-[10px] leading-[10px] [font-family:'Raleway',Helvetica]">
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

          {/* Third row of products */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.slice(5, 8).map((product, index) => (
              <Card
                key={`product-row3-${index}`}
                className="w-full max-w-[432px] h-[574px] rounded-[20px] border border-[#dddddd] shadow-[var(--)] backdrop-blur-[79px]"
              >
                <CardContent className="p-0">
                  <div className="flex flex-col gap-[22px] p-[33px]">
                    <div
                      className="relative w-full h-[197px] bg-cover bg-center"
                      style={{ backgroundImage: `url(${product.image})` }}
                    >
                      <div className="flex gap-1 absolute bottom-1 left-1/2 -translate-x-1/2">
                        <div className="w-[7px] h-[7px] rounded-[3.5px] [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]" />
                        <div className="w-[7px] h-[7px] bg-[#d9d9d9] rounded-[3.5px]" />
                        <div className="w-[7px] h-[7px] bg-[#d9d9d9] rounded-[3.5px]" />
                      </div>
                    </div>

                    <div className="flex flex-col gap-9">
                      <div className="flex flex-col gap-6">
                        <h3 className="font-bold text-[#394355] text-xl leading-6 [font-family:'Raleway',Helvetica]">
                          {product.title}
                        </h3>

                        <div className="flex flex-col gap-[9px]">
                          <div className="flex items-start gap-2">
                            <span className="font-normal text-[#394355] text-base leading-6 [font-family:'Raleway',Helvetica]">
                              Размер:
                            </span>
                            <span className="font-medium text-[#394355] text-base leading-6 [font-family:'Raleway',Helvetica]">
                              {product.size}
                            </span>
                          </div>

                          <div className="flex items-start gap-2">
                            <span className="font-normal text-[#394355] text-base leading-6 [font-family:'Raleway',Helvetica]">
                              Площадь:
                            </span>
                            <span className="font-medium text-[#394355] text-base leading-6 [font-family:'Raleway',Helvetica]">
                              {product.area}
                            </span>
                          </div>

                          <div className="flex items-start gap-2">
                            <span className="font-normal text-[#394355] text-base leading-6 [font-family:'Raleway',Helvetica]">
                              Вместимость:
                            </span>
                            <span className="font-medium text-[#394355] text-base leading-6 [font-family:'Raleway',Helvetica]">
                              {product.capacity}
                            </span>
                          </div>

                          <div className="flex items-start gap-2">
                            <span className="font-normal text-[#394355] text-base leading-6 [font-family:'Raleway',Helvetica]">
                              В наличии:
                            </span>
                            <span className="font-medium text-[#394355] text-base leading-6 [font-family:'Raleway',Helvetica]">
                              {product.availability}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col gap-3">
                        <span className="font-normal text-[#394355] text-base leading-6 [font-family:'Raleway',Helvetica]">
                          Цена:
                        </span>

                        <div className="flex items-start gap-9">
                          <div className="flex items-center gap-1.5">
                            <span className="text-[#4f5d80d9] line-through font-medium text-base leading-6 [font-family:'Raleway',Helvetica]">
                              {product.oldPrice}
                            </span>

                            <Badge className="px-2 py-1 font-bold text-white text-sm [font-family:'Raleway',Helvetica] rounded-lg [background:linear-gradient(180deg,rgba(255,115,115,1)_0%,rgba(255,111,111,1)_37%,rgba(236,60,60,1)_100%)]">
                              {product.discount}
                            </Badge>
                          </div>

                          <div className="flex flex-col gap-2">
                            <span className="font-bold text-[#394355] text-2xl leading-6 [font-family:'Raleway',Helvetica]">
                              {product.price}
                            </span>

                            <div className="w-[190px] font-normal text-[10px] leading-[10px] [font-family:'Raleway',Helvetica]">
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
        </div>

        <Button
          variant="link"
          className="font-bold text-[#527dc5] text-2xl leading-6 underline [font-family:'Raleway',Helvetica] p-0 h-auto"
        >
          Показать еще
        </Button>
      </div>
    </section>
  );
};
