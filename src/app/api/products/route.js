const Data = [
  { title: "Buggati", img: "" },
  { title: "Ferrari", img: "" },
  { title: "Mercedes", img: "" },
  { title: "Lamborghini", img: "" },
  { title: "BMW", img: "" },
  { title: "Nissan GTR", img: "" },
];

export async function GET(request) {
  return new Response(JSON.stringify(Data, null, 2), {
    headers: { 'Content-Type': 'application/json' },
  });
}
export async function POST(request) {
  return new Response(JSON.stringify(Data, null, 2), {
    headers: { 'Content-Type': 'application/json' },
  });
}
