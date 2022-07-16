import { useState } from 'react'
import { cardVariant, parentVariant } from './motion'
import ProductModal from './components/ProductModal'
import { motion } from 'framer-motion'
import data from './data'
import ProductCard from './components/ProductCard'
import { Box, SimpleGrid } from '@chakra-ui/react'

// Per-page layout tying
import { ReactElement } from 'react'
import Layout from './components/Layout'

const MotionSimpleGrid = motion(SimpleGrid)
const MotionBox = motion(Box)

export type ModalData = typeof data[0]

export interface ModalProps {
  isOpen: boolean
  onClose: () => void
  modalData: ModalData | null
}

const Dashboard = () => {
  const [modalData, setModalData] = useState<ModalData | null>(null)
  return (
    <Box>
      <MotionSimpleGrid
        mt="4"
        minChildWidth="250px"
        spacing="2em"
        minH="full"
        variants={parentVariant}
        initial="initial"
        animate="animate"
      >
        {data.map((product, idx) => (
          <MotionBox variants={cardVariant} key={idx}>
            <ProductCard product={product} setModalData={setModalData} />
          </MotionBox>
        ))}
      </MotionSimpleGrid>
      <ProductModal isOpen={modalData ? true : false} onClose={() => setModalData(null)} modalData={modalData} />
    </Box>
  )
}

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Dashboard
