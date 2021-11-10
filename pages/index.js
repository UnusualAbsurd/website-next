import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  SimpleGrid,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import {
  IoLogoTwitter,
  IoLogoGithub,
  IoLogoDiscord
} from 'react-icons/io5'
import thumbYouTube from '../public/images/links/youtube.png'
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hello, I&apos;m a discord bot developer from Asia!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
             UnusualAbsurd
          </Heading>
          <p>Big Man Pro (  Developer / Gamer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/Unusual.png"
            alt="Profile image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
        Hi, I&apos;m UnusualAbsurd
Hello! I am UnusualAbsurd , you can call me abs. about 1 year of experience with JavaScript. Javascript & TypeScript are the technologies I use all the time.

Technologies I use
        </Paragraph>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Projects
        </Heading>
        <BioSection>
          <BioYear>Dank Gamer</BioYear>
           <Link href="https://dsc.gg/dankgamer">A meme discord bot</Link>
        </BioSection>
        <BioSection>
          <BioYear>ADV</BioYear>
          <Link href="https://github.com/UnusualAbsurd/adv-rewrite">A moderation discord bot</Link>
        </BioSection>
      </Section>

   <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/UnusualAbsurd" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @UnusualAbsurd
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/AbsurdBasically" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoTwitter} />}
              >
                @AbsurdBasically
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://discord.gg/6bHQHSBrgK" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoDiscord} />}
              >
                Commision Discord Server
              </Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.github.com/UnusualAbsurd/adv-rewrite"
            title="ADV"
            thumbnail={thumbYouTube}
          >
            Cool discord bot
          </GridItem>
          <GridItem
            href="https://www.dsc.gg/dankgamer"
            title="Dank Gamer"
            thumbnail={thumbInkdrop}
          >
            A meme discord bot
          </GridItem>
        </SimpleGrid> 
      </Section>
    </Container>
  </Layout>
)

export default Home
