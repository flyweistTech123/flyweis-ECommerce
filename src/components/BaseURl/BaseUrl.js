export const BaseUrl = "https://royal-security-backend.vercel.app/";

export const getAuthHeaders = () => {
    const token = sessionStorage.getItem("token");
    return {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
};
