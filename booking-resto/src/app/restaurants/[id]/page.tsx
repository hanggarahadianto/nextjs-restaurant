import OrderForm from "@/components/form/OrderForm";

import Navbar from "@/components/navbar/Navbar";
import { Button } from "@/components/ui/button";
import { restaurantDetails } from "@/utils/api/restaurant.api";
import { Calendar, PhoneCall } from "lucide-react";
import React, { FC } from "react";

interface RestaurantProps {
  params: {
    id: string;
  };
}

const RestaurantPage: FC<RestaurantProps> = async ({ params }) => {
  const restaurantData: any = await restaurantDetails(params.id);
  const tagData: any = await params.id;

  return (
    <div>
      <Navbar />
      <img
        className="w-full  h-48 object-cover transition-transform duration-300 transform hover:scale-110"
        src={restaurantData.data.image}
        alt={restaurantData.data.name}
      />
      <div className="">
        <div className="flex justify-center content-center bg-red-50 px-8 py-4 ">
          <section className="mt-10 w-7/12 px-4 py-4 bg-slate-100 mr-20 rounded-lg shadow-2xl">
            <div className="border-b-2 border-b-gray-200 py-8">
              <p className="text-3xl font-bold">{restaurantData.data.name}</p>
            </div>
            <div className="py-4 w-11/12">
              <p>{restaurantData.data.content}</p>
            </div>
          </section>
          <section>{/* <div>{restaurantData}</div> */}</section>
          {/* ---------------------------------------------------- */}
          <div className="w-80 bg-slate-100 mt-10 shadow-2xl">
            <div className="px-8 py-4 flex justify-center">
              <div className="border-b-gray-200 px-4 py-2 border-b-2 w-full flex content-center justify-center ">
                <p className="font-semibold">Make Reservation</p>
              </div>
            </div>
            <div className="flex justify-between px-4 py-4">
              <div>{/* <DatePicker /> */}</div>
              <div className="bg-green-200"></div>
              {/* ------------------------- */}
              <OrderForm />
              {/* ------------------------- */}
            </div>
            <div className="">
              <div className="border-b-gray-200 px-4 py-2 border-b-2 w-full flex content-center justify-center ">
                <p className="font-semibold">Delivery or Takeout</p>
              </div>

              <div className="px-4 py-2">
                <div className="px-4 py-2">Takeout</div>
                <Button className="bg-slate-100 hover:bg-slate-100 border-2 border-green-200">
                  <div className="flex ">
                    <PhoneCall className="text-black" />
                    <p className="text-red-800 ml-2">
                      {restaurantData.data.phone}
                    </p>
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantPage;
