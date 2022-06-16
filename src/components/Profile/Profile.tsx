import React from 'react';

import { User } from '~/types/user.type';

type ProfileProps = {
  user: User | undefined;
};

export const Profile = ({ user }: ProfileProps) => <p>{user?.email}</p>;
