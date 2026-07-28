import { useState } from "react";
import { authFetch } from "../pages/authFetch";

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

export const getMerchImages = async (merch_id) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/merch/${merch_id}/images`);
    if (!response.ok) {
        throw new Error("Failed to fetch merch images");
    }
    const images = await response.json();
    return images;
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

export const uploadMerchImages = async (merch_id, formData) => {
    const response = await authFetch(
        `${import.meta.env.VITE_API_URL}/api/merch/${merch_id}/upload`,
        {
            method: "POST",
            body: formData
        }
    );

    if (!response.ok) {
        throw new Error("Failed to upload merch images");
    }

    return await response.json();
};


export const deleteMerchImage = async (merch_id, image_id) => {
    const response = await authFetch(
        `${import.meta.env.VITE_API_URL}/api/merch/${merch_id}/images/${image_id}`,
        {
            method: "DELETE"
        }
    );

    if (!response.ok) {
        throw new Error("Failed to delete merch image");
    }

    return await response.json();
};


export const updateImageOrder = async (merch_id, images) => {
    const response = await authFetch(
        `${import.meta.env.VITE_API_URL}/api/merch/${merch_id}/images/order`,
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ images })
        }
    );

    if (!response.ok) {
        throw new Error("Failed to update image order");
    }

    return await response.json();
};