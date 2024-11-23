import { ImageSourcePropType, Pressable, ScrollView, StyleSheet } from 'react-native';
import { AlternativeSelection, AssignmentCard } from '@/components';
import React, { PropsWithChildren, useState } from 'react';
import { loremImpsum } from '@/assets/loremipsum';
import ChatModal from '../../components/ChatModal';
import { ThemedText } from '@/components/ThemedText';

type Props = PropsWithChildren<{
  placeholderImageSource: ImageSourcePropType | undefined;
  taskStatement: string;
}>;

export default function Assignment() {
  const [chatVisibility, setChatVisibility] = useState(false);
  const [actualQuestion, setActualQuestion] = useState('');
  const handleChatVisibility = () => {
    setChatVisibility(!chatVisibility);
  };

  return (
    <ScrollView style={{ height: '100%', backgroundColor: 'white' }}>
      <AssignmentCard
        placeholderImageSource={require('../../assets/images/excercise/ejercicio.png')}
        taskStatement={loremImpsum}
        hasProgress={false}
      />
      <AlternativeSelection />
      <Pressable style={[styles.button]} onPress={handleChatVisibility}>
        <ThemedText style={styles.textStyle}>Chat</ThemedText>
      </Pressable>
      <ChatModal
        chatVisibility={chatVisibility}
        setChatVisibility={setChatVisibility}
        actualQuestion={actualQuestion}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  home: {
    height: '100%',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: '#0078fe',
    width: '30%',
    marginLeft: 'auto',
    marginTop: 'auto',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  exerciseimage: {
    boxSizing: 'fit',
  },
});