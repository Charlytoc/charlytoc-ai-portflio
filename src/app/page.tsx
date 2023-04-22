import Image from 'next/image'
import { Inter } from 'next/font/google'
import Computer from './components/computer'
import CursorWrapper from './components/cursorWrapper'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (<>
  <CursorWrapper>
  <Computer />
  </CursorWrapper>
  </>
  )
}
