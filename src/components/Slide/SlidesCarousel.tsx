import { Image, Box, Heading, Flex, Text } from '@chakra-ui/react'

import Link from 'next/link'

import SwiperCore, { Navigation, Pagination, A11y } from "swiper"
 
import { Swiper, SwiperSlide } from "swiper/react"

SwiperCore.use([Navigation, Pagination, A11y])

export function SlidesCarousel() {

  return(
    <Flex
      w="100%"
      maxW="1240px"
      mx="auto"
      mb={["5", "10"]}
      h={["250px", "450px"]}
    >
      <Swiper
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000, // 4 segundos
        }}
        style={{width: '100%', flex:'1'}}
      >
        <SwiperSlide >
          
          <Flex
            w="100%"
            h="100%"
            align="center"
            justify="center"
            direction="column"
            bgImage="url(imagens_slide/america_sul.jpg)"
            bgRepeat="no-repeat"
            bgSize="cover"
            textAlign="center"
            bgPosition="center"
          >
            <Link href="continent/america_sul">
              <a>
              <Heading 
                  color="gray.100" 
                  fontSize={["3xl", "4xl", "5xl"]} 
                  fontWeight="bold"
                >
                  America do Sul
                </Heading>
                <Text
                  color="gray.300"
                  fontSize={["0.8rem", "1xl", "2xl"]}
                  fontWeight="bold"
                  mt={["2", "4"]}
                >
                  continente tropical
                </Text>
              </a>
            </Link>
          </Flex>

        </SwiperSlide>
        <SwiperSlide >
          
          <Flex
            w="100%"
            h="100%"
            align="center"
            justify="center"
            direction="column"
            bgImage="url(imagens_slide/america_norte.jpg)"
            bgRepeat="no-repeat"
            bgSize="cover"
            textAlign="center"
            bgPosition="center"
          >
            <Link href="continent/america_norte">
              <a>
              <Heading 
                  color="gray.100" 
                  fontSize={["3xl", "4xl", "5xl"]} 
                  fontWeight="bold"
                >
                  America do Norte
                </Heading>
                <Text
                  color="gray.300"
                  fontSize={["0.8rem", "1xl", "2xl"]}
                  fontWeight="bold"
                  mt={["2", "4"]}
                >
                  
                </Text>
              </a>
            </Link>
          </Flex>

        </SwiperSlide>
        <SwiperSlide >
          
          <Flex
            w="100%"
            h="100%"
            align="center"
            justify="center"
            direction="column"
            bgImage="url(imagens_slide/europa.jpg)"
            bgRepeat="no-repeat"
            bgSize="cover"
            textAlign="center"
            bgPosition="center"
          >
            <Link href="continent/europa">
              <a>
              <Heading 
                  color="gray.700" 
                  fontSize={["3xl", "4xl", "5xl"]} 
                  fontWeight="bold"
                >
                  Europa
                </Heading>
                <Text
                  color="gray.900"
                  fontSize={["0.8rem", "1xl", "2xl"]}
                  fontWeight="bold"
                  mt={["2", "4"]}
                >
                  O continente mais antigo
                </Text>
              </a>
            </Link>
          </Flex>

        </SwiperSlide>
        
      </Swiper>
    </Flex>
  )
}