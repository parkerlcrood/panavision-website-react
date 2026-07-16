import { useState } from "react";

export const getMerch = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/merch`);
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

export const getVideos = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/videos`);
    if (!response.ok) {
        throw new Error("Failed to fetch videos");
    }
    const data = await response.json();
    return data;
}

export const getMusic = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/music`);
    if (!response.ok) {
        throw new Error("Failed to fetch music");
    }
    const data = await response.json();
    return data;
}

export const getShows = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/shows`);
    if (!response.ok) {
        throw new Error("Failed to fetch shows");
    }
    const data = await response.json();
    return data;
}