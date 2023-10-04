import { Card, CardContent, CardMedia, Typography } from '@mui/material'

interface ICardData {
  name: string
  description: string
  // image: string
}

const ModCard = () => {
  const cardData: ICardData[] = [
    { name: 'amogus', description: 'dvwvsdvsafevsdv' },
    { name: 'amogus', description: 'dvwvsdvsafevsdv' },
    { name: 'amogus', description: 'dvwvsdvsafevsdv' },
    { name: 'amogus', description: 'dvwvsdvsafevsdv' },
  ]

  return (
    <>
      {cardData.map((data) => {
        return (
          <div key={data.name}>
            <Card
              sx={{ minWidth: '100vh', display: 'flex', flexDirection: 'row' }}
            >
              <CardMedia component="img" height="200" image="/pipiska.png" />
              <CardContent sx={{ minWidth: '100vh' }}>
                <Typography color="primary" variant="h5">
                  {data.name}
                </Typography>
                <Typography>{data.description}</Typography>
              </CardContent>
            </Card>
          </div>
        )
      })}
    </>
  )
}

export default ModCard
