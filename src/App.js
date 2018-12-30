import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import NoSsr from '@material-ui/core/NoSsr';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import MailIcon from '@material-ui/icons/Mail';
import tileData from './tileData';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

library.add(faEnvelope, faFileAlt, faLinkedin, faGithub)

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

// TabContainer.propTypes = {
//   children: PropTypes.node.isRequired,
// };

function LinkTab(props) {
  return <Tab component="a" onClick={event => event.preventDefault()} {...props} />;
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tabsRoot: {
    borderBottom: '1px solid #e8e8e8',
    backgroundColor: theme.palette.background.paper,
  },
  tabsIndicator: {
    backgroundColor: '#1890ff',
  },
  tabRoot: {
    color: '#1890ff',
    textTransform: 'initial',
    width: 'auto',
    fontWeight: theme.typography.fontWeightRegular,
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      color: '#40a9ff',
      opacity: 1,
    },
    '&$tabSelected': {
      color: '#1890ff',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: '#40a9ff',
    },
  },
  tabSelected: {},
  typography: {
    padding: theme.spacing.unit * 3,
  },
  card: {
    margin: 'auto',
    maxWidth: 600,
  },
  projectsCard: {
    margin: 'auto',
    maxWidth: 800,
  },
  linkCard: {
    margin: 'auto',
    maxWidth: 400,
  },
  media: {
    height: theme.spacing.unit * 30,
  },
  gridList: {
    margin: theme.spacing.unit * 4,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  button: {
    margin: theme.spacing.unit,
    fontSize: 40,
  },
});

class App extends Component {

  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {

    const { classes } = this.props;
    const { value } = this.state;

    return (
        <div className={classes.root}>
          <AppBar position="static">
            <Tabs value={value} onChange={this.handleChange} centered classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}>
              <LinkTab classes={{ root: classes.tabRoot, selected: classes.tabSelected }} label="Home" href="home" />
              <LinkTab classes={{ root: classes.tabRoot, selected: classes.tabSelected }} label="Projects" href="projects" id="projectsTab" />
              <LinkTab classes={{ root: classes.tabRoot, selected: classes.tabSelected }} label="Links" href="links" />
            </Tabs>
          </AppBar>

          {value === 0 && <TabContainer>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image="./images/ravi.jpg"
                title="Ravi"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h1">
                  Hi, I&apos;m Ravi.
                </Typography>
                <Typography component="p">
                  I&apos;m a 19-year-old Computer Science student at UC Berkeley. As a full-stack
                  developer, I&apos;ve created multiple cool projects and worked for companies like
                  SpaceX and BMW.
                  <br/><br/>
                  I&apos;m absolutely fascinated by cybersecurity, distributed networks, and computer vision.
                  Right now, I&apos;m working on my latest venture, <a href="https://bidsevents.com" target="_blank">Bids Events</a>.
                  My cofounders and I made it to the final round for YCombinator&apos;s w19 batch, received HotDesk space
                  at Berkeley&apos;s Skydeck, and are currently alpha testing our mobile application.
                  <br/><br/>
                  I&apos;ve created tons of educational content, ghostwritten technical whitepapers for various companies,
                  and delivered presentations to executives twice my age. Companies I&apos;ve started in
                  the past have gone through YCombinator&apos;s Startup School and served thousands of users.
                  Unfortunately, a lot of the work I&apos;ve done is confidential, but feel free to
                  check out some of the projects for which I can disclose details in the <a href="javascript:document.getElementById('projectsTab').click()">
                  Projects</a> tab.
                  <br/><br/>
                  I love getting to know new people, so feel free to schedule a meeting with me <a href="https://rjotwani.youcanbook.me/" target="_blank">
                  here</a>.
                </Typography>
              </CardContent>
            </Card>
          </TabContainer>}

          {value === 1 && <TabContainer>
            <Card centered className={classes.projectsCard} >
              <CardContent>
                <Typography component="p">
                  As a developer, designer, and entrepreneur, I have a large assortment of past projects.
                  I aim to apply intelligence and creativity to everything I do, so feel free to take a
                  look at my most noteworthy ventures listed below.
                </Typography>
              </CardContent>
              <CardContent>
                <GridList className={classes.gridList} cols={3}>
                  {tileData.map(tile => (
                    <GridListTile key={tile.img} cols={tile.cols || 1}>
                      <img src={tile.img} alt={tile.title} />
                      <GridListTileBar
                        title={tile.title}
                        actionIcon={(tile.href &&
                          <IconButton className={classes.icon} href={tile.href} target='_blank'>
                            <InfoIcon />
                          </IconButton>) || null
                        }
                      />
                    </GridListTile>
                  ))}
                </GridList>
              </CardContent>
            </Card>
          </TabContainer>}

          {value === 2 && <TabContainer>
            <Card centered className={classes.linkCard} >
              <Grid container justify = "center">
                <Button className={classes.button} href='mailto:rjotwani@berkeley.edu' target='_blank' >
                  <FontAwesomeIcon icon={['far', 'envelope']} color='#dd4b39' />
                </Button>
                <Button className={classes.button} href='https://www.linkedin.com/in/ravijotwani/' target='_blank' >
                  <FontAwesomeIcon icon={['fab', 'linkedin']} color='#0077B5' />
                </Button>
                <Button className={classes.button} href='https://github.com/rjotwani/' target='_blank' >
                  <FontAwesomeIcon icon={['fab', 'github']} color='#333' />
                </Button>
                <Button className={classes.button} href='./files/resume.pdf' target='_blank' >
                  <FontAwesomeIcon icon={['far', 'file-alt']} color='#a1a0a5' />
                </Button>
              </Grid>
            </Card>
          </TabContainer>}

        </div>
    );
  }
}

export default withStyles(styles)(App);
