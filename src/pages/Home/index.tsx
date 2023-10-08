import Button from "@components/Button"
import { Container } from "./style"
import HeaderHome from "@components/Header"
import ImgGallery from "@components/ImgGallery"

export default function Home() {
  return (
    <Container>
      <HeaderHome/>
      <ImgGallery/>
      <Button msg="Ver todas as Fotos" typeBtn="SECONDARY" onAction={() => null}/>
      <Button msg="Denuncie" typeBtn="DANGER" onAction={() => null}/>
    </Container>
  )
}


