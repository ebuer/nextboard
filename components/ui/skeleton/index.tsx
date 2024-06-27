import React from 'react';
import UiSkeletonUserList from "./user-list";

interface UiSkeletonProps {
    type?: string;
    props?: any;
}

const UiSkeleton: React.FC<UiSkeletonProps> = ({ type, props }) => {

    // can create more skeletons by type

    return (
        <>
            <UiSkeletonUserList {...props} />
        </>
    );
};

export default UiSkeleton;