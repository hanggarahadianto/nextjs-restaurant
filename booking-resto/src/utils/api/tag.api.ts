export const getRestaurantData = async () => {
  const res = await fetch("http://localhost:5000/restaurant/get", {
    method: "GET",
    // mode: "no-cors",
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const dataRestaurant = await res.json();
  // console.log(dataBuidling);
  return dataRestaurant.data;
};
