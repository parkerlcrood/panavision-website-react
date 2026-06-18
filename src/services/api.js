export const getMerch = async () => {
    const response = await fetch(`${import.meta.env.BASE_URL}merchtable.json`);

    if (!response.ok) {
        throw new Error("Failed to fetch merch");
    }

    const data = await response.json();

    return data;
};