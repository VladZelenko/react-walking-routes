import React from "react"
// import MyMapComponent from "./Components/maps/map";


import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function App(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);


// class App extends React.Component {
//   render() {
//     return (
//       <React.Fragment>
//         <MyMapComponent />
//         <p>
//           Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.
//           Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.
//           В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов,
//           используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил
//           без заметных изменений пять веков, но и перешагнул в электронный дизайн.
//           Его популяризации в новое время послужили публикация листов Letraset с образцами
//           Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа
//           Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.
//       </p>
//         <p>
//           Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.
//           Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.
//           В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов,
//           используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил
//           без заметных изменений пять веков, но и перешагнул в электронный дизайн.
//           Его популяризации в новое время послужили публикация листов Letraset с образцами
//           Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа
//           Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.
//       </p>
//       </React.Fragment>
//     )
//   }
// }
// export default App;
