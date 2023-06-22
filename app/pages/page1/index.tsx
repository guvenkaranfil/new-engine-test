import React from 'react';
import Page1Design from '@smartface-generated/pages/page1';

export default (props: any) => {
  return (
    <Page1Design
      pressable1={{
        onPress: () => props.navigation.navigate('page2'),
        style: { backgroundColor: 'red' },
      }}
    />
  );
};
