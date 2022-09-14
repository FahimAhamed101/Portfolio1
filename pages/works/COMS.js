import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Heading,
  Center
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Projects = () => (
  <Layout title="product Management System">
    <Container>
      <Title>
      product Management System <Badge>2022-</Badge>
      </Title>
      <P>
      A webapp using Mern stack, on which the ecommerce vendor can put up items and buyer can create account,
order product in a hassle free manner.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/FahimAhamed101/nextjshop">
         nextjs-product-Management-System<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML,CSS,JavaScript,nextjs,nodejs,mongodb</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Preview</Center>
      </Heading>

      <WorkImage src="/images/works/Slim-Shirt-Amazona.png" alt="COMS" />
      <WorkImage src="/images/works/Shopping-Cart-Amazona.png" alt="COMS" />
      <WorkImage src="/images/works/Create-Account-Amazona.png" alt="COMS" />
    </Container>
  </Layout>
)

export default Projects
export { getServerSideProps } from '../../components/chakra'
