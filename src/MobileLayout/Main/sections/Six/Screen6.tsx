import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Select, SelectTrigger, SelectValue } from "../../../../components/ui/select";

// Product data for reusability
const productData = {
  title: "Арочный шатер 8х8м (36м²)",
  specs: [
    { label: "Размер:", value: "200*80 м" },
    { label: "Площадь:", value: "300 м²" },
    { label: "Вместимость:", value: "400 человек" },
    { label: "В наличии:", value: "да/под заказ" },
  ],
  pricing: {
    originalPrice: "230 000 ₽",
    discount: "-30%",
    currentPrice: "от 150 000 ₽",
    note: "В зависимости от включенных опций",
  },
  image: "/15-9bf6ff67-------1.png",
};

export const Screen6 = (): JSX.Element => {
  return (
    <main className="relative w-full max-w-[375px] h-[732px] bg-white overflow-hidden mx-auto">
      {/* Header */}
      <header className="pt-[29px] px-6">
        <h1 className="font-['Raleway',Helvetica] font-semibold text-2xl">
          <span className="text-[#527dc5]">Хиты</span>
          <span className="text-[#232c42]"> продаж</span>
        </h1>
      </header>

      {/* Category Filters */}
      <div className="flex gap-6 mt-[53px] px-6">
        <div className="relative">
          <Select>
            <SelectTrigger className="w-[148px] h-[46px] rounded-[50px] border-none bg-white font-['Raleway',Helvetica] font-semibold text-[#232c42] text-lg">
              <SelectValue placeholder="Шатры" />
              <ChevronDownIcon className="h-4 w-4 opacity-50" />
            </SelectTrigger>
          </Select>
        </div>

        <Button className="w-[153px] h-[46px] rounded-[50px] font-['Raleway',Helvetica] font-semibold text-white text-lg shadow-2 [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]">
          Ангары
          <ChevronDownIcon className="h-4 w-4 ml-1" />
        </Button>
      </div>

      {/* Product Cards */}
      <div className="flex gap-3 mt-[24px] px-6 overflow-x-auto">
        {/* First Product Card */}
        <Card className="w-[327px] h-[470px] rounded-[20px] border border-solid border-[#dddddd] shadow-[0px_24px_38px_0px_rgba(22,29,36,0.08)] backdrop-blur-[79px]">
          <CardContent className="p-6">
            <div className="flex flex-col gap-[22px]">
              {/* Product Image */}
              <div className="relative w-full h-[154px]">
                <div
                  className="h-[146px] w-full bg-cover bg-center rounded-md"
                  style={{ backgroundImage: `url(${productData.image})` }}
                >
                  {/* Image Pagination Dots */}
                  <div className="flex items-center gap-1 absolute bottom-0 left-1/2 transform -translate-x-1/2">
                    <div className="w-[7px] h-[7px] rounded-full [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]" />
                    <div className="w-[7px] h-[7px] rounded-full bg-[#d9d9d9]" />
                    <div className="w-[7px] h-[7px] rounded-full bg-[#d9d9d9]" />
                  </div>
                </div>
              </div>

              {/* Product Details */}
              <div className="flex flex-col gap-6">
                {/* Product Title */}
                <h2 className="font-['Raleway',Helvetica] font-bold text-[#394355] text-base leading-4">
                  {productData.title}
                </h2>

                {/* Product Specifications */}
                <div className="flex flex-col gap-[9px]">
                  {productData.specs.map((spec, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <span className="font-['Raleway',Helvetica] font-normal text-[#394355] text-[11px] leading-4">
                        {spec.label}
                      </span>
                      <span className="font-['Raleway',Helvetica] font-medium text-[#394355] text-[11px] leading-4">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing Section */}
              <div className="flex flex-col gap-3">
                <span className="font-['Raleway',Helvetica] font-normal text-[#394355] text-base leading-6">
                  Цена:
                </span>

                <div className="flex items-start gap-9">
                  <div className="flex items-center gap-1.5">
                    <span className="font-['Raleway',Helvetica] font-medium text-[#4f5d80d9] text-[11px] leading-6 line-through">
                      {productData.pricing.originalPrice}
                    </span>
                    <Badge className="px-2 py-1 rounded-lg font-bold text-white text-sm [background:linear-gradient(180deg,rgba(255,115,115,1)_0%,rgba(255,111,111,1)_37%,rgba(236,60,60,1)_100%)]">
                      {productData.pricing.discount}
                    </Badge>
                  </div>

                  <div className="flex flex-col gap-1">
                    <span className="font-['Raleway',Helvetica] font-bold text-[#394355] text-base leading-6">
                      {productData.pricing.currentPrice}
                    </span>
                    <p className="font-['Raleway',Helvetica] text-[10px] leading-[10px] w-[129px]">
                      <span className="italic text-[#eb3c3c]">*</span>
                      <span className="italic text-[#394355]">
                        {productData.pricing.note}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Second Product Card (Duplicate) */}
        <Card className="w-[327px] h-[470px] rounded-[20px] border border-solid border-[#dddddd] shadow-[0px_24px_38px_0px_rgba(22,29,36,0.08)] backdrop-blur-[79px]">
          <CardContent className="p-6">
            <div className="flex flex-col gap-[22px]">
              {/* Product Image */}
              <div className="relative w-full h-[154px]">
                <div
                  className="h-[146px] w-full bg-cover bg-center rounded-md"
                  style={{ backgroundImage: `url(${productData.image})` }}
                >
                  {/* Image Pagination Dots */}
                  <div className="flex items-center gap-1 absolute bottom-0 left-1/2 transform -translate-x-1/2">
                    <div className="w-[7px] h-[7px] rounded-full [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]" />
                    <div className="w-[7px] h-[7px] rounded-full bg-[#d9d9d9]" />
                    <div className="w-[7px] h-[7px] rounded-full bg-[#d9d9d9]" />
                  </div>
                </div>
              </div>

              {/* Product Details */}
              <div className="flex flex-col gap-6">
                {/* Product Title */}
                <h2 className="font-['Raleway',Helvetica] font-bold text-[#394355] text-base leading-4">
                  {productData.title}
                </h2>

                {/* Product Specifications */}
                <div className="flex flex-col gap-[9px]">
                  {productData.specs.map((spec, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <span className="font-['Raleway',Helvetica] font-normal text-[#394355] text-[11px] leading-4">
                        {spec.label}
                      </span>
                      <span className="font-['Raleway',Helvetica] font-medium text-[#394355] text-[11px] leading-4">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing Section */}
              <div className="flex flex-col gap-3">
                <span className="font-['Raleway',Helvetica] font-normal text-[#394355] text-base leading-6">
                  Цена:
                </span>

                <div className="flex items-start gap-9">
                  <div className="flex items-center gap-1.5">
                    <span className="font-['Raleway',Helvetica] font-medium text-[#4f5d80d9] text-[11px] leading-6 line-through">
                      {productData.pricing.originalPrice}
                    </span>
                    <Badge className="px-2 py-1 rounded-lg font-bold text-white text-sm [background:linear-gradient(180deg,rgba(255,115,115,1)_0%,rgba(255,111,111,1)_37%,rgba(236,60,60,1)_100%)]">
                      {productData.pricing.discount}
                    </Badge>
                  </div>

                  <div className="flex flex-col gap-1">
                    <span className="font-['Raleway',Helvetica] font-bold text-[#394355] text-base leading-6">
                      {productData.pricing.currentPrice}
                    </span>
                    <p className="font-['Raleway',Helvetica] text-[10px] leading-[10px] w-[129px]">
                      <span className="italic text-[#eb3c3c]">*</span>
                      <span className="italic text-[#394355]">
                        {productData.pricing.note}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Navigation Buttons */}
      <div className="flex gap-6 justify-center mt-[24px]">
        <Button
          variant="outline"
          size="icon"
          className="w-14 h-14 rounded-[50px] shadow-[0px_15px_44px_#1f7cfe66] flex items-center justify-center"
        >
          <ChevronLeftIcon className="h-6 w-6" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="w-14 h-14 rounded-[50px] shadow-[0px_15px_44px_#1f7cfe66] flex items-center justify-center"
        >
          <ChevronRightIcon className="h-6 w-6" />
        </Button>
      </div>
    </main>
  );
};
