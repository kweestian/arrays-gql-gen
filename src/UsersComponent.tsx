import React from 'react';
import './App.css';

import { useFindUserOrUsersQuery, CustomField } from './graphql';

type Props = {
  userIds?: string | string[];
  customFields?: CustomField | CustomField[];
};

function UsersComponent({ userIds, customFields }: Props) {
  const { data } = useFindUserOrUsersQuery({
    variables: { userIds, customFields },
  });

  return (
    <div>
      {data?.users?.map((user) => (
        <div>{user?.username}</div>
      ))}
    </div>
  );
}

export default UsersComponent;
