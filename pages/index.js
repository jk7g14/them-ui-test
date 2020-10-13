/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Image, Text, Grid, Box, Flex, Heading, Button } from 'theme-ui'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSearch,
  faHamburger,
  faShoppingBag,
} from '@fortawesome/free-solid-svg-icons'
import { useColorMode } from 'theme-ui'
import { useEffect } from 'react'

export default function Home() {
  const MainHeader = () => {
    const [colorMode, setColorMode] = useColorMode()
    useEffect(() => {}, [])

    return (
      <Flex
        sx={{ flexDirection: 'column', justifyContent: 'space-between' }}
        style={{
          background:
            'url(https://www.onsenling.com/wp-content/uploads/2020/02/shutterstock_1024126180234.jpg)',
          height: '100vh',
        }}
      >
        <header>
          <button
            onClick={(e) => {
              setColorMode(colorMode === 'default' ? 'dark' : 'default')
            }}
          >
            Toggle {colorMode === 'default' ? 'Dark' : 'Light'}
          </button>
        </header>
        <Flex sx={{ height: 120, justifyContent: 'space-between' }}>
          <Flex sx={{ alignItems: 'center', ml: '30px' }}>
            <FontAwesomeIcon icon={faSearch} style={{ marginRight: '20px' }} />
            <FontAwesomeIcon icon={faHamburger} />
          </Flex>
          <Flex
            sx={{ alignItems: 'center', fontSize: '30px', fontWeight: 'bold' }}
          >
            <Text height="100%">ONSENLING</Text>
          </Flex>
          <Flex sx={{ alignItems: 'center', mr: '30px' }}>
            <Text>로그인</Text>
            <FontAwesomeIcon
              icon={faShoppingBag}
              style={{ marginLeft: '20px' }}
            />
          </Flex>
        </Flex>
        <Flex
          sx={{
            // color: 'white',
            width: '100%',
            flexDirection: 'column',
            pl: '10%',
          }}
        >
          <Text as="h2" sx={{ fontSize: '30pt' }}>
            오로지 힐링을 위한 온천여행
          </Text>
          <Text as="h1" sx={{ fontSize: '50pt' }}>
            지금은 온센링 하는 시간
          </Text>
          <Box>
            <Button
              sx={{
                // color: 'white',
                background: 'transparent',
                border: '0.5px solid white',
              }}
            >
              전체상품보기
            </Button>
          </Box>
        </Flex>
        <Box></Box>
      </Flex>
    )
  }

  const FourBanner = () => {
    return (
      <>
        <Flex
          sx={{
            justifyContent: 'space-between',
            width: '80%',
            mx: 'auto',
            mt: '50px',
          }}
        >
          <Box>
            <Text sx={{ fontSize: '15pt' }}>온천소믈리에 추천상품</Text>
            <Text sx={{ fontSize: '15pt' }}>BEST5</Text>
          </Box>
          <Text>전체보기</Text>
        </Flex>
        <Grid columns={[1, 2, 4]} sx={{ width: '80%', mx: 'auto', mt: '50px' }}>
          <BoxForFourBanner />
          <BoxForFourBanner />
          <BoxForFourBanner />
          <BoxForFourBanner />
        </Grid>
      </>
    )
  }

  const BoxForFourBanner = () => {
    return (
      <Box style={{ position: 'relative' }}>
        <Image src="https://www.onsenling.com/wp-content/uploads/2020/01/%EB%8F%84%EC%BF%84%EA%B7%BC%EA%B5%90-%EB%AA%A8%EB%8B%A8%ED%86%A0%EC%9A%B0%EC%A7%80-%EC%98%A8%EB%A6%AC%EC%9C%A0-%EB%85%B8%EC%B2%9C%ED%83%95-680x800.jpg" />
        <Box sx={{ ml: '10px' }}>
          <Text>온천여행</Text>
          <Text>30,000</Text>
        </Box>
        <Flex
          as="div"
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '50px',
            height: '50px',
            position: 'absolute',
            top: '10px',
            left: '10px',
            // backgroundColor: '#ff736c',
            borderRadius: '50%',
          }}
        >
          <Box as="span" sx={{ fontSize: '15px' }}>
            HOT
          </Box>
        </Flex>
      </Box>
    )
  }

  const TwoBanner = () => {
    return (
      <>
        <Flex
          sx={{
            justifyContent: 'space-between',
            width: '80%',
            mx: 'auto',
            mt: '50px',
          }}
        >
          <Box>
            <Text sx={{ fontSize: '15pt' }}>컨셉별 온천여행</Text>
          </Box>
          <Text>전체보기</Text>
        </Flex>
        <Grid
          sx={{
            width: '80%',
            mx: 'auto',
            mt: '50px',
          }}
        >
          <Flex sx={{ justifyContent: 'space-between' }}>
            <BoxForTwoBanner />
            <BoxForTwoBanner />
          </Flex>
          <Flex sx={{ justifyContent: 'space-between' }}>
            <BoxForTwoBanner />
            <BoxForTwoBanner />
          </Flex>
        </Grid>
      </>
    )
  }

  const BoxForTwoBanner = () => {
    return (
      <Box style={{ position: 'relative' }}>
        <Image src="https://www.onsenling.com/wp-content/uploads/2020/01/%EB%8F%84%EC%BF%84%EA%B7%BC%EA%B5%90-%EB%AA%A8%EB%8B%A8%ED%86%A0%EC%9A%B0%EC%A7%80-%EC%98%A8%EB%A6%AC%EC%9C%A0-%EB%85%B8%EC%B2%9C%ED%83%95-680x800.jpg" />
        <Box sx={{ ml: '10px' }}>
          <Text
            sx={{
              fontSize: '30pt',
              fontWeight: '50%',
              mt: '20px',
              // color: ' #444444',
            }}
          >
            힐링을위한 당일치기여행
          </Text>
        </Box>
        <Flex
          as="div"
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '50px',
            height: '50px',
            position: 'absolute',
            top: '10px',
            left: '10px',
            // backgroundColor: '#ff736c',
            borderRadius: '50%',
          }}
        >
          <Box as="span" sx={{ fontSize: '15px' }}>
            HOT
          </Box>
        </Flex>
      </Box>
    )
  }

  return (
    <>
      <MainHeader />
      <FourBanner />
      <TwoBanner />
    </>
  )
}
