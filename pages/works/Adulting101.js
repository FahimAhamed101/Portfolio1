import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="TypeEcommerce">
    <Container>
      <Title>
        TypeEcommerce <Badge>2021</Badge>
      </Title>
      <P>
        TypeEcommerce is a one stop solution for all finance problems. It is build using build using Javascript-based webframework Reactjs, 
        key features include add product, edit product .
      </P>
      <br></br>
      Implemented a Markdown to HTML Converter that will automatically convert your markdown code to a HTML page whenever you add a new page.
      <P>

      </P>
      <List ml={4} my={4}>
      <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/FahimAhamed101/tecommerce">
          TypeEcommerce  <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Reactjs, nodejs, HTML, CSS, JavaScript,Typescript</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Preview</Center>
      </Heading>

      <WorkImage src="/images/works/Type-Shop (1).png" alt="adulting101" />
      <WorkImage src="/images/works/cart-shop.png" alt="adulting101" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
