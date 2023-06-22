import React from 'react';
import Page1Design from '@smartface-generated/pages/page1';

export default (props: any) => {
<<<<<<< HEAD
    return <Page1Design />;
=======
  return (
    <Page1Design
      pressable1={{
        onPress: () => props.navigation.navigate('page2'),
        style: { backgroundColor: 'red' },
      }}
    />
  );
>>>>>>> 2eb2df5d15ce26e12feb2d165606df9328a4d692
};
