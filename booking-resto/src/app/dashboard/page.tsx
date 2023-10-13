import LandingPage from "@/components/landingpage/LandingPage";
import RestaurantCard from "@/components/restaurant/restaurantCard";
import { RestaurantMaping } from "@/types/restaurant";
import { getRestaurantData } from "@/utils/api/restaurant.api";
import React from "react";

export default async function DashboardPage() {
  const restaurantData: RestaurantMaping[] = await getRestaurantData();
  return (
    <div>
      <LandingPage />
      <div>
        <p className="text-purple-900 text-2xl px-16 py-12 font-semibold">
          Some top restaurant for dinning out
        </p>
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-8 py-8">
        {restaurantData.map((Restaurant) => (
          <div key={Restaurant.ID}>
            <RestaurantCard
              ID={Restaurant.ID}
              name={Restaurant.name}
              content={Restaurant.content}
              image={Restaurant.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
