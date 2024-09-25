import { useEffect, useState } from "react";


function useCurrencyInfo(currency) {
    const url = `https://open.er-api.com/v6/latest/${currency}`;
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(url).then((res) => res.json()).then((res) => setData(res['rates']));
    }, [currency]);
    return data;
}

export default useCurrencyInfo;
