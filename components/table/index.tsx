import React from "react";
import NDTableSimple from "./simple-table";

interface NDTableProps {
    type?: "simple" | "data";
    [key: string]: any;
}

const NDTable: React.FC<NDTableProps> = ({ type = "simple", ...props }) => {
    return (
        <>
            {type === "simple" && <NDTableSimple {...props} />}
            {type === "data" && <NDTableSimple {...props} />}
        </>
    );
}

export default NDTable;