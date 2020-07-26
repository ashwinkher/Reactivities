import React, {useState, useEffect, Fragment} from 'react';
import axios from 'axios';
import {Container } from 'semantic-ui-react';
import { IActivity } from '../../models/activity';
import NavBar from '../../features/nav/NavBar';
import ActivitiesDashboard from '../../features/activities/dashboard/ActivitiesDashboard';

const App = () => {
 const [activities, setActivities] = useState<IActivity[]>([])
 const [selectedActivity, setSelectedActivity] = useState<IActivity | null>(null)
 const [editMode, setEditMode] = useState(false)

 const handleSelectedActivity = (id: string) =>{
    setSelectedActivity(activities.filter(x=> x.id === id)[0]);
    setEditMode(false);

 }
 const handleOpenCreateForm = ()=>{
   setSelectedActivity(null);
   setEditMode(true);
 }
const handleCreateActivity=(activity: IActivity)=>{
setActivities([...activities, activity])
setSelectedActivity(activity);
setEditMode(false);
}

const handleEditActivity = (activity:IActivity)=>{
  setActivities([...activities.filter(a=>a.id !== activity.id), activity])
  setSelectedActivity(activity);
setEditMode(false);
}

const handleDeleteActivity = (id: string)=>{
  setActivities([...activities.filter(a=> a.id !== id)]);
}

 useEffect(()=> {
     axios.get<IActivity[]>('http://localhost:5000/api/activities')
  .then((response)=>{
    let activities: IActivity[] =[];
    response.data.forEach(activity=>{
      activity.date = activity.date.split('.')[0];
      activities.push(activity);
    })
    setActivities(activities)
 });
},[]);

    return (
      <Fragment>
        
        <NavBar setOpenCreateForm = {handleOpenCreateForm}></NavBar>
          <Container style={{marginTop : '7em'}} >
    <ActivitiesDashboard 
    activities={activities} 
    selectActivity={handleSelectedActivity} 
    selectedActivity={selectedActivity} 
    editMode={editMode} 
    setEditMode={setEditMode} 
    setSelectedActivity={setSelectedActivity}
    editActivity={handleEditActivity}
    createActivity={handleCreateActivity}
    deleteActivity={handleDeleteActivity}
    >

    </ActivitiesDashboard>
    
    
          </Container>
       
          
      </Fragment>
    );
   }



export default App;
