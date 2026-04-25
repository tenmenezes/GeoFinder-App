export async function searchPlaces(query: string) {
    if (!query) return [];
  
    const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
      query
    )}&format=json&limit=5`;
  
    try {
      const res = await fetch(url, {
        headers: {
          "User-Agent": "GeoFinderApp/1.0 (tenn.menezes@gmail.com)",
        },
      });
  
      console.log("STATUS:", res.status);
  
      if (!res.ok) {
        console.log("ERRO API:", res.status);
        return [];
      }
  
      const data = await res.json();
  
      console.log("RAW:", data);
  
      return data.map((item: any) => ({
        name: item.display_name,
        address: item.display_name,
        latitude: parseFloat(item.lat),
        longitude: parseFloat(item.lon),
      }));
    } catch (err) {
      console.log("FETCH ERROR:", err);
      return [];
    }
  }