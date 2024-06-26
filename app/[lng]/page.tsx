import { useTranslation } from '@/i18n';

interface Params {
  lng: string;
}


const Home: React.FC<{ params: Params }> = async ({ params: { lng } }) => {

  const { t: t_global } = await useTranslation(lng, 'global')

  return (
    <div>
      test: {t_global('title')}
    </div>
  )
}

export default Home


