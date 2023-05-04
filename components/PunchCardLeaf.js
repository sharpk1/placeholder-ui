import React from 'react';
import { View } from 'react-native';
import UnpunchedLeaf from './UnpunchedLeaf';
import PunchedLeaf from './PunchedLeaf';

const PunchCardLeaf = () => {
  return (
    <View style={{ 
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: '#ffffff',
        marginTop: 50,
        marginBottom: 20
    }}>
      <PunchedLeaf width={50} height={50} style={{ marginRight: 20 }} />
      <PunchedLeaf width={50} height={50} style={{ marginRight: 20 }} />
      <PunchedLeaf width={50} height={50} style={{ marginRight: 20 }} />
      <PunchedLeaf width={50} height={50} style={{ marginRight: 20 }} />
      <UnpunchedLeaf width={50} height={50} fill="#000000" />
    </View>
  );
};

export default PunchCardLeaf;
