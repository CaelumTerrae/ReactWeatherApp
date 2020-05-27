import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button'
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';

interface InfoFormFields {
    name: string,
    zipcode: string,
}

interface InfoFormProps {
    setUserInfo: React.Dispatch<React.SetStateAction<InfoFormFields | undefined>>
}

const useStyles = makeStyles({
  root: {
    minWidth: 0,
    // change the color below to a cream
    backgroundColor: "#FFFEF2",
  },
  title: {
    fontSize: 14,
  },
  pos: {
  },
});

// Found the type of the setUserInfo function and passed here so that it is possible to pass it through props
const InfoForm: React.FC<InfoFormProps> = (props) => {
    const classes = useStyles();
    const [nameValue, setNameValue] = React.useState("")
    const [zipcodeValue, setZipcodeValue] = React.useState("")

    const onClick = () => {
        const newValues: InfoFormFields = {
            name: nameValue,
            zipcode: zipcodeValue
        }
        console.log(newValues)
        props.setUserInfo(newValues)
    }

    return (
      <Card className={classes.root} variant="outlined">
          <form className="weather-info-form">
            <CardContent>
                <div className="form-field-container">
                    <TextField className="weather-form-field" label="Name" variant="outlined" onChange={event => setNameValue(event.target.value)}/>
                </div>
                <div className="form-field-container">
                    <TextField className="weather-form-field" label="Zip Code" variant="outlined" onChange={event => setZipcodeValue(event.target.value)}/>
                </div>
            </CardContent>
            <Button variant="contained" className={classes.pos} onClick={onClick}>Submit</Button>
          </form>
      </Card>
    );
}

export default InfoForm;