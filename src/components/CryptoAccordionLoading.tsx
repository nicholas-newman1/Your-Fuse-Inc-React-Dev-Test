import { Accordion, AccordionSummary, makeStyles } from '@material-ui/core';
import Spinner from './Spinner';

const useStyles = makeStyles({
  accordion: {
    height: '125px',
  },
});

const CryptoAccordionLoading = () => {
  const classes = useStyles();

  return (
    <Accordion>
      <AccordionSummary className={classes.accordion}>
        <Spinner />
      </AccordionSummary>
    </Accordion>
  );
};

export default CryptoAccordionLoading;
