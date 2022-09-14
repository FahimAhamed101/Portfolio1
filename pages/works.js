import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbComs from '../public/images/works/Home-Page-Amazona.png'
import thumbadulting101 from '../public/images/works/Samsung-Galaxy-S20-Plus-5G.png'
import thumbFakeFace from '../public/images/works/fakeface-home.png'
import thumbHandGesture from '../public/images/works/GreatKart-One-of-the-Biggest-Online-Shopping-Platform (5).png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="COMS" title="Ecommerce Management System" thumbnail={thumbComs}>
            A Nextjs Stack webapp, using which the ecommerce vendor can manage product orders efficiently.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="Adulting101"
            title="TypeEcommerce"
            thumbnail={thumbadulting101}
          >
            A Ecommerce based Mern typescript webapp,created with reactjs,typescript,Mongodb,nodejs.
          </WorkGridItem>
        </Section>

      
        <Section delay={0.1}>
          <WorkGridItem id="handgesture" thumbnail={thumbHandGesture} title="Greatcart">
          Greatcart best website buld with python and Django tech.its a great ecommerce solution.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
