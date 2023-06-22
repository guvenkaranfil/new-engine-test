import React from 'react';
import GenderCompMaleDesign from '@smartface-generated/components/GenderCompMale';

export default (props: any) => {
    return <GenderCompMaleDesign genderCompMale={props}


        vimage={{
            classList: props.isActive ? ['.genderCompMale-vimage.active'] : []
        }}
        text1={{
            classList: props.isActive ? ['.genderComp-text1.active'] : []
        }}
    />;
};
