export const getRandomThaiFood = async () => {
  try {
    // ดึงรายการอาหารไทย
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/filter.php?a=Thai"
    );

    if (!response.ok) {
      throw new Error("ไม่สามารถดึงรายการอาหารได้");
    }

    const data = await response.json();

    // สุ่มอาหาร 1 เมนู
    const randomIndex = Math.floor(Math.random() * data.meals.length);
    const randomMeal = data.meals[randomIndex];

    // ดึงรายละเอียดอาหาร
    const detailResponse = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${randomMeal.idMeal}`
    );

    if (!detailResponse.ok) {
      throw new Error("ไม่สามารถดึงรายละเอียดอาหารได้");
    }

    const detailData = await detailResponse.json();

    return detailData.meals[0];
  } catch (error) {
    console.error("เกิดข้อผิดพลาด:", error);
    return null;
  }
};