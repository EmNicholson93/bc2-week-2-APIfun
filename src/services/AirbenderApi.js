const URL = 'https://last-airbender-api.herokuapp.com/api/v1/characters';

const api = {
    getChar(frenemy, type) {
        let url = URL;
        
        const searchParams = new URLSearchParams();
        searchParams.set(type, frenemy);
        const params = searchParams.toString();
        url = `${URL}?${params}`;

        return fetch(url)
            .then(response => response.json());
    }
};

export default api;