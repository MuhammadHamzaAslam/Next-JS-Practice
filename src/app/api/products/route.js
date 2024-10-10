const Data = [
  { title: "Buggati", img: "" },
  { title: "Ferrari", img: "" },
  { title: "Mercedes", img: "" },
  { title: "Lamborghini", img: "" },
  { title: "BMW", img: "" },
  { title: "Nissan GTR", img: "" },
];

export async function GET() { 
  return Response.json(Data);
}

export async function POST(request) { 
  const newObj = request.json()
  Data.push(newObj)
  return Response.json(Data)
}


