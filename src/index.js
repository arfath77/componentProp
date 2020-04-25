import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import ApproverCard from './ApproverCard';
import CommentsDetails from './CommentsDetails';


const App = () => {
  return (
    <div className="ui container comments">
      <ApproverCard>
        <CommentsDetails author="Sam" date="Today at 5:00pm" avatar={faker.image.avatar()} comments="Nice Post"/>
      </ApproverCard>
      <ApproverCard>
        <CommentsDetails author="Bob" date="Today at 7:00pm" avatar={faker.image.avatar()} comments="Amazing Content"/>
      </ApproverCard>
      <ApproverCard>
      <CommentsDetails author="Alex" date="Today at 9:00pm" avatar={faker.image.avatar()} comments="Well Done!!"/>,
      </ApproverCard>
    </div>
  );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);


