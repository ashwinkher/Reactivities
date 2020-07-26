import React, { useState, FormEvent } from 'react';
import { Segment, Form, Button } from 'semantic-ui-react';
import { IActivity } from '../../../models/activity';
import {v4 as uuid} from 'uuid';

interface IProps{
    setEditMode : (editmode : boolean) => void;
    activity: IActivity;
    createActivity: (activity:IActivity)=> void;
    editActivity: (activity:IActivity)=> void;
    submitting: boolean
}


export const ActivityForm: React.FC<IProps> = ({setEditMode, activity : initialFormState, editActivity,createActivity, submitting}) => {
    const initiazeForm= ()=>{

        if(initialFormState){
return initialFormState;
        }else{
            return{
                id:'',
title: '',
category: '',
description:'',
date: '',
city: '',
venue: ''
}
        }
    };

    const [activity, setActivity] = useState<IActivity>(initiazeForm)

    const handleInputChange = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
    const {name, value} = event.currentTarget;
    setActivity({...activity, [name]: value})
    }

    const handleSubmit = ()=>{
        if(activity.id.length ===0){
            let newActivity={
                ...activity,
                id: uuid()
            }
            createActivity(newActivity);
        }else{
editActivity(activity);
        }
    }

    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit}> 
                <Form.Input onChange={handleInputChange} name='title' placeholder='title' value={activity.title}></Form.Input>
                <Form.Input onChange={handleInputChange} name='description' placeholder='Description' value={activity.description}></Form.Input>
                <Form.Input onChange={handleInputChange} name='category' placeholder='Category' value = {activity.category}></Form.Input>
                <Form.Input onChange={handleInputChange} name='date' type='datetime-local' placeholder='Date' value={activity.date}></Form.Input>
                <Form.Input onChange={handleInputChange} name='city' placeholder='City' value={activity.city}></Form.Input>
                <Form.Input onChange={handleInputChange} name='venue' placeholder='Venue' value={activity.venue}></Form.Input>
                <Button floated='right' loading ={submitting} positive content='Submit' type='submit'/>
                <Button onClick={()=> setEditMode(false)} floated='right' content='Cancel' type='Button'/>
            </Form>
        </Segment>
    )
}
