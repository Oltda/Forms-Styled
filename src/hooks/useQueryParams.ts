
import { useMemo } from "react";

export const useQueryParams = () => {

    const queryParameters = new URLSearchParams(window.location.search)

    const result = useMemo(() => {
        const params: any = {};

        for (let [key, value] of queryParameters.entries()) {
            params[key] = value;
        }

        return params;
    }, [window.location.search])

    return result;

}

