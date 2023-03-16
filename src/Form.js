import React from 'react'
import Button from './Button'

const Form = ({ reqType, setReqType }) => {
    return (//we do not want this page reload every time, we prevent
        <form onSubmit={(e) => e.preventDefault()}>
            <Button
                buttonText="users"
                reqType={reqType}
                setReqType={setReqType}
            />
            <Button
                buttonText="posts"
                reqType={reqType}
                setReqType={setReqType}
            />
            <Button
                buttonText="comments"
                reqType={reqType}
                setReqType={setReqType}
            />
        </form >
    )
}

export default Form