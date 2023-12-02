// /* eslint-disable react/prop-types */
// import { Box, Flex, Heading, Text, VStack, List, ListItem, ListIcon, Button, useColorModeValue,HStack } from '@chakra-ui/react';
// import { FaCheckCircle } from 'react-icons/fa';

// function PriceWrapper({ children }) {
//   return (
//     <Box
//       mb={4}
//       shadow="base"
//       borderWidth="1px"
//       alignSelf={{ base: 'center', lg: 'flex-start' }}
//       borderColor={useColorModeValue('gray.200', 'gray.500')}
//       borderRadius={'xl'}>
//       {children}
//     </Box>
//   );
// }

// function SubscriptionCards() {
//   return (
//     <div>
//     <Box py={12}>
//       <VStack spacing={2} textAlign="center">
//         <Heading as="h1" fontSize="4xl">
//           Plans that fit your need
//         </Heading>
//         <Text fontSize="lg" color={'gray.500'}>
//           Start with a 14-day free trial. No credit card needed. Cancel at any time.
//         </Text>
//       </VStack>
//       <Flex
//         direction={{ base: 'column', md: 'row' }}
//         justify="space-between"
//         textAlign="center"
//         spacing={{ base: 4, lg: 10 }}
//         py={10}
//         gap={10}>


// <PriceWrapper>
//       <Box py={4} px={12}>
//         <Text fontWeight="500" fontSize="2xl">
//           Hobby
//         </Text>
//         <HStack justifyContent="center">
//           <Text fontSize="3xl" fontWeight="600">
//             $
//           </Text>
//           <Text fontSize="5xl" fontWeight="900">
//             79
//           </Text>
//           <Text fontSize="3xl" color="gray.500">
//             /month
//           </Text>
//         </HStack>
//       </Box>
//       <VStack
//         bg={useColorModeValue('gray.50', 'gray.700')}
//         py={4}
//         borderBottomRadius={'xl'}>
//         <List spacing={3} textAlign="start" px={12}>
//           <ListItem>
//             <ListIcon as={FaCheckCircle} color="green.500" />
//             Unlimited build minutes
//           </ListItem>
//           <ListItem>
//             <ListIcon as={FaCheckCircle} color="green.500" />
//             Lorem, ipsum dolor.
//           </ListItem>
//           <ListItem>
//             <ListIcon as={FaCheckCircle} color="green.500" />
//             5TB Lorem, ipsum dolor.
//           </ListItem>
//         </List>
//         <Box w="80%" pt={7}>
//           <Button w="full" colorScheme="red" variant="outline">
//             Start trial
//           </Button>
//         </Box>
//       </VStack>
//     </PriceWrapper>

//     <PriceWrapper>
//       <Box py={4} px={12}>
//         <Text fontWeight="500" fontSize="2xl">
//           Hobby
//         </Text>
//         <HStack justifyContent="center">
//           <Text fontSize="3xl" fontWeight="600">
//             $
//           </Text>
//           <Text fontSize="5xl" fontWeight="900">
//             79
//           </Text>
//           <Text fontSize="3xl" color="gray.500">
//             /month
//           </Text>
//         </HStack>
//       </Box>
//       <VStack
//         bg={useColorModeValue('gray.50', 'gray.700')}
//         py={4}
//         borderBottomRadius={'xl'}>
//         <List spacing={3} textAlign="start" px={12}>
//           <ListItem>
//             <ListIcon as={FaCheckCircle} color="green.500" />
//             Unlimited build minutes
//           </ListItem>
//           <ListItem>
//             <ListIcon as={FaCheckCircle} color="green.500" />
//             Lorem, ipsum dolor.
//           </ListItem>
//           <ListItem>
//             <ListIcon as={FaCheckCircle} color="green.500" />
//             5TB Lorem, ipsum dolor.
//           </ListItem>
//         </List>
//         <Box w="80%" pt={7}>
//           <Button w="full" colorScheme="red" variant="outline">
//             Start trial
//           </Button>
//         </Box>
//       </VStack>
//     </PriceWrapper>
//     <PriceWrapper>
//       <Box py={4} px={12}>
//         <Text fontWeight="500" fontSize="2xl">
//           Hobby
//         </Text>
//         <HStack justifyContent="center">
//           <Text fontSize="3xl" fontWeight="600">
//             $
//           </Text>
//           <Text fontSize="5xl" fontWeight="900">
//             79
//           </Text>
//           <Text fontSize="3xl" color="gray.500">
//             /month
//           </Text>
//         </HStack>
//       </Box>
//       <VStack
//         bg={useColorModeValue('gray.50', 'gray.700')}
//         py={4}
//         borderBottomRadius={'xl'}>
//         <List spacing={3} textAlign="start" px={12}>
//           <ListItem>
//             <ListIcon as={FaCheckCircle} color="green.500" />
//             Unlimited build minutes
//           </ListItem>
//           <ListItem>
//             <ListIcon as={FaCheckCircle} color="green.500" />
//             Lorem, ipsum dolor.
//           </ListItem>
//           <ListItem>
//             <ListIcon as={FaCheckCircle} color="green.500" />
//             5TB Lorem, ipsum dolor.
//           </ListItem>
//         </List>
//         <Box w="80%" pt={7}>
//           <Button w="full" colorScheme="red" variant="outline">
//             Start trial
//           </Button>
//         </Box>
//       </VStack>
//     </PriceWrapper>
//       </Flex>
//     </Box>

// </div>
//   );
// }

// export default SubscriptionCards;
