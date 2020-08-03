import React, {useEffect, Fragment, useContext} from 'react';
import {Container } from 'semantic-ui-react';
import NavBar from '../../features/nav/NavBar';
import ActivitiesDashboard from '../../features/activities/dashboard/ActivitiesDashboard';
import { LoadingComponent } from './LoadingComponent';
import ActivityStore from '../stores/activitystore'; 
import { observer } from 'mobx-react-lite';

const App = () => {
 const activitystore = useContext(ActivityStore);

 useEffect(()=> {
     activitystore.loadActivities();
},[activitystore]); //the second param after comma is the dependecy array. whatever is needed by loadedactivities, 
//need to be mentioned in the second param. in this case, its activitystore

if(activitystore.loadingInitial) return <LoadingComponent content='Loading Activities...'></LoadingComponent>
    return (
      <Fragment>
        <NavBar/>
          <Container style={{marginTop : '7em'}} >
    <ActivitiesDashboard/>
          </Container>
      </Fragment>
    );
   };
export default observer(App);
