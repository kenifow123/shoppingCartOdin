import {useEffect} from "react";

const url = "https://fakestoreapi.com/products";

const useApi = (setItems) => {
    useEffect(() => {
        let ignore = false;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                if (!ignore) {
                    for (let i = 0; i < 10; i++) {
                        setItems(prev => [...prev, {name: data[i].title, image: data[i].image}])
                    }
                }
            });

        return () => {
            ignore = true;
        }
    }, []);

}

export default useApi;