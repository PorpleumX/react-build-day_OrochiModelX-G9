const getFood = async () => {
  const response = await fetch("https://api.example.com/foods");
  const data = await response.json();

  console.log(data);
};