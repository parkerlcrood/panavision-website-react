export const getMerch = async () => {
    const response = await fetch('/api/merch');
    if (!response.ok) {
        throw new Error("Failed to fetch merch");
    }
    const data = await response.json();
    return data;
}

export const getMerchById = async (merch_id) => {
    const all = await getMerch();
    const item = all.find((m) => m.merch_id === merch_id);
    if (!item) throw new Error("Not found");
    return item;
}