// qiymetin formatlanmasi
export const formatPrice = (price: number): string => {
  if (price === 0) return "Pulsuz";
  return `$${price.toFixed(2)}`;
};

// reytingin rengini qaytarir
export const getRatingColor = (rating: number): string => {
  if (rating >= 9) return "text-green-400";
  if (rating >= 7) return "text-yellow-400";
  return "text-red-400";
};

// axtar funksiyasi
export const filterBySearch = (title: string, search: string): boolean => {
  return title.toLowerCase().includes(search.toLowerCase());
};