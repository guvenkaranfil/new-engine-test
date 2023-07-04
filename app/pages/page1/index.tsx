import React from 'react';
import Page1Design from '@smartface-generated/pages/page1';

export default (props: any) => {
  return (
    <Page1Design
      pressable2={{
        onPress: () => props.navigation.navigate('pagesStack'),
        // style: { backgroundColor: 'red' },
      }}
    />
  );
};
