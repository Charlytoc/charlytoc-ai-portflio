import Image from 'next/image'
import { Inter } from 'next/font/google'
import Computer from './components/computer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (<>
  <Computer />
  </>
  )
}
