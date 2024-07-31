// utils/fetchData.js
export const exerciseOptions = {
    method: "GET",
    headers: {
        'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
        'x-rapidapi-key': '8c24f3c5e6msh09445ad8f3bb187p1d5740jsn7936d70cba6e'
    }
};

export const fetchData = async (url, options) => {
    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return null; // Or handle the error as needed
    }
};
