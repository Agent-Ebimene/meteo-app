export const baseURL = 'https://api.open-meteo.com/v1/forecast?';
export const hourlyURL =
  'hourly=temperature_2m,relativehumidity_2m,dewpoint_2m,weathercode,pressure_msl,surface_pressure,windspeed_10m,windspeed_80m,windspeed_120m,soil_temperature_0cm,soil_temperature_6cm,soil_temperature_18cm';
export const dailyURL =
  'daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum,rain_sum,showers_sum&timezone=Europe%2FLondon';

export const getFocastUrl = (payload) => {
  switch (payload.type) {
    case 'hourly':
      return `${baseURL}latitude=${payload.lat}&longitude=${payload.lng}&` + hourlyURL;
    case 'daily':
      return `${baseURL}latitude=${payload.lat}&longitude=${payload.lng}&` + dailyURL;
    default:
      return;
  }
};
