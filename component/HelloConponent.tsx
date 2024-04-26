import { Text} from 'react-native';
import { Box, Button, Center,NativeBaseProvider  } from 'native-base';
// import { } from '';
const Hello = ({navigation}: {navigation: any}) =>  {
    return (
        <NativeBaseProvider>
        <Center marginTop="50%">
        <Text>Hello World</Text>
        
        </Center>
        </NativeBaseProvider>
    )
}
export default Hello;