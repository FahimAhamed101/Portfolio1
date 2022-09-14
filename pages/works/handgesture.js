import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Heading,
  Center,
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Greatcart ecommerce solution">
    <Container>
      <Title>
      Greatcart ecommerce solution <Badge>2021</Badge>
      </Title>
      <P>
      A Django ecommerce site built with Html,css,javascript,Bootstrap.
      </P>
      <br></br>
      <P>
      Greatcart best website buld with python and Django tech.its a great ecommerce solution.
      </P>

      <List ml={4} my={4}>
      <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/FahimAhamed101/djshop">
          Greatcart ecommerce solution<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows,MacOS,Linux,Raspberry pi</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python,Django,Html,css,javascript,jquery</span>
        </ListItem>
        
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Preview</Center>
      </Heading>

      <WorkImage src="/images/works/GreatKart-One-of-the-Biggest-Online-Shopping-Platform (4).png" alt="handgesture" />
      <WorkImage src="/images/works/GreatKart-One-of-the-Biggest-Online-Shopping-Platform (5).png" alt="handgesture" />
      <WorkImage src="/images/works/GreatKart-One-of-the-Biggest-Online-Shopping-Platform (3).png" alt="handgesture" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
