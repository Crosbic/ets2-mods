import { Card, CardContent, CardMedia, Typography } from '@mui/material'

import styles from './modCard.module.css'

interface ICardData {
  name: string
  description: string
  update: string
  // image: string
}

const ModCard = () => {
  const cardData: ICardData[] = [
    {
      name: 'amogus',
      description: '- Добавлен Jeep Grand Cherokee ’14.',
      update:
        'Список машин\n' +
        '- Mercedes-Benz A(W169, W176), B(W246), C(W202, W203, W204), E(W124, W210, W212, W213, S212), S(W220, W221, C217), R, ML, G, GL, CL, CLK, CLA, CLS(W219, C257), GLA, GLC, GLE, EQC, X, Vario,',
    },
    {
      name: 'amogus',
      description: '- Добавлен Jeep Grand Cherokee ’14.',
      update:
        'Список машин\n' +
        '- Mercedes-Benz A(W169, W176), B(W246), C(W202, W203, W204), E(W124, W210, W212, W213, S212), S(W220, W221, C217), R, ML, G, GL, CL, CLK, CLA, CLS(W219, C257), GLA, GLC, GLE, EQC, X, Vario,',
    },
    {
      name: 'amogus',
      description: '- Добавлен Jeep Grand Cherokee ’14.',
      update:
        'Список машин\n' +
        '- Mercedes-Benz A(W169, W176), B(W246), C(W202, W203, W204), E(W124, W210, W212, W213, S212), S(W220, W221, C217), R, ML, G, GL, CL, CLK, CLA, CLS(W219, C257), GLA, GLC, GLE, EQC, X, Vario,',
    },
    {
      name: 'amogus',
      description: '- Добавлен Jeep Grand Cherokee ’14.',
      update:
        'Список машин\n' +
        '- Mercedes-Benz A(W169, W176), B(W246), C(W202, W203, W204), E(W124, W210, W212, W213, S212), S(W220, W221, C217), R, ML, G, GL, CL, CLK, CLA, CLS(W219, C257), GLA, GLC, GLE, EQC, X, Vario,',
    },
  ]

  return (
    <>
      {cardData.map((data) => {
        return (
          <Card className={styles.card} key={data.name}>
            <CardMedia
              component="img"
              image="/pipiska.png"
              className={styles.cardMedia}
            />
            <CardContent>
              <Typography color="primary" className={styles.cardHeader}>
                {data.name}
              </Typography>
              <Typography className={styles.cardDescription}>
                {data.description}
              </Typography>
              <Typography className={styles.cardUpdate}>
                {data.update}
              </Typography>
            </CardContent>
          </Card>
        )
      })}
    </>
  )
}

export default ModCard
