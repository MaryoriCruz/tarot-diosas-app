// src/services/services.js

const API_URL = 'https://6872278c76a5723aacd3cbb3.mockapi.io/api/v1/tarot';


// Método GET - Todas las cartas
export async function getAllCards() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al obtener las cartas:", error);
  }
}

// Método GET por ID
export async function getCardById(id) {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error al obtener la carta con ID ${id}:`, error);
  }
}