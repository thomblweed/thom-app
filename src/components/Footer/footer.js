import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { useStyles } from '../../hooks/useStyles';
import { usePropStyles } from '../../hooks/usePropStyles';

const Footer = () => {
  const classes = useStyles();
  const propStyles = usePropStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth={propStyles.container.maxWidth}>
        <Typography variant='body1'>thom app footer</Typography>
        <Typography variant='body2'>
          Copyright &copy; {new Date().getFullYear()}
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
