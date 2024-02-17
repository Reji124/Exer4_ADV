import React from 'react';
import { Tab } from '@headlessui/react';

const Completed = ({ categories }) => {
  return (
    <Tab.Panel>
      {categories && categories['Completed'] && categories['Completed'].length > 0 ? (
        <ul>
          {categories['Completed'].map((post) => (
            <li key={post.id}>
              <h3 style={{ color: 'black' }}>{post.title}</h3>
            </li>
          ))}
        </ul>
      ) : (
        <p>There are no completed tasks yet.</p>
      )}
    </Tab.Panel>
  );
};

export default Completed;
