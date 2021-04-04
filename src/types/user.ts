interface User {
  id: string;
  email: string;
}

const emptyUser: User = {
  id: '',
  email: ''
};

export { User, emptyUser };
