import { useState, useEffect } from "react";

const options = {
    method: 'GET',
    url: 'https://axesso-walmart-data-service.p.rapidapi.com/wlm/walmart-search-by-keyword',
    params: {
      keyword: 'Lego Star Wars',
      page: '1',
      sortBy: 'best_match'
    },
    headers: {
      'X-RapidAPI-Key': 'eccab063bemsh92b30a421746c0dp1cd08ajsn5ab4a1e4ad23',
      'X-RapidAPI-Host': 'axesso-walmart-data-service.p.rapidapi.com'
    }
  };
  
  try {
      const response = await axios.request(options);
      console.log(response.data);
  } catch (error) {
      console.error(error);
  }