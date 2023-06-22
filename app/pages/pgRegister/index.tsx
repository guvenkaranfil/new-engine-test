import React, { useState } from 'react';
import PgRegisterDesign from '@smartface-generated/pages/pgRegister';

export default (props: any) => {

    const [gender, setGender] = useState('male');

    return <PgRegisterDesign genderComp1={{
        isActive: true
    } as any} genderCompMale={{
        isActive: true
    } as any} />;
};
