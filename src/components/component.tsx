import {View, Text, Pressable } from 'react-native';
import { Link } from 'expo-router'
import {}

type MediaProps = {
   mediaitem : Media; 
};

export default function Component ({mediaitem}: MediaProps){
    return(
        <Link href={'media/123'} as Child>
        <Pressable>
        <Text>
        </Text>
        </Pressable>
        </Link>
    );

}