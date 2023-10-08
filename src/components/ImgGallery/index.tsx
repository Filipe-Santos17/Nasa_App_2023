import { View } from "react-native"
import { ContainerPhotos, ImagePhoto } from "./style"
import { useEffect, useState } from "react"

export default function ImgGallery() {

  type typeImgGroup = {
    id: number,
    url: string,
  }

  const [imageGroups, setImageGroups] = useState<typeImgGroup[] | null>(null)

  const dataItem = [
    {
      id: 1,
      url: 'https://cdn.mos.cms.futurecdn.net/baYs9AuHxx9QXeYBiMvSLU.jpg',
    },
    {
      id: 2,
      url: 'https://img.freepik.com/fotos-gratis/um-rio-atravessa-a-selva_188544-24742.jpg'
    }
  ]

  useEffect(() => {
    setImageGroups(dataItem)
  }, [])

  return (
    <View>
      <ContainerPhotos
        data={imageGroups}
        keyExtractor={(item: typeImgGroup) => item.id}
        renderItem={({ item }: { item: typeImgGroup }) => (
          <ImagePhoto source={{ uri: item.url }} key={item.id} />
        )}
        horizontal
        showHorizontalScrollIndicator
        pagingEnabled
      />
    </View>
  )
}
