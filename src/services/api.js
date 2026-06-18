export const getMerch = async () => {
    const response = await fetch("/merchtable.json");

    if (!response.ok) {
        throw new Error("Failed to fetch merch");
    }

    const data = await response.json();

    return data;
};