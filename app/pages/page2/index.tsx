import React, { useState } from 'react';
import Page2Design from '@smartface-generated/pages/page2';
import SimpleViewItem from '@app/components/SimpleViewItem';
import { View } from 'react-native';

export default (props: any) => {

    const [switcState, setSwitchState] = useState(true);
    console.log('switch', switcState);

    return <Page2Design switch1={{
        value: switcState, onValueChange: setSwitchState
    }}
        flatList1={
            {
                classList: [],
                data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
                renderItem: ({ item, index }: any) => (<SimpleViewItem data={item} index={index} />),
                ListFooterComponent: (<View style={{ height: 200, width: 100, backgroundColor: 'red' }}></View>)
            }
        }
    />;
};
