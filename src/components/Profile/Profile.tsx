import React from 'react';

import { User } from '~/types/user.type';

type ProfileProps = {
  user: User;
};

export const Profile = ({ user }: ProfileProps) => <p>{user.email}</p>;
