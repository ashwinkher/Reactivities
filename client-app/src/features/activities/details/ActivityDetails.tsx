import React, { useContext } from 'react'
import { Card, Image, Button } from 'semantic-ui-react'
import ActivityStore from '../../../app/stores/activitystore';
import { observer } from 'mobx-react-lite';

const ActivityDetails: React.FC= ()  => {
  const activityStore = useContext(ActivityStore);
  const {selectedActivity : activity, openEditForm, cancelSelectedActivity} = activityStore; //:activity means selectedactivity is refered as activity now in this component
    return (
        <Card fluid>
    <Image src={`/assets/categoryImages/${activity!.category}.jpg`} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{activity!.title}</Card.Header>
      <Card.Meta>
        <span >{activity!.date}</span>
      </Card.Meta>
      <Card.Description>
        {activity!.description}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Button.Group widths={2}>
<Button basic content='Edit' onClick={()=> openEditForm(activity!.id)} color='blue'></Button>
<Button basic content='Cancel' onClick={()=> cancelSelectedActivity()} color='grey'></Button>
      </Button.Group>
    </Card.Content>
  </Card>
    )
}

export default observer (ActivityDetails);
