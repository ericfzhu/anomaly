import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import Link from '@mui/material/Link';
import { Link } from 'gatsby-theme-material-ui';
import { useTheme } from '@mui/material/styles';

const Footer = () => {
  const theme = useTheme();
  const { mode } = theme.palette;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'left'}
          width={1}
          flexDirection={{ xs: 'column', sm: 'row' }}
        >
          <Box display={'flex'} component="a" width={200}>
            <Link display={'flex'} width={80} to="/">
              <Box
                component={'img'}
                src={
                  mode === 'light'
                    ? 'https://raw.githubusercontent.com/ericfzhu/demo/9778acc41dba64707e687c760af97e9aadac11e2/src/images/logo.svg'
                    : 'https://raw.githubusercontent.com/ericfzhu/demo/9778acc41dba64707e687c760af97e9aadac11e2/src/images/logo.svg'
                }
                height={1}
                width={1}
                title="Contextually Situated Anomaly Detection"
              />
            </Link>
          </Box>
          <Box
            sx={{ display: { xs: 'none', md: 'flex' } }}
            alignItems={'center'}
          >
            <Box marginLeft={6} marginRight={6}>
              <Link
                underline="none"
                to="/"
                color="text.primary"
                sx={{
                  ':hover': {
                    color: 'text.secondary',
                  },
                }}
              >
                HOME
              </Link>
            </Box>
            <Box marginLeft={6} marginRight={6}>
              <Link
                underline="none"
                to="/blog"
                color="text.primary"
                sx={{
                  ':hover': {
                    color: 'text.secondary',
                  },
                }}
              >
                BLOG
              </Link>
            </Box>
          </Box>
        </Box>
      </Grid>
      {/*<Grid item xs={12}>*/}
      {/*  <Typography*/}
      {/*    align={'center'}*/}
      {/*    variant={'subtitle2'}*/}
      {/*    color="text.secondary"*/}
      {/*    gutterBottom*/}
      {/*  >*/}
      {/*    &copy; template copyright*/}
      {/*  </Typography>*/}
      {/*</Grid>*/}
    </Grid>
  );
};

export default Footer;
