import Layout from "components/Layout"
import MainTitle from "components/MainTitle"
import ImgTranslucent from "components/ImgTranslucent"
import { SectionTitle } from "components/SectionTitle"
import { durationToMinutes } from "utils/durationToMinutes"
import { dateFormatter } from "utils/dateFormatter"
import { useFetchPlaylist } from "hooks/useFetchPlaylist"
import EpisodeList from "components/episodes/EpisodeList"
import DescriptionContainer from "components/DescriptionContainer"
import PlayButton from "components/PlayButton"

const PodcastPage = ({audio_clip}) => {
  const { clientPlaylist, isLoading } = useFetchPlaylist(audio_clip.channel.id)

  return (
    <Layout
      navigation={true}
      headerText={audio_clip.title}
      button={ 
        <div style={{width: '3rem'}}>
          <ImgTranslucent url={audio_clip.urls.image || audio_clip.channel.urls.logo_image.original} />
        </div>
      }
    >
      <MainTitle title={audio_clip.title} subtitle={audio_clip.channel.title} />

      <SectionTitle 
        title={`${dateFormatter(audio_clip.uploaded_at)} · ${durationToMinutes(audio_clip.duration)}`} 
        button={<PlayButton episodeId={audio_clip.id} channelId={audio_clip.channel.id} />}
      />
      
      <DescriptionContainer data={audio_clip.description}/>

      <SectionTitle title='More Episodes' />
      
      <EpisodeList audioClips={clientPlaylist} loading={isLoading}/>

    </Layout>
  )
}

export default PodcastPage