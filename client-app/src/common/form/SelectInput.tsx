import React from 'react';
import { FieldRenderProps } from 'react-final-form';
import { FormFieldProps, FormField, Form, Label, Select } from 'semantic-ui-react';

interface IProps extends FieldRenderProps<string,HTMLSelectElement>, FormFieldProps {}



export const SelectInput : React.FC<IProps> = ({input,width,options,placeholder, meta:{touched, error}}) => {
    return (
        <Form.Field error= {touched && !!error} width={width}>
        <Select value={input.value} options={options} onChange={(e, data)=> input.onChange(data.value)} placeholder={placeholder}/>
        {touched && error && (
            <Label basic color='red'></Label>
        )}
    </Form.Field>
    )
}
