import NextLink from 'next/link'

import FeelingProud from '../components/greeting/FeelingProud';
import themes from '../lib/theme1'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoLinkedin, IoLogoFacebook} from 'react-icons/io5'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
   



   
    <Box display="grid"    >
    <FeelingProud theme={themes}  />
    
</Box>
    
   
       
     



      <Box display={{ md: 'flex' }}>
   

        <Box flexGrow={1}>
   
       
          <Heading as="h2" variant="page-title">
          Hello, I&apos;m Fahim.A Full Stack Developer.
          </Heading>
          <p>Currently doing B.Sc in Mathematics (Full Stack Developer)</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/profile.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About
        </Heading>
        <Paragraph>
          Hello! 👋 I am fahim Ahmed a final year Mathematics undergraduated at Kushtia Govt College. 
          I enjoy taking complex problems and turning them into simple and beautiful webpages, I also love the logic and structure of coding
          and always strive to write elegant and efficient code whether it be C#, Python,javascript, HTML, CSS or JavaScript.
          <br></br>
          When I'm not coding, you'll find me watching movies, hanging out with my friends and exploring the beauty of 🏞 Himachal.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2002</BioYear>
          Born in kushtia,bangladesh
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Started B.ss. in mathmatics at kustia govt College
        </BioSection>
      
        <BioSection>
          <BioYear>2022</BioYear>
          Started Working as WebD  with balin_tech agency
        </BioSection>
        
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥ 
        </Heading>
        <Paragraph>
          Coding, <text style={{ color: "pink" }}>Music</text>,{' '}
          Movies
          , <text style={{ color: "pink" }}>Treking</text>,{' '}Photography, Machine Learning
        </Paragraph>
      </Section>

   

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/FahimAhamed101" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @FahimAhamed101
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/fahim-ahamed-477836190/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                @fahimahamed
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.facebook.com/profile.php?id=100029888651259" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoFacebook />}
              >
                @FahimAhamed101
              </Button>
            </Link>
          </ListItem>
        </List>

        <Box align="center" my={4}>
          <NextLink href="https://drive.google.com/file/d/1mMZ1hGT70zHxNzkeNNRiRKAR3JOZzZrU/view?usp=sharing" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
            <a href="https://drive.google.com/file/d/1VSX6PDPgWi0dXcZERln95bWJJVmZMi_e/view?usp=sharing">Download Resume</a> 
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
