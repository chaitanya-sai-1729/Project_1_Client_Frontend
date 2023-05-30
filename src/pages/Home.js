import { ChakraProvider } from '@chakra-ui/react'
import {useNavigate,useLocation} from "react-router-dom";
import React,{useState,useEffect}from 'react';
import Axios from "axios";
import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Center,
  CardFooter,
  Button,
  Box


} from '@chakra-ui/react';


export const Home = () => {
  const navigate = useNavigate();
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  const location = useLocation();
  const { username } = location.state;
  console.log(username);

  useEffect(() => {
    setInterval(function () {
      navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
        console.log(latitude, longitude,position.coords.accuracy);
        Axios.post("https://project-1-client-backend.vercel.app/home", { _id:username,latitude: latitude, longitude: longitude }).then(function (response) {
          console.log(response);
        })
      });
    }, 1 * 60000);


  }, [latitude, longitude])

  return (
    <ChakraProvider>
      <Center>
        <Box boxShadow='dark-lg' p='6' rounded='md' bg='white' mt={120}>
          <Card maxW='sm' mt={0} >
            <CardBody >
              <Image
                src='data:image/jpeg;base64,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QJGWxAXK9yRwsJsz5WYWByvqNPSKRvduByHcNfW8NmwHLPxOnyMDbYz5Mn6Tl3GdWcSk25XHJxbxnbgIiICcLH4lffi7WCLyv0jyHE5id2VlwiAk7oJJuSc84HOTFMf6dNmP62/MpKMHVf8AqVLD9KfedS0zAo0dl01+G55nOWlpKNAJJEDXdE0NFTqoksQKFXZdNtBunmuUrNs+onUfeHJp2IgcNsU6ddGHaMx6TcYlCCVYaeM7BEp19nU2zKC/MZQIf/I00UKDvEAZLnNWxFZ8lTcB4tL1DDImSqB8/OTWgcwbNZv6js3YMhLNHAU10UfOW4gabg5TJQcptECGph0bVQZSqbJS90JQ9hynTiBw3wdZc8nHeQZEMQFbpoUy4j8PpPQzRkBFiAR25wKWFxCAE7621vcSKvtNDkgZzcdUG3nJ/wDxdK99wd3DylqnSCiygDuEDnXxD8FpjzPpMrspSbuzOe029J05mBBTwqLooElCDlNogalBylergkbVRLUQOU+yrdR2Xs1ErlayXuocE6rO7MWgeYxWK3rWBDKQQDre/wC09HRqhlDDQgHzmKuHVusoPeJmhSCqFGg0gSxEQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQP/Z'
                alt='Green double couch with wooden legs'
                borderRadius='lg'
              />
              <Center>
                <Heading size='lg' mt={5}>Happy Journey !</Heading>
              </Center>
            </CardBody>
            <Center>
              <CardFooter>
                <Button variant='solid' colorScheme='blue' onClick={()=>navigate('/')}>
                  Logout
                </Button>
              </CardFooter>
            </Center>
          </Card>
        </Box>
      </Center>
    </ChakraProvider>
  )
}
