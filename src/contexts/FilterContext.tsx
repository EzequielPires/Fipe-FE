import { createContext, useContext, useState } from "react";
import { Filter } from "../templates/site/components/Filter";

interface FilterContextProps {
    handleShowFilter: () => void;
}

const FilterContext = createContext({} as FilterContextProps);

const FilterProvider = ({ children }: any) => {
    const [show, setShow] = useState(false);

    const handleShowFilter = () => setShow(!show);

    return (
        <FilterContext.Provider value={{
            handleShowFilter
        }}>
            {children}
            {show && <Filter />}
        </FilterContext.Provider>
    )
}

const useFilter = () => {
    const context = useContext(FilterContext);
    return context;
}

export { useFilter, FilterProvider };