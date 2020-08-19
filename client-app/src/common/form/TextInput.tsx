import React from 'react'
import { FieldRenderProps } from 'react-final-form';
import { FormFieldProps, FormField, Form, Label } from 'semantic-ui-react';

interface IProps extends FieldRenderProps<string,HTMLInputElement>, FormFieldProps {}

//touched=> tells if field is touched or not, error returns an obj, but we need to return a bool. hence, second condiion is added
    //!!error will return a bool

const TextInput: React.FC<IProps> = ({input,width,type,placeholder, meta:{touched, error}}) => {
    return (
        <Form.Field error= {touched && !!error} type={type} width={width}>
            <input {...input} placeholder={placeholder}/>
            {touched && error && (
                <Label basic color='red'></Label>
            )}
        </Form.Field>
    );
};

export default TextInput;
