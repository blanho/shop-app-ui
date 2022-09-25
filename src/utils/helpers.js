export const formatPrice = (price) => {
  return Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price / 100);
};

export const getUniqueValues = () => {};
