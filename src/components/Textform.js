import React, { useState } from 'react'

function Textform(props) {
    const [getText, setText] = useState('')

    const handleUpClick = () => {

        const upValue = getText.toUpperCase();
        setText(upValue);
        props.showAlert('Converted to Upper Case ', 'info');
    }

    const handleOnChange = (event) => {
        setText(event.target.value)

    }

    const handleLoClick = () => {
        const upValue = getText.toLowerCase();
        setText(upValue);
        props.showAlert('Converted to Lower Case ', 'danger');

    }


    const handleTextClear = () => {
        const clear = '';
        setText(clear);
        props.showAlert('Text Successfully Clear ', 'success');

    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-floating">
                            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" value={getText} onChange={handleOnChange}></textarea>
                            <label htmlFor="floatingTextarea2">Enter Your Text.....</label>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="btn-container">
                            <div className="btn" onClick={handleUpClick} > convert into UpperCase</div>
                            <div className="btn" onClick={handleLoClick} > convert into LowerCase</div>
                            <div className="btn" onClick={handleTextClear} > Clear Text </div>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="card">

                            <div className="card-body ">
                                <p className="card-text">Reading Time: {0.008 * getText.split(" ").length} </p>
                                <p className="card-text">No. of Characters: {getText.length} </p>
                                <p className="card-text">No. of Words: {getText.split(" ").length}</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}

export default Textform