import React, { useState } from 'react'
import Alert from './Alert';
export default function Textform(props) {

    const [text, setText] = useState('');
    const [alert, setAlert] = useState(null);

    const showAlert = (message, type)=>{

        setAlert({
            msg: message,
            type:type
        })
        setTimeout(()=>{
            setAlert(null);
        },1500)
    }

    const handleUpperCase = () => {
        // console.log("Button is clicked.");
        showAlert("Uppercase Enabled!",'success');
         


        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowerCase = () => {
        // console.log("Button is clicked.");
        let newText = text.toLowerCase();
        setText(newText);

        showAlert("Lowercase Enabled!",'danger');
      

    }

    const handleTitleCase = () => {
        // console.log("Button is clicked.");
        let newText = text.toLowerCase().split(' ').map((word) => {
            return (word.charAt(0).toUpperCase() + word.slice(1));
        }).join(' ');
        setText(newText);
    }

    const handleReset = () => {
        setText('');
        showAlert("Uppercase Enabled!",'danger');
    }

    const handleCopyToClipbaord = () => {
        /* Copy the text inside the text field */
        navigator.clipboard.writeText(text);
        showAlert("Copied to Clipboard!",'success');
    }

    const handleExtraSpaces = (event) => {

        //FIRST METHOD
        // let newtext = text.replace(/[\s]+/g, ' ');
        // setText(newtext);

        //SECOND METHOD
        let newtxt = text.split(/[\s]+/);
        setText(newtxt.join(' '));
        showAlert("Extra Spaces Removed!",'warning');

    }
    
    const handleOnChange = (event) => {
        // console.log("On change Works.");
        // console.log(event.target.value);

        setText(event.target.value);
    }

    return (
        <div>
            <Alert alert={alert}/>
    
            <div className="container my-3">
                <div className="mb-3">
                    <h2>{props.heading}</h2>
                    {/* <label for="myBox" class="form-label">Example textarea</label> */}
                    <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-sm btn-primary" onClick={handleUpperCase}>Upper Case</button>
                <button disabled={text.length === 0} className="btn btn-sm btn-primary mx-2" onClick={handleLowerCase}>Lower Case</button>
                <button disabled={text.length === 0} className="btn btn-sm btn-primary mx-2" onClick={handleTitleCase}>Title Case</button>
                <button disabled={text.length === 0} className="btn btn-sm btn-primary mx-2" onClick={handleCopyToClipbaord}>Copy To Clipboard</button>
                <button disabled={text.length === 0} className="btn btn-sm btn-primary mx-2" onClick={handleExtraSpaces}>Remove ExtraSpaces</button>
                <button disabled={text.length === 0} className="btn btn-sm btn-primary mx-2" onClick={handleReset}>Reset</button>

                <div className="containner my-3">
                    <h2>Your Text Summary</h2>

                    <p><b>{text.split(/[\s]/).filter((element) => { return element.length !== 0 }).length}</b> Words and <b>{text.length}</b> Characters.</p>
                    <p>{0.008 * text.split(' ').filter((element) => { return element.length !== 0 }).length} Minutes Read</p>
                    <h2>Preview</h2>
                    <p>{text.length > 0 ? text : 'Nothing To Preview'}</p>
                </div>
            </div>
                    </div>
    
    )
}
