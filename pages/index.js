import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import SimpleModal from './components/modal'


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        papawmaynard.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [
    {
        title: 'Arnold Maynard Sr.',
        description: 'Sitting on the side rail.',
        imgUrl: "/assets/img/papaw_sitting_on_car.png"
    },
    {
        title: 'Can I count on your vote?',
        description: 'Arnold Maynard running for mayor',
        imgUrl: "/assets/img/arnold_for_mayor.png"
    },
    {
        title: 'Father and Son',
        description: 'Joe Pap and Arnold Senior',
        imgUrl: "/assets/img/father_and_son.jpg"
    },
    {
        title: 'On the radio',
        description: 'Trying to get out the vote',
        imgUrl: "/assets/img/on_the_radio.jpg"
    },
    {
        title: 'Winter Time',
        description: 'Looking cool.',
        imgUrl: "/assets/img/winter_time.jpg"
    },
    {
      title: 'Young Guy',
      description: 'Ready for my photo',
      imgUrl: "/assets/img/young.jpg"
    },
    {
      title: 'Sitting on the hill',
      description: 'Hurry up, my pants are getting dirty!',
      imgUrl: "/assets/img/sitting.jpg"
    },
    {
      title: 'Happy Birthday Arnold!',
      description: 'Father and son',
      imgUrl: "/assets/img/Arnold_and_Arnold.jpg"
    },
    {
      title: 'Arnold and Carl',
      description: 'Arnold sitting with Carl Dove',
      imgUrl: "/assets/img/Arnold_and_Carl.jpg"
    },
    {
      title: 'The Reverend',
      description: 'Reverend Arnold Maynard',
      imgUrl: "/assets/img/rev_maynard.png"
    },
    ];

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Papaw Maynard
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              I made this site for my fathers birthday, the heart of this website is a recording of his two sons playing with his father(my papaw). Please listen.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <audio src="/assets/audio/papaw-full-clean2.mp3" controls/>
                </Grid>
              </Grid>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <a href="/assets/ppt/slides.zip" download>Slides</a>
                </Grid>
                <Grid item>
                  <a href="/assets/audio/papaw-full-clean2.mp3" download>MP3</a>
                </Grid>
                <Grid item>
                  <a href="/assets/img/photos.zip" download>Photos</a>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.imgUrl}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.title}
                    </Typography>
                    <Typography>
                      {card.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                      <SimpleModal imgUrl = {card.imgUrl} title={card.title} description={card.description}>
                      </SimpleModal>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Papaw Maynard
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Thanks to Jane, Joann, and Kristina for their help making this site possible.
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}