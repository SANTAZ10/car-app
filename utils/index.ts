export async function fetchCars(){
    const headers = {
		'X-RapidAPI-Key': 'ed48e640f6msh467b4dcfa9a0f8bp1f8356jsn16ce96641477',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}

    const response = await fetch ('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
        headers: headers,
    });

    const result = await response.json();

    return result;

}