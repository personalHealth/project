import Papa from "papaparse";

export default async function getMovies() {
  const resp = await fetch(process.env.NEXT_PUBLIC_MOVIES);

  const data = await resp.text();
  const parsed = await new Promise((resolve, reject) => {
    Papa.parse(data, {
      dynamicTyping: true,
      header: true,
      complete: (result) => resolve(result.data),
      error: reject,
    });
  });
  return parsed;
}
