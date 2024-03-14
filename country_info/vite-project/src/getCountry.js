import { displayCountry } from "./displayCountry";

export const countryName = async (country) => {
  const URL = "https://restcountries.com/v3/all"; 
  try {
    const res = await fetch(URL);
    
    if (!res.ok) {
      throw new Error("Hata aldınız...");
    } 
      const data =await res.json();
      displayCountry(data);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
  
};


countryName()