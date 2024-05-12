import apiInstance from './apiInstance';

export const getProducts = async () => {
    const response = await apiInstance.get('/v2/list_movies.json', {
        params: {
            minimum_rating: 9,
            sort_by: 'year',
        },
    });
    return response?.data?.data?.movies || [];
};
