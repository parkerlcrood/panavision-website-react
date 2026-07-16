export async function authFetch(url, options = {}){
    let accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");

    let res = await fetch(url,{ ...options,
        headers: {
            ...options.headers,
            "Authorization": `Bearer ${accessToken}`
        }
    });

    if(res.status !== 401) return res;

    const refreshRes = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/token`,{
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({refreshToken})
    });

    if (!refreshRes.ok) return res;

    const tokenData = await refreshRes.json();
    localStorage.setItem("accessToken", tokenData.accessToken);

    return fetch(url, {
        ...options,
        headers: {
            ...options.headers,
            Authorization: `Bearer ${tokenData.accessToken}`
        }
    })
}