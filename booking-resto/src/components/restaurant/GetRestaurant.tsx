import React from "react";

import { Restaurant, RestaurantMaping } from "@/types/restaurant";
import { StarFilledIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { getRestaurantData } from "@/utils/api/restaurant.api";

export default async function GetRestaurant() {
  const restaurantData: RestaurantMaping[] = await getRestaurantData();

  // console.log(restaurantData);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
      {restaurantData.map((Restaurant, index) => (
        <div key={Restaurant.ID}>
          <Link href={`/restaurants/${Restaurant.ID}`}>
            <div className="md:max-w-md md:mx-auto shadow-md rounded-xl overflow-hidden relative">
              <img
                className="w-full h-48 object-cover rounded-lg transition-transform duration-300 transform hover:scale-110"
                src={Restaurant.image}
                alt={Restaurant.name}
              />
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold mb-2">
                    {Restaurant.name}
                  </h3>
                  <div className="flex items-center">
                    <StarFilledIcon className="h-5 w-5 text-yellow-500 mr-1" />
                    <span className="text-gray-800">****</span>
                  </div>
                </div>
                <p className="abosulute bottom-4 right-4 p-2 z-30">
                  {Restaurant.content}
                </p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
